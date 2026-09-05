---
qid: ing_bf2d4b8e6a__eli5__local
question: 'Explain: TCP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 215
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:39:58-05:00'
sources: []
---

Imagine sending a postcard (UDP) versus mailing a certified letter (TCP).  
With the postcard you just drop it into the mailbox and hope it arrives; if it gets lost or arrives garbled, there’s no way to know or fix it. That’s UDP: fast, low‑overhead, but unreliable.  

A certified letter is like TCP. It first asks “Do you want this?” (handshake). The receiver confirms, the sender sends the data in pieces (segments), and each piece gets an acknowledgement. If a piece never arrives, it’s resent automatically. By the time all pieces are confirmed, the whole message is intact—exactly what most systems need for database writes, file transfers, or web pages.  

So in system design: use UDP when speed matters more than perfection (e.g., live video), and TCP when you must guarantee every byte arrives correctly (e.g., banking transactions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
