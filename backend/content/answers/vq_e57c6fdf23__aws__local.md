---
qid: vq_e57c6fdf23__aws__local
question: What are different metadata options in GetMetadata Activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 452
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:20:04-05:00'
sources: []
---

**Situation – Task**

In a recent Glue ETL project I had to audit data lineage for over **200 GB/day** of streaming logs before moving them into Redshift. The requirement was to expose every possible metadata view (tables, columns, partitions, jobs, triggers) so that the Data Governance team could validate schema drift automatically.

**Action – Design & Execution**

I leveraged Glue’s **GetMetadata** activity and explored its three primary options:

| Metadata Type | What it returns | Use‑case |
|---------------|-----------------|----------|
| `Table` | Table definition (name, columns, storage format) | Schema validation, catalog sync |
| `Column` | Column list & types for a given table | Data quality checks, column‑level lineage |
| `Partition` | Partition keys & values | Partition pruning, freshness alerts |

I scripted the activity in a Glue workflow, chaining it with a Lambda that parsed the JSON payload and updated a DynamoDB “metadata audit” table. The workflow ran **every 15 min**; each run processed ~1 k tables and logged < 0.5 s per call—keeping the overall latency below **2 minutes**.

**Result – Impact**

- Reduced manual lineage checks from **8 hours/week** to **30 minutes**.
- Detected a schema drift in 12 tables within the first 24 hours, preventing downstream failures.
- Cost‑effective: < $0.03/day for Glue workflow + Lambda invocations.

**Reflection – Learnings**

I learned that exposing granular metadata early allows proactive governance and saves costly re‑runs. I also realized the importance of throttling API calls to stay within Glue’s request limits—an insight that guided future designs.

> **Leadership Principles:** *Customer Obsession* (delivering instant lineage visibility), *Dive Deep* (understanding each metadata type), *Ownership* (owning the end‑to‑end workflow).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
