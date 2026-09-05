---
qid: ing_400b74b6ce__fp__local
question: Explain self-consistency. When is it worth the cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 425
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:20:38-05:00'
sources: []
---

**Self‑consistency in large language models**

The core problem is that a prompt can elicit *many* plausible continuations; the model’s softmax output is a distribution over tokens, not a single answer.  
Self‑consistency resolves this by **sampling multiple independent paths**, then aggregating them so that only the most coherent answers survive. It turns a stochastic process into an implicit ensemble: each sample explores a different mode of the posterior \(P(\text{output}\mid\text{prompt})\). By comparing these modes, we approximate the *mode‑maximization* of the true distribution, which is what humans implicitly do when they check multiple sources before deciding.

Why it must work this way:  
- **Optimization** – Each sample is a gradient‑free search in the token space; aggregating them approximates a global optimum over discrete choices.  
- **Information theory** – The variance across samples estimates epistemic uncertainty; consistency reduces entropy, yielding higher mutual information between prompt and answer.  
- **Geometry** – In high‑dimensional token embeddings, consistent samples lie near a manifold of valid answers; inconsistencies are outliers.

**When the cost pays off**

The computational overhead is linear in the number of samples, but the payoff is *robustness*. Self‑consistency is worthwhile when:
1. **Critical decisions** (medical, legal) where errors are costly.  
2. **Low‑resource prompts** that have many degenerate continuations.  
3. **Multi‑step reasoning** where intermediate inconsistencies amplify downstream mistakes.

**Non‑obvious insight:** Self‑consistency does not merely average outputs; it *selects* the mode by enforcing agreement, effectively performing a form of Bayesian model averaging without explicit priors. This subtle shift from “averaging” to “agreeing” is what turns noisy samples into reliable answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
