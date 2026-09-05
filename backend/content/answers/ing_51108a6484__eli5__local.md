---
qid: ing_51108a6484__eli5__local
question: 'Explain: Summary — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 267
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:45:28-05:00'
sources: []
---

Imagine a coffee‑shop that takes orders online, prints receipts on a shared printer, and sends the order to the kitchen.  
**Consistency** is like every device showing the exact same receipt at once—no one sees “latte” while another sees “cappuccino.”  
**Availability** means you can always place an order; the shop never closes its doors for a moment.  
**Partition tolerance** is the shop’s ability to keep running even if the internet line goes down or the printer jams.

The CAP theorem says a system can only guarantee two of these three at once.  
If your coffee‑shop keeps the door open (availability) and survives a network glitch (partition tolerance), it must let some customers see slightly out‑of‑date receipts (consistency lost).  
Or if you insist on perfect, instant receipts (consistency) and still survive a line break (partition tolerance), the shop may have to close its doors for a few minutes when the line is down (availability sacrificed).  

So, in any real system you pick two of the three comforts; the third will give way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
