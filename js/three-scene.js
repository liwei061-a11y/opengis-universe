// 3D 粒子地球 + 背景粒子
(function () {
  // ===== 背景粒子 =====
  const bgCanvas = document.getElementById('bg-canvas');
  const bgCtx = bgCanvas.getContext('2d');
  let bgParticles = [];

  function resizeBg() {
    bgCanvas.width = window.innerWidth * window.devicePixelRatio;
    bgCanvas.height = window.innerHeight * window.devicePixelRatio;
    bgCanvas.style.width = window.innerWidth + 'px';
    bgCanvas.style.height = window.innerHeight + 'px';
    bgCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  resizeBg();
  window.addEventListener('resize', resizeBg);

  function initBgParticles() {
    bgParticles = [];
    const count = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 12000));
    for (let i = 0; i < count; i++) {
      bgParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.4 + 0.1
      });
    }
  }
  initBgParticles();

  function drawBg() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    // 画连线
    for (let i = 0; i < bgParticles.length; i++) {
      const p = bgParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

      bgCtx.beginPath();
      bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      bgCtx.fillStyle = `rgba(99, 246, 255, ${p.a})`;
      bgCtx.fill();

      for (let j = i + 1; j < bgParticles.length; j++) {
        const p2 = bgParticles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          bgCtx.beginPath();
          bgCtx.moveTo(p.x, p.y);
          bgCtx.lineTo(p2.x, p2.y);
          bgCtx.strokeStyle = `rgba(99, 246, 255, ${(1 - d / 120) * 0.15})`;
          bgCtx.lineWidth = 0.5;
          bgCtx.stroke();
        }
      }
    }
    requestAnimationFrame(drawBg);
  }
  drawBg();
  window.addEventListener('resize', initBgParticles);

  // ===== 3D 粒子地球 =====
  const container = document.getElementById('earth-container');
  if (!container || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(0, 0, 280);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // 创建地球粒子
  const RADIUS = 100;
  const PARTICLE_COUNT = 5000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const colors = new Float32Array(PARTICLE_COUNT * 3);

  // 简单的大陆轮廓（用若干球面点近似，实际效果更接近"风格化地球"）
  const color1 = new THREE.Color(0x63f6ff);
  const color2 = new THREE.Color(0x9a7dff);
  const color3 = new THREE.Color(0xffffff);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // 球面分布
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const r = RADIUS;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    // 用简单函数模拟大陆（基于经纬度）
    const lat = (phi * 180) / Math.PI - 90;
    const lon = (theta * 180) / Math.PI;

    // 简单伪大陆分布
    const continent =
      Math.sin(lat * 0.05) * Math.cos(lon * 0.04) +
      Math.sin(lon * 0.08 + 1.5) * Math.cos(lat * 0.06 - 0.5) * 0.6;

    const t = (continent + 1) * 0.5;
    const c = new THREE.Color();
    if (t > 0.55) {
      // 大陆：青色
      c.lerpColors(color1, color3, Math.random() * 0.4);
    } else {
      // 海洋：暗紫
      c.lerpColors(color2, new THREE.Color(0x1a1f3a), Math.random() * 0.6);
    }
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 1.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const earth = new THREE.Points(geometry, material);
  scene.add(earth);

  // 外圈装饰环
  const ringGeometry = new THREE.BufferGeometry();
  const ringCount = 200;
  const ringPositions = new Float32Array(ringCount * 3);
  for (let i = 0; i < ringCount; i++) {
    const angle = (i / ringCount) * Math.PI * 2;
    ringPositions[i * 3] = (RADIUS + 20) * Math.cos(angle);
    ringPositions[i * 3 + 1] = (RADIUS + 20) * Math.sin(angle);
    ringPositions[i * 3 + 2] = 0;
  }
  ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
  const ringMaterial = new THREE.PointsMaterial({
    size: 1.5,
    color: 0x63f6ff,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  const ring = new THREE.Points(ringGeometry, ringMaterial);
  scene.add(ring);

  // 第二层倾斜环
  const ring2 = ring.clone();
  ring2.rotation.x = Math.PI / 3;
  ring2.material = ringMaterial.clone();
  ring2.material.opacity = 0.3;
  ring2.material.color.set(0x9a7dff);
  scene.add(ring2);

  // 浮动数据点（弧线连接）
  const arcGroup = new THREE.Group();
  scene.add(arcGroup);

  function makeArc(start, end, color) {
    const mid = start.clone().add(end).multiplyScalar(0.5);
    const dist = start.distanceTo(end);
    mid.normalize().multiplyScalar(RADIUS + dist * 0.5);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    const points = curve.getPoints(40);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    return new THREE.Line(lineGeo, lineMat);
  }

  // 画几条弧线模拟"全球连接"
  const cities = [
    { lat: 39.9, lon: 116.4, name: '北京' },
    { lat: 40.7, lon: -74, name: '纽约' },
    { lat: 51.5, lon: -0.1, name: '伦敦' },
    { lat: 35.7, lon: 139.7, name: '东京' },
    { lat: -33.9, lon: 151.2, name: '悉尼' },
    { lat: 1.3, lon: 103.8, name: '新加坡' },
    { lat: -23.5, lon: -46.6, name: '圣保罗' }
  ];
  function latLonToVec3(lat, lon, r) {
    const phi = ((90 - lat) / 180) * Math.PI;
    const theta = ((lon + 180) / 360) * Math.PI * 2;
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
  }
  const arcColors = [0x63f6ff, 0x9a7dff, 0xff7eb6, 0x10b981];
  for (let i = 0; i < 8; i++) {
    const a = cities[Math.floor(Math.random() * cities.length)];
    const b = cities[Math.floor(Math.random() * cities.length)];
    if (a === b) continue;
    const start = latLonToVec3(a.lat, a.lon, RADIUS);
    const end = latLonToVec3(b.lat, b.lon, RADIUS);
    const color = arcColors[Math.floor(Math.random() * arcColors.length)];
    const arc = makeArc(start, end, color);
    arcGroup.add(arc);
  }

  // 城市标记
  cities.forEach(c => {
    const v = latLonToVec3(c.lat, c.lon, RADIUS);
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([v.x, v.y, v.z]), 3));
    const dotMat = new THREE.PointsMaterial({ color: 0xff7eb6, size: 3, blending: THREE.AdditiveBlending });
    const dot = new THREE.Points(dotGeo, dotMat);
    scene.add(dot);
  });

  // 自适应
  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // 交互
  let isDragging = false;
  let prevX = 0, prevY = 0;
  let targetRotX = 0, targetRotY = 0;
  let curRotX = 0, curRotY = 0;

  container.addEventListener('mousedown', e => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - prevX;
    const dy = e.clientY - prevY;
    targetRotY += dx * 0.005;
    targetRotX += dy * 0.005;
    targetRotX = Math.max(-1, Math.min(1, targetRotX));
    prevX = e.clientX;
    prevY = e.clientY;
  });

  // 触屏
  container.addEventListener('touchstart', e => {
    isDragging = true;
    prevX = e.touches[0].clientX;
    prevY = e.touches[0].clientY;
  });
  container.addEventListener('touchend', () => { isDragging = false; });
  container.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - prevX;
    const dy = e.touches[0].clientY - prevY;
    targetRotY += dx * 0.005;
    targetRotX += dy * 0.005;
    targetRotX = Math.max(-1, Math.min(1, targetRotX));
    prevX = e.touches[0].clientX;
    prevY = e.touches[0].clientY;
  });

  // 动画
  function animate() {
    requestAnimationFrame(animate);

    // 阻尼
    curRotX += (targetRotX - curRotX) * 0.05;
    curRotY += (targetRotY - curRotY) * 0.05;

    // 自动旋转
    if (!isDragging) {
      targetRotY += 0.002;
    }

    earth.rotation.x = curRotX;
    earth.rotation.y = curRotY;
    ring.rotation.z = curRotY * 1.5;
    ring2.rotation.z = -curRotY * 1.2;
    arcGroup.rotation.y = curRotY * 1.1;
    arcGroup.rotation.x = curRotX * 0.8;

    renderer.render(scene, camera);
  }
  animate();
})();
