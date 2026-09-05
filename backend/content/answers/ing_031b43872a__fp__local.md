---
qid: ing_031b43872a__fp__local
question: 'Explain: SQL — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 504
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:40-05:00'
sources: []
---

### From the problem to a relational solution  

A leaderboard is *“the most recent score for each player, sorted by rank”*.  
The core constraints are:

1. **Fast writes** – players submit scores at high rate.  
2. **Consistent reads** – any query must return the current ranking.  
3. **Scalability** – thousands of concurrent updates.

A relational design satisfies (1) and (2) by normalising the data into two tables:

| Table | Columns | Purpose |
|-------|---------|---------|
| `players` | `player_id PK`, `name` | identity, static metadata |
| `scores` | `score_id PK`, `player_id FK`, `value`, `timestamp` | all raw submissions |

**Why this works**

* **Atomicity & isolation** – each insert is a single transaction; readers never see partial updates.  
* **Indexing for rank** – create a composite index on `(value DESC, timestamp ASC)`.  
  *The descending order enforces higher scores first; the timestamp breaks ties by recency.*  
* **Materialised view** – a `leaderboard` table (`player_id PK`, `rank INT`) is refreshed via a scheduled job or trigger that:
  ```sql
  UPDATE leaderboard l
    SET rank = t.rnk
  FROM (
      SELECT player_id, ROW_NUMBER() OVER (ORDER BY value DESC, timestamp ASC) AS rnk
      FROM scores
      GROUP BY player_id, value, timestamp
  ) t
  WHERE l.player_id = t.player_id;
  ```
  *This is a classic “top‑k with ties” problem; the window function guarantees correct ranking in O(n log n) time.*

**Non‑obvious insight**

The **grouping by `player_id` before ordering** is essential.  
If we order raw rows, players who submit multiple times will appear many times in the leaderboard, corrupting ranks. By grouping first, we collapse a player’s history to its best score (or latest tie breaker), then rank once—ensuring the leaderboard reflects *each player only once*.

Thus, a simple relational schema, combined with a windowed materialised view, delivers fast, consistent leaderboards while staying within SQL’s declarative strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
