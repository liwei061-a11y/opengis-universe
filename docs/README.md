# 📊 Project Presentation

> 12-page project overview deck for OpenGIS Universe.

## 🌐 在线预览

打开 [`index.html`](./index.html) 即可在浏览器中查看完整 PPT，支持：

- 12 张缩略图网格浏览（点击放大）
- 内嵌 PDF 在线查看器
- 一键下载 PPTX / PDF

> GitHub Pages 用户访问路径：`https://<username>.github.io/opengis-universe/docs/`

## 📦 Files

| File | Format | Size | Use Case |
|------|--------|------|----------|
| `index.html` | HTML | — | Browser preview page |
| `styles.css` | CSS | — | Page styles |
| `app.js` | JS | — | Thumbnail + lightbox |
| `opengis-universe-overview.pptx` | PowerPoint | 902 KB | Editable, primary deliverable |
| `opengis-universe-overview.pdf`  | PDF        | 482 KB | Read-only, easy to share |
| `preview/slide-*.png`           | PNG        | 12 images | Quick preview of each slide |

## 📑 Slide Index

| #  | Type | Content |
|----|------|---------|
| 01 | Cover | Hero · 探索开源 地理信息宇宙 |
| 02 | TOC | 目录 · 4 chapters |
| 03 | Section | Part 1 · 项目背景 |
| 04 | Content | 为什么要做这个项目 |
| 05 | Content | Key metrics (50+ · 8 · 380k+ · 42y) |
| 06 | Content | 8 domains overview |
| 07 | Content | 6 featured projects |
| 08 | Section | Part 2 · 技术亮点 |
| 09 | Content | Open GIS evolution 1982 - 2024 |
| 10 | Content | Tech stack 5-layer diagram |
| 11 | Content | Interface preview |
| 12 | Summary | 3-step quick start |

## 🎨 Design

- **Theme**: Dark cyber (matches the website)
- **Background**: `#05060F` (deep cyber)
- **Accent**: `#63F6FF` (neon cyan)
- **Style**: Tech / Minimal / Grid-based
- **Format**: 16:9 (10" × 5.625")
- **Fonts**: Microsoft YaHei (中文) + Consolas (英文/代码)

## 🛠 Editing Source

The presentation was generated from PptxGenJS source. To regenerate:

```bash
cd ../docs-src   # if you have the source
node compile.js
```

(Original source is not in this repo to keep the bundle small. The .pptx is fully editable in PowerPoint, Keynote, WPS, or Google Slides.)

## 📜 License

MIT — same as the main project. Use freely.
