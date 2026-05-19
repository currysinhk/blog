---
title: "圖鑑功能說明與使用方法"
date: 2026-05-19
description: "圖鑑完整指南：頂層條目、合集與子 Item、Google Drive 圖片、草稿發布與 front matter 參考。"
draft: false
tags: ["Tech", "Hugo"]
series: ["Hugo"]
series_order: 2
---

{{< lead >}}
本站 **圖鑑** 可依種類瀏覽條目；支援單一條目、或「合集 + 多個子 Item」兩種結構。圖片來自 Google Drive 公開連結。
{{< /lead >}}

## 圖鑑是什麼？

圖鑑與「貼文」分開，適合：

- 依 **種類**（`catalogType`）分類的圖片收藏
- 每筆 **結構化資料**（學名、產地、稀有度等）
- 以 **Google Drive** 存圖，無需把大圖放進 Git

頂部選單 **「圖鑑」** → 繁中：`/zh-tw/catalog/`、英文：`/catalog/`。

---

## 三種頁面層級

| 層級 | 網址範例 | 說明 |
|------|----------|------|
| **總覽** | `/catalog/` | 所有頂層條目與合集 |
| **合集** | `/catalog/英雄/` | 一個主題下的多個子 Item（如英雄角色） |
| **子條目** | `/catalog/英雄/亞瑟/` | 單一 Item 的詳情與大圖 |

頂層可以是：

1. **單一條目**：`content/catalog/櫻花/index.md` → 直接顯示在總覽
2. **合集**：`content/catalog/英雄/_index.md` + 子資料夾 → 總覽顯示「英雄」卡片，點進去見各角色

---

## 快速開始

> **Hugo v0.145+** 請使用 `hugo new content`，路徑須含 `content/` 與 `.md`。舊寫法 `hugo new catalog/名稱` **已失效**。

### 1. 新增頂層條目（單一圖鑑）

```bash
hugo new content content/catalog/條目名稱/index.md
```

### 2. 建立合集（例如「英雄」）

手動建立資料夾與 `_index.md`（合集首頁，可設封面 `driveId` 與簡介）：

```
content/catalog/英雄/_index.md
```

或先建頂層再將 `index.md` 改名為 `_index.md`。

### 3. 在合集中新增子 Item

```bash
hugo new content content/catalog/英雄/角色名稱/index.md
```

編輯 `index.md` 後，子條目會出現在 `/catalog/英雄/` 的卡片列表中。

**現有範例：** 本站已有合集 [英雄](/zh-tw/catalog/英雄/)，可直接在其下新增角色。

### 最少必填欄位

| 欄位 | 說明 |
|------|------|
| `title` | 標題 |
| `catalogType` | 種類（可多個） |
| `driveId` 或 `driveUrl` | Google Drive 圖片（合集封面與子條目各自填寫） |

---

## 草稿與發布

| `draft` 值 | 正式建置 `hugo` | 本地 `hugo server` |
|------------|-----------------|---------------------|
| `true` | 不顯示 | 顯示（見下方開發設定） |
| `false` | 顯示 | 顯示 |

- 新建模板預設 `draft: true`，上線前請改為 **`draft: false`**
- 本地開發已啟用 `config/development/hugo.toml` 的 `buildDrafts = true`，一般 **`hugo server` 即可預覽草稿**
- 若新增條目後總覽仍空白：確認 `draft`、**重啟** `hugo server`、強制重新整理瀏覽器

```bash
hugo server          # 本地預覽（含草稿）
hugo                 # 正式建置（不含草稿）
hugo server -D       # 等同含草稿，可省略 -D
```

---

## Google Drive 圖片設定

圖片 **不** 放在 `static/`，改由 Drive 公開連結載入。

