---
title: "Where this site from?"
date: 2024-04-23
description: "How to setup this website?"
draft: false
tags: ["Tech", "Hugo"]
series: ["Hugo"]
series_order: 1
---

## What Hugo is

### Hugo

[Hugo](https://gohugo.io/) is a static site generator tool. The website has two different types. one of a static website and another is a dynamic website. I can talk about two types in another post.

I prefer a static website because it has faster loading times. Also, Hugo is a good choice when you planning a static website for a personal website.

of course, any tools have a language to their base. a very powerful programming language. `Go`.

### Go

[Go](http://go.dev) is an open-source programming language supported by Google. it makes Hugo very fast to render all posts and components. you don't have to learn it when you use Hugo.

## Install Hugo

`Hugo` supports multi-operation systems, Windows, MacOS, Linux and BSD. before you install Hugo, you need to make sure that you have installed [Git](https://git-scm.com) and [Go](https://go.dev/doc/install).

### macOS

In my Macbook, I install Hugo by `brew`. brew full name is Homebrew. it's a free and open-source package manager for macOS and Linux.

```bash
brew install hugo
```

You just type `hugo version`, it works when the version number appears on your screen.

```bash
hugo v0.125.0-a32400b5f4e704daf7de19f44584baf77a4501ab+extended darwin/amd64 BuildDate=2024-04-16T15:04:41Z VendorInfo=brew
```

### Windows

Windows has two different versions of Hugo, standard and extended, with the extended edition you can:

- encode to the WebP format when processing images.
- transpile Sass to CSS using the embedded LibSass transpiler.

You can follow below steps:

1. Download the latest version of binary from [Github Release](https://github.com/gohugo/hugo/release/latest)
2. Unzip the archive
3. Move to folder
4. Add folder PATH to the environment variable
5. verify your runtime, for example `hugo version`