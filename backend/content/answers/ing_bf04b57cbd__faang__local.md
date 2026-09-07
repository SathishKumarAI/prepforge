---
qid: ing_bf04b57cbd__faang__local
question: You're training a large model across hundreds of accelerators. Compare data,
  tensor, and pipeline parallelism - when do you combine them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 633
total_tokens: 882
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:32-05:00'
sources: []
---

**Clarify**  
We’re training a single gigantic transformer‑style model that can’t fit on one device. The question is: *when should we mix data, tensor, and pipeline parallelism instead of using just one type?* I’ll assume the goal is to minimize total wall‑clock time while staying within memory limits and keeping communication overhead manageable.

**Approach**  
1. **Profile each dimension** – measure per‑step compute, memory usage, and inter‑device traffic for data, tensor, and pipeline splits on a small cluster.  
2. **Determine bottlenecks** – if memory is the limiting factor → tensor or pipeline; if GPU idle time dominates → data.  
3. **Build a cost model** – approximate \(T = T_{\text{comp}} + \alpha \log P\) for each parallelism, where \(P\) is devices per group and \(\alpha\) captures network latency.  
4. **Search the space** – start with pure data‑parallel; if memory still exceeds capacity, add tensor groups of size \(T\). If pipeline stalls due to load imbalance, introduce a small pipeline depth.

**Depth**  
- *Data parallelism* is cheap for communication (all‑reduce) but requires full model copy per GPU.  
- *Tensor parallelism* splits weight matrices across GPUs; reduces memory by ~\(1/T\) and keeps each GPU’s compute balanced, but incurs point‑to‑point sync on activations.  
- *Pipeline parallelism* stages the network; great when forward/backward latency dominates, but adds pipeline bubbles if batch size is small.

Combining them is optimal when **memory per device < model size / (DP × TP)** and **batch size > pipeline depth** so that all stages are saturated. In practice we first split the model into *tensor groups* (say 8 GPUs each) to fit weights, then run those groups in a *pipeline* of 4 stages, and finally wrap everything with *data parallelism* across 32 such pipelines.

**Edge cases**  
- Very small batch → pipeline stalls; avoid deep pipelines.  
- Unbalanced layers (e.g., large attention heads) → tensor splits can cause load imbalance; use dynamic partitioning.  
- Network congestion → the cost model underestimates \(\alpha\), leading to over‑parallelization.

**Optimize & communicate**  
I’d iterate: start with a simple DP baseline, measure GPU utilization and memory, then layer on TP if memory is tight, and finally add pipeline only when forward pass latency dominates. I’ll explain each decision using the cost model, show how adding a dimension reduces \(T_{\text{comp}}\) but increases \(\alpha\), and stop when marginal gains drop below a threshold (e.g., <1 % speedup per added device). This structured reasoning satisfies FAANG interviewers’ emphasis on clarity, depth, and trade‑off analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
