---
qid: ing_a620328784__eli5__local
question: 'Explain: 4.1 Requirement 1: Traffic Distribution — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 191
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:23-05:00'
sources: []
---

Imagine a busy pizza shop that receives orders from many customers at once.  
The **load balancer** is like the manager who decides which oven each order goes to so no single oven gets stuck while others stay empty.  

In this requirement, you must design that manager: it watches incoming traffic (orders) and distributes it evenly across several servers (ovens). The goal is two‑fold:

1. **Traffic distribution** – every server should get roughly the same number of requests, so none becomes a bottleneck.  
2. **High availability** – if one server goes down, the manager quickly re‑routes its traffic to the remaining ovens without losing orders.

Think of it as a round‑robin or weighted system that keeps all ovens busy and always ready for the next batch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
