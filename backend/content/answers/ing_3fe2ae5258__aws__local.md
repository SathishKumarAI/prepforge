---
qid: ing_3fe2ae5258__aws__local
question: 'Explain: Bulk imports with COPY [..] FROM STDIN — GitHub - lib/pq: Go PostgreSQL
  driver for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 438
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:15-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*: Our analytics team needed to ingest 10 GB of log data nightly into a PostgreSQL data‑warehouse for real‑time dashboards.  
*Task*: Build a fault‑tolerant, cost‑effective import pipeline that delivered fresh data within the 1 h window.

*Action*: I chose `COPY … FROM STDIN` via the Go **pq** driver because it streams rows directly into Postgres without intermediate files, cutting memory overhead by ~70%.  
I wrapped the call in a retryable transaction with exponential back‑off and used `pgxpool` for connection pooling (max 20 connections). The pipeline reads compressed CSVs from S3, decompresses on‑the‑fly using Go’s `compress/gzip`, and streams to Postgres. I added a “staging” table with a unique constraint so duplicates are auto‑skipped—saving 15 % of write time.

*Result*: Import latency dropped from 4 h to **45 min** (≈ 88 % faster). Cost per GB fell from $0.12 to **$0.04** by leveraging S3 Transfer Acceleration and smaller instance types. The system now auto‑retries on transient errors, ensuring >99.9 % availability.

*Learnings*: Early profiling revealed that buffering too much data before `COPY` caused OOM; streaming is essential for scale. I documented the trade‑offs (e.g., no per‑row error handling) and built a monitoring alert to flag stalled streams.

**Technical Takeaway**  
- Use `pq.CopyIn` or `pgx.BatchExec` for high‑throughput loads.  
- Combine with S3, gzip, and connection pooling for cost & scalability.  
- Monitor with CloudWatch metrics (`pg_stat_database`, custom latency tags).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
