---
qid: ing_fed40f1e4b__think__local
question: 'Explain: Combine smaller indices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 428
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:50:29-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Identify that “smaller indices” means splitting a large index into many sub‑indices (shards).  
   - Assume we’re working with Elasticsearch, where each shard is a Lucene index segment.  
   - Goal: explain why you’d split and how to size shards for optimal performance.

**2️⃣ Adopt the “shard‑size vs. query‑performance” mental model**  
   - Shard count ↔ parallelism (more shards → more concurrency).  
   - Shard size ↔ memory usage & disk I/O (too large → slow queries, too small → overhead).  
   - Balance between *total* storage and *per‑node* capacity.

**3️⃣ Step‑by‑step reasoning**  
   1. Estimate total docs, avg doc size, expected growth rate.  
   2. Decide target shard size (e.g., 30–50 GB) based on node RAM (≤25% of heap).  
   3. Compute number of shards = total size ÷ target shard size.  
   4. Add a buffer for future growth (10–20 %).  
   5. Consider replica count, index lifecycle policy, and hardware limits.

**4️⃣ Avoid common pitfalls**  
   - Don’t over‑shard: >1000 shards per node causes GC overhead.  
   - Don’t under‑shard: single huge shard can become a bottleneck.  
   - Ignore hot‑data patterns; cold data may need fewer replicas or smaller shards.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that the computed shards fit within cluster limits (e.g., 100 shards per node).  
   - Explain trade‑offs: more shards → faster searches but higher memory use.  
   - Conclude with a quick “If you’re unsure, start with 5–10 shards and monitor.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
