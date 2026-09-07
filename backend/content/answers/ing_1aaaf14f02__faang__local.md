---
qid: ing_1aaaf14f02__faang__local
question: 'Explain: Best practices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 471
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:47:21-05:00'
sources: []
---

**Clarify**  
You’re asking how to decide shard size for an Elasticsearch cluster while keeping performance optimal. I’ll assume:  
- The data set is large enough that a single node can’t hold all shards.  
- Workloads are read‑heavy (search) with occasional writes.  
- You want high query latency (<200 ms) and fault tolerance.

**Approach**  
1. Estimate total index size + growth.  
2. Pick an “ideal” shard size (≈30–50 GB).  
3. Compute shard count = ceil(total_size / ideal_shard).  
4. Verify node capacity: each node should host ~5–10 shards for CPU/heap balance.  
5. Iterate if needed.

**Depth**  
- **Why 30‑50 GB?** Below this, the number of shards per node stays manageable (≤10) so that thread pools and file descriptors aren’t exhausted; above it, each shard becomes a heavy disk seek target, hurting search latency.  
- **Shard count vs. nodes:** More shards → finer parallelism but higher overhead (meta‑data, garbage collection). Fewer shards → larger I/O per request.  
- **Growth margin:** Leave ~20–30 % headroom so you don’t need a reindex for modest growth.

**Edge Cases**  
- *Hot data*: If certain indices are heavily queried, give them smaller shards (≤15 GB) to keep hot shards fast.  
- *Write bursts*: Larger shards reduce the number of segment merges but can cause longer merge times; monitor `cluster:health` and GC.  
- *Node failures*: Too many shards per node may leave few remaining after a failure, hurting redundancy.

**Optimize & Communicate**  
After initial sizing, run a load‑test that simulates realistic query patterns. If latency spikes or CPU saturates, reduce shard size or add nodes. Document the decision logic and keep it in a “Shard‑Sizing” wiki so future teams can adjust thresholds without starting from scratch. This iterative, data‑driven approach aligns with FAANG’s emphasis on measurable performance trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
