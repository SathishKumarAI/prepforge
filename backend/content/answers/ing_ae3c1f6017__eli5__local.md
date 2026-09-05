---
qid: ing_ae3c1f6017__eli5__local
question: 'Explain: Offline Message Handling — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 257
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:36-05:00'
sources: []
---

Imagine you’re at a party where guests sometimes leave the room to get drinks and then come back with messages for others who are still inside. **Offline message handling** is like a waiter who writes down what each guest says while they’re gone, keeps it safe, and delivers it when the recipient returns.

- **Message queue**: The waiter’s notebook—an ordered list where every spoken note waits its turn.
- **Store‑and‑forward server**: The waiter’s desk that holds notes until the right person is back in the room.
- **Client app (WhatsApp)**: The guest who reads and writes messages; it can be “online” (in the room) or “offline” (away).

When you send a message, your phone pushes it to the server. If the recipient’s phone isn’t connected, the server keeps the message in its queue. As soon as the recipient’s device reconnects, the server pulls the queued messages and hands them over—just like the waiter delivering the notes when the guest returns. This guarantees nobody loses a conversation even if they’re temporarily disconnected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
