---
qid: ing_6353d98bed__star__local
question: 'Explain: How SQL EXISTS Works and When to Use It — Data Science & AI Interview
  Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 339
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:25-05:00'
sources: []
---

**Situation** – In a recent churn‑prediction project for a telecom client, our model’s feature set included a flag indicating whether a customer had ever purchased a premium support plan. The raw data came from two large tables: `customers` (≈3 M rows) and `subscriptions` (≈12 M rows). Joining them naively caused a 5× slowdown and bloated the dataset with duplicate rows.

**Task** – I needed to add an efficient “has_premium” boolean to each customer record without performing a costly inner join, so the data pipeline could run within the 30‑minute window required by the client’s daily reporting schedule.

**Action** – I rewrote the query using `EXISTS`:

```sql
SELECT c.customer_id,
       EXISTS (SELECT 1
               FROM subscriptions s
               WHERE s.customer_id = c.customer_id
                 AND s.plan_type = 'premium') AS has_premium
FROM customers c;
```

The subquery stops scanning as soon as it finds the first matching premium subscription, eliminating unnecessary row comparisons. I also indexed `subscriptions(customer_id, plan_type)` to further speed up lookups.

**Result** – The query execution time dropped from 4 minutes to 35 seconds—a 12× improvement—allowing us to incorporate the flag into the feature matrix and train the churn model on schedule. I learned that `EXISTS` is ideal for existence checks where only a single match matters, especially with large fact tables and selective predicates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
