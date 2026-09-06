---
qid: ing_79a9149c17__fp__local
question: 'Explain: Title: When More Thinking Hurts: Overthinking in LLM Test-Time
  Compute Scaling'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 411
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:23:03-05:00'
sources: []
---

**When More Thinking Hurts: Over‑Thinking in LLM Test‑Time Compute Scaling**

At test time an LLM is a *function approximator* \(f_\theta(x)\) that maps input \(x\) to output tokens by sampling from a conditional distribution \(p_\theta(y|x)\).  
The *compute budget* \(C\) limits the number of forward passes (or “thinking steps”) we can afford. In practice, each additional step refines the prediction: it re‑evaluates the model with more context or rescoring, which should reduce loss \(\mathcal{L}\).

However, if we treat each step as an independent optimization over the same objective, the marginal benefit \(d\mathcal{L}/dC\) eventually turns negative. Why?  
1. **Curse of Over‑Reweighting**: Early steps correct high‑probability errors; later ones start to re‑weight already confident predictions, amplifying sampling noise.  
2. **Bias–Variance Trade‑off in Sampling**: More passes increase variance because each pass draws from the same distribution conditioned on slightly different histories. The estimator of \(p(y|x)\) becomes less stable.  
3. **Information Bottleneck**: The model’s hidden state already encodes all available signal; additional forward passes cannot bring new information unless the architecture changes (e.g., memory). They merely recombine what is already present.

A non‑obvious insight: *the optimal compute budget aligns with the point where the gradient of expected log‑likelihood with respect to compute becomes zero*. This is equivalent to finding the fixed point of a stochastic iterative map; beyond it, extra passes perform a noisy descent that oscillates around the optimum rather than converging.

Thus, in practice, test‑time scaling must balance **information gain** against **sampling variance**, and blindly increasing compute can degrade performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
