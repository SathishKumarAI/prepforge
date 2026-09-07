---
qid: ing_fcc85cb263__faang__local
question: 'Explain: Caching — What is an API Gateway? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 424
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:27:29-05:00'
sources: []
---

**Clarify**  
The interviewer asks two concepts that are often conflated in ML‑centric infra: *caching* (how we store intermediate model results) and an *API Gateway* (the entry point for client requests). I’ll first confirm the scope—are we focusing on ML serving, general microservices, or both? Also ask if they want architectural examples or just a definition.

**Approach**  
1. Define caching in ML: storing feature vectors, model outputs, or inference results to reduce recomputation.  
2. Explain an API Gateway’s role as the single entry point that routes requests, aggregates responses, and enforces policies (auth, rate‑limit).  
3. Show how a gateway can expose cached endpoints for heavy inference jobs.

**Depth**  
- **Caching**: Use in‑memory stores (Redis, Memcached) or local SSDs; TTL, LRU eviction; consistency models (eventual vs strict). For ML, cache feature extraction results to avoid recomputing expensive pipelines.  
- **API Gateway**: Handles request routing, protocol translation, circuit breaking, and can integrate with a caching layer (e.g., HTTP caching headers or edge caches like CloudFront). It can also orchestrate async workflows for batch inference. Complexity is O(1) routing; latency added by gateway ~10‑30 ms.

**Edge Cases**  
- Stale cache: need invalidation when model version changes.  
- Cache misses on cold start: fallback to backend compute.  
- High concurrency: ensure thread‑safe cache access and avoid thundering herd patterns.

**Optimize & Communicate**  
Highlight trade‑offs: aggressive caching reduces latency but increases memory cost; stricter consistency demands more invalidation traffic. Explain how to monitor hit rates, set TTLs per endpoint, and use a CDN for global inference workloads. Wrap up by stressing that an API Gateway is the glue that makes cached ML predictions scalable and secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
