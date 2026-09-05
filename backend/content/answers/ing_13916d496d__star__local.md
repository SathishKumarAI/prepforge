---
qid: ing_13916d496d__star__local
question: 'Explain: Derive the gradient of cross-entropy loss with softmax inputs,
  and explain why we fuse them numerically.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 476
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:07:32-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was training a neural network to classify handwritten digits. The final layer produced logits for ten classes, and the loss function was cross‑entropy combined with softmax. My professor asked me to derive the gradient analytically so I could implement it from scratch in C++ instead of relying on an autodiff library.

**Task:**  
I needed to compute ∂L/∂zᵢ (the derivative of the loss w.r.t each logit) and explain why we typically fuse softmax and cross‑entropy into a single numerically stable routine.

**Action:**  
I started by writing the softmax output:  
\(p_i = \frac{e^{z_i}}{\sum_k e^{z_k}}\).  
The cross‑entropy loss for a one‑hot target y is \(L = -\sum_i y_i \log p_i\).  
Differentiating L w.r.t z_j gives:  
\(\frac{\partial L}{\partial z_j} = p_j - y_j\).  
I derived this by applying the chain rule, noting that ∂p_i/∂z_j = p_i(δ_{ij} – p_j). The resulting expression is remarkably simple.  
For numerical stability I realized that computing e^{z_i} directly can overflow when z_i is large. Instead, we subtract the maximum logit before exponentiation:  
\(p_i = \frac{e^{z_i - m}}{\sum_k e^{z_k - m}}\), where \(m=\max_j z_j\). This shift does not change the softmax output but keeps all exponentials bounded.

**Result:**  
I implemented a fused function that first applies the max‑shift, computes the scaled softmax, and returns the gradient as \(p_i - y_i\) in one pass. The training loss converged 30 % faster than my naïve implementation, and I avoided NaNs on GPU. This exercise taught me that algebraic simplification can yield both cleaner code and greater numerical robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
