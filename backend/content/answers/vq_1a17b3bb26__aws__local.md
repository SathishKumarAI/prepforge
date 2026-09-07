---
qid: vq_1a17b3bb26__aws__local
question: What are some optimization techniques in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 424
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:40:58-05:00'
sources: []
---

**Answer (Amazon Style)**  

> *“When I was leading the migration of our nightly ETL from on‑premise to Redshift, I discovered that a poorly indexed fact table was causing query times to spike from **12 s to 3 min** during peak load. I had to act fast.”*  

### Situation  
We were hitting SLAs for downstream BI dashboards and the cost of over‑provisioned nodes kept rising.

### Task  
Reduce query latency by ≥80% while keeping costs <20 % of baseline.

### Action  
1. **Index & Distribution Strategy** – Added a *compound sort key* on `(customer_id, order_date)` and switched to *key distribution* on `customer_id`.  
2. **Query Rewrite (Dive Deep)** – Replaced correlated sub‑queries with window functions; moved predicates into the WHERE clause to enable predicate pushdown.  
3. **Materialized Views** – Created a daily summary view that pre‑aggregates sales by region, reducing scan size from 200 GB to 5 GB.  
4. **Parameter Tuning (Bias for Action)** – Adjusted `max_concurrency_scaling_clusters` and enabled *RA3* nodes for on‑demand scaling.  

### Result  
- Query latency dropped from **3 min → 12 s** (84 % improvement).  
- Cost per query fell by **18 %**; overall Redshift spend decreased by **22 %** annually.  
- Dashboards now refresh in real time, improving customer satisfaction scores (+12 points on NPS).

### Reflection  
I documented the process and shared it with the data team, turning a one‑off fix into a repeatable pattern. This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—the qualities Amazon looks for in a senior data engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
