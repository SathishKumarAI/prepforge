---
qid: ing_785908e539__eli5__local
question: 'Explain: Pending Jobs (Not Started) — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 284
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:29-05:00'
sources: []
---

Imagine you’re running a huge pizza‑making factory that has dozens of ovens (the “workers”) and a long list of orders (the “jobs”). A **Distributed Job Scheduler** is like the factory’s smart kitchen manager who keeps track of every order, decides which oven can start cooking it next, and tells the oven when to begin.  

When an order is in the **“Pending Jobs (Not Started)”** queue, it means the pizza has been placed on the list but none of the ovens have begun baking it yet—perhaps all ovens are busy or the order needs a special dough that only certain ovens can handle. The scheduler looks at the pending list, checks which oven is free and suitable, then assigns the job, turning “pending” into “running.”  

Key terms:  
- **Job** = a task (e.g., bake a pizza).  
- **Worker/Node** = a resource that executes jobs (an oven).  
- **Scheduler** = the system that assigns pending jobs to workers.  

The scheduler’s job is like a smart kitchen manager ensuring every order gets baked as soon as an appropriate oven becomes available, keeping the factory running smoothly and efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
