---
qid: ing_31ebc98097__aws__local
question: 'Explain: the idea so i''m a little bit — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 519
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:51-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I was asked to architect a real‑time location service for a food‑delivery app similar to DoorDash. The goal was to push driver locations to riders in sub‑second latency while keeping the cost under $1M/yr and scaling to 10 M active users.

**Approach & Design (T)**  
I chose **Geo‑Hashing + WebSockets**:

| Component | AWS Service | Reason |
|-----------|-------------|--------|
| Spatial index | DynamoDB Global Secondary Index on geohash | Fast range queries, auto‑scaling |
| Location updates | Amazon Kinesis Data Streams → Lambda → DynamoDB | Decouples ingestion from persistence |
| Real‑time push | Amazon API Gateway + WebSocket API → Lambda authorizer | Low latency, serverless scaling |
| Caching & hot spots | ElastiCache Redis (clustered) | 99.9 % hit rate for high‑density zones |

**Dive Deep (D)**  
- **Latency**: <200 ms from driver GPS to rider notification (measured via CloudWatch metrics).  
- **Throughput**: 100k concurrent WebSocket connections handled by API Gateway’s 1M connections per region.  
- **Cost**: $850K/yr (Kinesis, Lambda invocations, DynamoDB reads/writes, Redis memory).  

**Result & Ownership (R)**  
The system reduced rider wait‑time predictions from 5 min to 2 min on average, boosting order completion by **12%** and increasing driver earnings by **9%**. I led a cross‑team sprint, documented the architecture, and set up automated health checks.

**Learning & Bar‑raiser cues**  
- *Ownership*: Handled all phases from spec to deployment.  
- *Dive Deep*: Tuned geohash precision, Lambda concurrency, and Redis eviction policy based on real traffic data.  
- *Quantified Impact*: 12% lift in conversion, $850K annual cost.  
- *Failure*: Initial design had stale cache invalidation; fixed with optimistic locking and TTLs.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering faster, accurate ETA to riders.  
- **Ownership & Dive Deep** – Own end‑to‑end system, iterate on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
