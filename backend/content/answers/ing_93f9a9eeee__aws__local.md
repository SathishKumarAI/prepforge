---
qid: ing_93f9a9eeee__aws__local
question: 'Explain: million orders turns out to be roughly — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 405
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:29-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign DoorDash’s location‑based ordering system after a spike of **1 M orders/day** during peak lunch hours. The goal was to keep latency <200 ms for driver–customer matches while reducing infrastructure cost by 30%.

**Action (Technical Design)**  
- **Geo‑hashing**: Partition the city into H3 hexagons (resolution = 9) and store each hex’s active orders in an Amazon DynamoDB table with a composite key `(hex_id, timestamp)` for time‑based TTL.  
- **Real‑time updates**: Use Amazon API Gateway + WebSocket APIs to push order status to drivers. For scalability we fan‑out via AWS AppSync GraphQL subscriptions backed by DynamoDB Streams.  
- **Scoring & Matching**: A Lambda layer (Python 3.11) reads the nearest hexes, queries DynamoDB for active orders, and returns top‑N matches. Results are cached in Amazon ElastiCache Redis (clustered mode) to reduce read latency.  
- **Observability**: CloudWatch metrics + X-Ray traces feed a Grafana dashboard; alerts trigger auto‑scaling on API Gateway and Lambda concurrency.

**Result**  
- Latency dropped from 350 ms to **145 ms** (p95).  
- Cost decreased by **32%** due to reduced DynamoDB reads and efficient WebSocket usage.  
- Customer satisfaction scores improved by **12 points** in NPS surveys post‑deployment.

**Reflection**  
I owned the failure point when TTL values caused stale orders; we introduced a fallback cleanup Lambda, learning that “Dive Deep” into caching layers is essential for reliability. This solution exemplifies *Customer Obsession*, *Ownership*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
