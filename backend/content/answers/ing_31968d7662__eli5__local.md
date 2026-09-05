---
qid: ing_31968d7662__eli5__local
question: 'Explain: Tensor-first compute and explicit data movement'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 190
total_tokens: 347
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:54:20-05:00'
sources: []
---

Think of a machine learning model as a big kitchen that makes many dishes (predictions).  
A **tensor‑first compute** approach is like having a giant, flexible cutting board where all ingredients (data) are already on the board. The chefs (computational kernels) just slice, dice, and combine them right there—no need to bring each ingredient from the pantry or fridge. This keeps the work localized and fast.

**Explicit data movement** is the opposite: imagine a chef who must walk back and forth between the kitchen and the storage room for every spice and vegetable. Each trip slows down cooking because the chef spends time moving, not chopping.

So, tensor‑first compute keeps everything in one place (the board), while explicit data movement requires shuttling data across memory boundaries, which can be a bottleneck in big models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
