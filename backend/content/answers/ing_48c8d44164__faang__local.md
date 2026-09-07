---
qid: ing_48c8d44164__faang__local
question: 'Explain: Summary — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 491
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:07-05:00'
sources: []
---

**Clarify**  
We’re asked how to build a high‑throughput, low‑latency indexing system for ML features (e.g., user embeddings). Key assumptions: (1) Features are vector‑valued and high‑dimensional; (2) Queries are similarity searches (“nearest neighbors”); (3) Updates arrive continuously; (4) Latency target <10 ms, throughput >10k QPS.

**Approach**  
1. Choose a proximity data structure (e.g., IVF+PQ or HNSW).  
2. Partition the feature space into coarse clusters (IVF) and compress vectors (PQ).  
3. Store shards on SSD‑backed nodes; use RDMA for inter‑node traffic.  
4. Expose a gRPC API with batched requests.  
5. Use a write‑ahead log to replay updates and keep indices fresh.

**Depth**  
- **IVF+PQ**: Build an IVF index offline, then incrementally add vectors via a “write buffer” that is merged nightly. Complexity: O(d log n) for insertion, O(k d) query time with k probes.  
- **HNSW**: Fully online; insert in O(log n), query ~O(1). Trade‑off: higher memory overhead (~4× raw vectors).  
- Consistency: use eventual consistency; serve stale results while updates propagate.  
- Fault tolerance: replicate shards (3‑replica) and use leader election.

**Edge Cases**  
- Sudden feature drift → re‑cluster.  
- Zipfian access patterns → cache top queries in L1 RAM.  
- Very large vectors (>512 d) → switch to product quantization with higher codebook size.

**Optimize & Communicate**  
Explain that we’ll benchmark IVF vs HNSW on our workload, measure MIPS and latency, then pick the one meeting SLA while keeping memory < 8× raw data. Highlight trade‑offs: IVF gives lower CPU but higher disk I/O; HNSW is CPU‑heavy but offers sub‑millisecond queries for smaller shards. Conclude with a monitoring strategy (latency dashboards, error rates) to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
