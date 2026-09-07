---
qid: ing_b3b5ae805e__faang__local
question: 'Explain: Indexing — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 540
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:41:51-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise guide to database indexing—why it matters, the main types, and how to use them effectively in ML pipelines (e.g., feature stores, model serving). I’ll assume we’re dealing with relational or key‑value stores commonly used in production ML workloads.

**Approach**  
1. Define purpose of an index.  
2. List core index types & their trade‑offs.  
3. Show when to use each in ML contexts.  
4. Highlight pitfalls and tuning knobs.

**Depth**  

| Index | What it stores | Use‑case (ML) | Pros | Cons |
|-------|----------------|---------------|------|------|
| **B‑Tree** | Ordered keys + pointers | Primary key lookups, joins on feature tables | O(log n) search; range queries | Overhead for write‑heavy pipelines |
| **Hash** | Key → value bucket | Exact‑match retrieval (e.g., user ID → embedding) | O(1) avg lookup | No ordering; limited to equality |
| **GiST / SP-GiST** | Generalized tree, supports custom comparators | Spatial or text similarity searches in embeddings | Flexible | Complex maintenance |
| **Bloom Filter** | Probabilistic bitset | Cache‑miss prediction before full DB hit (feature cache) | Space‑efficient | False positives → extra fetches |

*Indexing ML pipelines*:  
- Feature stores: B‑Tree on `entity_id`; hash on composite keys for fast retrieval.  
- Model serving: Bloom filter to gate expensive DB queries; GiST for similarity search in vector embeddings.

**Edge Cases**  
- Write‑heavy ingestion (streaming feature updates) can throttle if indexes are too granular → consider write‑optimized log structures or delayed indexing.  
- Skewed key distribution leads to hot spots; use hash‑sharding or cover all partitions.  
- Outdated statistics → query planner mis‑chooses index, causing slow queries.

**Optimize & Communicate**  
Start with a cost‑based optimizer: gather `ANALYZE` stats, then evaluate cardinality estimates. Use partial indexes for rare feature subsets to reduce space. For distributed systems, align sharding key with primary index to avoid cross‑node lookups. Finally, document index choices in the data catalog so ML engineers understand when a lookup will hit cache vs. disk—this reduces debugging time and improves pipeline latency by 30–50 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
