---
qid: ing_16107c0d35__fp__local
question: What is Multi-Token Prediction (MTP), why do models like GLM-4.5 add an
  MTP layer, and how does it help at inference time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 546
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:52:26-05:00'
sources: []
---

### From the Ground Up

When a language model reads a prompt it must decide *which token to output next*.  
If we treat each token as an independent choice, the probability of a whole
sequence is just the product of single‑token probabilities.  This is the
standard autoregressive (AR) assumption.

But AR ignores **mutual information** between tokens that are close together.
In practice the correct continuation often depends on *a few future words*,
not only the immediate next one.  Modeling these dependencies directly would
require a huge joint distribution over all possible continuations—impossible to
learn or sample from efficiently.

#### Multi‑Token Prediction (MTP)

MTP replaces the single‑token softmax with a small **predictive head** that
outputs a probability distribution over *n* tokens at once.  The head is trained
by masking out a contiguous block of length *n* and predicting it given the
surrounding context.  Mathematically, we learn  
\[
P(\mathbf{y}_{t:t+n-1}\mid \mathbf{x})\approx
\prod_{k=0}^{n-1} P(y_{t+k}\mid \mathbf{x}, y_{t:\!t+k-1}),
\]
but the head is **parameter‑efficient** because it reuses the same weights for
each position.

#### Why GLM‑4.5 Adds an MTP Layer

GLM‑4.5 incorporates an MTP layer to capture *local coherence* without
sacrificing inference speed.  The layer sits on top of the transformer’s last
hidden state and is lightweight (few additional parameters), yet it learns
the joint statistics of short token spans, effectively learning a low‑rank
approximation of the true joint distribution.

#### Inference Benefit

During decoding, the MTP head can generate several tokens in one forward pass,
reducing latency by a factor of *n*.  Moreover, because it models local
dependencies, the beam search becomes more stable and often requires fewer
hypotheses to reach high‑quality completions.  The net effect is faster, more
coherent text generation with minimal extra cost.

> **Non‑obvious insight:**  
> MTP doesn’t just speed up decoding; it *implicitly regularizes* the model’s
> probability estimates for short spans, mitigating the over‑confidence that
> plagues vanilla AR heads.  This leads to better calibrated probabilities and
> more diverse outputs even without explicit temperature tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
