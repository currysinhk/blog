---
title: "图鉴功能说明与使用方法"
date: 2026-05-19
description: "图鉴完整指南：顶层条目、合集与子 Item、Google Drive 图片、草稿发布与 front matter 参考。"
draft: false
tags: ["Tech", "Hugo"]
series: ["Hugo"]
series_order: 2
---

{{< lead >}}
本站 **图鉴** 可按种类浏览条目；支持单一条目，或「合集 + 多个子 Item」两种结构。图片来自 Google Drive 公开链接。
{{< /lead >}}

## 图鉴是什么？

图鉴与「帖子」分开，适合：

- 按 **种类**（`catalogType`）分类的图片收藏
- 每条 **结构化数据**（学名、产地、稀有度等）
- 用 **Google Drive** 存图，无需把大图放进 Git

顶部菜单 **「图鉴」** → 简体：`/zh-cn/catalog/`、英文：`/catalog/`。

---

## 三种页面层级

| 层级 | 网址示例 | 说明 |
|------|----------|------|
| **总览** | `/catalog/` | 所有顶层条目与合集 |
| **合集** | `/catalog/英雄/` | 一个主题下的多个子 Item |
| **子条目** | `/catalog/英雄/亚瑟/` | 单个 Item 的详情与大图 |

顶层可以是：

1. **单一条目**：`content/catalog/樱花/index.md`
2. **合集**：`content/catalog/英雄/_index.md` + 子文件夹

---

## 快速开始

> **Hugo v0.145+** 请使用 `hugo new content`，路径须含 `content/` 与 `.md`。旧写法 `hugo new catalog/名称` **已失效**。

### 1. 新增顶层条目

```bash
hugo new content content/catalog/条目名称/index.md
```

### 2. 建立合集（例如「英雄」）

创建 `content/catalog/英雄/_index.md` 作为合集首页（可设封面 `driveId` 与简介）。

### 3. 在合集中新增子 Item

```bash
hugo new content content/catalog/英雄/角色名称/index.md
```

**现有示例：** [英雄合集](/zh-cn/catalog/英雄/)。

### 最少必填字段

| 字段 | 说明 |
|------|------|
| `title` | 标题 |
| `catalogType` | 种类（可多个） |
| `driveId` 或 `driveUrl` | Google Drive 图片 |

---

## 草稿与发布

| `draft` | 正式构建 `hugo` | 本地 `hugo server` |
|---------|-----------------|---------------------|
| `true` | 不显示 | 显示（开发配置已启用草稿） |
| `false` | 显示 | 显示 |

- 新建模板默认 `draft: true`，上线前改为 **`draft: false`**
- `config/development/hugo.toml` 已设 `buildDrafts = true`，本地 **`hugo server` 即可预览草稿**
- 总览仍空白：检查 `draft`、**重启** server、强制刷新浏览器

```bash
hugo server    # 本地预览（含草稿）
hugo           # 正式构建
```

---

## Google Drive 图片设置

1. 上传至 [Google Drive](https://drive.google.com/)
2. **共享** → **知道链接的任何人** → **查看者**
3. 从 `https://drive.google.com/file/d/【FILE_ID】/view` 复制 ID

```yaml
driveId: "FILE_ID"
# 或 driveUrl: "完整分享链接"
```

**无法显示时：** 检查共享权限、ID 是否完整、尝试较小 JPG/PNG。

---

## Front matter 参考

### 子条目示例

```yaml
---
title: "亚瑟"
description: "传说中的亚瑟王"
catalogType:
  - "英雄"
driveId: "你的_FILE_ID"
draft: false
catalog:
  status: "传说"
  origin: "不列颠"
  traits:
    - "圣剑"
  links:
    - name: "维基百科"
      url: "https://zh.wikipedia.org/"
---
```

### 合集 `_index.md` 示例

```yaml
---
title: "英雄"
description: "英雄图鉴合集"
catalogType:
  - "英雄"
driveId: "合集封面_FILE_ID"
draft: false
---
```

各角色的图片与 `catalog` 写在子文件夹的 `index.md`。

### `catalog` 内置字段

`scientificName`、`status`、`origin`、`habitat`、`size`、`rarity`、`season`、`traits`（数组）、`links`（数组）。可自定义键名，译名见 `i18n/zh-cn.yaml`。

---

## 种类（catalogType）

填写种类名称；总览与合集页有筛选按钮；可选 `content/catalog-types/种类/_index.md` 写种类说明。

---

## 正文插图：`gdrive` shortcode

```markdown
{{< gdrive id="FILE_ID" alt="说明" width="1200" >}}
```

`id` 与 `url` 二选一。

---

## 目录结构

```
content/catalog/
├── _index.md
├── 樱花/index.md
└── 英雄/
    ├── _index.md
    └── 亚瑟/index.md
archetypes/catalog.md
archetypes/catalog-item.md
config/development/hugo.toml
```

---

## 常见问题

- **总览看不到？** → `draft: false`、路径正确、重启 `hugo server`
- **合集只显示一张卡片？** → 正常，点进合集见子 Item
- **archetype 报错？** → 使用 `hugo new content content/catalog/.../index.md`

---

## 与帖子的差异

图鉴默认不出现在首页「最近帖子」；若需要可在 `params.toml` 的 `mainSections` 加入 `"catalog"`。

---

## 相关链接

- [图鉴总览](/zh-cn/catalog/)
- [英雄合集](/zh-cn/catalog/英雄/)
- [Hugo 文档](https://gohugo.io/documentation/)
