---
qid: ing_ebe82393b9__eli5__local
question: Adam vs AdamW - what exactly is "decoupled weight decay," and why did AdamW
  become the transformer default?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 237
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:48:53-05:00'
sources: []
---

Imagine you’re tightening a bolt while also trying to keep it from loosening over time. In ordinary Adam, every time you adjust the bolt (update the weights), you accidentally mix in a tiny “loosen‑you‑later” factor because the decay is bundled with the update step. That’s like putting a bit of sand on the bolt and then tightening it—you’re still fighting against the sand each time.

AdamW separates those two actions: first, it tightens the bolt exactly as Adam does (using adaptive learning rates), then **afterward** it adds a clean “loosen‑you‑later” penalty—weight decay—as an independent step. This is *decoupled weight decay*. It keeps the regularization honest and prevents the decay from being distorted by the momentum term.

Because transformers train with huge models where tiny mismatches in regularization can hurt performance, AdamW’s clean decoupling gives more stable, predictable results. That reliability made it the go‑to optimizer for most transformer work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
