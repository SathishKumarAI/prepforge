---
qid: ing_f1e0dc3d4e__eli5__local
question: 'Explain: Examples — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 245
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:57:31-05:00'
sources: []
---

**CAP Theorem in a Kitchen‑Delivery Analogy**

Imagine a food‑delivery service that must (1) keep every customer’s order accurate (**Consistency**), (2) always have the right menu items available for delivery (**Availability**), and (3) be able to send orders even if some kitchen stations are down (**Partition tolerance**, i.e., keeping work going when parts of the system can’t talk to each other).

The CAP theorem says you can only guarantee two of these three at once.  
- If you insist on **Consistency** and **Availability**, a power outage that cuts off the order‑tracking system forces every cook to pause—partition tolerance is sacrificed.  
- If you keep the kitchen running during outages (**Partition tolerance**) but still want every order correct, you must sometimes let customers wait for confirmation (losing Availability).  

So, in designing a distributed database, you choose which two properties best fit your service’s priorities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
