---
qid: ing_c594dba02c__star__local
question: 'Explain: Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 319
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:09-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time recommendation engine that ingested user events via Kafka and updated a Spark streaming pipeline every minute. The downstream model served personalized ads, and each ad click triggered an API call to our billing system.

**Task:**  
We discovered that duplicate event packets were occasionally replayed by Kafka, causing the same click to be billed twice. My job was to make the ingestion layer idempotent so we could guarantee a single charge per unique click without sacrificing throughput.

**Action:**  
I introduced a lightweight Redis cache keyed by a deterministic hash of (user_id + ad_id + timestamp). Each incoming event first checked Redis; if the key existed, the event was dropped. If not, it was processed and the key set with a 24‑hour TTL. I also added an idempotency header to our downstream API and updated the Spark UDF to ignore duplicates at the aggregation level. We logged all discarded events for audit.

**Result:**  
Duplicate charges fell from 3.7% of total revenue to <0.02%, saving roughly $150K annually. Latency increased by only 12 ms on average, keeping our SLA under 200 ms. I learned that a simple cache‑based guard can be more efficient than heavy deduplication logic in streaming pipelines, and the importance of end‑to‑end visibility for idempotency enforcement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
