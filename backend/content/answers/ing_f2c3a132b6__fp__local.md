---
qid: ing_f2c3a132b6__fp__local
question: How do I manage shard size? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 551
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:35:06-05:00'
sources: []
---

**Why the number of shards matters**

Every shard is a Lucene index: it stores term dictionaries, postings, and all field‑data in memory or on disk.  
The *effective* capacity of a node is therefore limited by the sum of the **in‑memory footprint per shard** plus the **I/O bandwidth needed to serve queries**.  
If you create too many shards, each one consumes its own dictionary and block cache; if you create too few, you lose parallelism for indexing and querying.

---

### Deriving the sweet spot

1. **Define the constraints**  
   * `C_mem` – memory available per node (≈ 70 % of physical RAM).  
   * `C_disk` – I/O bandwidth per node.  
   * `S_dict`, `S_cache` – average dictionary & cache size per shard.  
2. **Model the load**  
   * Query throughput ∝ number of shards (`k`) because each shard can be searched in parallel, but only up to the point where I/O saturates.  
   * Indexing latency ∝ 1/`k` (more shards → smaller writes per shard).  
3. **Optimization problem**  

\[
\max_{k}\; \frac{k}{S_{\text{dict}}+S_{\text{cache}}} \quad
\text{s.t. } k(S_{\text{disk}}\cdot t) \le C_{\text{disk}},\;
k(S_{\text{dict}}+S_{\text{cache}})\le C_{\text{mem}}
\]

where `t` is the average per‑shard I/O time.

4. **Solve**  
   * Compute `k_mem = ⌊C_mem/(S_dict+S_cache)⌋`.  
   * Compute `k_io  = ⌊C_disk/(S_disk·t)⌋`.  
   * The optimal shard count is `min(k_mem, k_io)`.

---

### Non‑obvious insight

**Shards are not “just data partitions.”**  
They impose a *fixed* memory overhead that grows linearly with `k` but do **not** reduce the total disk footprint. Therefore, if you double your data size by adding more shards, you also double the per‑node memory consumption—often exceeding capacity before the index itself does. This explains why many production clusters perform best with a handful of *large* shards rather than dozens of tiny ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
