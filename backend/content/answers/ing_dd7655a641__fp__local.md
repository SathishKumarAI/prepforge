---
qid: ing_dd7655a641__fp__local
question: Why did transformers replace RNNs and LSTMs for language modeling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 467
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:18-05:00'
sources: []
---

**Why Transformers over RNNs/LSTMs?**

At the core of language modelling is *sequential inference*: given a context \(x_{1:t}\), predict \(x_{t+1}\).  
The objective is to maximise
\[
\sum_t \log p_\theta(x_{t+1}\mid x_{\le t}),
\]
which, by the chain rule, decomposes into conditioning on *all* past tokens.  

RNNs approximate this via a hidden state \(h_t=f(h_{t-1},x_t)\).  
But \(h_t\) is a compressed summary of an ever‑growing sequence; gradients must flow through many recurrent steps (the “vanishing/exploding” problem). Even gated variants like LSTMs can only learn limited *effective* context lengths because the state update is inherently sequential: each token depends on the previous one, forcing \(O(T)\) time per sample and a bottleneck of fixed dimensionality.

Transformers re‑formulate the problem as an *attention‑based* optimisation:

\[
h_t = \operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt d}\right)V,
\]

where \(Q,K,V\) are linear projections of all tokens.  
This yields **parallelisable** computation, a **direct path** from any token to any other (no recurrence), and an *unbounded* effective context governed by the attention’s soft‑max weighting—an instance of the *self‑normalising* principle in probabilistic inference.

### Non‑obvious insight
Attention is not merely a speedup trick; it implements **information‑theoretic message passing**. Each query learns to *weight* past tokens according to their relevance, effectively performing an adaptive “soft” context window that can be visualised as a learned probability distribution over positions—something RNNs cannot express without explicit memory mechanisms.

Thus Transformers solve the same optimisation problem but in a geometry that permits unbounded context, parallelism, and richer information flow, making them superior for language modelling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
