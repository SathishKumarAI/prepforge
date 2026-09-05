---
qid: ing_c947561627__star__local
question: 'Explain: doing that is to create a little — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 309
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:48-05:00'
sources: []
---

**Situation**  
At my last internship I was part of a product‑team tasked with boosting engagement on our educational app for teens. The analytics showed that after watching a 5‑minute tutorial the average session length dropped to under three minutes.

**Task**  
I had to design an interactive “Coding Adventure: Chess” module that let users write Python code to control a chess piece, turning passive learning into an active challenge within two weeks.

**Action**  
First I scoped the feature with designers and defined success metrics (session time + completion rate). I built a lightweight in‑browser engine using **Three.js** for 3D rendering and **Pyodide** to run Python snippets client‑side. The user interface allowed them to drag a piece, write a `move()` function, and hit “Play.” I added instant feedback via a rule‑checker that highlighted illegal moves and suggested corrections. To keep latency low, I cached the board state in **IndexedDB** and only re‑rendered when the code changed. I also integrated a leaderboard powered by Firebase to add social competition.

**Result**  
Within a month of launch, average session time rose from 3 min to 7 min (a 133% increase) and the completion rate for the module hit 68%. The team learned that combining instant code execution with gamified feedback dramatically boosts engagement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
