---
qid: vq_c7c2ffdb49__star__local
question: What are the different types of Joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 339
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:14-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building a nightly ETL that consolidated customer activity from our click‑stream logs, CRM tables and marketing campaign data into a single analytical view for the BI team. The raw sources were in Snowflake, MySQL and an S3 CSV dump.

**Task** – I had to join these disparate sources efficiently so that the final table included every transaction with its corresponding customer profile and any active campaign attribution, without blowing up query costs or causing data skew.

**Action** – First I mapped out a **natural join** between the click‑stream fact table and the CRM dimension on `customer_id` because both schemas had identical keys. For optional campaign data I used a **left outer join** so that clicks without an active promotion still appeared in the report. To handle many-to-many relationships (customers linked to multiple campaigns), I applied a **cross join** only after filtering with a WHERE clause that limited results to the last 30 days, keeping the Cartesian product manageable. Finally, I added a **full outer join** during a debug phase to verify that no rows were lost from any source.

**Result** – The final table contained 12 million records per day, reduced query time by 35% compared with a naive inner‑join approach, and cut Snowflake credits spent on the job by 18%. I learned how selecting the right join type can balance completeness of data against performance and cost constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
