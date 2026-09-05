---
qid: ing_fe70b6d4b6__eli5__local
question: 'Explain: Packet Size and MTU — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 249
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:01-05:00'
sources: []
---

Think of sending a big pizza (your data) across a road that can only hold a certain weight at a time – that limit is the **Maximum Transmission Unit (MTU)**. If the pizza is heavier than one truck’s cargo, it must be split into smaller boxes; each box becomes a **packet**.

With **TCP**, the sender waits for a “thank‑you” (acknowledgement) after each box arrives before sending the next. It’s like ordering pizza delivery: you want to make sure every slice reaches the table intact and in order, so you’ll stop if something goes missing or gets garbled.

**UDP** is the same road but no thank‑you notes are sent back. The sender just drops boxes into the mailbox and keeps going; some may be lost or arrive out of order, but the process is faster because there’s no waiting.

So MTU limits packet size, TCP trades speed for reliability, while UDP opts for speed at the cost of certainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
