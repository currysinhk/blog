---
title: "このサイトはどこから来たのですか?"
date: 2024-04-23
description: "この Web サイトを設定するにはどうすればよいですか?"
draft: false
tags: ["Tech", "Hugo"]
series: ["Hugo"]
series_order: 1
---

## Hugo とは何ですか

### Hugo

[Hugo](https://gohugo.io/) は静的サイトジェネレーターツールです。 Web サイトには 2 つの異なるタイプがあります。 1 つは静的 Web サイト、もう 1 つは動的 Web サイトです。 2 つのタイプについては、別の投稿で説明できます。

読み込み時間が速いため、私は静的な Web サイトを好みます。 また、個人 Web サイト用の静的 Web サイトを計画している場合は、Hugo が適しています。

もちろん、どのツールにもそのベースとなる言語があります。 非常に強力なプログラミング言語。 `Go`.

### Go

[Go](http://go.dev) は、Google がサポートするオープンソース プログラミング言語です。 これにより、Hugo はすべての投稿とコンポーネントを非常に高速にレンダリングできるようになります。 Hugo を使用するときにそれを学ぶ必要はありません。

## Install Hugo

`Hugo` は、Windows、MacOS、Linux、BSD のマルチ オペレーティング システムをサポートしています。 Hugo をインストールする前に、[Git](https://git-scm.com) と [Go](https://go.dev/doc/install) がインストールされていることを確認する必要があります。

### macOS

私の Macbook では、「brew」で Hugo をインストールします。 brew のフルネームは Homebrew です。 これは、macOS および Linux 用の無料のオープンソース パッケージ マネージャーです。

```bash
brew install hugo
```

`hugo version` と入力するだけで、バージョン番号が画面に表示されます。

```bash
hugo v0.125.0-a32400b5f4e704daf7de19f44584baf77a4501ab+extended darwin/amd64 BuildDate=2024-04-16T15:04:41Z VendorInfo=brew
```

### Windows

Windows には、標準版と拡張版の 2 つの異なるバージョンの Hugo があり、拡張版では次のことができます。

- 画像を処理するときに WebP 形式にエンコードします。
- 埋め込み LibSass トランスパイラーを使用して Sass を CSS にトランスパイルします。

以下の手順に従ってください:

1. [Github Release](https://github.com/gohugo/hugo/release/latest) から最新バージョンのバイナリをダウンロードします。
2. アーカイブを解凍します。
3. フォルダーに移動
4. フォルダー PATH を環境変数に追加します。
5. ランタイムを確認します (例: 「hugo version」)。