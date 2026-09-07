---
qid: ing_eb26c00174__faang__local
question: 'Explain: Tensor Parallelism (TP) — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 438
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:46:39-05:00'
sources: []
---

**Clarify**  
Tensor parallelism is a distributed‑training technique that splits individual tensors—typically weight matrices of large transformer layers—across multiple GPUs so each device only stores and computes a slice. The question asks how this concept translates to *serving*: what infrastructure changes are required to keep latency low while still benefiting from the partitioned model.

**Approach**  
1. Identify the tensor shards that must be co‑located for a forward pass.  
2. Design an inter‑GPU pipeline (e.g., NCCL or RDMA) that streams activations between shards with minimal hop count.  
3. Expose a unified inference API that hides the sharding from clients, ensuring each request triggers a coordinated multi‑device execution.

**Depth**  
- **Data flow:** Input → shard 1 → communication → shard 2 → … → output.  
- **Latency control:** Use *micro‑batching* and *prefetching* so while one batch waits on the next hop, other batches are processed.  
- **Fault tolerance:** Replicate critical shards or use checkpoint‑based rollback if a GPU stalls.  
- **Complexity:** Communication overhead grows as O(log P) with pipelining; memory per GPU drops to ~1/P of full model size.

**Edge Cases**  
- Skewed shard sizes (e.g., asymmetric weight matrices).  
- Network congestion causing jitter—test with synthetic traffic bursts.  
- Mixed‑precision incompatibilities across GPUs.

**Optimize & Communicate**  
Start with a 2‑GPU prototype, benchmark latency vs. batch size, then scale to >8 GPUs using RDMA‑enabled interconnects. Explain trade‑offs: lower per‑device memory vs. higher network cost; highlight that for low‑latency serving you must keep the number of hops minimal and overlap communication with computation. This shows clear problem understanding, a concrete plan, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
