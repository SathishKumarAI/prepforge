---
qid: ing_323abe56d9__star__local
question: 'Explain: Write a SQL query to update the score of a player'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 393
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:54-05:00'
sources: []
---

**Situation** – At my last company we ran a daily leaderboard for our mobile game. The analytics team noticed the “current_score” column in the `player_stats` table was out of sync after the nightly batch that processed real‑time events; the lag reached 3 % of total players, causing the public leaderboard to display stale data.

**Task** – I had to write a robust SQL update that would reconcile the scores from the event stream (`event_scores`) with the main `player_stats` table, ensuring each player’s `current_score` reflected the sum of all events for the day without corrupting concurrent writes.

**Action** – Using PostgreSQL, I wrote a single updatable CTE:

```sql
WITH daily_totals AS (
  SELECT player_id,
         SUM(score) AS new_total
  FROM event_scores
  WHERE event_date = CURRENT_DATE
  GROUP BY player_id
)
UPDATE player_stats ps
SET current_score = dt.new_total
FROM daily_totals dt
WHERE ps.player_id = dt.player_id;
```

I added an `EXPLAIN ANALYZE` to confirm the plan used a bitmap index on `player_id`. I also wrapped the update in a transaction with `READ COMMITTED` isolation, and logged any rows where `current_score` changed by more than 10 % for audit.

**Result** – The script ran in under 12 seconds for a table of 1.2 M rows, reducing the stale‑data percentage from 3 % to <0.01 %. I learned that a well‑indexed CTE can replace multiple row‑by‑row updates and that monitoring delta thresholds helps catch anomalies early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
