// Presentation preview page

const SLIDES = [
  { n: 1,  name: '封面',         file: 'preview/slide-01.png' },
  { n: 2,  name: '目录',         file: 'preview/slide-02.png' },
  { n: 3,  name: '项目背景 · 章节', file: 'preview/slide-03.png' },
  { n: 4,  name: '为什么要做',     file: 'preview/slide-04.png' },
  { n: 5,  name: '核心数据',       file: 'preview/slide-05.png' },
  { n: 6,  name: '8 大领域',       file: 'preview/slide-06.png' },
  { n: 7,  name: '精选 6 项目',    file: 'preview/slide-07.png' },
  { n: 8,  name: '技术亮点 · 章节', file: 'preview/slide-08.png' },
  { n: 9,  name: '发展史时间线',   file: 'preview/slide-09.png' },
  { n: 10, name: '5 层技术栈',     file: 'preview/slide-10.png' },
  { n: 11, name: '界面预览',       file: 'preview/slide-11.png' },
  { n: 12, name: '快速开始',       file: 'preview/slide-12.png' }
];

// Render thumbnails
function renderThumbs() {
  const grid = document.getElementById('thumb-grid');
  if (!grid) return;
  grid.innerHTML = SLIDES.map((s, i) => `
    <div class="thumb" data-idx="${i}">
      <div class="thumb-meta">
        <span class="thumb-num">${String(s.n).padStart(2, '0')} / 12</span>
      </div>
      <img class="thumb-img" src="${s.file}" alt="Slide ${s.n}: ${s.name}" loading="lazy">
      <div class="thumb-title">${s.name}</div>
    </div>
  `).join('');

  // Bind click -> open lightbox
  grid.querySelectorAll('.thumb').forEach(el => {
    el.addEventListener('click', () => {
      openLightbox(parseInt(el.dataset.idx, 10));
    });
  });
}

// Lightbox state
let currentIdx = 0;

function openLightbox(idx) {
  currentIdx = idx;
  updateLightbox();
  document.getElementById('lightbox').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event, force) {
  if (force || event.target.id === 'lightbox') {
    document.getElementById('lightbox').classList.remove('show');
    document.body.style.overflow = '';
  }
}

function lbNav(delta) {
  currentIdx = (currentIdx + delta + SLIDES.length) % SLIDES.length;
  updateLightbox();
}

function updateLightbox() {
  const s = SLIDES[currentIdx];
  document.getElementById('lb-img').src = s.file;
  document.getElementById('lb-counter').textContent = `${String(s.n).padStart(2, '0')} / 12  ·  ${s.name}`;
}

// Keyboard nav
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('show')) return;
  if (e.key === 'Escape') closeLightbox(e, true);
  if (e.key === 'ArrowLeft') lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
});

// Init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderThumbs);
} else {
  renderThumbs();
}
