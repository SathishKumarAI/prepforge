---
qid: vq_7d64f6102e__eli5__local
question: What are the types of metastore available in Hive ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 256
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:34-05:00'
sources: []
---

Think of a **metastore** as the “address book” for your data warehouse.  
Just like an address book can be paper‑based or stored on a phone, Hive offers two main kinds of metastores that keep track of where tables live and what they look like.

1. **Hive Metastore (default)** – Imagine it as a *paper* address book kept in a single file. It stores metadata locally on the machine that runs Hive. It’s fast to start up but only one user can edit it at a time, so it works best for small projects or when you’re alone.

2. **External Metastore (e.g., MySQL, PostgreSQL)** – Think of this as an *online* address book that many people can access simultaneously. The data lives in a shared database, letting multiple Hive servers read and write the same metadata safely. It’s slower to start because it needs to connect to the external database, but it scales to big teams and large datasets.

Both types hold the same information—table names, column definitions, storage locations—but they differ in how they’re stored and who can use them at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
