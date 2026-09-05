---
qid: ing_57d6bda4fc__eli5__local
question: 'Explain: Debezium and Kafka Example — Change Data Capture (CDC) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 207
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:55:46-05:00'
sources: []
---

Imagine a library where every book is a row in a database table, and the librarian keeps a notebook of all changes: when a page is added, removed, or rewritten. **Debezium** is that notebook—it watches the database like a security camera, writing down each edit as it happens.  

Now picture a bustling post office (Kafka) that receives these notes and instantly copies them onto every shelf in the city. Each Kafka topic is a shelf for a specific type of change—insertions, updates, deletions. Any application can pull from the appropriate shelf whenever it needs fresh data.

So, Debezium = “watcher” that records edits; Kafka = “messenger” that delivers those edits to all interested parties in real time. This setup is called **Change Data Capture (CDC)**—capturing changes as they occur and streaming them for downstream use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
