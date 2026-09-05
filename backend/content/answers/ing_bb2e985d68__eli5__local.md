---
qid: ing_bb2e985d68__eli5__local
question: 'Explain: Return the Right Status Code — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 204
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:33:54-05:00'
sources: []
---

**Return the Right Status Code – Webhooks**

Think of a webhook like a messenger who delivers a note to another server and then waits for an answer: “Did you get it?” The *status code* is that answer, written in a short three‑digit number.  
- **200 OK** means the note arrived safely and was read.  
- **400 Bad Request** says the note was garbled (missing data).  
- **500 Internal Server Error** tells the sender something broke on the receiver’s side.

When you design a webhook, you must choose the right code for each situation so the sender knows whether to keep sending, retry later, or stop. It’s like giving clear feedback in a conversation—“All good” vs “Oops, fix this.” This keeps both sides happy and prevents endless loops of mis‑delivered messages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
