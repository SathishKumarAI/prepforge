---
qid: ing_c3fa51e390__fp__local
question: Why ResNet? — The Annotated ResNet-50 | Towards Data Science
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 452
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:53-05:00'
sources: []
---

**Why ResNet? A first‑principles view**

Deep nets aim to minimize a loss  
\(L(\theta)=\sum_{i}\ell(f_{\theta}(x_i),y_i)\)  
by gradient descent on the parameters \(\theta\).  
When depth grows, the chain rule multiplies many Jacobians.  
If each layer’s derivative is \(J_k\approx cI\) with \(c<1\), the product
\(J_N\cdots J_2\) shrinks exponentially: *vanishing gradients*.  
Conversely, if some layers have \(c>1\), the product explodes: *exploding gradients*.

A residual block replaces a mapping \(H(x)\) with
\(x+F(x;\theta)\).  Its Jacobian is  
\(J = I + J_F\).  
Because the identity part contributes exactly one to every singular value,
the spectrum of \(J\) is centered at 1, so the product over many blocks stays
well‑conditioned regardless of depth.  
Thus gradients neither vanish nor explode, enabling training of dozens or
hundreds of layers.

From an optimization standpoint, the block seeks a *perturbation* \(F(x)\)
that nudges the identity mapping toward the target function.
This is equivalent to solving for the residual between successive approximations,
an idea reminiscent of Newton‑Raphson iterations in continuous optimisation.

**Non‑obvious insight**  
The skip connection implicitly enforces a form of *layer‑wise regularisation*:
each block must learn only the “difference” from its input, which shrinks the
effective hypothesis space.  Consequently, deeper ResNets generalise better than
plain nets with the same number of parameters because they are constrained to
refine rather than reinvent representations at each stage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
