---
qid: vq_ae5ed62cfc__eli5__local
question: How many types of tables have in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 305
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:24:09-05:00'
sources: []
---

In Hive you’ll find **two kinds of tables**—just like a kitchen has *permanent* counters and *temporary* prep surfaces.

1. **Managed (or internal) tables** – Think of these as the built‑in countertops. When you put food on them, the kitchen owns that space; when you’re done, the kitchen cleans it up for you. In Hive, data stored in a managed table lives inside HDFS under Hive’s control. If you drop the table, Hive deletes both the schema and all the files.

2. **External tables** – These are like a countertop you bring from another room. You keep your own food there; if you decide to move or throw it away, the kitchen doesn’t touch it. In Hive an external table points to data already present in HDFS (or other storage). Dropping the table removes only the schema, not the underlying files.

So, just two table types: managed and external—each deciding who owns and cleans up the data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
