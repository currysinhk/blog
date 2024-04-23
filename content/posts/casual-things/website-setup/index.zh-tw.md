---
title: "這個網站來自哪裡？"
date: 2024-04-23
description: "如何設定這個網站？"
draft: false
tags: ["Tech", "Hugo"]
series: ["Hugo"]
series_order: 1
---

## What Hugo is

### Hugo

[Hugo](https://gohugo.io/) 是靜態站點產生工具。 網站有兩種不同的類型。 一個是靜態網站，一個是動態網站。 我可以在另一篇文章中討論兩種類型。

我更喜歡靜態網站，因為它的載入時間更快。 此外，當您為個人網站規劃靜態網站時，Hugo 也是一個不錯的選擇。

當然，任何工具都有其基礎語言。 一種非常強大的程式語言。 `Go`.

### Go

[Go](http://go.dev) 是 Google 支援的開源程式語言。 它使 Hugo 能夠非常快速地渲染所有帖子和元件。 當你使用Hugo時你不必學習它。

## 安裝 Hugo

`Hugo` 支援多重作業系統，Windows、MacOS、Linux 和 BSD。 在安裝Hugo之前，您需要確保已經安裝了[Git](https://git-scm.com)和[Go](https://go.dev/doc/install)。

### 蘋果 macOS

在我的 Macbook 中，我透過「brew」安裝 Hugo。 釀造的全名是Homebrew。 它是適用於 macOS 和 Linux 的免費開源套件管理器。

```bash
brew install hugo
```

您只需輸入 `hugo version`，當版本號出現在螢幕上時它就會起作用。

```bash
hugo v0.125.0-a32400b5f4e704daf7de19f44584baf77a4501ab+extended darwin/amd64 BuildDate=2024-04-16T15:04:41Z VendorInfo=brew
```

### Windows

Windows 有兩個不同版本的 Hugo，標準版和擴充版，使用擴充版您可以：

- 處理影​​像時編碼為WebP格式。
- 使用嵌入式 LibSass 轉譯器將 Sass 轉譯為 CSS。

您可以按照以下步驟操作：

1. 從[Github Release](https://github.com/gohugo/hugo/release/latest)下載最新版本的二進位文件
2.解壓縮壓縮包
3. 移動到資料夾
4.將資料夾PATH加入環境變數中
5. 驗證您的執行時，例如 `hugo version`