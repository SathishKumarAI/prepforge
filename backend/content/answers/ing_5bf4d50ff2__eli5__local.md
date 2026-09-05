---
qid: ing_5bf4d50ff2__eli5__local
question: 'Explain: Mapping a Key — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 211
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:01:54-05:00'
sources: []
---

Imagine you have a big pizza shop that needs to decide which delivery driver gets each order, but you want the drivers to keep most of their customers even when new drivers join or some leave.  
You give every driver and every customer a number on a circle (like a clock). A customer’s “address” is the point where their number lands. The rule: go clockwise from that point until you hit a driver’s number; that driver takes the order.  

When a new driver appears, only the customers who fall just before him on the circle change hands—everyone else stays with the same driver. If a driver leaves, only the customers behind his spot move to the next driver. This is **consistent hashing**: it spreads work evenly (like pizza orders) and keeps most assignments stable when people join or leave. The “circle” is just an imagined number line wrapped around; each point represents a hash value that maps keys (orders) to servers (drivers).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
