---
qid: ing_caecbf010f__eli5__local
question: 'Explain: Connection Close — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 253
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:43-05:00'
sources: []
---

Think of a **chat room** where people send messages.

*TCP (Transmission Control Protocol)* is like a **handshake‑based phone call**. Before you talk, the caller dials, the receiver answers, and both keep the line open until one side says “I’m done.” The network guarantees every word arrives in order; if something slips, it’s redialed. Closing is clean: both sides exchange a polite “goodbye” so everyone knows the call truly ended.

*UDP (User Datagram Protocol)* is like a **text‑messaging app** that drops a single note and forgets about it. There’s no waiting for an answer; you just send the message and move on. Because there’s never an explicit “hang up,” the network can’t tell when a party has finished sending or receiving—messages may arrive late, out of order, or not at all.

In system design, choose TCP when you need reliable, orderly communication (e.g., file transfer). Choose UDP when speed matters and occasional loss is acceptable (e.g., live video).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
