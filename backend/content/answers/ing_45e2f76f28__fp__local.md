---
qid: ing_45e2f76f28__fp__local
question: 'Explain: Self-Attention Process — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 447
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:34:02-05:00'
sources: []
---

**Self‑attention: the engine that lets every token talk to every other**

The core problem a language model solves is *contextual prediction*: given a word \(w_i\), we want to know how likely it is to follow or precede any other word in the sequence. A naïve approach would hand‑craft rules, but natural language exhibits long‑range dependencies—“the *cat* that *sat* on the *mat*” – which explode exponentially if we try to encode them manually.

Self‑attention turns this into an optimization problem: learn a weighted sum of all tokens such that each token’s representation is enriched by the most relevant parts of the sequence. Mathematically, for each token we compute three vectors—query \(q\), key \(k\), value \(v\)—via learned linear maps. The attention weight between positions \(i\) and \(j\) is

\[
a_{ij} = \frac{\exp(q_i^\top k_j / \sqrt{d_k})}{\sum_\ell \exp(q_i^\top k_\ell / \sqrt{d_k})},
\]

the soft‑max of a scaled dot product. The scaling factor \(\sqrt{d_k}\) keeps gradients stable; the dot product itself is a cosine‑like similarity that measures *semantic alignment*. The final representation for token \(i\) is

\[
h_i = \sum_j a_{ij} v_j,
\]

a weighted mixture of all values. Thus every token’s new state is a convex combination of all tokens, but the weights are learned to focus on contextually relevant words.

**Non‑obvious insight:** Self‑attention does not merely “look” at words; it *reweights* them in a continuous space that reflects *information flow*. The soft‑max ensures that irrelevant words receive exponentially smaller influence, effectively pruning noise while still allowing long‑range signals to propagate. This is why GPT‑2 can capture subtle dependencies across hundreds of tokens without explicit recurrence or convolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
