---
qid: vq_c8bd46980c__aws__local
question: HOW CAN YOU USE DISTINCT IN A SQL QUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 479
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:03-05:00'
sources: []
---

**Situation (Customer Obsession)**  
At my last role I was asked to produce a daily sales report for the merchandising team that had been generating duplicate rows because of multiple shipment records per order. The team needed accurate totals or they would over‑budget their inventory.

**Task (Ownership)**  
I took ownership of cleaning the dataset and delivering a single, reliable query that ran on our nightly ETL job.

**Action (Dive Deep & Bias for Action)**  

1. **Requirement clarification** – We only wanted one row per `order_id` with the latest shipment date.  
2. **Design** – I used a sub‑query to identify the max `shipment_date` per order, then joined back and applied `DISTINCT` on the final projection:  
   ```sql
   SELECT DISTINCT o.order_id,
                   o.customer_id,
                   s.shipment_date,
                   SUM(p.price) AS total_amount
   FROM orders o
   JOIN shipments s ON o.id = s.order_id
   JOIN order_items p ON o.id = p.order_id
   WHERE s.shipment_date = (
         SELECT MAX(shipment_date)
         FROM shipments
         WHERE order_id = o.id
       )
   GROUP BY o.order_id, o.customer_id, s.shipment_date;
   ```
3. **AWS services** – The query ran on an Amazon Redshift cluster; I added a `DISTINCT` index to reduce shuffle cost and used `RAISEERROR OFF` for performance tuning.  
4. **Scalability & Cost** – The distinct operation added < 5 % CPU overhead, keeping nightly job time under 10 min on a 16‑node cluster (≈$0.80/hr).

**Result (Deliver Results)**  
The report accuracy improved from 78 % to 99.9 %, eliminating inventory over‑projections by $120K annually. I also documented the query logic in Confluence, enabling future developers to reuse it without re‑analysis.

> **Bar‑raiser cues:** clear ownership of the problem, deep dive into SQL semantics, measurable impact, and post‑mortem documentation for continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
