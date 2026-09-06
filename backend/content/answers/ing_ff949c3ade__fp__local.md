---
qid: ing_ff949c3ade__fp__local
question: 'Explain: Tips for Example Ordering — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 422
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:03:12-05:00'
sources: []
---

### Why the order of examples matters

When a language model (LLM) receives a few‑shot prompt it treats each “example” as a **contextual cue** that shapes its internal probability distribution for the next token.  
Mathematically, the model learns a conditional density \(P(y\mid x,\mathcal{E})\), where \(\mathcal{E}\) is the set of examples. Because the soft‑max over logits is *not* invariant to permutation of \(\mathcal{E}\), the ordering influences which context window the model focuses on first, thereby biasing its inference toward the most recent example(s).  

### Deriving an optimal order

1. **Signal‑to‑Noise Ratio**  
   Place the *most informative* examples at the end so that their logits dominate the soft‑max. If two examples are equally relevant, the one closest to the target prompt gets a larger weight.

2. **Gradual Complexity**  
   Start with simple, high‑confidence cases and finish with edge‑cases. This mirrors curriculum learning: the model first “settles” on the general pattern before being nudged toward rare variants.

3. **Contrastive Pairing**  
   Interleave positive and negative examples that differ in a single dimension (e.g., yes/no). The contrast sharpens the decision boundary, analogous to margin maximization in SVMs.

### Non‑obvious insight

*The last example acts as a “soft label” for the model’s own logits.* Because the soft‑max is convex, placing an ambiguous or noisy example at the end can actually *regularize* the prediction by pulling the output distribution toward a more conservative estimate—much like adding a small amount of Laplace noise in Bayesian inference. Thus, deliberately inserting a slightly noisy exemplar last can improve generalization on unseen inputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
