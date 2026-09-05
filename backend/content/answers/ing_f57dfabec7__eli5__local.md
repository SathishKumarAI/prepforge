---
qid: ing_f57dfabec7__eli5__local
question: When do you use distributed tracing? — What is Distributed tracing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 259
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:03:24-05:00'
sources: []
---

**Distributed tracing** is like a GPS that follows one message as it travels through many tiny “waypoints” (micro‑services) in a big software system.

Imagine you’re sending a package from your house to a friend’s apartment, but the delivery truck stops at several hubs: a sorting center, a fuel station, a traffic light, and finally the curb. If the package arrives late or gets lost, you look at the GPS log that shows every stop, how long it waited at each hub, and whether any hub was slow or failed.

In software, when many small services talk to each other over a network, a distributed trace records the journey of a single request through all those services. You use it **when you need to debug performance problems or failures that span multiple components**, because it tells you exactly where the delay happened and why.

Key terms:  
- *Micro‑service*: a small, independent program that does one job in a larger system.  
- *Trace*: a recorded path of a request through those micro‑services.  

Just as a delivery GPS helps pinpoint delays, distributed tracing helps developers find bottlenecks in complex, distributed applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
