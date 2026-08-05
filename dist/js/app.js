// OpenGIS Universe · 主应用
(function () {
  const data = window.GIS_DATA;
  if (!data) {
    console.error('GIS_DATA not loaded');
    return;
  }

  // 状态
  let state = {
    activeCategory: 'all',
    search: '',
    featuredOnly: false
  };

  // 分类查表
  const categoryMap = Object.fromEntries(data.categories.map(c => [c.id, c]));

  // ===== 数字滚动动画 =====
  function animateCounters() {
    const nums = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        if (el.dataset.animated) return;
        el.dataset.animated = '1';
        const duration = 1500;
        const start = performance.now();
        function step(now) {
          const t = Math.min(1, (now - start) / duration);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          const v = target * eased;
          el.textContent = (target % 1 === 0 ? Math.floor(v) : v.toFixed(1)) + suffix;
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: 0.3 });
    nums.forEach(n => observer.observe(n));
  }

  // ===== 分类网格 =====
  function renderCategories() {
    const root = document.getElementById('category-grid');
    const counts = {};
    data.software.forEach(s => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    root.innerHTML = data.categories.map((c, i) => `
      <div class="category-card fade-up" style="--c: ${c.color}; animation-delay: ${i * 50}ms" data-cat="${c.id}">
        <div class="category-count">${counts[c.id] || 0}</div>
        <div class="category-icon" style="filter: drop-shadow(0 0 12px ${c.color}66)">${c.icon}</div>
        <div class="category-name">${c.name}</div>
        <div class="category-desc">${c.desc}</div>
      </div>
    `).join('');
    root.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        state.activeCategory = card.dataset.cat;
        document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
        // 同步filter bar
        document.querySelectorAll('.filter-chip').forEach(ch => {
          ch.classList.toggle('active', ch.dataset.cat === state.activeCategory);
        });
        renderSoftware();
      });
    });
  }

  // ===== 过滤条 =====
  function renderFilterBar() {
    const bar = document.getElementById('filter-bar');
    const total = data.software.length;
    const items = [{ id: 'all', name: '全部', color: '#63f6ff', icon: '✦' }]
      .concat(data.categories.map(c => ({ id: c.id, name: c.name, color: c.color, icon: c.icon })));
    bar.innerHTML = items.map(it => `
      <button class="filter-chip ${state.activeCategory === it.id ? 'active' : ''}" data-cat="${it.id}" style="--c: ${it.color}">
        <span>${it.icon}</span>
        <span>${it.name}</span>
        <span class="text-xs opacity-60">${it.id === 'all' ? total : (data.software.filter(s => s.category === it.id).length)}</span>
      </button>
    `).join('');
    bar.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.activeCategory = chip.dataset.cat;
        renderFilterBar();
        renderSoftware();
      });
    });
  }

  // ===== 软件卡片 =====
  function renderSoftware() {
    const grid = document.getElementById('software-grid');
    const noResults = document.getElementById('no-results');
    const filtered = data.software.filter(s => {
      if (state.activeCategory !== 'all' && s.category !== state.activeCategory) return false;
      if (state.featuredOnly && !s.featured) return false;
      if (state.search) {
        const q = state.search.toLowerCase();
        const hay = [s.name, s.desc, s.language, s.license, ...(s.tags || [])].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      noResults.classList.remove('hidden');
      return;
    }
    noResults.classList.add('hidden');

    grid.innerHTML = filtered.map((s, i) => {
      const cat = categoryMap[s.category];
      const color = cat ? cat.color : '#63f6ff';
      return `
        <div class="software-card ${s.featured ? 'featured' : ''} fade-up" style="--cat-c: ${color}; animation-delay: ${(i % 12) * 30}ms">
          <div class="software-header">
            <a href="${s.url}" target="_blank" rel="noopener" class="software-name-link">
              <div class="software-name">${s.name}</div>
            </a>
            ${s.featured ? '<span class="software-badge">★ 精选</span>' : ''}
          </div>
          <p class="software-desc">${s.desc}</p>
          <div class="software-tags">
            ${(s.tags || []).slice(0, 4).map(t => `<span class="software-tag">${t}</span>`).join('')}
          </div>
          <div class="software-footer">
            <div class="flex items-center gap-3 flex-wrap">
              ${s.language ? `<span class="software-meta-item">◐ ${s.language}</span>` : ''}
              <span class="software-meta-item">${s.license}</span>
            </div>
            <div class="flex items-center gap-3">
              ${s.stars && s.stars !== '—' ? `<span class="software-meta-item">★ ${s.stars}</span>` : ''}
              <a href="${s.url}" target="_blank" rel="noopener" class="hover:text-cyber-glow">访问 →</a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ===== 搜索 =====
  function bindSearch() {
    const input = document.getElementById('search-input');
    let timer;
    input.addEventListener('input', e => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.search = e.target.value.trim();
        renderSoftware();
      }, 150);
    });

    const featBtn = document.getElementById('filter-featured');
    featBtn.addEventListener('click', () => {
      state.featuredOnly = !state.featuredOnly;
      featBtn.classList.toggle('active', state.featuredOnly);
      renderSoftware();
    });
  }

  // ===== 时间线 =====
  function renderTimeline() {
    const root = document.getElementById('timeline-list');
    root.innerHTML = data.timeline.map((t, i) => `
      <div class="timeline-item fade-up" style="animation-delay: ${i * 30}ms">
        <div class="timeline-content">
          <div class="timeline-year">${t.year}</div>
          <div class="timeline-title">${t.title}</div>
          <div class="timeline-desc">${t.desc}</div>
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-empty"></div>
      </div>
    `).join('');
  }

  // ===== 标签云 =====
  function renderTagCloud() {
    const root = document.getElementById('tag-cloud');
    const tagCount = {};
    data.software.forEach(s => (s.tags || []).forEach(t => {
      tagCount[t] = (tagCount[t] || 0) + 1;
    }));
    const tags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 30);
    const max = Math.max(...tags.map(t => t[1]));
    root.innerHTML = tags.map(([t, c]) => {
      const size = 0.75 + (c / max) * 0.5;
      const op = 0.5 + (c / max) * 0.5;
      return `<span class="tag-cloud-item" style="font-size: ${size}rem; opacity: ${op}">#${t}</span>`;
    }).join('');
  }

  // ===== 滚动入场（已经在视口里的立刻播；视口外的等进入再播） =====
  function setupScrollReveal() {
    // 视口里的直接播
    const inViewNow = [];
    document.querySelectorAll('.fade-up').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // 不暂停
        inViewNow.push(el);
      } else {
        el.style.animation = 'none';
      }
    });
    // 视口外的，滚动进入时再播
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = '';
          // 触发重排
          void entry.target.offsetWidth;
          entry.target.style.animation = 'fadeUp 0.6s ease backwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.fade-up').forEach(el => {
      if (!inViewNow.includes(el)) {
        observer.observe(el);
      }
    });
  }

  // ===== 启动 =====
  function init() {
    renderCategories();
    renderFilterBar();
    renderSoftware();
    renderTimeline();
    renderTagCloud();
    bindSearch();
    animateCounters();
    // 等 three-scene 注入完 fade-up 之后启动观察
    setTimeout(setupScrollReveal, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
