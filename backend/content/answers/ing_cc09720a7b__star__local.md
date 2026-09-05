---
qid: ing_cc09720a7b__star__local
question: How do images become tokens, and why does image resolution drive inference
  cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 343
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:02-05:00'
sources: []
---

**Situation** – At my previous company we were launching a visual search feature for an e‑commerce platform. The prototype used a Vision Transformer that accepted raw images but the inference time was way above our SLA of 150 ms per request.

**Task** – I had to reduce the computational load without sacrificing top‑line accuracy, so I focused on how image resolution and tokenization drive cost.

**Action** – First, I examined the transformer’s input pipeline: each RGB pixel is mapped into a patch of size *p×p*, flattened, projected via a learnable linear layer, then treated as a token. The number of tokens equals \((H/p) × (W/p)\). I reduced *p* from 16 px to 32 px and added a lightweight down‑sampling head that performed bilinear resizing followed by a depth‑wise separable convolution. This cut the token count by ~75%, lowering matrix multiplications in the self‑attention layers dramatically. I also implemented mixed precision (FP16) on GPU, which further reduced memory bandwidth.

**Result** – The inference latency dropped from 420 ms to 110 ms, meeting our SLA while maintaining a 3.2% drop in top‑5 accuracy—well within acceptable limits. I learned that tokenization is essentially a fixed‑size lookup; the resolution directly scales the quadratic cost of self‑attention, so smart patch sizing and efficient down‑sampling are key to real‑world deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
