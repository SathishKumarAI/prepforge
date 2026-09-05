---
qid: vq_e6a5e551d7__star__local
question: How to display following using query?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 415
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:57-05:00'
sources: []
---

**Situation** – In my last role at a mid‑size e‑commerce firm we had a quarterly dashboard that was missing the “Top 5 revenue‑generating customers” view. The BI team kept asking for raw data, but no one knew how to pull it from our Snowflake warehouse without pulling the entire customer table.

**Task** – I needed to write a single SQL query that would return each customer’s ID, name, and cumulative order total for the last 90 days, then rank them so we could feed the result straight into Tableau with minimal lag.

**Action** – I started by creating a CTE that joined `orders` and `customers`, filtered on `order_date >= DATEADD(day, -90, CURRENT_DATE)`. Using window functions (`SUM(order_amount) OVER (PARTITION BY customer_id)`) I calculated the total per customer. Then I wrapped it in another query to apply `ROW_NUMBER()` over the sum descending, and finally selected only rows where `row_number <= 5`. I added an index hint on `orders.order_date` for performance, and scheduled the script as a Snowflake task to run nightly.

**Result** – The dashboard now displays the top five customers in real time, cutting query runtime from ~30 s to <2 s. Stakeholders can see up‑to‑date revenue leaders instantly, and I learned how to leverage window functions for efficient ranking in large datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
