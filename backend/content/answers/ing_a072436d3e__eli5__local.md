---
qid: ing_a072436d3e__eli5__local
question: 'Explain: Cons of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 203
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:52:09-05:00'
sources: []
---

Imagine a single giant office desk (vertical scaling) where you keep adding more chairs and shelves to fit everyone’s work. It works until the desk becomes so crowded that it can’t hold any more; the whole room feels cramped, the light gets dimmer, and if one chair breaks the entire setup collapses. That’s vertical scaling: making one machine bigger (more CPU, RAM). Its limits are the physical size of the machine and a single point of failure—if the desk breaks, all work stops. In contrast, horizontal scaling is like adding more desks in the room (several smaller machines). Each desk can be replaced or upgraded independently, and the workload spreads out, so one broken desk doesn’t halt the whole office. Vertical scaling is simpler but reaches a hard ceiling; horizontal scaling offers elasticity and fault tolerance at the cost of more coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
