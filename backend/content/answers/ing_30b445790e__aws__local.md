---
qid: ing_30b445790e__aws__local
question: 'Explain: Read-Only Load — How to Benchmark PostgreSQL Performance Using
  Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 613
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:23-05:00'
sources: []
---

**Situation (S)**  
In 2023 I led a migration of our on‑premise analytics stack to Aurora PostgreSQL on AWS for a retail client that needed real‑time inventory insights. The existing benchmark scripts used Sysbench’s read‑only mode but didn’t reflect the client’s OLAP workload, so we risked over‑provisioning or under‑tuning.

**Task (T)**  
Design a reproducible, data‑driven benchmark that mirrors production traffic, then use the results to size the Aurora cluster and fine‑tune parameters while staying within the $2k/month budget.

**Action (A)**  
1. **Requirements & Design** –  
   * Create 10 × the current read concurrency with a mix of SELECTs on fact tables (≈ 200 GB).  
   * Use Sysbench’s `--pgsql-read-only` plus custom SQL to exercise index scans, joins, and materialized views.  
   * Capture latency percentiles, throughput, and CPU/memory usage per node.

2. **AWS Services** –  
   * **Amazon Aurora PostgreSQL (serverless v1)** for elastic scaling;  
   * **Amazon CloudWatch** for metrics;  
   * **AWS Fargate** to run Sysbench containers in parallel;  
   * **AWS Cost Explorer** + **Budgets** to track spend.

3. **Scalability / Availability** –  
   * Run 4 Fargate tasks per node to saturate the DB engine, ensuring each task hits a distinct endpoint (read‑replica).  
   * Enable MultiAZ for high availability; use Aurora’s built‑in read replicas to simulate production load.

4. **Cost & Trade‑offs** –  
   * Serverless reduces idle capacity cost by 30 % compared to provisioned instances.  
   * The trade‑off is a slight increase in cold start latency, mitigated by keeping the cluster warm via scheduled “warm‑up” queries.

5. **Result (R)** –  
   * Benchmark completed in 45 min; average read latency 12 ms (90th percentile 18 ms).  
   * Throughput 1.8 k QPS per node, matching production peak.  
   * Scaling the cluster from 2 to 4 replicas dropped latency by 35 % and kept cost under $1.9k/month.

**Reflection & Learning** –  
I iterated the benchmark script twice: first with generic SELECTs, then with real‑world query patterns; the second iteration revealed a hotspot on a missing index that, once added, improved latency by 25 %. This exercise reinforced **Ownership**, **Dive Deep**, and **Bias for Action**—we owned the entire performance loop, dug into the data, and acted quickly to deliver measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
