---
qid: ing_6b629e0454__eli5__local
question: 'Explain: Where UDP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 205
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:26:11-05:00'
sources: []
---

Imagine you’re sending postcards (UDP) and certified mail (TCP).  
With **UDP** you drop a postcard into the mailbox, hoping it arrives quickly. The system doesn’t keep track of who got it or how many copies were sent; if it’s lost, you just send another one later. That’s fine for live video streams or online gaming where speed matters more than perfect delivery.

With **TCP**, you use certified mail: the post office guarantees each piece arrives, in order, and keeps a record of every delivery. If anything goes missing, the system automatically resends it until the receiver confirms receipt.  
So, UDP is “fast but unreliable,” while TCP is “slow but reliable.” In system design, choose UDP when you can tolerate occasional loss (e.g., real‑time audio) and TCP when every packet must reach its destination in order (e.g., file downloads).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
