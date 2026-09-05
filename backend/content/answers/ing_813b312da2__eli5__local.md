---
qid: ing_813b312da2__eli5__local
question: 'Explain: Explicit mapping — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 206
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:36-05:00'
sources: []
---

Think of an **explicit mapping** like a librarian who writes down exactly where every book belongs on the shelf before anyone borrows it. In Elasticsearch, a *mapping* tells the system how to interpret each piece of data in a document—what type it is (text, number, date), whether it should be searchable or just stored, and even how it should be split into words for full‑text search.

With an **explicit mapping** you hand‑write this “shelf plan” yourself instead of letting Elasticsearch guess. You decide that the field *title* is a short text (no analysis), *price* is a decimal number, and *tags* are an array of keywords. This guarantees consistent indexing, prevents surprises like a date being read as a string, and keeps searches fast and accurate—just as a librarian’s plan keeps patrons finding books quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
