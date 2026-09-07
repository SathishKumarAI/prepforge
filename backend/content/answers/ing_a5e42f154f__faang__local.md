---
qid: ing_a5e42f154f__faang__local
question: 'Explain: Uber System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 502
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:27-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design of Uber’s end‑to‑end ride‑hailing system, focusing on the recent trend of “scalable matching & dispatch” used by FAANGs. I’ll assume: real‑time geospatial data, low latency (< 200 ms), 10⁶+ concurrent users, and multi‑region deployment.

**Approach**  
1. **Client → API Gateway → Auth** – stateless REST/GRPC with JWT.  
2. **Geofence Service** – each region owns a shard; uses a spatial index (R‑tree or geohash) to map driver & rider locations to cells.  
3. **Matching Engine** – publish‑subscribe queue per cell, priority by distance + driver rating.  
4. **Dispatch Service** – once matched, send push notifications; use retry with exponential backoff.  
5. **Data Store** – NoSQL (Cassandra) for event logs, Redis for hot driver availability, Postgres for transactional data.  
6. **Monitoring & Autoscaling** – Prometheus + Grafana; Kubernetes autoscaler per region.

**Depth**  
- *Geohash granularity* tuned to ~1 km cells; resolves 10⁴ drivers each.  
- Matching latency ≈ O(log N) due to R‑tree search, plus queue poll (≤ 50 ms).  
- Fault tolerance: leader election per cell via ZooKeeper; data replicated across AZs.  
- Complexity: O(N log N) for initial index build; per request O(log N).

**Edge Cases**  
- *Sudden surge*: scale up matching workers horizontally, use rate limiting on API.  
- *Driver offline mid‑match*: fallback to next best candidate via queue head.  
- *Cross‑region rides*: hop through regional dispatches with a global routing layer.

**Optimize & Communicate**  
Improvements: implement adaptive cell sizing during peaks; integrate ML for predicting driver demand and pre‑positioning. I’d explain trade‑offs—larger cells reduce index depth but increase search work, while smaller cells increase sharding overhead. This structured narrative demonstrates clear problem framing, a scalable solution, and awareness of real‑world constraints, aligning with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
