---
qid: ing_f3a1ac6f47__fp__local
question: 'Explain: How to approach a system design interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 424
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:36:59-05:00'
sources: []
---

**Start from the problem statement, not the template**

1. **Clarify the objective** – what is being optimized?  
   *Throughput vs latency? Accuracy vs cost?*  
   A clear target turns every design choice into a decision about trade‑offs.

2. **Decompose into independent sub‑problems**  
   *Data ingestion → preprocessing → model inference → post‑processing.*  
   Treat each block as an “oracle” that can be swapped, so you can focus on one dimension at a time (e.g., batch size vs GPU utilization).

3. **Model the cost function mathematically**  
   \[
   C = w_1\,T_{\text{lat}} + w_2\,\text{Cost}_{\text{compute}}
   \]
   Optimizing \(C\) is a constrained convex problem if you linearize latency and compute cost; otherwise, use Lagrange multipliers. This turns intuition into a solvable equation.

4. **Choose the architecture that satisfies constraints**  
   *If latency dominates:* pick a single‑node GPU with minimal data shuffling.  
   *If throughput dominates:* distribute across many nodes, using model parallelism or quantization to shrink per‑sample cost.

5. **Validate assumptions empirically**  
   Run micro‑benchmarks on a toy dataset; if the measured latency deviates from the analytic estimate by >10 %, revisit your linearity assumption.

**Non‑obvious insight:**  
Most candidates treat “scalability” as adding more machines. The deeper principle is *amortizing the fixed cost of data movement*. If you can keep most samples on a single machine (e.g., via caching or local pre‑processing), you save the expensive network hop that often dominates latency in distributed ML workloads. This subtle shift from “more nodes” to “less communication” frequently yields a better trade‑off between speed and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
