---
qid: ing_511c0ab125__fp__local
question: 'Explain: Spatial Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 831
total_tokens: 1008
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:57:42-05:00'
sources: []
---

**Spatial databases are not a single “best” solution; they arise because different spatial problems trade off four fundamental axes:**

| Axis | What it captures |
|------|-----------------|
| **Geometry type** | Point, line, polygon, raster, or graph |
| **Query pattern** | Range, nearest‑neighbour, topological (intersects, contains) |
| **Scale & precision** | Tiny (GIS tiles) to planetary (global maps) |
| **Update frequency** | Static (e.g., cadastral maps) vs. dynamic (real‑time traffic) |

From these axes we derive the 15 canonical database types:

1. **PostGIS / SpatiaLite** – R‑tree + GIST indexes for *mixed* vector data, ideal when you need full SQL support and spatial joins.  
2. **MongoDB with GeoJSON** – Grid‑based indexing for semi‑structured point/line collections; best for rapid iteration on web maps.  
3. **Redis GEO** – Hyper‑cube hashing for ultra‑fast nearest‑neighbour in high‑velocity sensor streams.  
4. **Elasticsearch GIS** – Inverted‑list + bitmap indexes, excellent for full‑text + spatial search (e.g., “restaurants within 5 km”).  
5. **Cassandra with Spatial‑CQL** – Partitioned by geohash; scales linearly to billions of points, perfect for IoT telemetry.  
6. **Neo4j with Spatial Plugin** – Edge‑centric graph indexing; captures road networks and route optimisation natively.  
7. **ArcGIS Enterprise (File/Enterprise Geodatabase)** – Hierarchical quad‑trees for raster tiles; suited to high‑resolution imagery.  
8. **Google Cloud BigQuery GIS** – Columnar storage + spatial UDFs, ideal for petabyte‑scale analytical queries.  
9. **Microsoft SQL Server with SDE** – Built‑in R‑tree; integrates seamlessly with ArcGIS workflows.  
10. **Oracle Spatial & Graph** – Hybrid B‑tree/R‑tree indexes, supporting both 2D/3D geometry and graph analytics.  
11. **PostgreSQL + TimescaleDB** – Time‑series + spatial indexing for moving objects (e.g., fleet tracking).  
12. **HBase with GeoMesa** – Column‑family storage + custom geospatial index; handles streaming data at scale.  
13. **Apache Accumulo with GeoWave** – Key‑value store with space‑filling curves, great for irregular sensor grids.  
14. **Couchbase Lite + Spatial View** – Mobile offline sync with lightweight spatial queries, useful in field collection apps.  
15. **SQLite + SpatiaLite** – Embedded, file‑based storage; perfect for desktop GIS and small mobile devices.

---

### Why this taxonomy works
Each database couples an *index* (R‑tree, quadtree, geohash) with a *data model* (vector vs. raster, relational vs. document). The index dictates the cost of the most common query pattern; the model dictates which operations (e.g., topology tests, raster reprojection) are native or require expensive workarounds. By matching **query pattern** to **index type**, we minimise I/O and CPU, achieving logarithmic performance where possible.

---

### Non‑obvious insight
The *scale* axis is often overlooked: a geohash index that works for 10 k points can become a bottleneck at 100 M points because the hash granularity no longer balances bucket size. Dynamically adjusting the geohash precision—coarsening for bulk loads, refining for hot spots—is a lightweight optimisation that most practitioners miss but yields orders‑of‑magnitude speedups without changing schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
