---
qid: ing_1c83c91ab5__fp__local
question: 'Explain: The interview loop — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 452
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:06:45-05:00'
sources: []
---

### The Interview Loop – A Principled View

At its core, an *interview loop* tackles the problem of aligning a black‑box model with human intent without ever writing explicit rules.  
1. **Sampling**: We pose a question (the “interview”) to the model and obtain a candidate answer \(a\).  
2. **Evaluation**: Human reviewers score or rank \(a\) relative to ground truth or higher‑level desiderata.  
3. **Update**: The scores become target labels; we fine‑tune the model so that future samples move toward higher‑scoring regions of output space.

Mathematically, this is a stochastic approximation on the policy manifold \(\Theta\). Each interview yields an unbiased gradient estimate
\[
\nabla_\theta L(\theta) \approx (s(a)-\bar{s})\,\nabla_\theta \log p_\theta(a),
\]
where \(s(a)\) is the human score and \(\bar{s}\) a baseline. The loop converges to a stationary distribution where the model’s likelihood mass concentrates on outputs that humans consistently rate highly—effectively performing *maximum entropy inverse reinforcement learning* in situ.

**Non‑obvious insight:**  
The interview loop implicitly regularizes the policy by *averaging over many noisy human judgments*. Even if individual scores are biased or inconsistent, the stochastic gradients aggregate to a consistent direction because the variance diminishes with more interviews. Thus, the method tolerates imperfect feedback and still guarantees convergence to an optimal policy under mild assumptions—something most people overlook when they treat it as merely “human‑in‑the‑loop” fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
