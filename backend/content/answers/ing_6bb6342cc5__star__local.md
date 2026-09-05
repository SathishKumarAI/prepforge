---
qid: ing_6bb6342cc5__star__local
question: 'Explain: Confusing Idempotency with Exactly-Once — Idempotency | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 380
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:33-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a real‑time recommendation service that pulled user actions from Kafka and updated an in‑memory feature store every second. The API endpoint that consumed these events had to be highly available, so we introduced automatic retries when downstream caches timed out.

**Task:**  
I was tasked with ensuring the system didn’t double‑count impressions or duplicate recommendations while still guaranteeing 100 % delivery of user actions.

**Action:**  
First I clarified the difference between *idempotency* and *exactly‑once*. Idempotency means that repeating a request has no additional effect; exactly‑once guarantees each event is processed only once, even if duplicates arrive. To achieve this I added a lightweight deduplication layer: every incoming Kafka record carried a unique UUID, which we stored in a Redis set with a 24‑hour TTL. On receipt of an event, the worker checked the set; if present it skipped processing (idempotent handling). For exactly‑once, we wrapped each update to the feature store in a transaction and logged the UUID to a write‑ahead log before committing, so even if the process crashed we could replay only missing records. We also instrumented Prometheus metrics for duplicate counts.

**Result:**  
The retry logic now produced no double impressions; our deduplication hit rate was 99.8 % with only 0.2 % false negatives due to TTL expiry. Overall recommendation latency dropped from 350 ms to 210 ms, and we eliminated the “duplicate recommendation” bug that had cost us ~5 % of revenue in A/B tests. I learned that idempotency is a pragmatic tool for resilience, while exactly‑once requires careful state management and transaction guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
