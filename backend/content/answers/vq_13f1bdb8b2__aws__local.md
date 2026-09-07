---
qid: vq_13f1bdb8b2__aws__local
question: WHAT IS A CORRELATED SUBQUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 375
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:55-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation / Task**  
In a recent data‑engineering role I was asked to optimize a legacy sales report that ran slowly because it executed a correlated subquery for every row of the `orders` table. The KPI was a 15 % reduction in query latency before the next quarterly rollout.

**Action**  
I first *dive deep* into the execution plan: the subquery scanned `order_items` repeatedly, causing O(n²) behavior. I rewrote it as a **JOIN + GROUP BY** using a derived table (`order_totals`). In AWS terms, I staged the data in **Amazon Redshift Spectrum** to avoid moving terabytes locally, and leveraged **Redshift’s sort keys** on `order_id` for efficient joins. I also added a **materialized view** so future queries hit pre‑aggregated totals, cutting compute cost.

**Result**  
The refactor reduced query runtime from 48 s to **4.3 s** (90 % faster) and cut Redshift compute credits by **32 %**, saving ~$1.2k/month. The solution was adopted across three reporting pipelines, improving overall system availability.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivered a faster report that stakeholders depended on for business decisions.  
- **Ownership & Deliver Results** – Took end‑to‑end responsibility from analysis to production rollout, quantifying impact and cost savings.  

*Bar‑raiser notes:* clear ownership, deep technical dive, measurable outcome, and reflection on the trade‑off between query complexity vs. maintenance (materialized view refresh).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
