---
qid: ing_d955354a1a__faang__local
question: 'Explain: “Moving Computation is Cheaper than Moving Data”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 436
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:04:37-05:00'
sources: []
---

**Clarify**  
The statement means that in distributed ML systems, it’s often more efficient to move the *computation* (e.g., a model or training routine) to where the data resides rather than pulling massive datasets across the network. I’d confirm: we’re talking about large‑scale, cloud‑based workloads; network latency and bandwidth are significant bottlenecks; the computation can be serialized and shipped easily.

**Approach**  
1. Outline the cost model: data transfer time vs. compute time.  
2. Highlight typical ML pipelines (e.g., MapReduce, Spark).  
3. Explain why computation is “cheaper” in terms of serialization overhead, CPU cache locality, and network I/O limits.

**Depth**  
- **Data movement** incurs *O(N)* bandwidth usage where N is data size; each byte traverses the network, adding latency and potential congestion.  
- **Computation movement** sends a compact binary (model weights, code) often < 10 MB, negligible over high‑speed links.  
- In frameworks like TensorFlow Distributed or PyTorch RPC, workers execute locally on data shards, reducing round‑trips.  
- Empirical studies show that moving 1 TB of log data can cost hours, whereas deploying a 50 MB model takes seconds.

**Edge Cases**  
- When compute is lightweight (e.g., simple aggregation) but data is tiny; moving data may be cheaper.  
- Encrypted or highly compressed data might alter the trade‑off.  
- Faulty network links could make local compute fail, forcing fallback to data transfer.

**Optimize & Communicate**  
Suggest a hybrid strategy: pre‑cache frequently used models on edge nodes, use lazy loading for rare tasks, and monitor network load to decide dynamically. Communicate this as “minimize data shuffling by leveraging model locality; only pull data when compute is trivial.” This showcases structured reasoning, clear trade‑offs, and practical implementation insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
