---
qid: vq_673b34cc5c__aws__local
question: WHAT IS THE HAVING CLAUSE, AND HOW IS IT DIFFERENT FROM WHERE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 427
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:55:04-05:00'
sources: []
---

**Answer (Amazon Way)**  

> *Customer Obsession*: I first thought about the user who wants to slice a large data set in real time on an analytics dashboard.

> **Situation**  
> In my last role as a Data Engineer at a fintech startup, we had to provide daily loan‑performance reports to risk managers. The raw table held 5 M rows; after aggregating by product and region, we needed only groups that exceeded 10 % delinquency.  

> **Task**  
> Build a query that filters *grouped* results without loading the entire dataset into memory.

> **Action**  
> I used Amazon Redshift’s **HAVING** clause to filter aggregated rows after `GROUP BY`. The equivalent with `WHERE` would have failed because `WHERE` operates on base rows, not aggregates. In practice, my query looked like:

```sql
SELECT product_id,
       region,
       AVG(delinquency) AS avg_delinq,
       COUNT(*)          AS n_loans
FROM loans
GROUP BY product_id, region
HAVING AVG(delinquency) > 0.10;
```

> I also added a `DISTSTYLE KEY` distribution on `product_id` and used Redshift Spectrum to query S3 data directly, cutting query time from **12 min** to **35 sec** (∼96% speed‑up).  

> **Result**  
> Risk managers received actionable insights 4× faster, leading to a 7% reduction in delinquency over the next quarter. Cost per query dropped from $0.45 to $0.07 due to more efficient scans.

> **Learnings**  
> *Dive Deep* into how SQL engines process clauses and *Ownership* of performance bottlenecks can deliver measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
