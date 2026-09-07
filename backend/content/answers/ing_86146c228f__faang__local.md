---
qid: ing_86146c228f__faang__local
question: 'Explain: So what we will do is if — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 500
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:13-05:00'
sources: []
---

**Clarify**  
The interview asks for a high‑level design of the core feature that powers *Google Maps*—the real‑time location and routing service. I’ll assume we need: (1) accurate GPS/Cell/Wi‑Fi positioning, (2) route calculation with traffic, (3) map rendering, and (4) scalability to millions of concurrent users.

**Approach**  
1. **Data ingestion** – collect raw sensor data, ISP logs, and user reports into a streaming pipeline (Kafka).  
2. **Positioning layer** – fuse GPS, cell‑tower triangulation, Wi‑Fi fingerprinting via Kalman filters; cache recent positions in Redis for low latency.  
3. **Routing engine** – graph of roads stored in a distributed graph DB (JanusGraph) with edge weights from live traffic APIs. Use Dijkstra/A* on the fly; precompute shortest paths with Contraction Hierarchies to speed up queries.  
4. **Map tiles & rendering** – vector tiles served via CDN; client‑side WebGL for smooth panning/zooming.  
5. **Scaling** – microservices per layer, autoscaling groups, request throttling, and regional data centers.

**Depth**  
- Position accuracy: Kalman filter error < 10 m under open sky.  
- Routing latency target: < 200 ms for 95 % of requests.  
- Traffic integration: pull vehicle GPS at 1‑sec intervals; update edge weights every 5 s.  
- Complexity: routing O(|E| log |V|) per query; with contraction hierarchies reduces to ~O(log |V|).  

**Edge Cases**  
- No signal → fallback to last known position + cell‑tower triangulation.  
- Sudden traffic surge → hot‑spot edge weights become stale; trigger recomputation.  
- API rate limits from third‑party traffic providers.

**Optimize & Communicate**  
We can precompute “traffic‑aware” routing for high‑density corridors, cache popular routes, and use a hybrid of pull/push updates to keep data fresh while limiting bandwidth. I’ll emphasize trade‑offs: tighter latency vs. higher compute cost, and explain how monitoring metrics (latency, error rate) drive iterative improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
