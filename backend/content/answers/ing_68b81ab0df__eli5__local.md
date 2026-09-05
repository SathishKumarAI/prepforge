---
qid: ing_68b81ab0df__eli5__local
question: How to update the score of a player? — Leaderboard System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 236
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:52-05:00'
sources: []
---

Think of a leaderboard like a giant scoreboard at a school fair where each booth keeps track of its own points. When a player earns new points, we treat that as a “score event.”  
1️⃣ **Record the event** – write down the player’s ID and the points they just earned in a tiny log (think of it as a sticky note).  
2️⃣ **Add to the total** – look up the player’s current total on the main board, add the new points, and write back the updated number.  
3️⃣ **Refresh the ranking list** – after updating totals for all recent events, sort the whole list again so the highest scores appear at the top.  
4️⃣ **Show the new rank** – finally display the player’s new position next to their name.  

In short: log the change → update the stored total → re‑rank the list → show the result. This keeps the scoreboard accurate and always up‑to‑date, just like a live leaderboard in a game.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
