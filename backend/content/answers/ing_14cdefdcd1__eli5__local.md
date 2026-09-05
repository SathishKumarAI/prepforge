---
qid: ing_14cdefdcd1__eli5__local
question: 'Explain: dynamo streams we''ll just touch on this — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 217
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:08:17-05:00'
sources: []
---

**Think of DynamoDB like a giant library where every book is a data record.**  
A **Dynamo Stream** is the library’s “audit log” that records each time a book is added, changed, or removed. Imagine a security guard walking through the stacks and jotting down every action—who took which book, what they did, and when. That guard’s notebook is the stream.

When you enable a stream on a table, DynamoDB writes a tiny “change event” to the stream for each update: the old version (if it existed), the new version, the type of change (INSERT, MODIFY, DELETE), and a timestamp. Your applications can read this log in real time or replay it later to keep other systems in sync—like updating a search index or triggering notifications.

So, Dynamo Streams are simply an ever‑growing record of every table modification, letting you react instantly without polling the database itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
