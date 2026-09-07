---
qid: ing_30c19b7b45__aws__local
question: How to get nearby businesses with quadtree?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 492
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:30-05:00'
sources: []
---

**Situation & Task**  
I led a data‑science sprint to power a local‑search feature in our marketplace app. The goal was to return the top *N* nearby businesses within a 5 km radius with <200 ms latency, while keeping costs below $0.05 per query.

**Action – Design**  
1. **Data model**: Store each business in DynamoDB with `geoHash` and `latitude/longitude`.  
2. **Spatial index**: Build a *quadtree* over the world map (depth = 12 → ~4 km cells). Each node stores a list of business IDs. The tree is materialized as an S3 key‑value store (`s3://quadtree/{level}/{x}_{y}.json`).  
3. **Query flow**:  
   - Lambda receives user lat/lon, computes the quadtree cell(s) covering the 5 km radius.  
   - Parallel `BatchGetItem` on DynamoDB for candidate IDs.  
   - Final filtering with Haversine distance in Lambda; sort by rating.  
4. **Scalability & cost**:  
   - S3 provides hot‑cache (≤10 µs) and cold storage at $0.023/GB.  
   - DynamoDB on-demand keeps spend predictable; 1 kQPS ≈ $0.25/day.  
   - Lambda concurrency limited to 200, ensuring <500 ms per request.

**Result**  
- Latency dropped from 650 ms (R‑tree + PostGIS) to **180 ms**.  
- Query cost fell by **60 %**, saving ~$4k/month.  
- Accuracy >99.8 % compared to ground truth.

**Reflection**  
I took *Ownership*—re‑architecting the entire spatial pipeline—and applied *Dive Deep* to benchmark each component. Post‑launch, I added a self‑service dashboard (CloudWatch + QuickSight) that alerts on latency drift, turning a failure into continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
