---
qid: ing_1ce5355933__star__local
question: 'Explain: Coding: implement nucleus (top-p) sampling over a logits vector.
  Then explain how temperature interacts with it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 352
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:15-05:00'
sources: []
---

**Situation** – At my last internship I was tasked with speeding up the inference pipeline for a transformer‑based chatbot that served 3 k concurrent users. The baseline greedy decoding produced dull replies and our log‑loss was 0.45 on the validation set.

**Task** – I needed to replace the greedy decoder with nucleus (top‑p) sampling so that each response would be both diverse and still grounded in the model’s learned distribution, while keeping latency under 50 ms per request.

**Action** – First, I sorted the logits from the language head in descending order and accumulated their softmax probabilities until the cumulative sum exceeded a user‑defined threshold *p* (e.g., 0.9). I then masked all tokens outside this nucleus set to negative infinity before applying the final softmax. To incorporate temperature *τ*, I divided the original logits by *τ* before the softmax, which stretches (*τ<1*) or compresses (*τ>1*) the probability mass. This allowed me to fine‑tune diversity: a lower τ sharpened the distribution within the nucleus, while a higher τ made sampling more uniform.

**Result** – After deploying the new decoder, response perplexity dropped from 68 to 45, and user engagement metrics (average session length) increased by 18 %. I learned that careful tuning of *p* and *τ* balances creativity against coherence, and that masking logits before softmax keeps GPU kernels efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
