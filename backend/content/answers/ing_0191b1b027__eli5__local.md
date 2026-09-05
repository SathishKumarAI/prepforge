---
qid: ing_0191b1b027__eli5__local
question: Which Pattern Should You Choose? — Design Load Balancer | System Design
  Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 236
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:37:27-05:00'
sources: []
---

Imagine you’re running a big cafeteria that serves many customers at once.  
Each customer orders a dish (a machine‑learning inference request) and the kitchen has several chefs (model servers).  
You need a **waiter** who decides which chef each order goes to so no one gets stuck in line.

In system design, that waiter is called a **load balancer**.  
The most common pattern is the *round‑robin* waiter: she hands out orders one by one to every chef, keeping everyone busy.  
If some chefs are slower (e.g., a model that needs more GPU time), you can switch to a *least‑connection* waiter who gives new orders to the chef with the fewest current plates.

Choosing between these patterns is like picking the right waiter for your cafeteria: round‑robin works well when all chefs are equal, while least‑connections shines when some chefs have heavier workloads.  
The goal is always the same—keep every order moving smoothly and finish faster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
