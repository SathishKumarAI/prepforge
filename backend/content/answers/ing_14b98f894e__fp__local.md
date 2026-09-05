---
qid: ing_14b98f894e__fp__local
question: 'Explain: Backprop and gradient pathologies — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 512
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:49:22-05:00'
sources: []
---

**Why back‑prop works**

At its core a neural net is an *unrolled computational graph*: each node computes a deterministic function of its parents and emits a scalar (or vector) to downstream nodes. The loss \(L\) depends only on the final outputs. To train we need \(\partial L/\partial w_i\) for every weight \(w_i\). By the chain rule, the derivative with respect to an intermediate activation \(a_j\) is

\[
\frac{\partial L}{\partial a_j}
   =\sum_{k\in \text{out}(j)} 
      \frac{\partial L}{\partial a_k}\;
      \frac{\partial a_k}{\partial a_j},
\]

so the gradient propagates *backwards* from the loss through each layer. This is precisely what back‑prop does: it stores the forward activations, then iteratively multiplies by local Jacobians to accumulate gradients.

**Gradient pathologies**

1. **Vanishing/exploding gradients** – when many layers multiply small (or large) terms, the product shrinks (or blows up). For sigmoid/tanh this is inevitable because \(|f'|\le 1\); ReLU mitigates but still suffers for deep nets. The deeper the network, the more sensitive the gradient to each weight’s *condition number*.  
2. **Plateaus and flat regions** – when a neuron saturates (e.g., sigmoid output ≈0 or 1), its derivative becomes nearly zero, so upstream gradients are suppressed. This reflects an information bottleneck: the network cannot learn new directions because the local mapping is almost constant.  
3. **Sharp minima vs. flat minima** – gradient descent prefers *flat* valleys where many parameter settings yield similar loss; sharp minima have large curvature and lead to overfitting.

**Non‑obvious insight**

Most people focus on activation choice, but *the geometry of the loss surface itself* dictates pathology. Even with perfect activations, a poorly conditioned Jacobian (e.g., due to random initialization or weight sharing) can make all gradients tiny or huge regardless of nonlinearity. Thus, *weight initialization and architectural symmetry* are as crucial as activation functions: they set the initial condition number that determines whether back‑prop will propagate useful signals or collapse into a plateau.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
