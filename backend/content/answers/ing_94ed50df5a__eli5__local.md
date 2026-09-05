---
qid: ing_94ed50df5a__eli5__local
question: 'Explain: An Axiom — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 205
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:33:45-05:00'
sources: []
---

Imagine you’re a restaurant that can send diners to any of its many branches around the world. You decide to let people choose their branch by looking at a phone book (DNS). The phone book tells them which branch’s address to use, but it only updates once every few minutes and some phones cache the old number for hours. So if one branch is suddenly full or closed, diners still go there because their phone hasn’t refreshed its copy of the phone book yet.

In technical terms: DNS is a name‑to‑IP lookup system that caches results (TTL). Global Server Load Balancing (GSLB) relies on DNS to point users to the “best” server. Because DNS changes slowly and many clients keep old answers, traffic can’t be redirected quickly or evenly, making GSLB ineffective for real‑time load balancing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
