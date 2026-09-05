---
qid: ing_72955afb65__eli5__local
question: 'Explain: Most Recently Used (MRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 209
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:38:02-05:00'
sources: []
---

Imagine you’re at a busy coffee shop that has only one tiny table for customers to sit while they wait for their drinks. Every time someone arrives, they take the seat. If a new customer comes in and the table is full, the shop must decide who leaves to make room.

A **Most‑Recently‑Used (MRU)** rule says: “Let the person who just sat down leave first.” In other words, the newest arrival is evicted when space is needed. This works best when people who sit most recently are *unlikely* to need the table again soon—like a quick coffee break that’s over before they come back.

So, MRU is a cache eviction policy that discards the newest item in favor of keeping older ones, assuming recent items won’t be reused immediately. It’s simple but only useful when data usage patterns fit that “recent‑but‑not‑again” scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
