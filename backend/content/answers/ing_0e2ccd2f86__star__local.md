---
qid: ing_0e2ccd2f86__star__local
question: 'Explain: Top 5 Redis Use Cases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 349
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:55-05:00'
sources: []
---

**Situation:**  
While leading the data‑engineering team at a fintech startup, our real‑time fraud detection pipeline was choking on latency; we had to process millions of transaction events per day while keeping the response time under 50 ms.

**Task:**  
I needed to design a system that could cache user risk scores, queue high‑volume events, and provide quick lookups for cross‑service analytics without overloading our relational DB.

**Action:**  
1. **Cache Layer (Redis Hashes & Sorted Sets):** Stored per‑user risk scores with TTLs of 5 min to avoid recomputation.  
2. **Message Queue (Redis Streams):** Replaced Kafka for low‑latency event ingestion; used consumer groups for horizontal scaling.  
3. **Rate Limiting (Redis Lua Scripts):** Implemented a sliding window counter per IP to throttle API calls, preventing abuse.  
4. **Pub/Sub Notifications:** Triggered microservices when a user’s risk score crossed thresholds, enabling instant alerts.  
5. **Secondary Indexing (Redis Search):** Indexed transaction metadata for ad‑hoc reporting and anomaly detection.

**Result:**  
Latency dropped from 250 ms to 35 ms; throughput increased by 4× while cutting DB load by 70%. The system also scaled effortlessly during peak trading hours, and the analytics team now runs real‑time dashboards with sub‑second query times. I learned that Redis is not just a cache but a versatile data store when you use its advanced structures appropriately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
