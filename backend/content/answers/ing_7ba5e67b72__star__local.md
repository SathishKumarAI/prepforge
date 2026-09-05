---
qid: ing_7ba5e67b72__star__local
question: 'Explain: acks=all - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 353
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:19-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time recommendation pipeline that pushed user events from a mobile app into Kafka, then consumed them with Spark Structured Streaming to generate personalized offers within three seconds. Our SLA demanded 99.9 % data durability – any loss meant users saw stale recommendations.

**Task:**  
I had to configure the producer so that every event was guaranteed to be replicated on all in‑sync replicas before acknowledging delivery, without hurting throughput or latency beyond acceptable limits.

**Action:**  
I set `acks=all` and increased the replication factor from 3 to 5 across a 12‑node cluster. I monitored the broker’s `replica_lag_max_ms` and tuned `max.in.flight.requests.per.connection` to 1, preventing out‑of‑order acknowledgments that could otherwise inflate latency. To keep throughput high, I used a batch size of 64 KB and linger time of 5 ms, while enabling idempotence (`enable.idempotence=true`) to avoid duplicate records if retries happened.

**Result:**  
After deploying, we saw no data loss during peak traffic (≈1 M events/s) and the average end‑to‑end latency dropped from 6.8 s to 4.3 s. The pipeline met its SLA with a durability guarantee of >99.999 %. I learned that `acks=all` is essential for critical data, but it must be paired with careful cluster sizing and idempotent producers to balance reliability and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
