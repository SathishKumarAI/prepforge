---
qid: ing_aaec540142__eli5__local
question: 'Explain: Interviewer — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 256
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:09:01-05:00'
sources: []
---

Imagine you’re running a bakery that sells cupcakes all over the city. Every time someone buys a cupcake, you need to keep an accurate count of how many have been sold so far. But instead of having one master counter that everyone looks at— which would get stuck if too many people tried to update it at once—you give each shop its own little counter. When a shop sells a cupcake, it increments its local counter. Periodically, all the shops send their counts back to a central “big counter” that simply adds them together to know the total sales.

In this analogy:  
- **Each shop’s counter** is like a *local replica* in a distributed system.  
- **Sending updates back to the center** is similar to *replicating data* between servers.  
- The **central big counter** represents the *global view* that must stay consistent even when many shops update at once.

The challenge for an interviewee is to design how these local counters sync, handle network delays, and ensure no cupcake sale gets double‑counted or lost—just like a distributed counter system keeps data accurate across many machines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
