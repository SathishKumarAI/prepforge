---
qid: ing_170f6e1db5__eli5__local
question: 'Explain: Server-Sent Events (SSE) — Long Polling vs WebSockets - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 224
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:12:18-05:00'
sources: []
---

Think of a chat room where you want to see messages as soon as they arrive.  
**Long‑polling** is like sending a letter asking, “Give me the newest message when it’s ready.” The server keeps your request open until a new message appears, then replies with that one and closes the connection. Your client must ask again for the next message, so there’s a brief pause between messages.

**Server‑Sent Events (SSE)** is like subscribing to a newsletter: you sign up once, the publisher pushes every new article straight to your mailbox without you asking each time. The connection stays open and the server streams plain text updates as they happen.

**WebSockets** are like a phone line that stays on all the time; you can send and receive any data back and forth instantly, just like a live conversation.

So: long‑polling = “ask, wait, reply”; SSE = “subscribe, push”; WebSocket = “bidirectional talk.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
