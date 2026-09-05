---
qid: ing_c7d8386b34__eli5__local
question: 'Explain: Force merge during off-peak hours — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 215
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:52:19-05:00'
sources: []
---

**Force merge during off‑peak hours – size your shards**

Imagine a library that splits its books into many small stacks (shards). Each stack holds a few thousand books, but the shelves are crowded and many of them contain empty spots because books were moved or removed over time. A *force merge* is like an overnight librarian’s clean‑up: she goes through every stack, pulls out all the empty spots, and re‑arranges the books so each shelf is full again.  

Doing this when people aren’t reading (off‑peak hours) keeps the library quiet. By sizing the shards properly—so that each stack isn’t too small or too big—you let the librarian finish faster and reduce the chance of shelves becoming unevenly packed, which would slow down searches later. In Elasticsearch, a force merge compacts stored data segments into fewer, larger ones, improving read speed and saving disk space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
