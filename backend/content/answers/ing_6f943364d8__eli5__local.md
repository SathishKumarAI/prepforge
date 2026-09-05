---
qid: ing_6f943364d8__eli5__local
question: 'Explain: Anatomy of a Webhook Request — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 254
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:33:02-05:00'
sources: []
---

Think of a webhook like a “post‑it” that a website sticks on your desk, but it’s actually a tiny message in the cloud.  
**Sender (the site)**: pushes data to **Receiver (your server)** whenever something happens—just as you’d drop a note when you finish a task.  
**URL (address)**: is the mailbox where the note lands; it tells the sender exactly where to deliver.  
**HTTP POST request**: the letter itself, sent in the body of the message. It’s usually JSON or XML so both sides understand the format.  
**Headers**: little labels on the envelope—`Content‑Type: application/json`, `X‑Signature` (a secret code that proves it really came from the sender).  
**Payload**: the actual content—the data you care about, like “user 123 signed up.”  

When your server receives this request, it reads the headers to confirm authenticity, parses the payload, and then runs whatever logic you programmed—just as you’d read a note, verify who wrote it, and act on its instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
