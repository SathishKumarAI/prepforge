---
qid: ing_02d5206c1f__eli5__local
question: 'Explain: Two Common Types of Fine-Tuning — Fine-Tuning Explained for Noobs
  (How Pretrained Models Learn New Skills)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 242
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:39:33-05:00'
sources: []
---

Imagine a chef who has already mastered a huge menu of dishes (the pretrained model). Fine‑tuning is like teaching that chef a new specialty—say, perfecting sushi or baking croissants.  
There are two common ways to do this:

1. **Full‑model fine‑tuning** – the chef keeps all his kitchen tools and learns the new recipe by tweaking every spice jar and knife setting. In practice, you let the model update all its internal weights while training on a small set of sushi images or croissant recipes.

2. **Adapter‑only fine‑tuning** – the chef keeps the same kitchen but adds a few new gadgets (tiny “adapter” modules) that sit next to the existing tools. Only these new gadgets are trained; everything else stays as it was. This saves memory and lets you swap specialties quickly.

Both methods let a pretrained AI acquire a new skill, just like a seasoned chef can learn a fresh cuisine while still using his trusted kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
