---
qid: ing_318ac9e898__faang__local
question: Are indices and shards not free? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 451
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:31-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether the cost of indices/shards is negligible and how to decide the shard count for an ES cluster. Key assumptions: we’re dealing with a production cluster that must support search latency < 200 ms, 100‑TB data, and a 10× growth horizon; hardware costs dominate over software licensing.

**Approach**  
1. Estimate per‑shard memory (heap + OS) and disk usage.  
2. Compute the maximum safe shards per node (≈ 20–30 for 8 GB heap).  
3. Derive total nodes = ceil(total_shards / max_shards_per_node).  
4. Validate against read/write throughput, shard‑level ops (merge/replica), and recovery time.

**Depth**  
- **Memory:** each shard needs ~0.5–1 GB of heap + 200 MB OS; so with 8 GB heap you can safely run 16–20 shards.  
- **Disk:** shard’s index file is ~1× data size; keep at least 2× free for merges.  
- **Performance:** >30 shards per node leads to CPU contention on merge/flush and slower queries due to cross‑node routing.  
- **Recovery:** more shards = longer failover, as each shard must be re‑replicated.

**Edge Cases**  
- Hot indices (high write rate) may need fewer shards for faster indexing.  
- Very small shards (< 1 GB) waste heap and cause “unassigned shards” spikes.  
- Legacy nodes with 32 GB heap can support ~50 shards safely.

**Optimize & Communicate**  
Start with a conservative shard‑per‑node ratio (15–20), monitor JVM GC, CPU, and recovery times. If latency is high, reduce shards per node; if disk usage is low, increase to improve parallelism. Explain that indices/shards are not free—each incurs memory, CPU, and storage overhead—and the optimal count balances these against throughput and resilience requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
