---
qid: ing_1a5bfe66e3__eli5__local
question: 'Explain Mixture-of-Experts: the router, top-k experts, total vs active
  parameters. Why does it win?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 224
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:18:02-05:00'
sources: []
---

Think of a big office building where each room is an *expert* that knows how to answer a particular type of question. When someone (the *router*) walks in, they look at the question and decide which rooms are most useful—say the three best ones (*top‑k experts*). Only those rooms open their doors; the others stay closed.

**Router** – the tiny decision‑making part that picks the right rooms.  
**Top‑k experts** – the few chosen experts that actually work on the question at that moment.  
**Total vs. active parameters** – all rooms (total) exist, but only a handful (active) are used for each query, so computation stays light.

Because most of the building’s knowledge is never used at once, Mixture‑of‑Experts can pack far more expertise into the same hardware and still answer quickly. That combination of *scalable capacity* and *efficient use* makes it win over a single monolithic model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
