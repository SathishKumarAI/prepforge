---
qid: ing_3d9909c58e__eli5__local
question: 'Explain: Least bandwidth method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 238
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:27-05:00'
sources: []
---

**Load balancing** in machine‑learning systems means sharing the work of training or serving models among many computers so that no single one gets overloaded and everything runs smoothly.

*Think of a busy pizza shop.*  
The kitchen has several ovens (the servers). If every order goes to just one oven, it will heat up, slow down, and some pizzas might burn. A smart manager (the load balancer) routes each new order to the oven that’s currently least busy or most efficient. This keeps all ovens working at a good pace, reduces wait times, and prevents any single oven from overheating.

In ML, the “orders” are data batches or inference requests; the “ovens” are GPU/CPU nodes. The load balancer monitors each node’s current workload (CPU usage, memory, queue length) and forwards new tasks to the node that can handle them fastest. The result is faster training or prediction, fewer errors, and better use of resources—all without a single point of failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
