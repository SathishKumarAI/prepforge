---
qid: ing_f9d155722c__aws__local
question: 'Explain: Materialized Views — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 516
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:06-05:00'
sources: []
---

**Situation & Task**  
When my team built a recommendation engine for an e‑commerce platform, the query latency on our PostgreSQL catalog rose from 120 ms to 4 s during peak traffic (200 k requests/second). We needed a *materialized view* strategy that kept read performance high without breaking ACID guarantees.

**Action**  
I proposed a hybrid architecture:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Staging store | **Amazon RDS Aurora PostgreSQL** | Fast write, low‑cost replication |
| Materialization engine | **AWS Glue + Lambda** | Serverless ETL that refreshes views every 5 min |
| Cache & hot spot | **ElastiCache for Redis** (read replicas) | Sub‑ms access for the most popular products |
| Orchestration | **Amazon EventBridge** | Trigger on data changes, no polling |

I *dive deep* into the view refresh cost: each Lambda batch processed 1 M rows in <30 s using parallelism (`--max-concurrent-requests=10`). The refresh window was slotted during off‑peak hours to avoid contention. I added a **fail‑over** path that served stale data from Redis for 60 seconds if the ETL failed, preserving availability.

**Result**  
Post‑deployment, query latency dropped to 15 ms (95th percentile), and CPU utilization on Aurora fell by 40 %. The cost of running the refresh pipeline was <\$200/month versus an estimated \$1,500/month for a larger RDS cluster. We achieved **Ownership** by iterating on monitoring dashboards (CloudWatch) and **Customer Obsession** by keeping user experience smooth even during flash sales.

**Learning & Trade‑offs**  
Initially we over‑optimized the view refresh frequency, causing Lambda throttling; after adding exponential backoff we stabilized throughput. The trade‑off was a 5‑minute staleness window—acceptable for recommendations but not for inventory counts, so we kept real‑time writes in Aurora for that table.

*Bar‑raiser notes:* Looked for deep technical justification (why Glue+Lambda), quantified impact (latency, cost), ownership of failure handling, and lessons learned from early missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
