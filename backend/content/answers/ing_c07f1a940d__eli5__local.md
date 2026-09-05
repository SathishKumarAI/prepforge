---
qid: ing_c07f1a940d__eli5__local
question: 'Explain: the fan for the starting position so — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 232
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:46-05:00'
sources: []
---

Imagine a chessboard is a city and every piece is a different vehicle.  
The **fan** for the starting position is simply the list of *all* roads each vehicle can take right from its first stop. Think of it as a “menu” that tells you, at the very beginning, where every car (pawn, knight, bishop, etc.) could legally drive if it wanted to start moving.

For example, a pawn in front has two possible roads: go one step forward or jump two steps on its first move. A knight’s menu contains eight L‑shaped jumps. The fan is the collection of these menus for every piece in that initial city layout.

When you code a chess game, you first build this fan so your program knows every legal opening move it can offer to a player. It’s like giving a driver a map before they hit the road.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
