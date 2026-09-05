---
qid: ing_d19ed3ef07__eli5__local
question: 'Explain: Request Body — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 222
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:22-05:00'
sources: []
---

Think of a webhook like a “smart mailman” that delivers only the messages you want, right when they’re ready.  
When your machine‑learning model finishes training or detects an event (e.g., a new data point), it sends a small packet—called the **request body**—to a URL you give it. That packet is just plain text (usually JSON) that tells the recipient what happened and gives any useful details, like “model accuracy = 92%” or “new image ID = 1234.”  

Just as a mailman puts a letter in a mailbox, the webhook’s request body carries the information to the receiver. The receiver can then read it immediately (no polling needed) and act—store the results, trigger another process, or update a dashboard. In system design, this keeps components loosely coupled: each part only knows how to send or receive these lightweight messages, not the whole workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
