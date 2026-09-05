---
qid: ing_22a0d7db06__eli5__local
question: 'Explain: In-Progress Jobs — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 261
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:31:07-05:00'
sources: []
---

Imagine you’re running a busy kitchen where many chefs (workers) can cook dishes at the same time. The **in‑progress jobs** are the dishes currently being prepared. A **distributed job scheduler** is like the head chef’s whiteboard that tells every chef what dish to start, when to pause, and who takes over if someone stops cooking.

1. **Job registry** – a shared notebook that lists all orders (jobs) with their status: queued, running, or finished.  
2. **Worker discovery** – each chef checks the notebook for available tasks; if no task is free, they wait.  
3. **Heartbeat signals** – chefs send short “I’m still cooking” messages. If a message stops, the head chef marks that dish as failed and re‑queues it for another chef.  
4. **Load balancing** – the whiteboard assigns new dishes to the least busy chef, keeping all ovens (compute nodes) used efficiently.

This system keeps every dish moving smoothly, never losing track of which chefs are doing what, and automatically rescheduling any that drop out—just like a well‑coordinated kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
