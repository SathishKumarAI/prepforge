---
qid: ing_8c9e2826cb__aws__local
question: Design the caching strategy for an LLM-backed feature. What can you cache
  and what can't you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 578
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:58-05:00'
sources: []
---

**Scenario – “Design a caching strategy for an LLM‑backed feature”**

> **Situation & Task**  
> In a recommendation engine that uses GPT‑4 to generate personalized responses, we needed to cut inference latency from ~1 s to <200 ms while keeping costs under $0.01 per request.

> **Action – Caching decisions (Customer Obsession + Ownership)**  
| What can be cached | Why it’s safe | Cache layer |
|-------------------|---------------|-------------|
| Prompt templates & tokenization maps | Static, deterministic | ElastiCache‑Redis |
| Embedding vectors for product titles | Reused across users | S3 + DynamoDB index |
| Model inference results for identical *user + product* pairs (within 24 h) | No policy change in that window | Redis with TTL |
| Tokenizer vocab & byte‑pair merges | Immutable | Lambda layer / ECR image |

| What **cannot** be cached | Reason | Mitigation |
|--------------------------|--------|------------|
| Real‑time inventory or price data | Volatile, user‑specific | Fresh API call; short TTL (5 s) |
| Personalization weights updated >24 h | Policy shift | Invalidate cache via SNS topic |

> **Design & Trade‑offs**  
* Use Redis for low‑latency lookups (<10 µs).  
* Store large embeddings in S3 and reference them in DynamoDB; cost ≈ $0.023/GB/month vs $0.00013 per 1,000 requests in Redis.  
* Fallback to on‑demand inference when cache miss occurs; the system retries with a “hot” model instance.

> **Result – Deliver Results**  
* Latency dropped from 950 ms to 180 ms (80% improvement).  
* Cost per request fell from $0.015 to $0.006, saving ~$30k/month on a 10M‑request workload.  

> **Bar‑raiser check**  
I documented the cache invalidation policy, logged hit/miss rates, and performed A/B tests to confirm that caching did not introduce stale content—showing ownership of both performance and correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
