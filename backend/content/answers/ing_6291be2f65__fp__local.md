---
qid: ing_6291be2f65__fp__local
question: 'Explain: The Vanishing/Exploding Gradient Problem in Deep Neural Networks
  | Towards Data Science'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 479
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:34:52-05:00'
sources: []
---

**Why gradients vanish or explode?**

A deep network computes a composition  
\(y=f_L\!\bigl(f_{L-1}(\dots f_1(x)\bigr)\), where each \(f_\ell(z)=\sigma(W_\ell z+b_\ell)\).  
During back‑propagation we repeatedly apply the chain rule:

\[
\frac{\partial y}{\partial W_\ell}
   = \Bigl(\prod_{k=\ell+1}^L J_k\Bigr)
     \frac{\partial f_\ell}{\partial W_\ell},
\]

where \(J_k=\frac{\partial f_k}{\partial z}\) is the Jacobian of layer \(k\).  
If every \(J_k\) has singular values < 1 (e.g., sigmoid, tanh with small slopes), their product shrinks exponentially: \(\|J_{\ell+1}\cdots J_L\|\leq\rho^{L-\ell}\) for some \(\rho<1\). The gradient *vanishes*.  
Conversely, if any \(J_k\) has a singular value > 1 (e.g., ReLU with large weights or poorly initialized matrices), the product grows as \(\rho^{L-\ell}\) with \(\rho>1\), causing *explosion*.

Thus the problem is fundamentally **multiplicative instability**: gradients are norms of products of Jacobians. The deeper the network, the more severe the amplification or attenuation unless the spectrum of each \(J_k\) stays tightly clustered around 1.  

**Non‑obvious insight:**  
The issue is not merely “weights too big” or “activations saturated”; it’s that *the geometry* of the transformation (its conditioning) matters. Even perfectly normalised weights can cause vanishing gradients if the Jacobians are poorly conditioned—e.g., a rotation followed by an extreme scaling. Techniques like batch‑norm, residual connections, or orthogonal initialization explicitly target this conditioning, ensuring that the product of Jacobians remains close to an isometry and gradients stay informative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
