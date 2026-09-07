---
qid: ing_2137da7e4e__faang__local
question: 'Explain: Qwen moved from dense-only to shipping both dense and MoE models
  (for example a 30B model with ~3B active parameters, and a 235B model with ~22B
  active). Explain the tradeoff, and when you would pick the 30B-A3B MoE over a 32B
  dense.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 291
output_tokens: 645
total_tokens: 936
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:01-05:00'
sources: []
---

**Clarify**  
The question asks why Qwen now ships both *dense* (all‑parameters active) and *Mixture‑of‑Experts (MoE)* models, e.g., a 30 B total‑parameter model that activates ~3 B at inference versus a 32 B dense. What are the trade‑offs, and when would we prefer the 30 B MoE over the 32 B dense?

**Approach**  
1. List key dimensions: compute cost, memory footprint, latency, accuracy, sparsity ratio, deployment constraints.  
2. Compare dense vs MoE along each axis.  
3. Provide a decision rule that balances performance against resource limits.

**Depth**  

| Dimension | Dense 32 B | MoE 30 B (≈3 B active) |
|-----------|------------|------------------------|
| **Compute (FLOPs)** | ~32 B × 2 ops per token | ~3 B × 2 ops ≈ 10× cheaper |
| **Memory** | All weights resident (~256 GB FP16) | Only 3 B active + routing tables; ~25 GB |
| **Latency** | One forward pass through all layers | Same depth, but fewer weight look‑ups per token → lower kernel launch overhead |
| **Accuracy** | Baseline dense performance | Comparable or slightly better on long‑context tasks due to specialization |
| **Scalability** | Limited by GPU memory; adding 1 B increases cost linearly | Scale total params (e.g., 235 B) while keeping active budget fixed → linear compute but sublinear memory |
| **Deployment constraints** | Requires large multi‑GPU or TPU pods | Fits on a single node with fewer GPUs, easier to cache |

Trade‑off: MoE trades *parameter count* for *sparsity*. You pay extra routing overhead and need load‑balancing; but you get orders‑of‑magnitude lower FLOPs per token. Dense models are simpler to tune and guarantee full capacity utilization.

**Edge Cases**  
- **Cold start / small batch**: dense may be faster because routing latency dominates.  
- **Highly repetitive prompts**: MoE routing can become imbalanced, hurting throughput.  
- **Hardware limits**: If GPU memory is abundant but compute budget tight, MoE wins; if compute budget is ample but memory constrained, dense may be preferable.

**Optimize & Communicate**  
When choosing the 30 B‑A3B MoE over a 32 B dense, ask: *Do we have strict latency or memory constraints?* If so, pick MoE. If accuracy on short‑context tasks is critical and hardware is plentiful, go dense. Highlight that MoE’s advantage grows with model size; for the 235 B/22 B active case, the compute gap widens dramatically while memory stays manageable—making MoE the de‑facto choice for large‑scale deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
