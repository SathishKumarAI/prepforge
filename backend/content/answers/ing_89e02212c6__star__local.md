---
qid: ing_89e02212c6__star__local
question: 'Explain: Generate Test Loads — How to Benchmark PostgreSQL Performance
  Using Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 407
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:35-05:00'
sources: []
---

**Situation** – In my last role I was tasked with validating the read‑write performance of a new PostgreSQL cluster we were rolling out to support our analytics pipeline. The existing cluster was hitting 70 % CPU under peak load, and we needed concrete numbers before promotion.

**Task** – Build an automated benchmark that would simulate realistic mixed transactions (SELECTs, INSERTs, UPDATEs) at scale, capture latency percentiles, and expose any bottlenecks in the I/O path or query planner.

**Action** – I wrote a Bash wrapper around Sysbench’s `oltp_read_write` test. First, I created a PostgreSQL schema with partitioned tables and realistic indexes to mirror production. Then, using `psql`, I pre‑seeded 10 M rows. In the Sysbench script I set `--db-driver=pgsql`, `--pgsql-host`, `--pgsql-port`, and added `--pgsql-user`/`--pgsql-password`. To mimic our traffic mix, I adjusted the `--oltp-txn-by-transaction-type` parameter to 70 % reads, 30 % writes. For concurrency, I ramped threads from 50 up to 200 over a 5‑minute window. I captured output with `tee`, parsed latency and throughput using `jq`, and plotted the results in Grafana.

**Result** – The benchmark revealed that while CPU was acceptable, disk I/O became saturated after 120 threads, with average latency climbing from 12 ms to 45 ms. We re‑configured the storage tier and added a write‑ahead buffer, which brought latency back below 15 ms at 200 threads—meeting our SLA. This exercise taught me how to translate business load patterns into Sysbench parameters and how small configuration tweaks can dramatically change PostgreSQL’s performance envelope.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
