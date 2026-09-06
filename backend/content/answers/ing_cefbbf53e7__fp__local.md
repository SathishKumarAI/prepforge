---
qid: ing_cefbbf53e7__fp__local
question: 'Explain: TL;DR — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 381
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:20:27-05:00'
sources: []
---

**Perplexity – a sanity check for language models**

At its core, a language model estimates the probability \(p(w_i|h)\) of each word \(w_i\) given its context \(h\). When evaluating a test corpus \(\{w_1,\dots,w_N\}\), we aggregate these probabilities into the *cross‑entropy*

\[
H = -\frac{1}{N}\sum_{i=1}^{N}\log_2 p(w_i|h).
\]

Cross‑entropy tells us, on average, how many bits are needed to encode each word under the model. **Perplexity** is simply \(2^H\): it’s the effective number of equiprobable choices a model faces when predicting the next token.

Why this matters: If a model were perfect (assigning probability 1 to every true word), \(H=0\) and perplexity would be 1—no uncertainty. Conversely, if the model is as clueless as random guessing over an alphabet of size \(V\), \(H=\log_2 V\) and perplexity equals \(V\). Thus perplexity scales directly with *information content*; lower perplexity means the model’s predictions are closer to reality.

**Non‑obvious insight:** Perplexity is *not* a direct performance metric for downstream tasks. It measures the intrinsic fit of probability estimates, but real applications (e.g., translation) care about how errors propagate in cascaded systems. A model can have low perplexity yet still generate nonsensical outputs if its distribution over rare words is poorly calibrated—highlighting that perplexity captures *average* uncertainty, not worst‑case behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
