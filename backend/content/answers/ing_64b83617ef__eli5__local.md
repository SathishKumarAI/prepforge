---
qid: ing_64b83617ef__eli5__local
question: 'Explain: it''s that simple so whether we are — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 202
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:39-05:00'
sources: []
---

Imagine a group of friends writing a story together on a single paper that’s magically shared with everyone. Each friend can write, delete, or change any part at any time. The “operational transformation” is the invisible referee that watches every edit and keeps all copies in sync.

When one friend writes a sentence (“I went to the market”), the referee records that operation. If another friend deletes a word while the first is still writing, the referee rewrites the deletion so it doesn’t erase the new words. It’s like having a smart translator who understands that two people can talk at once without their sentences colliding.

In Google Docs, this referee runs behind the scenes, constantly converting each user’s changes into a form that all other users’ documents can understand and apply. That way, everyone sees the same story, even though they’re typing in different places simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
