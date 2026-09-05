---
qid: ing_105e4e54b6__eli5__local
question: 'Explain: How UDP Works — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 222
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:15-05:00'
sources: []
---

Think of sending postcards across town.  
**TCP (Transmission Control Protocol)** is like a signed‑off mail service: you hand the postcard to a courier who promises to deliver it. The courier keeps track of every card, asks the recipient to confirm receipt, and if any card gets lost or garbled, it’s automatically resent until the recipient says “Got it!” This guarantees that every message arrives in order and intact—like a reliable file transfer.

**UDP (User Datagram Protocol)** is like dropping a postcard into an open mailbox. You simply toss it out; no one checks whether it reached its destination, nor does anyone tell you if it bounced or got stuck. Because there’s no hand‑shake or confirmation, the process is faster and uses less overhead—ideal for things that can tolerate occasional loss, such as live video streams or online gaming.

So, TCP = “I’ll make sure your message gets here safely,” UDP = “Here’s your message; I won’t keep you waiting.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
