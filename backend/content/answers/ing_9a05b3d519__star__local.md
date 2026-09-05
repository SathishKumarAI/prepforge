---
qid: ing_9a05b3d519__star__local
question: 'Explain: But the idea is this number(10 KMs) — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 429
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:47-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with redesigning the “distance between two points” feature in our navigation app after users complained that the displayed mileage was off by up to 15 % during peak traffic, hurting trip planning.

**Task**  
I needed to build a high‑throughput, low‑latency service that could compute straight‑line and road distances for millions of requests per day while staying within budget constraints and supporting future scaling to global coverage.

**Action**  
I broke the problem into three layers: (1) **Geospatial engine** – I wrapped Google’s S2 geometry library in a microservice, storing pre‑computed S2 cell IDs for all road segments in Bigtable. This allowed O(log n) lookups of nearest road nodes and fast haversine calculations for straight‑line distance. (2) **Routing layer** – I integrated OpenStreetMap data into a graph database (Neo4j), then used Dijkstra with edge weights adjusted for real‑time traffic from our Kafka stream, caching popular routes in Redis to cut latency to < 30 ms. (3) **API gateway & autoscaling** – I exposed the service via gRPC behind Envoy, auto‑scaling on CPU usage and implementing request throttling per user to keep costs predictable. I also added a “distance confidence” metric that surfaced if the computed route deviated > 2 % from the shortest path.

**Result**  
After deployment, average distance error dropped from 12 % to < 1 %, reducing user‑reported errors by 90 %. The system handled 3× the peak load with a 40 % lower compute cost. I learned that coupling fast geospatial lookups with real‑time traffic data and caching is key for any high‑scale navigation service, and that exposing uncertainty to users builds trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
