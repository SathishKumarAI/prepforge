---
qid: ing_4dd13fd8be__eli5__local
question: 'Explain: Write Locally and Read Globally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 199
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:40:36-05:00'
sources: []
---

Imagine a big kitchen where chefs (users) add ingredients (comments) to their own personal pots (local storage). Each chef keeps the pot on his counter, so adding an ingredient is instant—no one else has to wait for the pantry to open. When diners (other users) want to see what’s in the kitchen, a master cook scans all the pots at once and mixes the ingredients into a communal soup (global view).  

In this design the “write locally” part means every comment goes straight to the writer’s own database shard so it’s fast and isolated. The “read globally” part pulls from all shards, merges the comments in real time, and streams them to everyone watching the live feed. This keeps writes quick while still giving all users a consistent, up‑to‑date view of the conversation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
