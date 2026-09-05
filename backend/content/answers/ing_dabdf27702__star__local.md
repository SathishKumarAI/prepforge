---
qid: ing_dabdf27702__star__local
question: 'Q: Why do modern LLMs use Pre-LN instead of Post-LN?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 358
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:34-05:00'
sources: []
---

**Situation** – While fine‑tuning a 10 B parameter GPT‑style model on a mixed‑domain corpus, I noticed the training loss plateaued after just two epochs and gradients exploded during back‑prop.

**Task** – I had to stabilize the optimizer so that the model could continue learning without clipping or vanishing activations, while keeping memory usage within GPU limits.

**Action** – I switched the transformer blocks from Post‑LayerNorm (Post‑LN) to Pre‑LayerNorm (Pre‑LN). With Pre‑LN each sublayer normalizes its input before the attention or MLP, so the residual connection adds a normalized signal that keeps activations bounded. I also scaled the residual by 1/√2 and added a small epsilon to the norm to avoid division errors on low‑variance layers. This change allowed me to use AdamW with β₂=0.95 without gradient clipping, and the learning rate schedule stayed simple (no warmup decay adjustments).

**Result** – Training loss dropped from 4.32 to 2.87 within five epochs; perplexity improved by ~12 % on a held‑out validation set. The model also trained 18 % faster per epoch due to fewer NaNs, and I learned that Pre‑LN’s normalization before residuals is key for deep transformer stability, especially when scaling beyond 8 B parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
