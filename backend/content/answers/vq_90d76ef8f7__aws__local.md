---
qid: vq_90d76ef8f7__aws__local
question: HOW DO YOU FIND THE SECOND-HIGHEST SALARY IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 656
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:43-05:00'
sources: []
---

**Situation (S)**  
I was asked to add a “second‑highest salary” metric to our payroll analytics dashboard for the HR team. The table had over 3 million rows and the query needed to run under 2 seconds so it could be embedded in a real‑time BI report.

**Task (T)**  
Deliver a scalable, cost‑efficient solution that returns the second‑highest salary with minimal latency while ensuring correctness across partitions.

**Action (A)**  

| Step | Design Choice | AWS Service | Reasoning |
|------|---------------|-------------|-----------|
| 1 | Use **Redshift Spectrum** to query the raw S3 data instead of loading it into a cluster. | Redshift Spectrum, Athena | Avoids ETL and reduces storage costs. |
| 2 | Partition the salary column (`salary`) by decade (e.g., `20_000-29_999`) using a **partitioned Parquet** format. | S3 + Glue Crawler | Enables pruning of partitions, cutting scan time by ~80 %. |
| 3 | Query with `ORDER BY salary DESC LIMIT 2` and then pick the second row. | Redshift Spectrum / Athena | Simple SQL; no window functions needed for small result set. |
| 4 | Cache the result in **ElastiCache (Redis)** for 5 minutes to serve repeated dashboard hits. | ElastiCache Redis | Meets sub‑second latency requirement. |

**Result (R)**  
- Query time dropped from ~15 s (full scan) to **0.8 s** on average.  
- Cost per query reduced by **70 %** due to partition pruning and no cluster usage.  
- Cached responses delivered < 10 ms, keeping the dashboard responsive for 95 % of users.

---

### Leadership Principles Highlighted

| Principle | How it Shines |
|-----------|---------------|
| **Customer Obsession** | Delivered a real‑time metric that HR could rely on daily, improving decision speed. |
| **Ownership** | Took full responsibility from data ingestion to caching strategy, ensuring end‑to‑end reliability. |
| **Dive Deep** | Analyzed partitioning impact and benchmarked query plans to uncover the optimal design. |
| **Bias for Action** | Implemented the solution in under 48 hours instead of waiting for a “perfect” model. |

### What a Bar‑Raiser Looks For

- **Ownership:** Clear end‑to‑end responsibility, not just “I wrote the query.”  
- **Depth (Dive Deep):** Concrete partitioning strategy and performance metrics.  
- **Quantified Impact:** Explicit latency and cost savings numbers.  
- **Learning from Failure:** Mentioned initial full‑scan approach and how iterative profiling led to the current design.

---

> *“By turning a simple SQL problem into an end‑to‑end solution that balances speed, cost, and reliability, I ensured our HR team could trust the data they needed—every time.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
