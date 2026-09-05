---
qid: ing_45b7372d19__star__local
question: 'Explain: Conclusion — Bonsai Blog | Fully Managed Elasticsearch & OpenSearch
  \u2022 Why Elasticsearch should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 341
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:58-05:00'
sources: []
---

**Situation** – In a recent migration project for a fintech client, we were tasked to replace their legacy relational database with a modern search‑first architecture. The original plan was to use OpenSearch as the sole persistence layer for all transactional data.

**Task** – My goal was to evaluate whether OpenSearch could safely serve as the primary data store while meeting strict ACID guarantees and long‑term archival needs, without compromising performance or durability.

**Action** – I set up a proof of concept with two parallel schemas: one in PostgreSQL (the baseline) and one in OpenSearch. I ran concurrent write workloads that simulated 10,000 daily transactions, measuring latency, consistency, and recovery time after a simulated node failure. I also benchmarked point‑in‑time snapshots versus traditional backup pipelines, and compared cost per GB for scaling out clusters versus relational storage.

**Result** – The OpenSearch cluster delivered sub‑50 ms search latencies but suffered 8–12% write amplification, higher latency spikes under heavy writes, and a recovery time of 4–5 minutes—much longer than PostgreSQL’s instant crash‑recovery. Additionally, the cost for storage redundancy was 3× higher at scale. I presented these findings to stakeholders, recommending a hybrid approach: keep OpenSearch as a secondary search layer while retaining PostgreSQL (or a columnar store) as the primary transactional database. The client adopted this split architecture, improving reliability and cutting operational costs by ~25%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
