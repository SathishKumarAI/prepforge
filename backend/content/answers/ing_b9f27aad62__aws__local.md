---
qid: ing_b9f27aad62__aws__local
question: 'Explain: Initializing Test Data — How to Benchmark PostgreSQL Performance
  Using Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 454
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:11-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I had to prove that our Postgres cluster could sustain 10 k RPS for transaction analytics while keeping cost below $5k/month. The hiring manager asked me to benchmark with Sysbench and design a repeatable test harness.

**Action**  
1. **Define scope** – only the “read‑heavy” workload (SELECT + JOIN) because our ML pipeline pulls feature vectors.  
2. **Environment** – provisioned an Aurora‑Postgres cluster (db.r6g.xlarge, 4 GB RAM) and a separate EC2 instance (c5.large) to run Sysbench.  
3. **Data init** – used `pgbench`’s `--scale=10` to create ~10 M rows; then ran a deterministic `INSERT … SELECT` script to populate the feature table, ensuring 1:1 mapping for ML models.  
4. **Sysbench config** – wrote a Lua script that mimics our query pattern (50% simple selects, 30% joins, 20% aggregation). Set `threads=200`, `time=300`.  
5. **Run & collect** – executed on the EC2 instance, capturing latency percentiles and QPS via CloudWatch metrics; logged each run in an S3 bucket for audit.  
6. **Analysis** – plotted latency vs. threads; observed a 95th‑percentile latency of 120 ms at 10 k RPS, with CPU usage <70%.  

**Result**  
- Achieved target throughput (12 k RPS) with 99% confidence and kept monthly cost at $4,200.  
- The benchmark became an automated pipeline in CodePipeline, triggering alerts if latency >150 ms.  
- Learned that sharding the feature table by customer ID reduced contention; next iteration will apply this.

**Amazon Leadership Principles**  
*Customer Obsession* – ensured our ML models received data with sub‑200 ms latency.  
*Ownership & Dive Deep* – built a self‑contained, repeatable benchmark and uncovered hidden bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
