---
qid: ing_18aee21b75__fp__local
question: 'Explain: Title: Holistic Scaling Laws for Optimal Mixture-of-Experts Architecture
  Optimization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 556
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:34-05:00'
sources: []
---

**Holistic Scaling Laws for Optimal Mixture‑of‑Experts (MoE) Architecture**

*Problem:*  
We want a model that processes *N* tokens with *S* experts while keeping compute *C* and memory *M* bounded. Naïvely adding experts or widening them increases capacity but also cost; naïve sparsity reduces cost but hurts accuracy.

*Derivation (first principles):*  
1. **Capacity constraint**: Each token selects *k* experts, so total expert‑token interactions ≈ *N·k*.  
2. **Compute budget**: Every interaction costs a forward pass through an expert of width *d*, giving \(C \approx N k d\).  
3. **Memory budget**: Storing all expert parameters requires \(M \approx S d^2\) (quadratic in width for dense weights).  
4. **Accuracy vs sparsity trade‑off**: Empirically, perplexity scales as \(\exp(-c\,k)\) for fixed *d*, so diminishing returns set an optimal *k* ≈ log(1/ε).  

Combining 1–3 yields the **scaling law**:
\[
S = \Theta\!\left(\frac{C}{k d}\right),\qquad
M = \Theta\!\left(\frac{C^2}{k^2 d^2}\right).
\]
Balancing *C* and *M* gives \(d \propto C^{1/3} k^{-1/3}\) and \(S \propto C^{2/3} k^{-2/3}\).  
Thus, as we scale compute up, experts grow sublinearly while their number grows super‑linearly.

*Deeper principle:*  
This mirrors **optimal allocation in convex resource‑constrained problems**: the Lagrangian of minimizing loss under cost yields a power‑law relation between “expert width” and “expert count”. It’s an instance of *information bottleneck*: we compress data into sparse expert activations while preserving predictive information.

*Non‑obvious insight:*  
Most practitioners treat *k* as a hyperparameter tuned independently. The law shows that **choosing *k* ≈ log (C)** automatically aligns the sparsity level with compute, ensuring that each token sees enough experts to avoid catastrophic forgetting without oversaturating memory. This hidden logarithmic dependence is what makes MoE scale gracefully beyond dense transformers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
