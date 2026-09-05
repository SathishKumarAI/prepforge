---
qid: ing_13916d496d__fp__local
question: 'Explain: Derive the gradient of cross-entropy loss with softmax inputs,
  and explain why we fuse them numerically.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 614
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:47:09-05:00'
sources: []
---

**From first principles**

The network outputs a vector \(z\in\mathbb{R}^K\) (logits).  
Softmax turns them into probabilities

\[
p_k=\frac{e^{z_k}}{\sum_{j=1}^{K} e^{z_j}}\; .
\]

For a one‑hot target \(y\), the cross‑entropy loss is  

\[
L=-\sum_{k} y_k \log p_k = -\log p_y .
\]

*Why this loss?*  
It measures how far the predicted distribution \(p\) is from the ideal Dirac at class \(y\). Minimising \(L\) forces \(p_y\to1\), which is exactly what we want.

---

### Gradient derivation

Compute \(\partial L/\partial z_i\):

\[
\frac{\partial L}{\partial z_i}
= -\,\frac{1}{p_y}\,\frac{\partial p_y}{\partial z_i}.
\]

Using the softmax derivative  

\[
\frac{\partial p_k}{\partial z_i}=p_k(\delta_{ki}-p_i),
\]

we get

\[
\frac{\partial L}{\partial z_i}
= -\,\frac{1}{p_y}\,p_y(\delta_{iy}-p_i)
= -( \delta_{iy} - p_i )
= p_i - y_i .
\]

So the gradient is simply **predicted probability minus target**—the familiar “error vector” used in back‑prop.

---

### Numerical fusion

Computing \(p_k=e^{z_k}/Z\) and then \(\log p_y\) separately suffers from catastrophic cancellation:  
large logits produce huge exponentials that overflow, while small logits underflow.  

Instead we compute the *log‑sum‑exp* in one step:

\[
L = -z_{y} + \log\!\Bigl( \sum_j e^{z_j}\Bigr).
\]

Subtracting a constant \(m=\max_k z_k\) before exponentiation keeps all terms bounded:

\[
L = -z_y + m + \log\!\Bigl(\sum_j e^{z_j-m}\Bigr),
\]

ensuring numerical stability without changing the gradient (the added constant vanishes when differentiating).  

**Non‑obvious insight:**  
The *fusion* does not merely avoid overflow; it guarantees that the gradient \(p_i-y_i\) is computed from a well‑scaled softmax, preserving both magnitude and direction. When logits are extreme, an un‑fused implementation would produce NaNs or zeros, corrupting the entire learning signal. Thus, fusion is essential for *robust* optimisation, not just efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
