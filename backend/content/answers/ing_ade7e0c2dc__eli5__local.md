---
qid: ing_ade7e0c2dc__eli5__local
question: 'Explain: Bandwidth — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 230
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:01-05:00'
sources: []
---

Imagine a busy highway that carries all the scores of players racing to stay on a leaderboard.  
**Bandwidth** is how many cars (score updates) can travel per second without crashing into each other or getting stuck in traffic jams.

In a leaderboard system, every time someone finishes a game their new score must be sent to the server, merged with the current list, and then pushed back to all players so everyone sees the same ranking.  
If the highway is too narrow (low bandwidth), many cars pile up, causing delays—players see outdated rankings or get timed‑outs.  

To keep traffic smooth, designers widen the lanes by:

* **Batching** updates: sending several scores together instead of one by one.
* Using a **caching layer**: temporarily holding recent changes so they don’t all hit the main database at once.
* Choosing a fast network and efficient data format.

So, bandwidth in this context is simply the rate at which score information can travel through the system without slowing everyone down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
