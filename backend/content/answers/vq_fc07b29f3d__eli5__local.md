---
qid: vq_fc07b29f3d__eli5__local
question: What are the types of Triggers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 284
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:34:44-05:00'
sources: []
---

Think of a data pipeline as a kitchen where ingredients (raw data) are turned into dishes (ready‑to‑use datasets). A **trigger** is the signal that tells the kitchen what to cook and when.

* **Scheduled triggers** – like a daily alarm clock. They fire at fixed times (e.g., every midnight) so the pipeline runs automatically, no matter what else happens.

* **Event‑driven triggers** – like a doorbell that rings whenever someone enters the house. The pipeline starts as soon as new data arrives or an external event occurs (a file upload, a database insert).

* **Manual triggers** – you push a button in the kitchen to start cooking on demand, useful for testing or one‑off jobs.

* **Change‑data‑capture (CDC) triggers** – imagine a guard who watches a pantry and whispers “new item” whenever someone adds something. The pipeline reacts only to the specific changes, not everything.

Each type tells the data system *when* to run, ensuring the right data reaches the right place at the right time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
