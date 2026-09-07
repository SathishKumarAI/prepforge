---
qid: ing_45b7372d19__aws__local
question: 'Explain: Conclusion — Bonsai Blog | Fully Managed Elasticsearch & OpenSearch
  \u2022 Why Elasticsearch should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 452
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:05-05:00'
sources: []
---

**Situation (S)** – While leading a migration of a legacy search platform for a retail client, I discovered that their data lake was built on an Elasticsearch cluster that had grown to **1 TB of unstructured logs** and **50 GB of structured metadata**. The team expected this cluster to serve as the *primary* data store.

**Task (T)** – My goal was to design a solution that could handle real‑time analytics, full ACID transactions, and long‑term retention without compromising search latency.

**Action (A)**  
1. **Architecture** – Shifted write traffic to an Amazon **Aurora Serverless v2** PostgreSQL database for transactional consistency, while using **Amazon OpenSearch Service** only for indexing/search.  
2. **Data pipeline** – Implemented a **Kafka‑to‑S3** ingestion with AWS Glue jobs that materialized aggregates into a columnar **Redshift Spectrum** view for analytics.  
3. **Cost & availability** – Leveraged Aurora’s on‑demand scaling (up to 32 GB RAM) and OpenSearch’s dedicated master nodes, achieving < 2 ms search latency and 99.999% uptime. Cost dropped from $12k/month to $5k/month.

**Result (R)** – The client now enjoys **30% faster query times**, **50% lower operational cost**, and the ability to run complex analytics in seconds—proof that Elasticsearch is a *search engine*, not a primary data store.  

---

### Amazon Leadership Principles Highlighted
- **Ownership** – Took full responsibility for end‑to‑end architecture and cost.
- **Dive Deep** – Analyzed performance metrics, storage patterns, and failure modes before proposing the migration.

> **Bar‑raiser cue:** Look for evidence that the candidate *owns* the problem, dives into data to justify a trade‑off, quantifies impact, and learns from past missteps (e.g., “we tried keeping everything in ES; it blew up during peak load”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
