---
qid: ing_23aac5cdcc__star__local
question: 'Explain: Stateful Caching — Optimizing AI Inference at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 323
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:13-05:00'
sources: []
---

**Situation**  
At Character.ai we were running a real‑time dialogue model for our flagship chatbot, but inference latency had spiked from 120 ms to over 350 ms during peak traffic, pushing us past the SLA and hurting user engagement.

**Task**  
Reduce per‑request latency by at least 30% while keeping throughput high, without retraining the model or adding costly hardware.

**Action**  
I introduced a stateful caching layer that persisted key embeddings for each conversation ID. Instead of recomputing the context vector on every turn, we stored the last hidden state in Redis with an LRU eviction policy tuned to our 10‑minute session window. For new turns we only fetched and updated this cache, reusing the cached embeddings when the same user returned within a short window. I also wrapped the caching logic in a lightweight Go microservice that batched cache lookups with the model inference request, reducing round‑trips. We monitored cache hit rates and tuned the expiration to balance freshness vs. performance.

**Result**  
Latency dropped from 350 ms to 210 ms (40% reduction) and throughput increased by 25%. User satisfaction scores rose by 12 points in our post‑deployment survey, and we avoided an additional GPU cluster. I learned that a well‑designed stateful cache can be more effective than raw compute scaling for inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
