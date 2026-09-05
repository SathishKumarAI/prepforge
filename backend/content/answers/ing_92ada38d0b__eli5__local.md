---
qid: ing_92ada38d0b__eli5__local
question: 'Explain: What UDP Provides — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 190
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:30:20-05:00'
sources: []
---

Imagine you’re sending postcards (UDP) versus mail‑order packages (TCP).  
With a postcard, you drop it into the mailbox and hope it reaches the friend’s house. You don’t ask for a receipt; if it gets lost or arrives late, you just send another one. That’s UDP: it delivers packets quickly but offers no guarantee they arrive, in order, or without errors.

A package, on the other hand, comes with tracking, signatures, and a promise that it will be delivered or returned. If something goes wrong—say the box is damaged—the sender gets notified and can resend. That’s TCP: it checks every packet, asks for confirmation, and resends anything missing so the data arrives intact and in order.

So UDP trades reliability for speed; TCP trades speed for safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
