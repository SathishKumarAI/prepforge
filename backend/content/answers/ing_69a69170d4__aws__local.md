---
qid: ing_69a69170d4__aws__local
question: 'Explain: engineer over at google in the united — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 452
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:03-05:00'
sources: []
---

**Situation (S)**  
At Google in the U.S., I led a cross‑functional team to redesign DoorDash’s real‑time location service so that riders could see drivers within 200 m with < 50 ms latency, even during peak lunch hours.

**Task (T)**  
We needed a scalable system that would ingest > 10M GPS pings per day, keep state in near‑real time, and push updates to millions of mobile clients without draining battery or bandwidth.

**Action (A)**  

1. **Geo‑hashing** – Chose 7‑character S2 cells (~200 m). Stored each driver’s current cell in an Elasticache Redis cluster keyed by `cellId`.  
2. **WebSockets** – Deployed a fleet of Amazon API Gateway WebSocket APIs behind Lambda edge to maintain persistent connections with mobile clients, automatically scaling with request volume.  
3. **Event‑driven updates** – Used Kinesis Data Streams to buffer driver pings; Lambda functions update Redis and push delta messages via the WebSocket connection.  
4. **Resilience** – Multi‑AZ Redis replication + DynamoDB for fall‑back persistence ensured 99.999% availability.  

**Result (R)** – Reduced average end‑to‑end latency from 120 ms to **48 ms**; decreased server costs by **35%** through efficient key pruning and Lambda concurrency control. Customer churn dropped 12% in the first quarter after rollout, a direct win for **Customer Obsession** and **Deliver Results**.

> *Bar‑raiser focus*: Ownership (owning end‑to‑end flow), Dive Deep (choosing S2 cells over geohash), quantified impact (latency & cost metrics), and learning from early spikes that revealed Redis key hot‑spots, leading to adaptive sharding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
