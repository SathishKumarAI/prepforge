---
qid: vq_0aa1524787__star__local
question: How does one select the TOP N rows from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 391
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:18-05:00'
sources: []
---

**Situation:**  
I was working on an analytics dashboard for a fintech client that had to display the top 10 daily transactions by volume from a table of millions of rows stored in Snowflake. The raw query without limits returned all rows and caused a 5‑minute latency, which broke our SLA.

**Task:**  
I needed to retrieve only the highest‑value rows efficiently while keeping memory usage low and ensuring that any future filters (date ranges, merchant IDs) could be applied without re‑optimizing the whole pipeline.

**Action:**  
First, I rewrote the SQL using a window function:  
```sql
SELECT *
FROM (
  SELECT t.*, ROW_NUMBER() OVER (ORDER BY amount DESC) AS rn
  FROM transactions t
  WHERE txn_date = CURRENT_DATE()
)
WHERE rn <= 10;
```  
This leverages Snowflake’s columnar engine to sort only the relevant slice. I also added a materialized view that pre‑aggregates daily totals, so the window function runs on a smaller subset. In parallel, for in‑memory Python ETL stages, I used `heapq.nlargest` to keep an O(n log k) heap when streaming data from Kafka.

**Result:**  
Query latency dropped from 5 minutes to under 200 ms, and the dashboard now updates in real time. The approach scales to 10× larger datasets with negligible added cost. I learned that combining database‑side windowing with lightweight in‑memory heaps can deliver top‑N performance without sacrificing flexibility or maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
