---
qid: ing_a47341135f__faang__local
question: 'Explain: Summary — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 474
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:07:38-05:00'
sources: []
---

**Clarify**  
*Problem:* Explain what “caching” means in a system‑design context and why it matters for ML workloads.  
*Assumptions:* The audience knows basic distributed systems; we’re focusing on performance & scalability, not security or persistence.

---

**Approach**  
1. Define caching as an intermediate memory layer that stores recently accessed data to reduce latency and load on primary storage.  
2. Contrast *read‑heavy* vs *write‑heavy* ML use cases (feature store reads vs model training writes).  
3. Outline typical cache layers: in‑process, distributed (Redis, Memcached), edge (CDN).  
4. Mention consistency models (LRU eviction, TTL, write‑through/behind).

---

**Depth**  
- **Read‑heavy ML:** Feature stores or inference endpoints benefit from a *read‑through* cache; feature vectors are fetched once and kept in memory for the next few seconds/minutes, cutting GPU/CPU load by ~70 %.  
- **Write‑heavy ML:** During training, a *write‑behind* cache batches gradient updates to disk, reducing I/O contention.  
- **Cache consistency:** Use vector clocks or version tags so stale features don’t corrupt predictions; eventual consistency is acceptable for many models.  
- **Complexity:** O(1) average lookup with hash tables; eviction costs O(log n). Trade‑off: higher memory use vs lower latency.

---

**Edge Cases**  
- Cache stampede when many requests hit a cold key → implement *lock‑per‑key* or *request coalescing*.  
- Memory pressure causing evictions of hot features → tune TTLs or promote to persistent store.  
- Data drift: cached feature values become obsolete; schedule periodic refreshes.

---

**Optimize & Communicate**  
Explain that adding a cache is an orthogonal optimization: it reduces load on the primary data source, improves SLAs, and can be rolled out incrementally. Highlight metrics (hit rate, latency reduction) to validate success. Conclude by noting that in ML pipelines, caching is often the first layer of performance engineering before tackling distributed training or model compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
