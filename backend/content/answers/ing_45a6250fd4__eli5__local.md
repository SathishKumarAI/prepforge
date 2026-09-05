---
qid: ing_45a6250fd4__eli5__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 268
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:45-05:00'
sources: []
---

Think of Twitter as a huge, global library where people (users) write short notes (tweets) and others read them instantly. The “communications” part is like the library’s mailroom: it receives every new note, decides who should get it, and delivers copies to the right shelves.

When someone posts a tweet, that message first lands in a fast queue (Kafka). Imagine a conveyor belt that can hold many notes at once. Workers on the belt (consumer services) pull the notes, decide which followers need them, and hand them off to smaller “post‑offices” (partitioned topic topics) so that each follower’s copy of the feed is built quickly.

If a user asks for their timeline, the system doesn’t scan every note in the whole library. Instead, it grabs only the notes that have already been sorted into that user’s personal shelf (cached or pre‑built lists). This keeps the mailroom busy but never slows down the readers.

In short: Twitter’s communications layer is a high‑speed conveyor of messages that routes each tweet to the right followers and stores ready‑to‑read copies so users see new content in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
