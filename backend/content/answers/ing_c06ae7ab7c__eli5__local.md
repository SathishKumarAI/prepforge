---
qid: ing_c06ae7ab7c__eli5__local
question: 'Explain: AWS Marketplace — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 271
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:41-05:00'
sources: []
---

Imagine you’re buying a pizza from two different restaurants that both offer the same recipe, but they serve it in different ways.

**Hosted (traditional)** – The restaurant keeps a kitchen open 24/7. You can order whenever you want, and they’ll bake your pizza on demand. You pay for the whole kitchen’s capacity even if you only eat one slice. In Elastic Cloud terms, you reserve virtual machines or clusters that run all the time; you’re billed for their size (CPU, memory) regardless of how busy the workload is.

**Serverless (on‑demand)** – The restaurant has a “just‑in‑time” kitchen. It only lights up the ovens when someone orders, then shuts them down immediately after. You pay only for the actual minutes your pizza cooks and the ingredients used. Elastic Cloud’s serverless offering automatically starts containers when traffic arrives and stops them when idle, charging you by the second rather than a fixed capacity.

So, hosted is like paying for an always‑open kitchen (predictable but sometimes overkill), while serverless is like paying only for the exact cooking time you need (flexible, potentially cheaper if usage varies).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
