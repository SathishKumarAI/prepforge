---
qid: ing_cd92c78beb__eli5__local
question: 'Explain: Types of Failover Configurations: Active-Active vs Active-Passive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 208
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:00:59-05:00'
sources: []
---

Imagine you’re running a café that must stay open 24/7.  
**Active‑Passive (standby)** is like having one barista on the floor (active) and another in the back room ready to jump in if the first gets sick. Only the front barista serves customers; the second sits idle until needed, then switches over.  
**Active‑Active (parallel)** is like two baristas working side by side at separate counters. Both serve customers simultaneously, so if one counter breaks, the other keeps going and still handles all orders—customers never notice a hiccup.

In IT terms, “active” means a server or system that’s currently handling requests; “passive” is on standby, not doing work until activated. Active‑Active gives higher capacity and instant failover, but needs more coordination; active‑passive is simpler but may take a moment to switch over.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
