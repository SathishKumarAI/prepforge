---
qid: ing_122de0620e__eli5__local
question: Should you use a data stream? — Data streams | Elastic Docs
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 231
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:26-05:00'
sources: []
---

Think of your machine‑learning model as a chef who needs fresh ingredients every day to keep the dish tasty. A **data stream** is like an endless conveyor belt that feeds the kitchen with new veggies, spices, and proteins right as they arrive—no waiting for a full batch.

When you set up a data stream in Elasticsearch, it automatically creates a “hot” index (for the newest data) and moves older data to “warm” or “cold” indices. That’s like having a fast‑moving section of the belt for today’s produce and a slower one for yesterday’s leftovers that still taste good but don’t need immediate attention.

Use a data stream when your model learns from continuously arriving logs, sensor readings, or clickstreams—anything that grows over time and where you want to keep the newest samples immediately available while archiving older ones efficiently. If your data is static or only updated in large batches, a regular index works fine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
