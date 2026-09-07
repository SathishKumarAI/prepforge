---
qid: vq_ecef0e3e0a__aws__local
question: WHAT IS A COMPOSITE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 634
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:24-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Composite Index** – a single index that contains two or more columns so the database can satisfy queries that filter or sort on any subset of those columns without scanning the entire table.

---

### Behavioral (STAR)

- **Situation:** In my last role I was tasked with reducing query latency for a customer‑facing analytics service that served 200 K requests per day.  
- **Task:** The team noticed each request hit a 10 GB MySQL table, and the average read time was 1.2 s – unacceptable for our SLA of <300 ms.  
- **Action:** I proposed adding a composite index on `(country_code, created_at)`. This covered the most common `WHERE` clauses (`country = ? AND created_at > ?`) and allowed MySQL to skip sorting. I also added a covering index on `(id, name)` for the `SELECT *` queries.  
- **Result:** Post‑deployment, query latency dropped from 1.2 s to **280 ms** (≈77% improvement), and CPU usage fell by 35 %. The change met our SLA with no impact on write throughput.

---

### Technical/System

| Requirement | Design Choice | AWS Services | Scalability | Availability | Cost |
|-------------|---------------|--------------|------------|--------------|------|
| Fast reads on `country_code` + date range | Composite B‑tree index `(country_code, created_at)` | Amazon Aurora MySQL / RDS | Indexes scale with table size; Aurora automatically shards replicas for read scaling. | Multi‑AZ deployments keep a standby copy; failover is <30 s. | Slightly higher storage cost (index pages) but offset by reduced query time and fewer I/O operations. |
| Covering reads on `id, name` | Secondary composite index `(id, name)` | Same as above | Handles high‑volume `SELECT *` without touching the main table. | Same Multi‑AZ setup. | Negligible extra cost; benefits outweigh storage overhead. |

**Trade‑offs:**  
- **Write Amplification:** Each insert/update must update both indexes, adding ~5 % write latency – acceptable given read‑heavy workload.  
- **Storage Footprint:** Indexes consume additional disk space (~15–20 %).  

---

### What a Bar‑raiser Looks For

| Signal | Why It Matters |
|--------|----------------|
| Ownership of performance bottleneck | Shows initiative and accountability. |
| Deep dive into query plans & metrics | Demonstrates technical depth. |
| Quantified impact (77% latency reduction) | Concrete business value. |
| Learning from failure (monitoring post‑deployment regressions) | Continuous improvement mindset. |

This answer blends the **Customer Obsession** principle (delivering fast responses to end users) with **Ownership** and **Dive Deep**, showcasing both business impact and technical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
