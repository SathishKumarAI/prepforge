---
qid: ing_91fd324cc1__faang__local
question: Design the parallelism strategy for serving a 405B-parameter dense model.
  TP, PP, EP - what goes where and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 544
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:09-05:00'
sources: []
---

**Clarify**  
We’re asked how to distribute a *dense* 405 billion‑parameter transformer for inference (low latency, high throughput).  
Assumptions: single‑node GPU memory < 80 GB, network latency dominates cross‑GPU traffic, batch size ≈ 8–32, and we need sub‑second response.  

**Approach**  
1. Partition the *model* (tensor‑parallelism, TP) to fit each GPU’s memory.  
2. Split the *input sequence* (pipeline‑parallelism, PP) so that layers are streamed across GPUs, keeping per‑layer memory small.  
3. Use *embedding‑parallelism* (EP) only for the very first token embeddings if vocab size is huge; otherwise EP can be omitted to reduce communication.

**Depth**  
- **TP**: 405 B parameters / 80 GB ≈ 5×10⁶ params per GPU, so we need ~8–12 GPUs. Each GPU holds a shard of weight matrices (WQ, WK, WV, WO). During inference, each GPU computes its slice of the attention output and passes it to the next.  
- **PP**: Split the transformer into 4–6 stages; each stage runs on a distinct GPU or group of TP GPUs. This reduces per‑stage memory by ~1/number_of_stages and keeps the activations in sync with the forward pass, avoiding large buffer spills.  
- **EP**: Only beneficial if the vocabulary > 10⁶; otherwise the embedding matrix is < 4 GB and can stay on one GPU.

Communication pattern: *all‑reduce* for attention scores (O(1) per head), *pipeline* shuffle between stages, minimal cross‑TP traffic because weights are local.  

**Edge Cases**  
- Very small batch sizes make PP less efficient; fallback to TP only.  
- Extremely large vocab leads to EP becoming a bottleneck; need additional GPUs for embeddings.  
- Network congestion can break latency targets; test with simulated bandwidth limits.

**Optimize & Communicate**  
Add *tensor‑sharding* (e.g., 2‑way per layer) to further reduce GPU memory, and use *zero‑redundancy optimizer* patterns for fine‑tuning. Narrate: “We first shard weights to fit hardware, then pipeline layers to keep activations in flight, and only embed the vocab if necessary—this balances memory, compute, and latency.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
