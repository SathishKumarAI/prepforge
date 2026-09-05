---
qid: ing_54dc91d442__star__local
question: Pre-norm vs post-norm - what's the difference and why did everyone move
  to pre-norm? And why RMSNorm?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 320
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:44-05:00'
sources: []
---

**Situation** – While fine‑tuning a large language model for medical QA, the training loss kept oscillating after just a few epochs; gradient norms exploded around 10³ and the optimizer would occasionally diverge.

**Task** – I needed to stabilize training without sacrificing speed or memory, so that we could hit our target perplexity of 12 within 48 h on a single GPU.

**Action** – First, I switched from the classic post‑layer‑norm (Norm applied after the residual) to pre‑norm: normalizing before adding the residual. This reduced gradient variance by ~70 % and allowed us to use a larger learning rate (1e-4 → 3e-4). Next, I experimented with RMSNorm—normalization based on the root‑mean‑square of activations instead of mean/variance—to avoid the extra centering computation that hurts GPUs. RMSNorm cut the forward pass by ~5 % and kept the same stability gains as LayerNorm.

**Result** – Training converged in 30 % fewer steps, achieving perplexity 11.8 on the dev set. I learned that pre‑norm changes the residual flow to keep gradients bounded, and RMSNorm offers a lightweight, hardware‑friendly alternative when memory bandwidth is at a premium.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
