---
qid: ing_5c806cc1f9__fp__local
question: 'Explain: Self-Consistency Sampling — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 502
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:20:53-05:00'
sources: []
---

**Self‑consistency sampling (SCS)** is a post‑processing trick that turns *any* language model’s noisy probability distribution into a more reliable answer by exploiting the fact that correct answers are **stable under re‑sampling**.

---

### The underlying problem  
A large language model (LLM) outputs a token sequence \(y\) with probability
\(p(y|x)\).  Because of temperature, top‑k, or nucleus sampling, each pass can produce a different, sometimes contradictory answer.  The *ground truth* is a single latent variable \(z^\*\); the model’s distribution is an approximation to \(p(z|x)\), which is typically multimodal and heavily skewed by training data biases.

### Why repetition helps  
If we draw multiple samples \(\{y^{(i)}\}_{i=1}^N\) from the same model, the *mode* of this empirical distribution converges to the most probable \(z^\*\) as \(N\to\infty\).  This is a direct application of the **law of large numbers**: the expected value of a random variable equals its mean over many draws.  In practice, we don't need infinite samples—just enough for the mode to stabilize.

### Self‑consistency procedure  
1. Generate \(N\) independent outputs using the same prompt and decoding settings.  
2. Aggregate them (e.g., majority vote or nearest‑neighbor clustering).  
3. Return the most frequent answer as the final prediction.

This is *self‑consistent* because it relies solely on the model’s own distribution; no external oracle is needed.

### Non‑obvious insight  
SCS implicitly **acts like a soft ensemble** without training multiple models.  Each sample explores a different region of the output space, and their consensus mitigates idiosyncratic hallucinations.  Moreover, SCS can be seen as an approximate Bayesian model averaging over the *posterior* induced by the decoding algorithm itself—a perspective that justifies its effectiveness even when the base model is far from optimal.

---

**Bottom line:** Self‑consistency sampling converts a single stochastic decoder into a *deterministic* predictor by harnessing statistical convergence, turning randomness into robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
