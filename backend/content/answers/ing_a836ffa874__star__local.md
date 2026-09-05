---
qid: ing_a836ffa874__star__local
question: 'Explain: Rollover — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 346
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:27-05:00'
sources: []
---

**Situation:**  
At my previous role I was managing a real‑time analytics pipeline for an e‑commerce platform that ingested clickstream data into Elasticsearch via the Data Streams API. The index grew to over 120 GB per day and we hit performance degradation during peak traffic, with search latency climbing above 300 ms.

**Task:**  
I needed to keep ingestion fast while ensuring searches remained under 200 ms, without manual reindexing or downtime, and preserve the ability to roll back to older data snapshots if needed.

**Action:**  
I implemented a **rollover** strategy on our data stream. Using `/_data_stream/{name}/_rollover` with size (`max_size: 50gb`) and age (`max_age: 1d`) conditions, I let Elasticsearch automatically create new backing indices every day or when the index hit 50 GB. I also added an alias pointing to the current hot index for writes and a read‑only alias for searches, coupled with ILM policies that moved older indices to a warm tier in the same cluster. This kept write throughput high while offloading heavy queries to cold nodes.

**Result:**  
The rollover reduced search latency by 65 % during peak hours (down to ~70 ms) and maintained ingestion rates above 10k events per second. Storage costs fell by 30 % because older indices were archived to cheaper storage. I learned how to balance real‑time performance with cost efficiency using Elastic’s automated lifecycle management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
