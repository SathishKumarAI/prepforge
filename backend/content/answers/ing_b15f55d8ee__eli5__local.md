---
qid: ing_b15f55d8ee__eli5__local
question: 'Explain: NOTICE errors — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 179
total_tokens: 353
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:18:03-05:00'
sources: []
---

In the Go pq driver, a *notice* is like a polite email from PostgreSQL that says “I noticed something while running your query.” It’s not an error that stops execution; it’s just extra information—perhaps a warning about a deprecated feature or a hint that a column will be ignored. Think of it as a friendly hand‑shake during a conversation: the database says, “Hey, here’s what I saw,” but you can still keep talking. The driver gives you these notices through a channel so your program can log them or ignore them. In short, a notice is a non‑fatal advisory message sent by PostgreSQL to the client, and the pq library passes it along without breaking your code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
