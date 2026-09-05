---
qid: vq_846a0d109b__star__local
question: Can one only retrieve the Nth row from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 356
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:36-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building an analytics dashboard for a SaaS product that had over 2 million user events per day. The backend used PostgreSQL, and the front‑end needed to display the “10th most active user” in real time during peak traffic.

**Task**  
I had to design a query that could reliably fetch the Nth row (in this case the 10th) from a large table without incurring a full sort or scanning every record, because the dashboard was refreshed every minute and latency below 200 ms was required.

**Action**  
First I added an `ORDER BY` on the activity score and used a window function `ROW_NUMBER()` over that ordering. To avoid sorting the entire table, I created a partial index on `(activity_score DESC)` and stored the computed row number in a materialized view that refreshed every 5 minutes. The query then simply looked up the pre‑computed row number:

```sql
SELECT user_id, activity_score
FROM active_users_mv
WHERE rn = 10;
```

I also implemented a cache layer with Redis to serve the result for 30 seconds before hitting PostgreSQL again, which kept response times under 50 ms during load spikes.

**Result**  
The dashboard displayed the correct 10th user in real time, and query latency dropped from ~1.2 s to <40 ms. The caching strategy reduced database load by 70%. I learned that when retrieving a specific Nth row, combining window functions with partial indexes and materialized views can give deterministic performance even on very large datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
