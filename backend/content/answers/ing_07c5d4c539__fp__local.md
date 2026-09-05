---
qid: ing_07c5d4c539__fp__local
question: 'Explain: Sizing considerations — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 463
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:22:06-05:00'
sources: []
---

**Why shard size matters**

Elasticsearch splits an index into *shards* so that each node can work on a subset of the data concurrently.  
The fundamental trade‑off is **parallelism vs. overhead**:

| Parallelism | Overhead |
|-------------|----------|
| More shards → more concurrent readers/writers, higher throughput | Each shard carries its own Lucene index and JVM thread pool; too many shards inflate memory use, GC pauses, and network latency |

The optimal size balances these forces.  
Let  

* N = total documents,  
* D = average doc size,  
* M = per‑shard memory budget (≈ 1–2 GB for a JVM heap),  
* S = desired shard count.

We want **S ≈ N·D / M**.  
If S is too small, a single shard becomes a bottleneck: queries must scan a huge inverted index and the node’s CPU saturates.  
If S is too large, each shard holds few documents; the per‑shard overhead dominates query latency (more TCP handshakes, more GC cycles).

**Non‑obvious insight**

The *effective* shard size depends on **query patterns**, not just raw data volume.  
For highly selective queries that hit a tiny fraction of docs, a very large shard can still perform well because Lucene’s postings list is compressed and cached; the real bottleneck becomes disk I/O.  
Conversely, for full‑text scans or aggregations over broad ranges, even modest shard sizes cause many nodes to participate, so the network overhead grows linearly with S.

**Rule of thumb**

* Keep each primary shard under 50 GB (≈ 30 GB RAM‑friendly).  
* Adjust downwards if you observe frequent full‑index scans or high GC.  
* Scale up only when query latency shows a linear rise with node count, indicating insufficient parallelism.

By grounding shard sizing in this cost–benefit calculus, you avoid the common pitfall of “more shards is always better” and achieve predictable, efficient search performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
