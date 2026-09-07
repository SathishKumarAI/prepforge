---
qid: ing_e84853c90a__aws__local
question: 'Explain: or less with the lat long that — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 481
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:35-05:00'
sources: []
---

**Situation (S)**  
At my previous gig I was tasked with building a real‑time delivery dashboard for a food‑delivery platform that needed to show riders and customers the same live location on a map. The system had to support > 200k concurrent users, deliver sub‑second updates, and scale as the city’s rider pool doubled.

**Task (T)**  
Design an architecture that keeps lat/long data fresh for every user while minimizing cost and latency.

**Action (A)**  
* **Geo‑hashing** – I partitioned the city into 1 km² cells using a custom GeoHash. Rider coordinates are stored in DynamoDB with the hash as the key, enabling O(1) lookups of nearby riders (`$0.25 per GB/month`).  
* **WebSocket API Gateway + Lambda** – Each client opens a single WebSocket connection; the backend pushes delta updates only when a rider crosses a cell boundary (≈ 5 % traffic reduction).  
* **Cache & Rate‑limit** – Edge caching in CloudFront stores the last 10 updates per user, and a Lambda@Edge throttles burst traffic.  
* **Observability** – CloudWatch metrics (`rider_latency_ms`, `api_throughput`) feed into an automated PagerDuty rule that triggers when latency > 200 ms.

**Result (R)**  
Latency dropped from 1.2 s to 300 ms, user churn fell by 18%, and infrastructure cost was cut by 35% compared with a naïve polling design.  

> **Leadership Principles:** *Customer Obsession* – delivering instant feedback for users; *Ownership* – owning the full data‑flow and cost metrics; *Dive Deep* – profiling latencies and iterating on cell size.  

**Bar‑raiser take‑away**  
They’ll expect you to quantify impact, show how you validated trade‑offs (cell granularity vs. cache hit rate), and explain what you learned when the first iteration caused a 10 % spike in WebSocket disconnects—leading me to add a reconnection backoff strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
