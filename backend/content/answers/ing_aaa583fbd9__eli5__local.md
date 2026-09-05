---
qid: ing_aaa583fbd9__eli5__local
question: 'Explain: Out of Scope — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 243
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:30-05:00'
sources: []
---

Imagine you’re asked to build a giant, ever‑glowing billboard that shows every photo people take in real time—like an endless feed of snapshots that anyone can see and comment on. That’s what “designing Instagram” feels like in a system‑design interview: you have to sketch out how the whole platform would work from scratch.

In this setting, you’re expected to talk about databases (where pictures live), caching (so the feed loads fast), load balancers (to spread traffic across many servers), and storage buckets (for the raw image files). You should also think about scaling (adding more machines as users grow) and fault tolerance (what happens if one server dies).

However, the interview is “out of scope” for Instagram because it’s too big. The focus is on your ability to reason through core design patterns—data flow, consistency, partitioning—not on building a full, production‑ready social media site. So you’re given the high‑level challenge but not asked to write code or deliver a complete product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
