---
title: "Illustrated Catalog: Guide and Usage"
date: 2026-05-19
description: "Full catalog guide: top-level entries, collections, sub-items, Google Drive images, drafts, and front matter."
draft: false
tags: ["Tech", "Hugo"]
series: ["Hugo"]
series_order: 2
---

{{< lead >}}
The **catalog** supports single entries or **collections with multiple sub-items**. Images come from publicly shared Google Drive links.
{{< /lead >}}

## What is the catalog?

Separate from blog **posts**. Use it for typed image collections, structured metadata, and Drive-hosted images (no large files in Git).

Open **Catalog** in the menu: `/catalog/` (with language prefixes, e.g. `/zh-tw/catalog/`).

---

## Three page levels

| Level | Example URL | Purpose |
|-------|---------------|---------|
| **Index** | `/catalog/` | All top-level entries and collections |
| **Collection** | `/catalog/heroes/` | Group of related items |
| **Item** | `/catalog/heroes/arthur/` | Single entry detail page |

Two top-level patterns:

1. **Single entry** — `content/catalog/cherry-blossom/index.md`
2. **Collection** — `content/catalog/heroes/_index.md` plus `content/catalog/heroes/arthur/index.md`, etc.

---

## Quick start

> **Hugo v0.145+** use `hugo new content` with full path and `.md`. `hugo new catalog/name` **no longer works**.

### Top-level entry

```bash
hugo new content content/catalog/my-entry/index.md
```

### Create a collection

Add `content/catalog/heroes/_index.md` (intro + optional cover `driveId`).

### Add a sub-item inside a collection

```bash
hugo new content content/catalog/heroes/arthur/index.md
```

**Live example on this site:** [英雄 (heroes) collection](/catalog/英雄/) — add characters under that folder.

**Required fields:** `title`, `catalogType`, `driveId` or `driveUrl`.

---

## Drafts and publishing

| `draft` | `hugo` (production) | `hugo server` (local) |
|---------|---------------------|------------------------|
| `true` | hidden | shown (`config/development/hugo.toml` sets `buildDrafts = true`) |
| `false` | shown | shown |

Set **`draft: false`** before deploying. Restart `hugo server` if new entries do not appear.

```bash
hugo server    # preview including drafts
hugo           # production build (no drafts)
```

---

## Google Drive images

1. Upload to Google Drive  
2. Share → **Anyone with the link** → **Viewer**  
3. Use `FILE_ID` from `https://drive.google.com/file/d/FILE_ID/view`

```yaml
driveId: "FILE_ID"
# or driveUrl: "https://drive.google.com/file/d/FILE_ID/view"
```

Thumbnails use `drive.google.com/thumbnail?id=...`. Detail pages link to the full file on Drive.

---

## Front matter

### Item (or top-level entry)

```yaml
---
title: "Arthur"
catalogType: ["Heroes"]
driveId: "FILE_ID"
draft: false
catalog:
  status: "Legendary"
  origin: "Britain"
  traits: ["Excalibur"]
  links:
    - name: "Wikipedia"
      url: "https://en.wikipedia.org/"
---
```

### Collection `_index.md`

```yaml
---
title: "Heroes"
description: "Hero catalog collection"
driveId: "COVER_FILE_ID"
draft: false
---
```

Put per-character images and `catalog` data in each child `index.md`.

Built-in `catalog` keys map to labels in `i18n/*.yaml`; custom keys are supported.

---

## Types (`catalogType`)

Filter buttons on list pages. Optional type pages: `content/catalog-types/Plants/_index.md`.

---

## `gdrive` shortcode

```markdown
{{< gdrive id="FILE_ID" alt="Caption" width="1200" >}}
```

---

## File layout

```
content/catalog/
├── _index.md
├── single-entry/index.md
└── 英雄/
    ├── _index.md
    └── character/index.md
archetypes/catalog.md
archetypes/catalog-item.md
config/development/hugo.toml
layouts/catalog/
```

---

## FAQ

- **Not on the index?** Check `draft`, path, restart server.  
- **Collection shows one card?** Expected — open it to see sub-items.  
- **Archetype error?** Use `hugo new content content/catalog/.../index.md`.

---

## Posts vs catalog

Catalog is not in `mainSections` by default (not on the homepage recent list). Add `"catalog"` in `params.toml` if needed.

---

## Links

- [Catalog index](/catalog/)
- [Heroes collection](/catalog/英雄/)
- [Hugo docs](https://gohugo.io/documentation/)
