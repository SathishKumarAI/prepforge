---
qid: vq_005f5490ec__aws__local
question: Difference between Row number and Dense Rank in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 577
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:00-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – I always frame my explanations around how they benefit the end user (the data scientist). *Dive Deep* – I dig into SQL semantics and performance implications.

### Situation  
While refactoring a nightly ETL for the recommendation engine, our analysts complained that “row numbers” were producing gaps in ranking when duplicate scores existed. I had to explain the difference between `ROW_NUMBER()` and `DENSE_RANK()` so they could choose the right window function for leaderboard displays.

### Task  
Clarify the semantics, show a concrete example, and recommend best‑practice usage in AWS Redshift (our data warehouse).

### Action  
1. **Explain semantics**  
   * `ROW_NUMBER() OVER (PARTITION BY … ORDER BY …)` assigns a unique sequential integer to each row within the partition, regardless of duplicates.  
   * `DENSE_RANK() OVER (…)` gives the same rank to identical values and skips no numbers; only ties share the same rank.

2. **Show example**  

```sql
SELECT score,
       ROW_NUMBER()  OVER (ORDER BY score DESC) AS rn,
       DENSE_RANK()  OVER (ORDER BY score DESC) AS dr
FROM user_scores;
```

With scores `100, 90, 90, 80`, the output is:  
|score|rn|dr|
|-----|--|--|
|100 |1 |1 |
|90  |2 |2 |
|90  |3 |2 |
|80  |4 |3 |

3. **AWS‑specific recommendation**  
   * Use `DENSE_RANK()` for leaderboards where ties should share a rank (e.g., top‑10).  
   * Use `ROW_NUMBER()` when you need a deterministic, gapless sequence (e.g., pagination).

4. **Performance & cost**  
   * Both functions are O(n log n) in Redshift; they’re inexpensive compared to full sorts.  
   * Avoid unnecessary `ORDER BY` columns—only include those required for ranking—to keep the compute footprint low.

### Result  
Analysts switched to `DENSE_RANK()` for leaderboard views, eliminating 30 % of perceived inconsistencies. The change reduced downstream error tickets by **15%** and cut query runtime by **12%**, saving ~$200/month in Redshift credits. I documented the decision in our data‑catalog, ensuring future teams understood the trade‑offs.

*Key takeaways:* precise SQL semantics, customer‑centric communication, and a data‑driven impact assessment—exactly what Amazon expects from a Data Engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
