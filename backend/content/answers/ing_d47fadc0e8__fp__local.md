---
qid: ing_d47fadc0e8__fp__local
question: Why Scale by Square Root of d_k? — Attention Mechanisms
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 428
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:33-05:00'
sources: []
---

In scaled‑dot‑product attention we compute  

\[
{\rm attn}(Q,K,V)=\operatorname{softmax}\!\left(\frac{QK^\top}{s}\right)V ,
\]

where \(Q, K \in \mathbb R^{n\times d_k}\).  
The core question is: *why choose \(s=\sqrt{d_k}\)?*  

**Fundamental problem.**  
If the entries of \(q_i\) and \(k_j\) are i.i.d. with zero mean and unit variance, each dot product \((q_i\!\cdot k_j)\) is a sum of \(d_k\) independent terms. By the central limit theorem its variance grows linearly with \(d_k\):  

\[
{\rm Var}(q_i\!\cdot k_j)=d_k .
\]

Softmax turns these logits into probabilities; large‑magnitude logits push the distribution toward a one‑hot vector, effectively destroying useful gradient signal. Hence we must temper the scale so that typical logits remain of order unity.

**Derivation.**  
If we divide by \(\sqrt{d_k}\), the variance becomes  

\[
{\rm Var}\!\left(\frac{q_i\!\cdot k_j}{\sqrt{d_k}}\right)=
\frac{d_k}{d_k}=1 ,
\]

so logits have unit variance regardless of dimensionality. This preserves the relative differences between attention scores while keeping them in a numerically stable range for softmax.

**Non‑obvious insight.**  
The scaling factor is not merely a heuristic; it guarantees that the *distribution* of dot products is invariant to \(d_k\). Consequently, the same learned weights work across models of different sizes, enabling smooth transfer and principled capacity scaling—an essential property for modern transformer architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
