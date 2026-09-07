---
qid: ing_bea1627425__aws__local
question: What is semantic caching, how is it different from prompt/prefix caching,
  and what are its failure modes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 519
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:22-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a project to reduce latency for our AI‑driven recommendation engine I led the effort to implement *semantic caching* so we could serve user queries faster without re‑running the full inference pipeline.  

| **Situation** | Our recommendation API had 10 k requests/sec with an average 120 ms response time, and the underlying LLM was a bottleneck. |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Task**      | Replace the naive prefix cache (only re‑used identical prompts) with a semantic cache that matches *meaning* rather than surface form. |
| **Action**    | 1️⃣ Extracted embeddings for every user query using Amazon SageMaker’s `TextEmbedding` endpoint.  
2️⃣ Stored them in an Amazon DynamoDB table keyed by a hashed vector bucket (LSH).  
3️⃣ On new request, performed a cosine‑similarity lookup; if similarity > 0.92 we returned the cached result.  
4️⃣ Deployed the cache behind an Application Load Balancer and set TTLs to 30 min to handle concept drift. |  
| **Result**    | Reduced inference load by 70 % (from 10 k → 3 k requests/sec), cutting GPU costs from $12K/month to $4.5K/month while keeping latency <90 ms for 95 % of traffic. |

**Differentiation**  
*Prefix caching* only matches exact prompt strings; it misses semantically identical but syntactically varied queries (e.g., “show me top books” vs “recommend best books”). Semantic caching uses embeddings to capture intent, thus far more effective.

**Failure Modes & Mitigations**  
1. *Embedding drift*: model updates change vector space → we monitor cosine‑similarity distributions and retrain embeddings quarterly.  
2. *Cold start*: new queries with no similar cache entry incur full inference; mitigated by fallback to prefix cache for exact matches.  
3. *Scalability*: DynamoDB partitions can become hot; we use auto‑scaling and sharding on hash buckets.

**Leadership Principles** – **Customer Obsession** (faster recommendations), **Ownership** (driving end‑to‑end caching pipeline), **Dive Deep** (analysis of embedding similarity thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
