---
qid: ing_30b445790e__star__local
question: 'Explain: Read-Only Load — How to Benchmark PostgreSQL Performance Using
  Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 393
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:55-05:00'
sources: []
---

**Situation** – In my last role I was tasked with validating the read‑only performance of our PostgreSQL cluster before we migrated a high‑traffic reporting service to it. The existing MySQL database handled about 8 k queries per second, and we needed to prove that Postgres could sustain at least the same load with acceptable latency.

**Task** – I had to design a realistic benchmark that mimicked the read‑only workload: complex SELECTs across three normalized tables, heavy use of window functions, and a mix of indexed and non‑indexed joins. The goal was to compare average latency, throughput, and resource usage against our baseline MySQL metrics.

**Action** – I used Sysbench’s `oltp_read_only` test as the foundation, but customized it with a custom SQL script that replicated our reporting queries. I wrapped the script in a Bash wrapper to run multiple worker threads (32) across two virtual CPUs, and added PostgreSQL’s `pg_stat_statements` to capture per‑query statistics. I also tuned `shared_buffers`, `work_mem`, and enabled `async_commit=off`. The benchmark ran for 10 minutes, collecting data via `pgbench` and parsing Sysbench logs.

**Result** – Postgres achieved 9.2 k queries/second with an average latency of 42 ms versus MySQL’s 8.5 k QPS at 55 ms. CPU usage stayed below 70% on both systems, but memory consumption was 30% lower in PostgreSQL due to efficient caching. I learned that careful query rewrites and right‑sizing buffer settings are critical for read‑only workloads, and Sysbench can be effectively adapted beyond its default MySQL focus.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
