---
qid: ing_bbd500dc42__faang__local
question: 'Explain: And so discs are not the most — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 553
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:59:59-05:00'
sources: []
---

**Clarify**  
The interview asks you to discuss the *“disks are not the most important resource”* mantra from Google’s systems philosophy, and what that implies when designing large‑scale ML pipelines. Assume we’re building a distributed training platform: data ingestion, model training, inference serving.

**Approach**  
1. Identify which resources dominate latency/throughput (CPU, GPU, network).  
2. Map disk usage to those bottlenecks.  
3. Explain trade‑offs in sharding, caching, and streaming data.  
4. Cite concrete Google lessons (e.g., Bigtable, Spanner, TensorFlow).

**Depth**  
- **Disk vs. CPU/GPU**: For ML, training loops are compute‑bound; each GPU processes millions of floating‑point ops per second while disk can deliver only a few hundred MB/s. Thus, latency to fetch a batch is negligible compared to kernel execution time.  
- **Network as the true bottleneck**: Sharding data across machines introduces inter‑node traffic that dwarfs local disk I/O. Techniques like *data locality* (placing shards near GPUs) and *prefetch pipelines* in TensorFlow mitigate this.  
- **Lessons from Google**:  
  - *Bigtable*: Uses SSDs for hot metadata but keeps bulk data on HDD, proving disk choice can be tuned to access patterns.  
  - *Spanner*: Relies on high‑speed interconnects; even with fast disks, network latency dominates consistency operations.  
  - *TensorFlow Serving*: Caches models in RAM; disk read is a one‑time cost that doesn’t affect inference latency.

**Edge Cases**  
- **Cold starts**: When a new node boots, the first few batches may hit disk if data isn’t pre‑cached.  
- **Sparse datasets**: If data is stored as large sparse matrices on disk, I/O can become a bottleneck; use columnar storage or memory mapping.  
- **Fault tolerance**: Disk failures require replication; this adds overhead but is manageable compared to recomputing training.

**Optimize & Communicate**  
Explain that optimizing for disks alone yields diminishing returns in ML workloads; focus on network topology, data locality, and in‑memory caching. Narrate your reasoning by contrasting compute cycles vs. I/O cycles, citing Google’s empirical evidence, and concluding with the principle: *“Design systems around the true bottleneck—usually the network or computation, not storage.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
