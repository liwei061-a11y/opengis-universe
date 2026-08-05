// 开源GIS软件综合数据库
window.GIS_DATA = {
  categories: [
    { id: 'desktop', name: '桌面 GIS', icon: '🖥️', color: '#00d4ff', desc: '专业桌面级地理信息系统' },
    { id: 'web', name: 'Web 地图', icon: '🌐', color: '#7c3aed', desc: '浏览器端交互式地图库' },
    { id: 'server', name: '地图服务', icon: '🚀', color: '#10b981', desc: 'OGC标准地图服务器' },
    { id: 'database', name: '空间数据库', icon: '🗄️', color: '#f59e0b', desc: '空间数据存储与查询' },
    { id: 'analysis', name: '空间分析', icon: '📊', color: '#ef4444', desc: '地理空间分析工具' },
    { id: 'visualization', name: '可视化', icon: '🎨', color: '#ec4899', desc: '数据可视化与制图' },
    { id: '3d', name: '3D / 地球', icon: '🌍', color: '#06b6d4', desc: '三维地理可视化' },
    { id: 'data', name: '数据 / 工具', icon: '🧰', color: '#84cc16', desc: '数据处理与转换' }
  ],

  software: [
    // 桌面 GIS
    { name: 'QGIS', category: 'desktop', license: 'GPL', stars: '11.5k', language: 'C++ / Python', desc: '全球最受欢迎的开源桌面 GIS，提供完整的矢量和栅格分析、丰富的插件生态以及专业制图能力。', tags: ['Desktop', 'Python', 'Plugin', 'Cartography'], url: 'https://qgis.org', github: 'https://github.com/qgis/QGIS', featured: true },
    { name: 'GRASS GIS', category: 'desktop', license: 'GPL', stars: '900+', language: 'C / Python', desc: '美国陆军工程兵团发起的地理空间分析引擎，拥有 500+ 空间分析模块，适合科研与遥感。', tags: ['Raster', 'Remote Sensing', 'Geostatistics'], url: 'https://grass.osgeo.org' },
    { name: 'SAGA GIS', category: 'desktop', license: 'GPL', stars: '1.1k', language: 'C++', desc: '面向地球科学研究的桌面 GIS，地形分析、气候分析、土壤侵蚀模型开箱即用。', tags: ['Terrain', 'Hydrology', 'Earth Science'], url: 'https://saga-gis.sourceforge.io' },
    { name: 'gvSIG', category: 'desktop', license: 'GPL', stars: '300+', language: 'Java', desc: '西班牙政府推动的跨平台桌面 GIS，在欧洲市政管理领域有广泛应用。', tags: ['Java', 'Municipal', 'Cross-platform'], url: 'https://gvsig.com' },
    { name: 'WhiteboxTools', category: 'desktop', license: 'MIT', stars: '1.2k', language: 'Rust', desc: '基于 Rust 的高性能地理空间分析库，提供 500+ 算法，地形与水文分析性能卓越。', tags: ['Rust', 'High Performance', 'Lidar'], url: 'https://whiteboxgeo.com' },

    // Web 地图
    { name: 'Leaflet', category: 'web', license: 'BSD-2', stars: '41k', language: 'JavaScript', desc: '轻量级移动友好交互地图库，设计极简、API 优雅，是 Web 地图的事实标准。', tags: ['JavaScript', 'Mobile', 'Lightweight'], url: 'https://leafletjs.com', github: 'https://github.com/Leaflet/Leaflet', featured: true },
    { name: 'OpenLayers', category: 'web', license: 'BSD-2', stars: '11.5k', language: 'JavaScript', desc: '高性能、功能全面的 WebGIS 客户端，支持 OGC 标准、矢量瓦片、3D 扩展。', tags: ['JavaScript', 'OGC', 'Vector Tiles'], url: 'https://openlayers.org' },
    { name: 'MapLibre GL JS', category: 'web', license: 'BSD-3', stars: '5.6k', language: 'JavaScript', desc: 'Mapbox GL JS 的开源分叉，矢量瓦片渲染性能行业领先，支持自定义样式。', tags: ['Vector Tiles', 'WebGL', 'Mapbox Alternative'], url: 'https://maplibre.org', github: 'https://github.com/maplibre/maplibre-gl-js', featured: true },
    { name: 'Mapbox GL JS', category: 'web', license: 'Proprietary', stars: '4.6k', language: 'JavaScript', desc: '商业级的矢量地图渲染库，WebGL 加速、3D 建筑、地理可视化表现惊艳。', tags: ['WebGL', 'Vector', '3D Buildings'], url: 'https://docs.mapbox.com/mapbox-gljs' },
    { name: 'OpenStreetMap', category: 'web', license: 'ODbL', stars: '—', language: 'Crowd-sourced', desc: '全球协作的开源地理数据库，被誉为"地图界的维基百科"，是开源 GIS 的数据基石。', tags: ['Data', 'Crowdsource', 'Global'], url: 'https://www.openstreetmap.org', featured: true },
    { name: 'uMap', category: 'web', license: 'WTFPL', stars: '—', language: 'Python / JS', desc: '基于 OSM 的轻量地图创建工具，30 秒在地图上创建自定义图层并分享。', tags: ['OSM', 'Easy', 'Share'], url: 'https://umap.openstreetmap.fr' },
    { name: 'Kepler.gl', category: 'web', license: 'MIT', stars: '10.4k', language: 'JavaScript', desc: 'Uber 开源的大规模地理数据可视化工具，无需编码即可探索百万级数据点。', tags: ['Big Data', 'Visualization', 'Uber'], url: 'https://kepler.gl', github: 'https://github.com/keplergl/kepler.gl', featured: true },
    { name: 'deck.gl', category: 'web', license: 'MIT', stars: '12.1k', language: 'JavaScript', desc: 'Uber 开源的 WebGL 数据可视化框架，专为大规模地理数据与图层而设计。', tags: ['WebGL', 'Layers', 'Big Data'], url: 'https://deck.gl' },

    // 地图服务
    { name: 'GeoServer', category: 'server', license: 'GPL', stars: '3.3k', language: 'Java', desc: 'OGC 标准兼容的地图服务器之王，支持 WMS/WFS/WCS，连接 PostGIS 即可发布。', tags: ['OGC', 'WMS', 'WFS', 'Java'], url: 'https://geoserver.org', github: 'https://github.com/geoserver/geoserver', featured: true },
    { name: 'MapServer', category: 'server', license: 'MIT', stars: '900+', language: 'C', desc: '老牌高性能 C 语言地图服务器，OSGeo 基金会旗舰项目，OGC 标准完整支持。', tags: ['OGC', 'C', 'High Performance'], url: 'https://mapserver.org' },
    { name: 'MapProxy', category: 'server', license: 'Apache-2.0', stars: '1.1k', language: 'Python', desc: '瓦片地图代理与缓存服务器，可拼接多源瓦片、做金字塔缓存与重投影。', tags: ['Tile', 'Cache', 'Reprojection'], url: 'https://mapproxy.org' },
    { name: 'tileserver-gl', category: 'server', license: 'BSD-2', stars: '2.4k', language: 'JavaScript', desc: 'Node.js 矢量瓦片服务器，即刻发布 MBTiles / PMTiles，配合 MapLibre 完美工作。', tags: ['Vector Tile', 'Node.js', 'PMTiles'], url: 'https://tileserver.readthedocs.io' },
    { name: 'pg_tileserv', category: 'server', license: 'MIT', stars: '380+', language: 'Go', desc: 'Crunchy Data 出品，直接从 PostGIS 吐出 Mapbox Vector Tile，零中间环节。', tags: ['PostGIS', 'Vector Tile', 'Go'], url: 'https://github.com/CrunchyData/pg_tileserv' },
    { name: 'pg_featureserv', category: 'server', license: 'MIT', stars: '180+', language: 'Go', desc: 'PostGIS 的要素服务前端，符合 OGC API Features 规范。', tags: ['OGC API', 'PostGIS', 'Go'], url: 'https://github.com/CrunchyData/pg_featureserv' },

    // 空间数据库
    { name: 'PostGIS', category: 'database', license: 'GPL', stars: '1.7k', language: 'C / SQL', desc: 'PostgreSQL 的空间扩展，OGC 兼容，是开源 GIS 的事实数据底座。', tags: ['PostgreSQL', 'Spatial SQL', 'OGC'], url: 'https://postgis.net', github: 'https://github.com/postgis/postgis', featured: true },
    { name: 'SpatiaLite', category: 'database', license: 'MPL', stars: '—', language: 'C / SQL', desc: 'SQLite 的空间扩展，单文件、零部署，适合嵌入式与移动端空间数据。', tags: ['SQLite', 'Embedded', 'Mobile'], url: 'https://www.gaia-gis.it/fossil/libspatialite' },
    { name: 'H2GIS', category: 'database', license: 'BSD-3', stars: '70+', language: 'Java', desc: 'H2 数据库的空间扩展，纯 Java 部署简单，适合中小型项目。', tags: ['Java', 'Embedded', 'H2'], url: 'https://h2gis.org' },
    { name: 'Apache Sedona', category: 'database', license: 'Apache-2.0', stars: '1.8k', language: 'Scala / Java', desc: '分布式空间计算引擎，Spark/Flink 上的地理空间分析利器。', tags: ['Spark', 'Distributed', 'Big Data'], url: 'https://sedona.apache.org', featured: true },
    { name: 'Geomesa', category: 'database', license: 'Apache-2.0', stars: '1.5k', language: 'Scala', desc: '基于分布式数据库的时空数据管理，HBase / Cassandra / Redis 全支持。', tags: ['HBase', 'Spatio-temporal', 'Big Data'], url: 'https://www.geomesa.org' },

    // 空间分析
    { name: 'GDAL / OGR', category: 'analysis', license: 'MIT', stars: '5.3k', language: 'C++ / Python', desc: '地理空间数据抽象库，200+ 格式读写能力，是开源 GIS 的"瑞士军刀"。', tags: ['Raster', 'Vector', 'Format Converter'], url: 'https://gdal.org', github: 'https://github.com/OSGeo/gdal', featured: true },
    { name: 'PROJ', category: 'analysis', license: 'MIT', stars: '1.3k', language: 'C++', desc: '制图投影与坐标变换库，全球所有 GIS 工具的坐标变换底层都靠它。', tags: ['Projection', 'CRS', 'Transformation'], url: 'https://proj.org' },
    { name: 'GEOS', category: 'analysis', license: 'LGPL', stars: '1.4k', language: 'C++', desc: 'JTS 的 C++ 端口，几何运算与空间谓词引擎，PostGIS/Shapely 的底层。', tags: ['Geometry', 'C++', 'JTS Port'], url: 'https://libgeos.org' },
    { name: 'Shapely', category: 'analysis', license: 'BSD-3', stars: '4.0k', language: 'Python', desc: 'Python 几何运算库，简洁的 API 完成 Buffer、Union、Intersection 等操作。', tags: ['Python', 'Geometry', 'Easy'], url: 'https://shapely.readthedocs.io' },
    { name: 'GeoPandas', category: 'analysis', license: 'BSD-3', stars: '4.4k', language: 'Python', desc: 'Pandas 的地理空间扩展，让 Python 数据科学家轻松处理矢量数据。', tags: ['Pandas', 'Python', 'DataFrame'], url: 'https://geopandas.org', featured: true },
    { name: 'Rasterio', category: 'analysis', license: 'BSD-3', stars: '2.3k', language: 'Python', desc: 'Python 栅格数据读写库，GDAL 的 Pythonic 封装，性能与易用性俱佳。', tags: ['Python', 'Raster', 'GDAL Wrapper'], url: 'https://rasterio.readthedocs.io' },
    { name: 'Turf.js', category: 'analysis', license: 'MIT', stars: '9.6k', language: 'JavaScript', desc: '浏览器端地理空间分析库，纯 JS 实现，无后端即可完成空间统计。', tags: ['JavaScript', 'Browser', 'Geo Statistics'], url: 'https://turfjs.org' },
    { name: 'JTS Topology Suite', category: 'analysis', license: 'EPL', stars: '1.7k', language: 'Java', desc: 'Java 空间拓扑套件，几何运算与空间谓词的事实标准。', tags: ['Java', 'Topology', 'OGC'], url: 'https://github.com/locationtech/jts' },

    // 可视化
    { name: 'Mapnik', category: 'visualization', license: 'LGPL', stars: '3.6k', language: 'C++ / Python', desc: 'OpenStreetMap 主地图渲染引擎，渲染质量与性能俱佳的制图工具包。', tags: ['Rendering', 'Carto', 'OSM'], url: 'https://mapnik.org' },
    { name: 'D3.js', category: 'visualization', license: 'BSD-3', stars: '110k', language: 'JavaScript', desc: '数据可视化的事实标准，地理投影、力导向图、时间轴一应俱全。', tags: ['SVG', 'Data Viz', 'Projections'], url: 'https://d3js.org', featured: true },
    { name: 'ECharts', category: 'visualization', license: 'Apache-2.0', stars: '60k', language: 'JavaScript', desc: '百度开源的可视化库，地理坐标系、散点、航线、热力图开箱即用。', tags: ['Charts', 'Apache', 'China'], url: 'https://echarts.apache.org' },
    { name: 'Datawrapper', category: 'visualization', license: 'Proprietary', stars: '—', language: 'JavaScript', desc: '专业新闻图表工具，地图组件在新闻业广泛使用。', tags: ['News', 'Charts', 'Maps'], url: 'https://www.datawrapper.de' },
    { name: 'Vega / Vega-Lite', category: 'visualization', license: 'BSD-3', stars: '5.5k', language: 'JavaScript', desc: '声明式可视化语法，地理可视化与图表用同一套 JSON 描述。', tags: ['Grammar', 'JSON', 'Declarative'], url: 'https://vega.github.io' },

    // 3D / 地球
    { name: 'Cesium', category: '3d', license: 'Apache-2.0', stars: '13.4k', language: 'JavaScript', desc: 'WebGL 三维地球与地图引擎，数字孪生与时空可视化的事实标准。', tags: ['WebGL', '3D Earth', 'Digital Twin'], url: 'https://cesium.com', github: 'https://github.com/CesiumGS/cesium', featured: true },
    { name: 'Three.js', category: '3d', license: 'MIT', stars: '105k', language: 'JavaScript', desc: 'WebGL 通用 3D 库，开发者搭建 3D 地理场景的底层利刃。', tags: ['WebGL', '3D', 'General'], url: 'https://threejs.org' },
    { name: 'earth.nullschool', category: '3d', license: 'MIT', stars: '8.9k', language: 'JavaScript', desc: '风场、洋流、波浪全球可视化的经典实现，三维地球动画的灵感来源。', tags: ['Wind', 'Ocean', 'Animation'], url: 'https://earth.nullschool.net' },
    { name: 'OpenGlobus', category: '3d', license: 'MIT', stars: '300+', language: 'JavaScript', desc: 'Cesium 的轻量替代品，纯 JS 实现三维地球。', tags: ['3D Earth', 'Lightweight'], url: 'https://www.openglobus.org' },
    { name: 'iTowns', category: '3d', license: 'CECILL-B', stars: '1.1k', language: 'JavaScript', desc: '法国 IGN 主导的 Web 3D 地理可视化框架，支持 CityGML / 3D Tiles。', tags: ['3D Tiles', 'CityGML', 'IGN'], url: 'https://www.itowns-project.org' },
    { name: 'NASA WorldWind', category: '3d', license: 'Apache-2.0', stars: '—', language: 'Java', desc: 'NASA 开源虚拟地球 SDK，提供 SDK 形式接入的 3D 地球。', tags: ['NASA', 'Virtual Globe'], url: 'https://worldwind.arc.nasa.gov' },

    // 数据 / 工具
    { name: 'Fiona', category: 'data', license: 'BSD-3', stars: '1.2k', language: 'Python', desc: 'GDAL/OGR 的 Pythonic 封装，简洁地读写矢量数据文件。', tags: ['Python', 'Vector', 'GDAL Wrapper'], url: 'https://fiona.readthedocs.io' },
    { name: 'pyproj', category: 'data', license: 'MIT', stars: '1.2k', language: 'Python', desc: 'PROJ 的 Python 接口，坐标变换与投影的日常工具。', tags: ['Python', 'Projection'], url: 'https://pyproj4.github.io/pyproj' },
    { name: 'osmnx', category: 'data', license: 'MIT', stars: '5.2k', language: 'Python', desc: '从 OpenStreetMap 下载并分析街道网络的最便捷方式。', tags: ['OSM', 'Network', 'Python'], url: 'https://osmnx.readthedocs.io', featured: true },
    { name: 'Overpass API', category: 'data', license: 'AGPL', stars: '—', language: 'C++', desc: '查询 OpenStreetMap 海量数据的专用 API 服务，自定义查询取数据。', tags: ['OSM', 'Query', 'API'], url: 'https://overpass-api.de' },
    { name: 'Nominatim', category: 'data', license: 'GPL', stars: '—', language: 'C++', desc: '基于 OSM 的全球地理编码与反向地理编码服务。', tags: ['Geocoding', 'OSM'], url: 'https://nominatim.org' },
    { name: 'gpxpy', category: 'data', license: 'Apache-2.0', stars: '—', language: 'Python', desc: 'Python 解析与生成 GPX 轨迹文件的工具库。', tags: ['GPX', 'Trajectory'], url: 'https://github.com/tkrajina/gpxpy' },
    { name: 'JOSM', category: 'data', license: 'GPL', stars: '—', language: 'Java', desc: 'OpenStreetMap 官方桌面编辑器，专业 OSM 贡献者必备工具。', tags: ['OSM', 'Editor', 'Java'], url: 'https://josm.openstreetmap.de' }
  ],

  timeline: [
    { year: '1982', title: 'MapInfo 商业 GIS 兴起', desc: '早期桌面 GIS 时代' },
    { year: '1986', title: 'GRASS GIS 开源', desc: '美国陆军工程兵团开源 GRASS' },
    { year: '1994', title: 'OGC 成立', desc: '开放地理空间联盟，标准化的起点' },
    { year: '2000', title: 'OpenStreetMap 立项', desc: 'Steve Coast 在伦敦发起' },
    { year: '2002', title: 'MapServer 发布', desc: 'UMN MapServer 进入黄金期' },
    { year: '2004', title: 'PostGIS 1.0', desc: 'PostgreSQL 空间扩展正式发布' },
    { year: '2007', title: 'QGIS 1.0', desc: '桌面 GIS 跨平台时代到来' },
    { year: '2010', title: 'Leaflet 1.0 草案', desc: 'CloudMade 推出轻量 Web 地图库' },
    { year: '2012', title: 'Mapbox 商业化', desc: '矢量瓦片 + 设计美学重新定义地图' },
    { year: '2014', title: 'Cesium 1.0', desc: 'Web 3D 地球进入产品级' },
    { year: '2016', title: 'Mapbox GL JS 开源', desc: 'WebGL 矢量渲染成为主流' },
    { year: '2018', title: 'MapLibre 分叉', desc: 'Mapbox GL JS 改许可，社区分叉延续开源' },
    { year: '2020', title: 'PMTiles + tileserver-gl', desc: '单文件矢量瓦片协议' },
    { year: '2022', title: 'OGC API 新标准', desc: 'RESTful 风格取代传统 WxS' },
    { year: '2024', title: 'AI + 地理融合', desc: 'LLM/视觉模型与 GIS 深度结合' }
  ],

  stats: [
    { label: '收录软件', value: 45, suffix: '+' },
    { label: 'GitHub Stars', value: 380, suffix: 'k+' },
    { label: '贡献者', value: 5000, suffix: '+' },
    { label: '覆盖领域', value: 8, suffix: '大方向' }
  ]
};
