---
qid: ing_60695ddcb0__eli5__local
question: 'Explain: Write a SQL query to update the counter — Distributed Counter
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 282
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:09:23-05:00'
sources: []
---

Imagine you’re running a popular online game where every player’s score is kept in a big scoreboard that lives on several servers so no single server gets overwhelmed.  
When a player earns points, the “counter” (the player’s total) must be updated everywhere that holds a copy of it.

**Step‑by‑step with an SQL‑style recipe**

1. **Read the current score** – `SELECT current_score FROM scores WHERE player_id = 42;`  
   This fetches the latest number from the local shard that stores this player’s data.

2. **Add the new points** – In memory: `new_score = current_score + earned_points;`

3. **Write back to all replicas** – For every server holding a copy of this row, run  
   `UPDATE scores SET current_score = new_score WHERE player_id = 42;`  

4. **Keep everything in sync** – Each update is wrapped in a transaction and logged (like a commit log). If one replica fails, the system retries until all replicas acknowledge the change.

So, updating a distributed counter is just like running a coordinated “UPDATE” on every copy of that row—making sure every server sees the same new total.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
