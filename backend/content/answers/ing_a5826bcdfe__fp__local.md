---
qid: ing_a5826bcdfe__fp__local
question: 'Explain: Compute corrected rate — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 501
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:57:45-05:00'
sources: []
---

### Compute‑Corrected Rate: A First‑Principles View

When we benchmark a language model on a downstream task, the raw accuracy \(A\) conflates **model skill** with **compute budget**—the number of floating‑point operations (FLOPs) used to produce predictions.  
Assume the true ability of a model is a function \(f(C)\) that grows sublinearly with compute \(C\), as suggested by scaling laws:
\[
f(C)=a\, C^{b}\,, \qquad 0<b<1.
\]
If we evaluate two models on the same task but allocate different compute budgets, their raw accuracies will differ even if they have identical architectures.  
To isolate *skill*, we define a **compute‑corrected rate**:
\[
R_{\text{corr}} = \frac{A}{f(C)}.
\]
Derivation:  
1. Let \(A_{\text{true}}\) be the accuracy achievable with infinite compute.  
2. In practice, we observe \(A=A_{\text{true}}\cdot f(C)/f(\infty)\).  
3. Rearranging gives \(A_{\text{true}}=A\cdot f(\infty)/f(C)\).  
Since \(f(\infty)=1\) by normalization, \(R_{\text{corr}}\approx A/f(C)\).

**Why it works**:  
- It removes the confounding influence of compute, yielding a *compute‑agnostic* performance metric.  
- It aligns with the information‑theoretic view that each FLOP contributes diminishing returns; thus normalizing by \(C^{b}\) accounts for this law.

**Non‑obvious insight**:  
The exponent \(b\) is not merely empirical—it reflects the *effective dimensionality* of the task. For tasks where latent structure can be captured with fewer parameters, \(b\) shrinks; for more open problems, \(b\) approaches 1/3. Therefore, a compute‑corrected rate implicitly encodes task complexity, offering a richer diagnostic than raw accuracy alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
