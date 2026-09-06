---
qid: ing_49e113bcce__fp__local
question: What's the difference between batch, mini-batch, and stochastic gradient
  descent? What does batch size actually change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 545
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:42:16-05:00'
sources: []
---

In supervised learning we minimize a loss  
\(L(\theta)=\frac1N\sum_{i=1}^{N}\ell(x_i,y_i;\theta)\) over parameters \(\theta\).  
The *gradient* of \(L\) is the average of per‑example gradients:
\[
\nabla_\theta L = \frac1N\sum_{i=1}^N g_i,\qquad g_i=\nabla_\theta \ell(x_i,y_i;\theta).
\]

**Batch (full‑batch) GD** uses all \(N\) samples to compute the exact gradient.  
*Why it works*: the update direction is the true steepest descent, guaranteeing that each step decreases \(L\) (ignoring stochastic noise).  
*Cost*: computing \(\nabla_\theta L\) every iteration costs \(\mathcal{O}(N)\); for huge datasets this is prohibitive.

**Stochastic GD (SGD)** uses a single sample (\(b=1\)).  
*Why it works*: the expectation of the noisy update equals the true gradient, so on average we still descend.  
*Benefit*: each iteration is cheap, \(\mathcal{O}(1)\), and the noise injects exploration that can escape shallow local minima.

**Mini‑batch GD** chooses a block of size \(b\) (\(1<b<N\)).  
*Why it works*: it trades variance for speed. The variance of the average over \(b\) samples shrinks as \(\sigma^2/b\), giving a more stable descent direction while keeping per‑iteration cost \(\mathcal{O}(b)\).  

**What batch size changes**:  
1. **Gradient variance** – larger \(b\) → lower variance, smoother trajectories.  
2. **Memory & parallelism** – GPU kernels process batches efficiently; too small a batch underutilizes hardware.  
3. **Learning‑rate schedule** – with higher variance you often need smaller learning rates or adaptive schemes (Adam, RMSProp).  

*Non‑obvious insight*: the optimal batch size is not merely “as large as possible”. In high‑dimensional problems, a modest \(b\) (e.g., 32–256) often yields faster convergence because it balances the *bias–variance tradeoff* of gradient estimates with computational throughput. Excessively large batches can cause the optimizer to follow a very flat direction and get stuck in plateaus—exactly what small stochastic jumps help escape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
