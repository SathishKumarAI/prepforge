---
qid: ing_811a64d320__eli5__local
question: 'Explain: Delivery Failures — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 209
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:20-05:00'
sources: []
---

Think of Pub/Sub as a “mailroom” that takes messages (letters) from senders and delivers them to subscribers (post‑boxes). A *delivery failure* happens when the mailroom can’t hand the letter over—maybe the post‑box is closed, or the recipient’s address is wrong.  

In system design we treat failures like a safety net:  
1. **Retry** – the mailroom tries again after a short pause, hoping the box opens.  
2. **Dead‑letter queue** – if it still can’t deliver after many tries, the letter goes to a special “lost‑mail” bin for later inspection.  
3. **Back‑pressure** – if too many letters pile up, the mailroom slows down sending so the queue doesn’t overflow.  

By combining retries, dead‑letter handling, and flow control, we keep the system robust even when individual deliveries fail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
