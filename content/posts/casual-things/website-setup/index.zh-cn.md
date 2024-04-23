---
title: "这个网站来自哪里？"
date: 2024-04-23
description: "如何设置这个网站？"
draft: false
tags: ["Tech", "Hugo"]
series: ["Hugo"]
series_order: 1
---

## Hugo 是什么

### Hugo

[Hugo](https://gohugo.io/) 是一个静态站点生成工具。 该网站有两种不同的类型。 一个是静态网站，另一个是动态网站。 我可以在另一篇文章中讨论两种类型。

我更喜欢静态网站，因为它的加载时间更快。 此外，当您为个人网站规划静态网站时，Hugo 也是一个不错的选择。

当然，任何工具都有其基础语言。 一种非常强大的编程语言。 `Go`。

### Go

[Go](http://go.dev) 是 Google 支持的开源编程语言。 它使 Hugo 能够非常快速地渲染所有帖子和组件。 当你使用Hugo时你不必学习它。

## 安装 Hugo

`Hugo` 支持多操作系统，Windows、MacOS、Linux 和 BSD。 在安装Hugo之前，您需要确保已经安装了[Git](https://git-scm.com)和[Go](https://go.dev/doc/install)。

### 苹果 macOS

在我的 Macbook 中，我通过“brew”安装 Hugo。 酿造的全称是Homebrew。 它是适用于 macOS 和 Linux 的免费开源包管理器。

```bash
brew install hugo
```

您只需输入 `hugo version`，当版本号出现在屏幕上时它就会起作用。

```bash
hugo v0.125.0-a32400b5f4e704daf7de19f44584baf77a4501ab+extended darwin/amd64 BuildDate=2024-04-16T15:04:41Z VendorInfo=brew
```

### Windows

Windows 有两个不同版本的 Hugo，标准版和扩展版，使用扩展版您可以：

- 处理图像时编码为WebP格式。
- 使用嵌入式 LibSass 转译器将 Sass 转译为 CSS。

您可以按照以下步骤操作：

1. 从[Github Release](https://github.com/gohugo/hugo/release/latest)下载最新版本的二进制文件
2.解压压缩包
3. 移动到文件夹
4.将文件夹PATH添加到环境变量中
5. 验证您的运行时，例如 `hugo version`