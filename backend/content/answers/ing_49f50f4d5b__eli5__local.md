---
qid: ing_49f50f4d5b__eli5__local
question: 'Explain: to keep track of the best evaluation — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 212
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:34:11-05:00'
sources: []
---

Think of a chess‑playing robot as a treasure hunter exploring a maze.  
At every turn it looks ahead, guessing how good each move will be (this guess is the **evaluation**).  
It keeps a notebook where it writes down the *best* score it has seen so far for that position – this is the **best evaluation**.

When the robot finds a new path (a different move) and calculates its score, it compares it to the number in the notebook. If the new score is higher (or lower, depending on whether it’s playing as White or Black), it *updates* the notebook with the new best value.  

So, “keeping track of the best evaluation” means always remembering the highest‑quality move found so far and replacing that memory whenever a better one appears. It’s like updating your map with the most promising shortcut you’ve discovered while hunting for treasure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
