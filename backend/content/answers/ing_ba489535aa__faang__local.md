---
qid: ing_ba489535aa__faang__local
question: 'Explain: Cache Invalidation Strategies — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 489
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:03-05:00'
sources: []
---

**Clarify**  
We’re asked how a large‑scale, production RAG (Retrieve‑Augment‑Generate) system keeps its cache fresh while still serving low‑latency responses. Key assumptions: *multiple data sources (vector DB + knowledge base), high read/write traffic, eventual consistency acceptable but stale answers hurt UX.*  

**Approach**  
1. **Identify invalidation triggers** – content updates, model retraining, user edits.  
2. **Choose granularity** – document‑level vs. shard‑level.  
3. **Select strategy** – time‑to‑live (TTL), write‑through cache, event‑driven pub/sub, or version tags.  
4. **Implement fallback** – serve stale until refresh completes to avoid cold starts.  

**Depth**  
- *Write‑through + TTL*: On update, push new vector to index and immediately invalidate the cache key; set a short TTL (e.g., 5 min) for safety. Complexity: O(1) per write, O(n) during bulk refresh.  
- *Event‑driven pub/sub*: Use Kafka topics for “document‑updated” events. Cache nodes subscribe and evict keys on receipt. Provides near‑real‑time consistency with O(1) eviction cost.  
- *Version tagging*: Store a version hash in the cache key; when a document changes, bump its version. Clients request by ID+version, avoiding stale reads without explicit invalidation.  

**Edge cases**  
- Network partitions: pub/sub may miss events → fallback to TTL.  
- High churn: too many evictions can thrash cache → batch updates or debounce.  
- Large documents: partial invalidation (embedding vectors) vs. full re‑indexing.

**Optimize & Communicate**  
Explain trade‑offs: write‑through + TTL is simplest but tolerates short stale windows; event‑driven gives stronger consistency at the cost of additional infrastructure. Recommend a hybrid: use pub/sub for critical docs, TTL for bulk data, and version tags for long‑term stability. Summarize impact on latency (≤ 10 ms) and cache hit ratio (> 95%). This shows structured reasoning, clear trade‑offs, and practical deployment insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
