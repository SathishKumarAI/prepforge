---
qid: ing_323abe56d9__eli5__local
question: 'Explain: Write a SQL query to update the score of a player'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 268
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:55:23-05:00'
sources: []
---

Imagine your game’s scoreboard is a big spreadsheet that lives inside a database. Each row holds one player’s name and their current points. To bump a particular player’s score, you tell the database “find the row where the name matches this player, then add some new points to what they already have.”

In SQL (the language used to talk to that spreadsheet), it looks like this:

```sql
UPDATE scoreboard          -- the table with all players
SET    score = score + 10   -- give them 10 more points
WHERE  player_name = 'Alex';-- only change Alex’s row
```

**Unavoidable terms explained**

- **Table** – the spreadsheet of data (here, `scoreboard`).
- **Column** – a vertical set of values in a table (e.g., `player_name`, `score`).
- **UPDATE** – tells the database to modify existing rows.
- **WHERE** – narrows down which rows get changed.

This query finds Alex’s row and adds 10 to whatever number is already there, leaving everyone else untouched. It’s like flipping a switch that only turns on for one player, not the whole room.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
