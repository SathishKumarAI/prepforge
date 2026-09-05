---
qid: ing_1f83779c90__star__local
question: 'Explain: Index lifecycle management (ILM) — Elasticsearchstreams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 383
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:24-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had an ingest pipeline that pushed every transaction into an Elasticsearch cluster for real‑time fraud detection. After a year the index grew to 12 TB and search latency spiked from 30 ms to over 200 ms; our SLA of <50 ms was slipping.

**Task** – I needed to design a cost‑effective, automated index lifecycle that would keep hot data fast, move warm data to cheaper nodes, and delete stale data after 90 days, all while preserving query performance for the fraud engine.

**Action** – I implemented Elasticsearch’s Index Lifecycle Management (ILM). First, I created a rollover policy: when an index hit 200 GB or was older than 7 days, it rolled over to a new “hot” shard set. Next, I added a “warm” phase that moved indices to a tier with SSDs but lower CPU, using the `shrink` and `forcemerge` actions to reduce segment count. Finally, I set up a “delete” phase after 90 days. I also tuned refresh intervals and disabled replicas during warm phases to cut storage costs by ~35 %. The ILM policy was defined in a single YAML file and deployed via Kibana’s ILM UI.

**Result** – Index size shrank from 12 TB to 8 TB over six months, query latency dropped back to <40 ms, and we saved roughly $2k/month on storage. I learned that a well‑planned ILM policy can dramatically improve performance while keeping costs under control—critical in any data‑intensive ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
