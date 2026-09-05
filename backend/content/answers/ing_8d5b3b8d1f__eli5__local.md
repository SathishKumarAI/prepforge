---
qid: ing_8d5b3b8d1f__eli5__local
question: Martin Kleppmann | Kafka Summit London 2019 Keynote | Is Kafka a Database?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 237
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:20:35-05:00'
sources: []
---

Imagine you have a giant, public bulletin board where every message that ever happens in your city is posted—orders placed, payments made, users signing up. Anyone can read the whole history, add new posts, and even “undo” a post by adding another one that says “delete”. Kafka works like that board: it stores an endless stream of events (the posts) and lets many different apps read from it at their own pace.

A database is usually a place where you ask for *what* data you want now—“give me the current balance of account 123”—and the system gives you one answer. Kafka, on the other hand, is more like the bulletin board: you get every message in order, and it’s up to your application to keep track of what the latest state should be.

So, Kafka isn’t a database; it’s a durable log that lets many systems read from the same stream and build their own views. It can feed data into databases or act as the source of truth for distributed applications, but its core job is streaming, not storing “current” values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
