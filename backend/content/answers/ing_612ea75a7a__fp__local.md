---
qid: ing_612ea75a7a__fp__local
question: DeepSeek claims frontier-class results at a fraction of the usual training
  cost. If an interviewer asks "how is that even possible," what is your structured
  answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 468
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:31:59-05:00'
sources: []
---

**Answer (structured)**  

1. **Fundamental problem** – training a language model is an *optimization over a high‑dimensional parameter space* with a loss that averages over billions of tokens. The cost scales roughly linearly in the number of *effective gradient updates* needed to reach a target performance.  

2. **Why fewer updates can suffice** –  
   * **Data efficiency**: If each token carries more information (via richer embeddings, context‑aware positional encodings, or multi‑task signals), the gradient variance shrinks; fewer passes are required to converge.  
   * **Sparse, adaptive computation**: By conditioning attention on a small subset of heads/rows (e.g., via Block‑sparse Transformers or routing networks), each update touches only \(O(\sqrt{N})\) parameters instead of all \(N\). The optimizer’s step size can then be larger without destabilising training.  
   * **Better loss landscapes**: Using curriculum learning and progressive layer freezing reshapes the objective into a sequence of “easier” sub‑problems, turning a hard non‑convex surface into a series of convex‑ish valleys that converge faster.

3. **Connection to deeper principles** – this is an instance of *information bottleneck* optimisation: we deliberately constrain the model’s capacity (sparsity) while maximizing mutual information with the target distribution. The result is a lower‑variance estimator of the gradient, yielding cheaper training.  

4. **Non‑obvious insight** – the true cost reduction comes not from fewer FLOPs per step but from *reducing the number of statistically independent steps*. By making each update more informative (via richer data signals and sparsity), we shrink the effective sample size needed for convergence, turning a linear‑time process into an almost logarithmic one.  

In short, DeepSeek trades raw compute for smarter, higher‑information updates that converge in far fewer iterations, while sparse routing keeps per‑step cost low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
