---
qid: vq_d4bfa98acb__eli5__local
question: Explain when to use explode in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 186
total_tokens: 342
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:38-05:00'
sources: []
---

Imagine you have a photo album where each page holds a single picture of a family group. If you want to see every individual person separately—so that each name appears on its own line—you’d spread the photos out onto new pages, one per person. In Hive, an array or map column is like that packed photo: it keeps many values together in one cell. The **explode** function does exactly what spreading the album does—it “unpacks” every element of the array (or each key‑value pair of a map) into its own row. Use explode when you need to analyze, filter, or join on individual items that were originally stored as a collection. It turns one multi‑valued column into many single‑valued rows while keeping the rest of the data intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
