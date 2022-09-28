---
title: "Java8"
date: 2022-09-28T16:56:54+08:00
tags: ["testing"]
series: ["java8"]
categories: ["java"]
draft: true
---

# Lambda

```java
List<Integer> l1 = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);

List<Integer> l2 = l.stream()
                    .filter(v -> v > 5)
                    .sorted((x, y) -> x - y)
                    .map(v -> v > 0)
                    .collect(Collectors.toList());
```

# Optional


## My testing java code

```Java
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static java.util.Optional.empty;

import java.util.function.BiFunction;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class MyTestingClass {
	enum Type {
		A(EumService::comNumA),
		B(EumService::comNumA),
		C(EumService::comNumA);
		public final BiFunction<EumService, Integer, Integer> a;
		
		private Type(BiFunction<EumService, Integer, Integer> a) {
			this.a = a;
		}
	}

	public static Car c;
	private NumMapper mapper = new NumMapper();

	public static void main(String[] args) {
		MyTestingClass my = new MyTestingClass();
		my.doSomething();
		EumService es = new EumService();
		System.out.println(es.comNumA(2));
		System.out.println(es.comNumA(3));
		System.out.println(es.comNumA(4));
	}

	private void doSomething() {
		// MyTestingClass mt = new MyTestingClass();
		ArrayList<Integer> numbers = new ArrayList<Integer>();
		numbers.add(5);
		numbers.add(9);
		numbers.add(8);
		numbers.add(1);
		BigDecimal b1 = null;
		Optional<BigDecimal> ob1 = Optional.ofNullable(b1);
		System.out.println(ob1.orElse(new BigDecimal(2)));

		List<Integer> evens = Arrays.asList(2, 4, 6, 8, 10);
		List<Integer> odds = Arrays.asList(1, 3, 4, 7, 9);

		List<Integer> numList = Stream.of(evens, odds)
				.flatMap(list -> list.stream()).collect(Collectors.toList());

		System.out.println(numList);

		// LocalDate
		LocalDate today = LocalDate.now();
		System.out.println(today);

		List<Integer> l = numbers
				.stream()
				.filter(v -> v > 5)
				.sorted((x, y) -> x - y)
				.map((v) -> compareValue(v).isPresent() ? compareValue(v).get()
						: 0).filter(v -> v > 0).collect(Collectors.toList());

		System.out.println(l);

		List<Integer> l2 = numbers.stream().filter(mapper::check)
				.map(mapper::toNum).collect(Collectors.toList());

		// .map(mapper::new)
		Car c1 = new Car(500);
		Car c2 = new Car();
		String result = c1.getPrice().flatMap(p -> checkPrice(p))
				.map(ps -> "This car price is: " + ps).orElse("CCCC");
		System.out.println(mapper.genString());
		System.out.println(result);

		System.out.println("Consumer Testing");
		// consumer
		Consumer<List<Integer>> nl2 = list -> list.stream()
				.filter(mapper::check).map(mapper::toNum)
				.collect(Collectors.toList()).forEach(System.out::println);

		nl2.accept(l2);

		// enum method
		System.out.println("Enum method Testing");
		
		// Predicate
		System.out.println("Predicate");
		int r = sumListNum(evens, e -> e%2 ==0);
		System.out.println(r);
	}
	
	private int sumListNum(List<Integer> list, Predicate<Integer> selector) {
		return list.stream().filter(selector).reduce(0, Integer::sum);
	}

	private Optional<Integer> checkPrice(Integer price) {
		if (price > 200)
			return Optional.of(price * 2);
		return null;
	}

	public static Optional<Integer> compareValue(int e) {
		if (e > 5 && e < 9) {
			return Optional.of(99);
		}
		return Optional.empty();
	}
}

class NumMapper {
	public NumMapper() {
	}

	public int toNum(int num) {
		return num++;
	}

	public boolean check(Integer num) {
		if (num != null && num > 5)
			return true;

		return false;
	}

	public String genString() {
		Optional<Integer> s = empty();
		return s.map(d -> "A String").orElse("B String");
	}
}

class EumService {
	
	int comNumA(int days) {
		return (int) (days * 2);
	}
	public int compNum(MyTestingClass.Type type, int days) {
		return type.a.apply(this, days);
	}
}
```