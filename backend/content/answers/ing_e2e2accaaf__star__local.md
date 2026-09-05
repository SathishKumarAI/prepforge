---
qid: ing_e2e2accaaf__star__local
question: 'Explain: Manage and update mappings — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 298
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:02:15-05:00'
sources: []
---

**Situation:** In a product‑recommendation project at my previous company, our search engine used Elasticsearch to surface relevant items. The mapping for the `product` index was static and caused query slowdowns after we added new attributes like `color`, `size`, and user‐generated tags.

**Task:** I had to update the index mappings without downtime, ensure backward compatibility with existing queries, and keep performance within SLA (≤200 ms per search).

**Action:** First, I created a new index template with the updated mapping, enabling dynamic templates for nested tag fields. Using the `reindex` API, I copied data from the old index to the new one in batches of 10,000 documents while monitoring heap usage. I leveraged scripted upserts to transform legacy `category` strings into the new `categories.keyword` field. After reindexing, I switched alias routing from the old index to the new one atomically, using a brief maintenance window. Finally, I set up index lifecycle policies to delete the old index after validation.

**Result:** The update completed in under 3 hours with no service interruption. Search latency dropped from 210 ms to 145 ms, and we gained full support for facet counts on `color` and `size`. I learned that careful planning of alias swaps and incremental reindexing can mitigate risk when evolving Elasticsearch mappings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
