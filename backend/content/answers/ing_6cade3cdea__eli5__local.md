---
qid: ing_6cade3cdea__eli5__local
question: 'Explain: Leaderboard database schema design — Leaderboard System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 221
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:28:29-05:00'
sources: []
---

Imagine a leaderboard as a giant, ever‑changing scoreboard in a video game hall.  
Each **player** (user) has a unique ID and a current score that changes whenever they win a round.  
In the database we store three simple tables:

1. **Players** – holds each player’s ID and name.  
2. **Scores** – records one row per “score event” with player ID, points earned, and a timestamp.  
3. **LeaderboardCache** – a snapshot table that keeps the top N players sorted by total points, updated every few minutes.

When a new score comes in, we insert it into **Scores**, then recalculate the player’s running total (sum of their scores) and update **LeaderboardCache** if they climb into the top list.  
This design keeps raw data for history while serving quick leaderboard queries from the cache—just like a game hall updates its scoreboard instantly after each match.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
