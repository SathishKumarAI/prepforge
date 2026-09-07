---
qid: ing_1fff2ba47d__faang__local
question: 'Explain: It requires a table scan. With 200 — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 492
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:59:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants me to explain why a *table scan* is needed in the context of a location‑based service like Yelp or Google Places, and then design such a system. I’ll assume:  
- We have millions of businesses with latitude/longitude.  
- Queries are “find all places within X km of point (lat,lon)”.  
- The data set changes relatively infrequently.

**Approach**  
1. **Why a scan?**  
   - Simple relational tables lack spatial indexes; every row must be examined to compute distance → O(N).  
2. **Design layers**  
   - **Ingestion & storage**: NoSQL/SQL with geo‑fields + R‑tree or GiST index.  
   - **Geospatial filtering**: Use a bounding‑box filter (cheap) then Haversine for precise distances.  
   - **Caching**: Hot queries cached in Redis; use reverse geocoding cache.  
   - **Scalability**: Shard by geographic grid cells; each shard handles its own R‑tree.  
3. **API flow**  
   - Client → API Gateway → Service → Query shard(s) → Aggregator → Response.

**Depth**  
- *Table scan* is unavoidable if no spatial index exists; every row’s lat/lon must be compared to the query point.  
- With an R‑tree, we first locate candidate cells (O(log N)), then only compute distance for a small subset.  
- Complexity drops from O(N) to O(log N + k).  
- Use PostgreSQL PostGIS or ElasticSearch geo‑point fields.

**Edge cases**  
- Queries near the poles or dateline → wrap‑around logic.  
- Very large radius → fallback to full scan.  
- Data drift (new businesses) → incremental index updates.

**Optimize & communicate**  
I’d explain that a naive table scan is O(N), but by adding an R‑tree spatial index we reduce work dramatically, enabling real‑time responses for millions of records. I’d also note trade‑offs: more storage overhead and complexity in maintaining the index versus query latency. This shows clear problem understanding, design thinking, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
