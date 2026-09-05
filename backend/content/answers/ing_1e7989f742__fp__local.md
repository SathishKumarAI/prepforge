---
qid: ing_1e7989f742__fp__local
question: 'Explain: Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 404
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:06-05:00'
sources: []
---

**Speculative Decoding – a principled look**

At its core a language model (LM) is an **optimisation problem**: given a prefix \(x_{1:k}\), we want the next token \(x_{k+1}\) that maximises the conditional likelihood \(\Pr(x_{k+1}\mid x_{1:k})\).  
The naive, sequential algorithm evaluates the LM once per step; each evaluation is expensive because it must propagate gradients through a deep transformer.

Speculative decoding observes that *the model’s output distribution is highly correlated across adjacent prefixes*. If we generate a handful of tokens **in parallel** using an inexpensive *student* network (e.g. a smaller or quantised LM), we can obtain a speculative sequence \(\tilde{x}_{k+1},\dots,\tilde{x}_{k+m}\).  
The *teacher* LM then validates only the first token that differs from the student’s prediction, and if it accepts it, we trust all subsequent speculative tokens. If it rejects, we fall back to a correct prefix and resume speculation.

Mathematically, this is a form of **importance sampling** on the token space: we bias our search toward high‑probability regions suggested by the student, then correct for any bias with a single teacher pass. The expected number of teacher evaluations per accepted token drops from \(O(m)\) to roughly 1, yielding a speedup proportional to the speculation length.

*Non‑obvious insight*: the method is not just a trick for faster inference; it can be seen as **adaptive variance reduction** in a stochastic search over discrete sequences. By letting the student guide the exploration and only correcting when necessary, we maintain the optimality guarantees of exact decoding while dramatically cutting compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
