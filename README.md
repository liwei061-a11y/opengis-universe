# OpenGIS Universe · 开源 GIS 软件综合展示

> 50+ 全球优质开源地理信息系统项目，一站了解。

![License](https://img.shields.io/badge/license-MIT-blue)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20Tailwind%20%7C%20Three.js-63f6ff)
![No build](https://img.shields.io/badge/build-none-success)

一个深色科技风的开源 GIS 软件展示站首页。纯静态、无构建步骤、3D 粒子地球、流畅动效、响应式设计。

## ✨ 特性

- **50+ 开源 GIS 项目**，覆盖 8 大领域（桌面 GIS / Web 地图 / 地图服务 / 空间数据库 / 空间分析 / 可视化 / 3D 地球 / 数据工具）
- **零依赖构建** —— 双击 `index.html` 即可打开，无需任何编译步骤
- **3D 粒子地球**（Three.js）—— 可拖拽旋转，自动旋转
- **背景粒子连线动效**（Canvas 2D）
- **实时搜索 + 分类筛选 + 精选模式**
- **响应式布局** —— 桌面 / 平板 / 手机都好看
- **Tailwind Play CDN** —— 不需要 npm install

## 🗂 目录结构

```
opengis-universe/
├── index.html              # 主页面
├── css/
│   └── styles.css          # 自定义样式（Tailwind 之外）
├── js/
│   ├── data.js             # 📦 数据源（编辑这里添加/修改项目）
│   ├── app.js              # 渲染逻辑
│   └── three-scene.js      # 3D 地球
└── README.md               # 本文档
```

## 🚀 三种本地启动方式

### 方式 1：直接双击打开（最简单 ⚡）

适合：本地预览 / 分享给朋友 / 离线查看。

1. 解压 zip 压缩包
2. 进入 `opengis-universe` 文件夹
3. 双击 `index.html`，浏览器会自动打开

> ⚠️ **注意**：3D 粒子地球用 ES Module 加载的 Three.js 在 `file://` 协议下可能受限。如果打开后 3D 地球是空白，请用方式 2 或 3。

---

### 方式 2：Python 一行启动（推荐 ✅）

适合：开发预览，无需安装任何工具（前提是装了 Python）。

```bash
# 1. 进入项目目录
cd opengis-universe

# 2. 启动 HTTP 服务器
python3 -m http.server 8000

# 3. 浏览器访问
# macOS: open http://localhost:8000
# Linux: xdg-open http://localhost:8000
# Windows: start http://localhost:8000
```

**Python 2 用户的等价命令**：`python -m SimpleHTTPServer 8000`

---

### 方式 3：Node.js 启动

适合：前端开发者，已有 Node 环境。

```bash
# 进入项目目录
cd opengis-universe

# 方式 A：用 npx（不需要安装）
npx serve .

# 方式 B：用 http-server（功能更全）
npx http-server -p 8000
```

然后浏览器访问 `http://localhost:8000`。

---

### 方式 4：VS Code 用户

1. 安装扩展 **Live Server**
2. 右键 `index.html` → "Open with Live Server"
3. 浏览器自动打开，改代码自动刷新 ✨

## 🛠 自定义内容

### 添加 / 修改开源 GIS 项目

所有数据都在 `js/data.js`，编辑这个文件即可：

```js
// 在 data.js 找到 software 数组
software: [
  // 已有的项目
  { name: 'QGIS', category: 'desktop', ... },

  // 添加你的新项目
  {
    name: 'Your Project',
    category: 'web',                 // desktop / web / server / database / analysis / visualization / 3d / data
    license: 'MIT',
    stars: '1.2k',
    language: 'JavaScript',
    desc: '项目简介（一句话讲清它是干嘛的）',
    tags: ['Tag1', 'Tag2'],
    url: 'https://your-project.com',
    github: 'https://github.com/...',  // 可选
    featured: true                    // 精选标记，会高亮显示
  }
]
```

### 添加分类

在 `data.js` 顶部的 `categories` 数组里加：

```js
categories: [
  { id: 'desktop', name: '桌面 GIS', icon: '🖥️', color: '#00d4ff', desc: '...' },
  // 添加你的分类
  { id: 'your-cat', name: '你的分类', icon: '🚀', color: '#ff6b6b', desc: '描述' }
]
```

### 修改颜色主题

编辑 `css/styles.css` 顶部的 CSS 变量：

```css
.text-gradient {
  background: linear-gradient(120deg, #63f6ff 0%, #9a7dff 50%, #ff7eb6 100%);
  /* ↑ 改成你喜欢的渐变色 */
}
```

或在 `index.html` 的 `tailwind.config` 里改 `cyber` 配色：

```js
colors: {
  cyber: {
    glow: '#63f6ff',   // 主青色
    violet: '#9a7dff', // 紫色
    pink: '#ff7eb6'    // 粉色
  }
}
```

### 修改文案

`index.html` 里的所有文字直接改即可。每个 section 都有清晰注释。

## 🌍 公网部署

这个项目是纯静态的，可以零成本部署到：

### Vercel（最推荐 ⭐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录下
vercel

# 按提示操作，30 秒拿到一个 https://xxx.vercel.app 域名
```

### Netlify

1. 访问 https://app.netlify.com/drop
2. 把 `opengis-universe` 文件夹拖进去
3. 几秒钟后拿到 `https://xxx.netlify.app`

### GitHub Pages

1. 把项目推送到 GitHub
2. Settings → Pages → Source 选 `main` 分支
3. 访问 `https://<username>.github.io/<repo>`

### Cloudflare Pages

1. 登录 Cloudflare Dashboard
2. Pages → Create → Upload assets
3. 上传项目目录，几秒拿到域名

### Nginx / Apache 部署

把整个项目目录复制到 web 服务器的根目录即可。例如：

```nginx
# /etc/nginx/sites-available/opengis
server {
  listen 80;
  server_name gis.example.com;
  root /var/www/opengis-universe;
  index index.html;
  location / {
    try_files $uri $uri/ =404;
  }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/opengis /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 🐛 常见问题

### Q: 3D 地球不显示？
A: 必须用 HTTP 协议访问（`http://`），不能直接 `file://` 打开。请用上面"方式 2 或 3"启动。

### Q: 字体没有效果？
A: 项目用 Google Fonts (Inter / Space Grotesk / JetBrains Mono)，需要联网才能加载。离线场景下会回退到系统字体。

### Q: 怎么把中文改成英文？
A: 全文搜索替换中文文字即可。`js/data.js` 的 desc 和 tags 字段里是中文描述。

### Q: 移动端可以访问吗？
A: ✅ 全部响应式。在手机/平板/桌面都好看。

### Q: 数据可以导出 JSON 给后端用吗？
A: 可以。`window.GIS_DATA.software` 就是一个数组，可以直接 fetch。

### Q: 加新分类后没显示？
A: 检查 `categories` 里加的分类 id 和 `software` 里的 `category` 字段完全一致。

## 📜 许可

MIT License. 随便用、随便改、随便部署。

数据来源于公开资料（OSGeo / OpenStreetMap / GitHub 等），如有过时请通过 PR 修正。

## 🙏 致谢

- [QGIS](https://qgis.org) / [GeoServer](https://geoserver.org) / [PostGIS](https://postgis.net) / [Leaflet](https://leafletjs.com) / [MapLibre](https://maplibre.org) / [Three.js](https://threejs.org) / [Cesium](https://cesium.com) 等所有被收录的开源项目及其贡献者
- [Tailwind CSS](https://tailwindcss.com) / [Inter](https://rsms.me/inter/) / [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- [OSGeo 基金会](https://www.osgeo.org) 维护的 GIS 开源生态

---

**Built with care for the geo community · 2026**