1. 上傳至 [Google Drive](https://drive.google.com/)
2. **共用** → **知道連結的任何人** → **檢視者**
3. 從 `https://drive.google.com/file/d/【FILE_ID】/view` 複製 ID

```yaml
driveId: "1AbCdEfGhIjKlMnOpQrStUvWxYz"
# 或
driveUrl: "https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view"
```

網站以 `drive.google.com/thumbnail?id=...` 顯示；詳情頁可 **在 Google Drive 開啟原圖**。

**無法顯示時：** 檢查共用權限、ID 是否完整、改試較小的 JPG/PNG。

---

## Front matter 參考

### 子條目（或頂層單一條目）範例

```yaml
---
title: "亞瑟"
description: "傳說中的亞瑟王"
catalogType:
  - "英雄"
driveId: "你的_FILE_ID"
draft: false
showDate: false
showAuthor: false
showBreadcrumbs: true
catalog:
  scientificName: ""
  status: "傳說"
  origin: "不列顛"
  habitat: ""
  size: ""
  rarity: "傳說"
  traits:
    - "聖劍"
    - "圓桌骑士"
  links:
    - name: "維基百科"
      url: "https://zh.wikipedia.org/"
---
```

### 合集 `_index.md` 範例

```yaml
---
title: "英雄"
description: "英雄圖鑑合集"
catalogType:
  - "英雄"
driveId: "合集封面圖的_FILE_ID"   # 選用，顯示在合集列表頁頂部
draft: false
showDate: false
showAuthor: false
---
```

合集正文可寫簡介；各角色的圖片與 `catalog` 資料寫在 **子資料夾** 的 `index.md`。

正文（`---` 下方）為 **補充說明**，顯示於詳情頁。

### `catalog` 內建欄位

| 鍵名 | 顯示名稱 |
|------|----------|
| `scientificName` | 學名 |
| `status` | 狀態 |
| `origin` | 產地 |
| `habitat` | 棲息地 |
| `size` | 體型 |
| `rarity` | 稀有度 |
| `season` | 季節 |
| `traits` | 特徵（陣列） |
| `links` | 相關連結（陣列，含 `name`、`url`） |

可自訂新鍵名；譯名在 `i18n/zh-tw.yaml` 的 `catalog.field` 調整。

---

## 種類（catalogType）

- 填寫種類名稱，如 `"植物"`、`"英雄"`
- 總覽與合集頁頂部有 **篩選按鈕**
- 一筆可屬 **多個種類**

**種類說明頁（選用）：** `content/catalog-types/植物/_index.md`

---

## 正文插入圖片：`gdrive` shortcode

```markdown
{{< gdrive id="FILE_ID" alt="說明" width="1200" >}}
{{< gdrive url="https://drive.google.com/file/d/FILE_ID/view" alt="說明" >}}
```

| 參數 | 說明 |
|------|------|
| `id` / `url` | 二選一 |
| `alt` | 替代文字 |
| `width` | 寬度，預設 1200 |

---

## 目錄結構

```
content/
├── catalog/
│   ├── _index.md                 # 圖鑑總覽（各語言 _index.xx.md）
│   ├── 櫻花/index.md             # 頂層單一條目
│   └── 英雄/
│       ├── _index.md             # 合集首頁
│       ├── 亞瑟/index.md         # 子 Item
│       └── 蘭斯洛特/index.md
└── catalog-types/                # 種類說明（選用）
    └── 植物/_index.md

archetypes/
├── catalog.md                    # 頂層條目模板
└── catalog-item.md               # 合集中子條目可參考

config/development/hugo.toml      # 本地預覽草稿
layouts/catalog/                  # list.html、single.html
```

---

## 常見問題

**總覽看不到新條目？**

- 是否仍為 `draft: true`（正式站需 `false`）
- 是否放在正確路徑（子 Item 應在 `catalog/合集名/角色名/index.md`）
- 重啟 `hugo server`

**合集在總覽只顯示一張卡片？**

- 正常。點進合集才見子 Item。

**`hugo new` 報錯 archetype？**

- 改用：`hugo new content content/catalog/路徑/index.md`

---

## 與貼文的差異

| | 貼文 | 圖鑑 |
|--|------|------|
| 用途 | 文章、教學 | 圖鑑條目 / 合集 |
| 圖片 | assets、題圖 | Google Drive |
| 分類 | tags、series | `catalogType` |
| 首頁最近 | 預設顯示 | 預設不顯示 |

---

## 相關連結

- [圖鑑總覽](/zh-tw/catalog/)
- [英雄合集](/zh-tw/catalog/英雄/)
- [Hugo 文件](https://gohugo.io/documentation/)
- [Blowfish 主題](https://blowfish.page/docs/getting-started/)
