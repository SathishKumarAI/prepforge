---
qid: ing_89e02212c6__faang__local
question: 'Explain: Generate Test Loads — How to Benchmark PostgreSQL Performance
  Using Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 668
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:04-05:00'
sources: []
---

**Clarify**

We need to show how to use *Sysbench* to generate realistic load on a PostgreSQL instance for performance benchmarking, and what metrics to capture.

Assumptions:  
- PostgreSQL is already running (any version ≥12).  
- Sysbench is installed on the same host or can connect via TCP.  
- We care about OLTP read‑write mix typical of transactional workloads.

**Approach**

1. **Prepare a test database** – create a schema with tables, indexes, and seed data.  
2. **Configure Sysbench** – choose `oltp_read_write` or `oltp_insert`, set threads, query count, and connection string (`pgsql://user:pass@host/db`).  
3. **Run the benchmark** – capture latency, throughput, and error rates.  
4. **Analyze results** – compare against baseline and tune PostgreSQL parameters.

**Depth**

```bash
# 1. Create test DB (outside Sysbench)
psql -c "CREATE DATABASE bench;"
psql -d bench -f /usr/share/sysbench/oltp_schema.sql

# 2. Run Sysbench
sysbench \
  --db-driver=pgsql \
  --pgsql-host=localhost \
  --pgsql-port=5432 \
  --pgsql-user=postgres \
  --pgsql-password=pwd \
  --pgsql-db=bench \
  --threads=16 \
  --time=60 \
  --report-interval=10 \
  oltp_read_write run
```

*Metrics*  
- **TPS** (transactions per second) – `total number of transactions / time`.  
- **Latency** – mean, median, 95th/99th percentile.  
- **Connection errors** – indicates contention or resource limits.

Complexity: O(N * T) where N = rows processed, T = threads; Sysbench spawns worker processes, so CPU usage is linear in thread count until saturation.

**Edge Cases**

- Insufficient memory → swap and skewed latency.  
- Network bottleneck if DB on remote host.  
- Skewed data distribution causing hotspot contention.  
- Wrong query mix (e.g., pure inserts) may not reflect real workload.

Test these by varying `--threads`, `--time`, and the query mix, then observe stability of TPS and latency curves.

**Optimize & Communicate**

1. **Tune PostgreSQL** – adjust `shared_buffers`, `work_mem`, `max_connections`.  
2. **Index strategy** – add or drop indexes based on query patterns observed in Sysbench logs.  
3. **Explain results** – use bar charts for TPS vs threads, latency percentiles over time, and a table of config changes vs performance gains.

Narrate the process: “We started with a clean baseline, ran 16 threads for 60 s, observed 12k TPS with 200 ms median latency. After increasing `shared_buffers` to 4GB and adding an index on the foreign key, TPS rose to 18k and latency dropped below 120 ms.” This structured narrative satisfies FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
