---
qid: ing_4388eb84ec__faang__local
question: 'Explain: A customer''s distributed training job on your GPU cluster gets
  55% scaling efficiency at 64 nodes. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 513
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:22-05:00'
sources: []
---

**Clarify**

We’re asked to debug a distributed training run that only achieves **55 % scaling efficiency** when using **64 GPU nodes** on our cluster.  
Assumptions I’d confirm:  

1. The job is an all‑reduce heavy DNN (e.g., ResNet) with synchronous SGD.  
2. Nodes are homogeneous, each with the same number of GPUs and interconnect.  
3. Network bandwidth & latency are within advertised specs; no other workloads interfere.  
4. Training hyperparameters (batch size, learning rate) were tuned for smaller scales.

**Approach**

1. **Profile communication vs compute** on a single node to get baseline per‑step timings.  
2. **Instrument the distributed run**: log per‑node GPU utilization, network traffic, and reduce operation times.  
3. **Identify bottlenecks**: compare local compute time with collective transfer time; check for stragglers or imbalance.  
4. **Validate hyperparameters**: ensure batch size scales linearly (i.e., 64× larger global batch).  

**Depth**

- *Compute vs Communication*: If communication dominates (> 45 % of step time), the network is the culprit. Use NVLink‑aware all‑reduce or Hierarchical All‑Reduce to reduce hop count.  
- *Stragglers*: Unequal GPU loads (e.g., due to data pipeline stalls) inflate total step time. Enable **gradient checkpointing** or **dynamic batch sizing** per node.  
- *Hyperparameter mismatch*: A fixed global learning rate can cause divergence; apply a **learning‑rate warm‑up** and scale it with 1/√(num_nodes).  

Complexity: All‑reduce is O(log P) but constant factors matter; optimizing topology can reduce latency by ~30–40 %.  

**Edge Cases**

- Node failures or transient network hiccups.  
- Mixed precision vs FP32 affecting bandwidth.  
- Data loader contention across nodes.

**Optimize & Communicate**

After adjustments, re‑run profiling: expect scaling efficiency > 80 % if communication is reduced and compute stays balanced. I’d present the before/after metrics in a concise slide deck, highlighting the root cause (network contention) and the applied fix (hierarchical all‑reduce + dynamic batching). This demonstrates structured problem solving, clear communication, and depth of technical insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
