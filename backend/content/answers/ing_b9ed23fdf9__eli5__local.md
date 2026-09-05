---
qid: ing_b9ed23fdf9__eli5__local
question: 'Explain: The "Nines" of Availability — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 232
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:54-05:00'
sources: []
---

Imagine you have a phone line that should never go silent while you’re trying to call your grandma. “Availability” tells us how often the line is actually up and working, measured in *nines*.  
*One nine (99 %)* means the line can be down for about 3 days a year—too many missed calls.  
*Two nines (99.9 %)* lets it go silent for roughly 8‑10 hours a year—still noticeable.  
*Three nines (99.99 %)* drops the downtime to just under 1 hour a year—most people won’t notice.  
*Four nines (99.999 %)* shrinks it to about 5 minutes a year—rarely missed.  
In system design, engineers aim for higher nines by adding backup servers, load balancers, and redundant networks so the service stays up almost all the time. Each extra nine is like adding another safety net that catches failures before they reach you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
