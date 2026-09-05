---
qid: ing_5dca4f0c1c__eli5__local
question: 'Explain: Related patterns — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 233
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:05:10-05:00'
sources: []
---

Think of a **transactional outbox** like a mail‑room that keeps every letter safe until the post office’s sorting machine (the database transaction) finishes its work.  
When your ML model writes data to the database—say it records a new user or logs an inference result—you want to send a notification, update another service, or trigger a downstream job. Instead of sending those messages directly and risking “half‑sent” failures, the model writes the message into a special **outbox table** inside the same transaction that updates the main data.  
Only when the transaction commits does the mail‑room know the letter is guaranteed to exist; then an independent worker reads the outbox, delivers the message, and deletes it. This guarantees that either both the database change *and* the message happen together, or neither does—just like a post office never sends a letter that wasn’t safely stored first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
