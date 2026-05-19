---
title: "図鑑機能の説明と使い方"
date: 2026-05-19
description: "図鑑の完全ガイド：トップレベル項目、コレクション、子 Item、Google Drive、下書き公開、front matter。"
draft: false
tags: ["Tech", "Hugo"]
series: ["Hugo"]
series_order: 2
---

{{< lead >}}
**図鑑** は単一項目または **コレクション + 複数の子 Item** に対応。画像は Google Drive の公開リンクから読み込みます。
{{< /lead >}}

## 図鑑とは

投稿（posts）とは別セクション。種類別の画像コレクション、構造化データ、Drive 上の画像管理に向いています。

メニュー **「図鑑」** → `/ja/catalog/` など。

---

## 3 つのページ階層

| 階層 | URL 例 | 内容 |
|------|--------|------|
| **一覧** | `/catalog/` | トップレベルの項目とコレクション |
| **コレクション** | `/catalog/英雄/` | テーマ別の子 Item 一覧 |
| **子項目** | `/catalog/英雄/アーサー/` | 1 件の詳細 |

1. **単一項目** — `content/catalog/サクラ/index.md`  
2. **コレクション** — `content/catalog/英雄/_index.md` + 子フォルダ

---

## クイックスタート

> **Hugo v0.145+** は `hugo new content` と完全パス・`.md` が必須。`hugo new catalog/名前` は **使えません**。

### トップレベル

```bash
hugo new content content/catalog/項目名/index.md
```

### コレクション作成

`content/catalog/英雄/_index.md` を作成（表紙 `driveId` と概要は任意）。

### コレクション内に子 Item を追加

```bash
hugo new content content/catalog/英雄/キャラ名/index.md
```

**例:** [英雄コレクション](/ja/catalog/英雄/)

**必須:** `title`、`catalogType`、`driveId` または `driveUrl`

---

## 下書きと公開

| `draft` | `hugo` | `hugo server` |
|---------|--------|---------------|
| `true` | 非表示 | 表示（`config/development/hugo.toml`） |
| `false` | 表示 | 表示 |

公開前は **`draft: false`**。表示されない場合は server を再起動。

```bash
hugo server
hugo
```

---

## Google Drive 画像

1. アップロード  
2. 共有 → **リンクを知っている全員** → **閲覧者**  
3. `driveId` に FILE_ID を設定

---

## front matter

### 子項目

```yaml
---
title: "アーサー"
catalogType: ["英雄"]
driveId: "FILE_ID"
draft: false
catalog:
  origin: "ブリテン"
  traits: ["聖剣"]
---
```

### コレクション `_index.md`

```yaml
---
title: "英雄"
driveId: "表紙の_FILE_ID"
draft: false
---
```

各キャラの画像・`catalog` は子フォルダの `index.md` に記述。

---

## 種類（catalogType）

一覧でフィルタ可能。`content/catalog-types/植物/_index.md` で種類説明も可。

---

## shortcode `gdrive`

```markdown
{{< gdrive id="FILE_ID" alt="説明" width="1200" >}}
```

---

## ディレクトリ

```
content/catalog/英雄/_index.md
content/catalog/英雄/アーサー/index.md
archetypes/catalog.md
archetypes/catalog-item.md
config/development/hugo.toml
```

---

## FAQ

- **一覧に出ない** → `draft: false`、パス確認、server 再起動  
- **コレクションはカード 1 枚** → 正常。中に入ると子 Item 一覧  
- **archetype エラー** → `hugo new content content/catalog/.../index.md`

---

## リンク

- [図鑑一覧](/ja/catalog/)
- [英雄コレクション](/ja/catalog/英雄/)
- [Hugo ドキュメント](https://gohugo.io/documentation/)
