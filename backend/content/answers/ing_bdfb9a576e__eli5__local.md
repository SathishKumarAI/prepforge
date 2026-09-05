---
qid: ing_bdfb9a576e__eli5__local
question: 'Explain: Change data capture (CDC) — Open sourcing Brooklin: Near real-time
  data streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 200
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:12-05:00'
sources: []
---

Imagine a library where books are constantly being added and updated. A **Change Data Capture (CDC)** system is like a diligent librarian who watches every new book arrive or every page in an existing book change, and immediately notes the difference. Instead of waiting for the whole library to be cataloged again, the librarian records only the changes—what was added, what was removed, or what was rewritten.

**Brooklin**, now open‑source, is that librarian made into software. It listens to many data “libraries” (databases, message queues) at once and streams those tiny updates—called *events*—in real time. So instead of batch‑processing all data at night, Brooklin pushes the changes instantly to downstream systems, letting them stay up‑to‑date as new information arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
