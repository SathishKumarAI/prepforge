---
qid: ing_1aaaf14f02__fp__local
question: 'Explain: Best practices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 545
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:03:01-05:00'
sources: []
---

### Why shard size matters for ML‑based search

When a model is stored in an **Elasticsearch index**, every term, embedding or vector is spread over *shards*.  
The fundamental problem is **latency vs resource utilisation**:

* **Too many shards (tiny partitions)** – each query must contact more nodes, incurring network overhead and lock contention.  
* **Too few shards (large partitions)** – a single node may run out of RAM or CPU when scoring high‑dimensional vectors.

The optimal shard size emerges from balancing two opposing costs:

| Cost | Scaling with shard size \(S\) |
|------|------------------------------|
| Query latency (network + coordination) | \(\Theta(N/S)\) where \(N\) = total docs |
| Per‑shard memory & CPU load | \(\Theta(S)\) |

Setting the derivative of the sum to zero gives  

\[
\frac{d}{dS}\bigl(c_1 N/S + c_2 S\bigr)=0
\;\Rightarrow\;
S^\* = \sqrt{\frac{c_1 N}{c_2}}
\]

Thus the **ideal shard size grows with the square root of the index size**, weighted by the relative cost constants \(c_1,c_2\). In practice this translates to:

* Aim for 10–20 GB RAM per shard when using dense vectors (e.g., 768‑dim float32 embeddings).
* Keep shards below the node’s **hot‑thread** limit (~8–12 cores) to avoid CPU stalls.

### Non‑obvious insight

Most practitioners tune *shard count* by cardinality alone, ignoring **query pattern**.  
If your ML model is *k‑NN*-based and retrieves only 10 nearest vectors per query, the effective memory footprint is far smaller than a full index scan. In such cases you can afford **larger shards** (e.g., 30 GB) because each shard’s vector cache remains largely unused. Conversely, if your model requires *all* vectors for global scoring (e.g., topic‑model weighting), you must shrink shards to keep per‑shard memory under the node’s capacity.

In short: size shards not by document count, but by the *per‑query resource budget* implied by your ML algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
