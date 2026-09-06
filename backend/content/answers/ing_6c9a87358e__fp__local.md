---
qid: ing_6c9a87358e__fp__local
question: 'Explain: Few-shot — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 416
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:55:13-05:00'
sources: []
---

**Few‑shot Prompt Engineering (LLM)**  

The core issue is *data scarcity*: supervised learning requires millions of labeled pairs, but many domains have only a handful of examples. A large language model \(P_\theta\) already encodes a massive prior over text from its pre‑training corpus. We can exploit this by conditioning the model on a short *prompt* that includes **K** demonstration pairs \(\{(x_i,y_i)\}_{i=1}^K\). The objective is to approximate

\[
P_\theta(y|x,\mathcal{D}_K)=\frac{P_\theta(x, y, \mathcal{D}_K)}{P_\theta(x,\mathcal{D}_K)}
\]

where \(\mathcal{D}_K\) is the prompt. Because \(P_\theta\) has been trained to predict tokens sequentially, it can treat the demonstration pairs as part of the context and *generalize* by interpolating between them. The few‑shot signal effectively updates the posterior over latent task parameters \(\phi\):

\[
P(\phi|\mathcal{D}_K)\propto P_\theta(\mathcal{D}_K|\phi)P(\phi)
\]

Thus, prompt engineering is a *zero‑cost* Bayesian update: we never fine‑tune weights; we only change the conditioning distribution.  

**Non‑obvious insight:** The ordering of examples matters more than their number because language models learn *contextual patterns* rather than averaging over instances. Placing a counterexample last can bias the model toward a different hypothesis, exploiting its internal attention biases. This subtle manipulation is often overlooked but can double performance on tasks like sentiment classification or arithmetic reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
