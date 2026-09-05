---
qid: ing_8bc9e9b77d__star__local
question: 'Q: What is the "curriculum" in LLM pretraining?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 417
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:28-05:00'
sources: []
---

**Situation:** While leading the pre‑training team for our new medical LLM at MedAI Labs, we noticed that early epochs were wasting cycles on low‑value data: a mix of short FAQ snippets and noisy forum posts. The model’s perplexity plateaued after 10 M tokens, far below the target.

**Task:** I needed to design a curriculum that would let the network focus first on high‑quality, domain‑specific text, then gradually expose it to noisier, more diverse content—mirroring how humans learn.

**Action:** I mapped our corpus into five tiers based on document length, vocabulary richness, and metadata confidence. Using a custom sampling script in PyTorch, we started training with tier 1 (high‑confidence clinical notes) for the first 2 M tokens, then progressively interpolated tiers 2–5 over the next 8 M tokens. I added token‑level curriculum signals to the loss function so the model’s attention weights adapted to each tier’s difficulty. We also introduced a “warm‑up” phase where we froze lower layers for the first 1 M tokens, then unfreezed them gradually.

**Result:** The model’s perplexity dropped from 28 to 18 after only 10 M tokens—30% fewer training steps than our baseline. Downstream QA benchmarks improved by 5 F1 points, and we shaved 12 GPU‑hours off the total pre‑training cost. I learned that a principled curriculum can turn noisy data into an ally rather than a liability, and it’s essential to tie sampling strategy directly to the model’s learning dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
