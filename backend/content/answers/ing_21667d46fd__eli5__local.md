---
qid: ing_21667d46fd__eli5__local
question: 'Explain: Horizontal Scalability — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 236
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:29:39-05:00'
sources: []
---

Think of a notification service as a busy pizza‑shop that sends orders (messages) to customers.  
**Horizontal scalability** is like adding more pizza‑shops side by side instead of making one shop bigger. Each new shop can take its own slice of the workload, so if orders double, you just open another shop and keep traffic flowing.

In practice:

1. **Multiple servers** – each runs the same code (the “pizza‑shop” software).  
2. **Shared database or message queue** – like a central kitchen that all shops pull from; it keeps the order list consistent.  
3. **Load balancer** – acts as the street sign directing customers to whichever shop is least busy, ensuring no single shop gets overwhelmed.  

When traffic spikes, you spin up more servers (shops). The load balancer spreads the requests automatically. If a shop crashes, others keep serving orders, so the service stays online. This “add‑more‑shops” idea is horizontal scalability: scaling out by adding identical units rather than upgrading one unit’s power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
