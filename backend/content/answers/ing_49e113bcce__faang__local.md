---
qid: ing_49e113bcce__faang__local
question: What's the difference between batch, mini-batch, and stochastic gradient
  descent? What does batch size actually change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 552
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:36:28-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *batch*, *mini‑batch*, and *stochastic* gradient descent differ, and what effect the batch size has on training. I’ll assume we’re talking about supervised learning with a differentiable loss.

**Approach**  
1. Define each variant of SGD.  
2. Explain the computational and statistical impact of the batch size.  
3. Highlight trade‑offs (convergence speed, memory, noise).  

**Depth**  
| Variant | Update rule | Batch size | Effect |
|---------|-------------|------------|--------|
| **Batch GD** | \(\theta_{t+1} = \theta_t - \eta \frac{1}{N}\sum_{i=1}^{N}\nabla_\theta L_i\) | \(N\) (whole dataset) | Exact gradient → smooth, deterministic updates; high memory and long per‑step time. |
| **Mini‑batch GD** | Same as above but with a subset of size \(B \ll N\). | \(B\) (e.g., 32–512) | Reduces variance compared to stochastic, allows vectorization on GPUs, good convergence trade‑off. |
| **Stochastic GD** | Same rule with \(B=1\). | 1 | Very noisy gradient → cheap updates, can escape shallow minima but requires many iterations and careful learning‑rate scheduling. |

*Batch size changes*:  
- **Gradient noise**: smaller B → higher variance, larger B → lower variance.  
- **Memory & throughput**: larger B better utilizes GPU parallelism; too large may exceed memory or degrade generalization.  
- **Convergence dynamics**: small B needs more epochs to reach the same accuracy; large B can use a higher learning rate but risks getting stuck in sharp minima.

**Edge cases**  
- If \(B > N\), we need to wrap around or pad with duplicates.  
- For imbalanced data, mini‑batch sampling strategy matters (stratified vs random).  
- Extremely small B on deep nets can cause unstable training if not regularized.

**Optimize & communicate**  
I’d suggest starting with a moderate mini‑batch (64–256) and tuning \(B\) alongside the learning rate. If GPU memory allows, increase \(B\) to leverage faster convergence per epoch; otherwise keep it small for lower latency updates. This balanced explanation shows clear problem understanding, structured reasoning, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
