---
qid: ing_8dfbc905e1__faang__local
question: 'Explain: CDN Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:14:23-05:00'
sources: []
---

**Clarify**  
We need to explain *what* a CDN cache is and *why* it matters in a system‑design context: how data is stored, retrieved, and invalidated so that content delivery is fast and scalable.

---

**Approach**  
1. Define “caching” as temporarily storing expensive results for reuse.  
2. Map the concept to CDNs: edge servers keep copies of static assets (images, JS).  
3. Highlight key dimensions: cache key, TTL, eviction policy, consistency model, and invalidation strategy.

---

**Depth**  
- **Cache Key** – URL + query string + headers (e.g., `Accept‑Encoding`).  
- **TTL (Time‑to‑Live)** – default expiration; can be overridden by HTTP headers (`Cache‑Control`, `ETag`).  
- **Eviction** – LRU or LFU to keep hot objects in memory.  
- **Consistency** – eventual consistency: stale copies may exist until TTL expires or a purge is issued.  
- **Invalidation** – push‑based (purge API) vs pull‑based (conditional GET with `If‑None-Match`).  
- **Storage tiers** – RAM for hot items, SSD for warm, and object store for cold data.

---

**Edge Cases**  
- Highly dynamic content: must bypass cache or use signed URLs.  
- Very large objects: chunked caching or stream revalidation.  
- Cache stampede: use distributed locks or pre‑warming.  
- Regional compliance: separate caches per jurisdiction.

---

**Optimize & Communicate**  
Explain trade‑offs: shorter TTL → fresher data but higher origin load; longer TTL → lower latency but stale content. Suggest monitoring hit/miss ratios and auto‑tuning TTLs. End with a quick example of an HTTP request hitting the CDN, retrieving from cache or falling back to origin.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
