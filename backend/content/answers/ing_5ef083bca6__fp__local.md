---
qid: ing_5ef083bca6__fp__local
question: 'Explain: Title: Self-Consistency Improves Chain of Thought Reasoning in
  Language Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 528
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:26:30-05:00'
sources: []
---

**Self‑Consistency for Chain‑of‑Thought (CoT) reasoning**

The core problem a language model (LM) faces when asked a multi‑step question is *latent‑variable inference*: the answer \(y\) depends on an unobserved reasoning trace \(\mathbf{r}\).  
Formally, we want
\[
p(y|x)=\sum_{\mathbf r} p(y,\mathbf r|x)=\sum_{\mathbf r} p(y|\mathbf r,x)\,p(\mathbf r|x),
\]
but the LM can only produce a single deterministic \(\hat{\mathbf r}\).  
Self‑consistency tackles this by **sampling** many traces \(\{\mathbf r^{(k)}\}_{k=1}^K\) from \(p(\mathbf r|x)\), generating an answer for each trace, and then selecting the most frequent final answer. This is essentially a Monte Carlo estimate of the marginal \(p(y|x)\); by aggregating over many \(\mathbf r^{(k)}\) we approximate Bayesian model averaging without explicit probabilistic modeling.

Why does it help?  
1. **Variance reduction**: Each sampled trace contains noise from the LM’s stochasticity; averaging collapses idiosyncratic mistakes.  
2. **Error correction via consistency**: If a single trace mis‑steps, other traces that correctly traverse the same logical path will dominate the vote, pushing the final answer toward the true posterior mode.

A non‑obvious insight is that self‑consistency acts as an *implicit denoising* mechanism on the LM’s hidden representation space. Each sampled trace perturbs the internal activations; consistent answers indicate a basin of attraction in this latent space where the model’s reasoning aligns with the ground truth, effectively performing a form of EM (Expectation over traces, Maximization by voting). Thus, self‑consistency transforms deterministic decoding into an approximate probabilistic inference procedure, yielding more reliable CoT outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
