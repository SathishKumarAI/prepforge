---
qid: vq_5622643225__star__local
question: How can I get the time difference between two date columns?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 366
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:59:43-05:00'
sources: []
---

**Situation**  
In a quarterly sales dashboard project for a retail chain, the data warehouse had two timestamp fields—`order_placed_at` and `payment_received_at`. The BI team noticed that the average payment lag was creeping above our SLA of 48 hours, so we needed to calculate the exact time difference per order in days and hours.

**Task**  
Create a reusable SQL expression that outputs the delta between those two columns in a human‑readable format (e.g., “2d 5h”) and flag any orders exceeding the SLA for downstream alerts.

**Action**  
Using PostgreSQL, I wrote a CTE that leverages `EXTRACT(EPOCH FROM …)` to get seconds between the timestamps. Then I converted seconds into days (`floor(seconds/86400)`) and hours (`floor((seconds%86400)/3600)`). The final SELECT returned `order_id`, `days`, `hours`, and a boolean `over_sla`. I added this as a view so Power BI could consume it directly, and scheduled the job to run nightly. I also wrote unit tests in dbt to ensure edge cases (nulls, negative deltas) were handled.

**Result**  
The new view reduced query time from 12 seconds to under 1 second for the full dataset (~2M rows). We identified 3,456 orders over SLA—down from 7,890 in the previous quarter. The metric now appears on the executive dashboard with real‑time updates, and I learned how to balance SQL performance with readability by breaking complex calculations into CTEs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
