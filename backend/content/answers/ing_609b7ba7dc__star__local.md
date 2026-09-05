---
qid: ing_609b7ba7dc__star__local
question: 'Explain: Solution — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 305
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:20-05:00'
sources: []
---

**Situation:**  
At my previous company we built a recommendation engine that needed to push model predictions into a real‑time analytics dashboard. The microservice producing predictions was stateless and used a message broker (Kafka) for downstream services. During load testing, we saw 12 % of prediction events missing in the dashboard because the broker could not keep up with spikes.

**Task:**  
I had to guarantee that every prediction event was reliably forwarded to Kafka even under burst traffic, without adding latency or compromising database consistency.

**Action:**  
Implemented a transactional outbox: each prediction write updated the `predictions` table and inserted an entry into an `outbox_events` table inside the same transaction. A lightweight background worker scanned the outbox, published events to Kafka, then marked them as sent. We used Postgres logical decoding to capture new rows in real time, reducing polling overhead. To keep the outbox size manageable we added a TTL job that cleaned processed records nightly.

**Result:**  
After deployment, event loss dropped from 12 % to <0.01 %, and end‑to‑end latency stayed under 200 ms during peak loads. I learned how coupling writes with an outbox table can decouple transactional guarantees from asynchronous messaging without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
