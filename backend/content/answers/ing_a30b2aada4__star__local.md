---
qid: ing_a30b2aada4__star__local
question: 'Explain: Guaranteeing “exactly once” semantics — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 332
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:58:46-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection pipeline for a payment platform, we noticed that the downstream analytics service was occasionally receiving duplicate event payloads during peak traffic spikes—each duplicate triggered a separate risk score calculation and inflated our cost by ~15 %.  

**Task:**  
I needed to guarantee “exactly once” processing of transaction events without sacrificing throughput or adding prohibitive latency.  

**Action:**  
I introduced an idempotency key derived from the composite hash of `{transaction_id, merchant_id, timestamp}` and stored it in a Redis cache with a 24‑hour TTL. The API layer checked this key before queuing the event into Kafka; if the key already existed, the request was discarded as a duplicate. I also added an idempotency header to the HTTP spec used by client SDKs so developers could opt‑in automatically. On the consumer side, the worker performed a second check against the cache and persisted only new keys in PostgreSQL. We leveraged Kafka’s exactly‑once semantics (EOS) for message delivery to avoid replays during broker failures.  

**Result:**  
Duplicate processing dropped from 12 % to <0.01 %, cutting compute costs by 14 % while maintaining sub‑200 ms latency. The team adopted the idempotency header across all services, and I documented best practices that were later included in our API design guide. This experience reinforced that a simple hash‑based key plus cache can deliver strong consistency without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
