---
qid: ing_e23691a716__eli5__local
question: 'Explain: Distribution shift — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 214
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:34:02-05:00'
sources: []
---

Imagine you’re learning how to catch fish in a river that’s always the same. You practice on a calm, clear stretch where trout swim just right; your fishing pole and bait work perfectly. One day, the river turns into a fast‑moving torrent with different fish and rocks. The way you cast and what you look for no longer matches—this is *distribution shift*.

In machine learning, we train models on data that comes from one “river” (the training distribution). When the model meets new data from another river—different weather, a new camera angle, or a changed user base—the patterns it learned don’t line up. The model’s predictions can drift, just like your fishing technique fails in the torrent.

*Distribution shift*: when the statistical properties of test data differ from those seen during training, causing a model’s performance to drop. Understanding and detecting this is crucial for building reliable AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
