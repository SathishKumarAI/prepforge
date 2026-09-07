---
qid: ing_d47fadc0e8__faang__local
question: Why Scale by Square Root of d_k? — Attention Mechanisms
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 502
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:06-05:00'
sources: []
---

**Clarify**  
The question asks why attention scores are divided by \(\sqrt{d_k}\) (the dimensionality of the key vectors). We assume we’re working with dot‑product attention in Transformers, where queries \(Q\), keys \(K\), and values \(V\) all have dimension \(d_k\).

**Approach**  
Explain the role of scaling: it keeps the softmax input distribution from becoming too peaked as \(d_k\) grows. Outline the math, then discuss empirical effects (training stability, gradient magnitude). End with a short note on alternatives.

**Depth**  
In dot‑product attention we compute  
\( \text{Attention}(Q,K,V)=\operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V. \)  
Without the factor, each element of \(QK^\top\) is a sum of \(d_k\) products of random variables (≈\(N(0,\sigma^2)\)). By the central limit theorem this sum has variance proportional to \(d_k\). Thus the logits scale as \(\sqrt{d_k}\), producing extremely large values when \(d_k\) is big. The softmax then saturates, yielding near‑binary attention weights and vanishing gradients (the “softmax saturation” problem).

Dividing by \(\sqrt{d_k}\) normalises the variance of each logit to ~1, keeping the softmax output in a useful range (≈0.2–0.8). This stabilises training and allows larger hidden sizes without exploding gradients.

**Edge cases**  
If \(d_k=1\), scaling is unnecessary but harmless. For very small models the effect is minimal; for very large models (>1024) omitting scaling can lead to training collapse or slow convergence. Testing would involve comparing loss curves with/without scaling across different \(d_k\).

**Optimize & communicate**  
One could learn a temperature parameter instead of fixing \(\sqrt{d_k}\), but this adds complexity and may hurt generalisation. The current scheme is deterministic, cheap, and works universally across architectures (GPT‑3, BERT, etc.). In an interview I’d stress that the scaling trick is a simple yet critical stabiliser that lets us scale Transformers to billions of parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
