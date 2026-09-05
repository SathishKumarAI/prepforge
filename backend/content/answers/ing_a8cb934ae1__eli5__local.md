---
qid: ing_a8cb934ae1__eli5__local
question: 'Explain: Index lifecycle actions — Index lifecycle management (ILM) in
  Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 267
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:39-05:00'
sources: []
---

Think of an Elasticsearch index like a growing garden plot.  
When you first plant seeds (create the index), the soil is rich and full of nutrients—your data is hot, fast, and needs quick access.  

**Index lifecycle actions** are the gardener’s schedule that moves the plot through stages:

1. **Hot phase** – The plants grow quickly; you water often and prune daily. In Elasticsearch this means the index stays on powerful hardware so searches are lightning‑fast.
2. **Warm phase** – Growth slows, but the plants still need light. You move the plot to cheaper storage that’s a bit slower but still readable.
3. **Cold phase** – The plants are mature and hardly change. They’re stored in very cheap, long‑term space; you can read them rarely.
4. **Delete phase** – When the plants finish their life cycle (data is old or no longer useful), they’re removed to free up land.

Each phase has **actions**—rules that say when to roll the index to the next plot or delete it. Just as a gardener follows a timetable, ILM automates these moves so your data stays in the right place without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
