---
qid: ing_c67b9bb60a__star__local
question: 'Explain: Near real-time search — Near real-time search | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:52-05:00'
sources: []
---

**Situation:**  
In my last role as a data engineer at a fintech startup, we built a fraud‑detection platform that needed to surface suspicious transactions within seconds of ingestion. The existing batch indexing pipeline caused a lag of 5–10 minutes, which meant our analysts were reacting to outdated data.

**Task:**  
I was tasked with reducing the index latency so that new transaction records could be searchable in near real‑time (under 2 seconds) while still supporting full-text queries and aggregations across millions of documents.

**Action:**  
I switched from a single-node Elasticsearch cluster to a multi‑node, shard‑optimized deployment. I enabled *refresh interval* tuning—setting `index.refresh_interval` to `1s` for the transaction index—and configured *translog sync* (`sync_interval`) to balance durability and speed. I also implemented an ingest pipeline that pre‑processes JSON payloads into a denormalized schema, reducing mapping complexity at query time. Finally, I leveraged Elasticsearch’s “searchable snapshots” for archival data to keep hot indices lean.

**Result:**  
The end‑to‑end latency dropped from 8 minutes to <2 seconds for 95% of queries. Analyst turnaround improved by 40%, and we captured several high‑risk transactions that would have otherwise slipped through. I learned how fine‑grained cluster settings, data modeling, and pipeline design directly impact real‑time search performance in Elastic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
