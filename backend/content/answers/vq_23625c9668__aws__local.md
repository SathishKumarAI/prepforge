---
qid: vq_23625c9668__aws__local
question: Explain about a Clustered Index.?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 511
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:42:48-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task:**  
> In my last role I was tasked to reduce query latency for our nightly ETL pipeline that aggregates millions of customer events into a dimensional model. The existing “customer_dim” table had a random primary key, so every `JOIN` on `customer_id` performed a full scan, causing 2 × CPU spikes and >30 min runtime.

> **Action:**  
> I proposed adding a *clustered index* on the natural business key (`customer_id`). After reviewing AWS documentation and consulting with our DBA team, I implemented the change using Amazon RDS for PostgreSQL.  
> - **Design:** `CREATE INDEX ON customer_dim (customer_id);` (PostgreSQL automatically creates a clustered B‑tree).  
> - **AWS Services:** RDS (managed DB), CloudWatch (monitoring), AWS Schema Conversion Tool (for migration scripts).  
> - **Scalability & Availability:** The index is stored locally on each replica, so read replicas instantly benefit. I enabled *auto‑extend* to keep the table’s WAL retention at 7 days for quick recovery.  
> - **Cost Trade‑off:** Indexing increased storage by ~15 % but cut query cost (CPU and I/O) by 70 %, yielding a net $1,200/month savings on our RDS instance.

> **Result:**  
> Post‑deployment, the nightly ETL runtime dropped from 30 min to 7 min—a 77 % reduction. Query latency for the `customer_dim` joins fell below 50 ms (vs. >2 s). This allowed us to add a real‑time dashboard that now serves 10× more users without additional capacity.

> **Reflection & Learning:**  
> I learned that *ownership* means not just implementing a fix but also validating the trade‑offs: monitoring for index bloat, scheduling periodic `REINDEX`, and automating alerts. The success reinforced my bias for action—quickly prototype in dev, test in staging, then roll out with minimal risk.

> **Leadership Principles Highlighted:**  
> - **Ownership** – I drove the end‑to‑end solution and set up monitoring.  
> - **Dive Deep** – I analyzed query plans, benchmarked index sizes, and quantified performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
