---
qid: ing_a3a253ae32__eli5__local
question: 'Explain: fill rate of that bucket the token — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 247
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:27-05:00'
sources: []
---

Think of a **bucket** as a giant pantry that stores recipes (data). Each recipe is a *token*—a unique label that tells the pantry where to put it and how much space it needs. When you ask for a recipe, the pantry looks at its token list and pulls out exactly what you want.

The **fill rate of that bucket** means how full the pantry’s shelves are compared to their total capacity. If the pantry is 80 % filled, 20 % of the shelves are still empty. In DynamoDB, a “bucket” is actually an internal storage unit called a *partition*. Each partition holds many items (tokens). The fill rate tells us how much data each partition stores.

Why does it matter? If a bucket gets too full, the pantry has to split it into two smaller buckets so that no single one becomes a bottleneck. That’s why DynamoDB monitors the fill rate: to decide when to *split* or *merge* partitions so queries stay fast and storage stays balanced. In short, the fill rate is just a simple way to keep the pantry from getting overcrowded or under‑used.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
