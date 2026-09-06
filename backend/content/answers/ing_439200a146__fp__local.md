---
qid: ing_439200a146__fp__local
question: 'Explain: Sources — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 478
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:29:34-05:00'
sources: []
---

**Perplexity from first principles**

A language model assigns a probability \(p(x_1,\dots ,x_T)\) to a sequence.  
The *information* needed to encode that sequence (in bits per token) is the
cross‑entropy

\[
H(p)= -\frac{1}{T}\sum_{t=1}^{T}\log_2 p(x_t \mid x_{<t}).
\]

If we exponentiate \(H\), we obtain a quantity with the same units as a *branching factor*:

\[
\exp(H(p)) = 2^{H(p)}.
\]

This number is called **perplexity**.  
It tells us, on average, how many equally likely options the model “thinks” exist at each step—i.e., how perplexed it is. If every token had a single deterministic next word, \(H=0\) and perplexity = 1. If every token were completely random over \(V\) words, \(H=\log_2 V\) and perplexity = \(V\).

**Why it works**

Perplexity is the geometric mean of the reciprocal probabilities:

\[
PPL = \left(\prod_{t=1}^{T} p(x_t \mid x_{<t})^{-1}\right)^{1/T}.
\]

Because the product aggregates multiplicatively, a single low probability can inflate perplexity dramatically—capturing model uncertainty more sensitively than average loss.

**Non‑obvious insight**

Perplexity is *not* just a performance metric; it reflects the **effective branching factor** of the learned language graph. A lower perplexity means the model has collapsed many plausible continuations into fewer high‑probability paths, implicitly learning a tighter latent structure. Thus, monitoring perplexity over training reveals how well the model compresses linguistic regularities—an information‑theoretic view that goes beyond surface accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
