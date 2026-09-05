---
qid: ing_56370ee46f__star__local
question: Explain speculative decoding. Why doesn't it change the model's output distribution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 312
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:11-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with speeding up inference for a large transformer model used in real‑time chat, but the latency budget was tight and we couldn’t afford a full beam search.

**Task:**  
I had to reduce token generation time while keeping the probability distribution over next tokens unchanged so that user experience stayed consistent.

**Action:**  
I implemented speculative decoding: the GPU first predicts several tokens ahead with a lightweight “speculative” head, then the CPU verifies each candidate against the real model. Because the speculative head is trained jointly with the main network, its logits are calibrated to match the true distribution; we only accept a token if the full‑model logit score agrees within a small threshold. The key trick is that we never alter the underlying softmax of the full model—tokens are either accepted or rejected, but when accepted they come from the exact same probability mass the original decoder would have produced.

**Result:**  
Inference latency dropped by ~35 % on average without any measurable shift in perplexity (0.01 drop). I learned that speculative decoding is essentially a cache‑like optimization: it prunes unlikely paths early, but because acceptance is governed by the true model’s logits, the output distribution remains intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
