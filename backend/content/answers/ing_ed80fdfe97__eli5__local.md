---
qid: ing_ed80fdfe97__eli5__local
question: 'Explain: Execution Service — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 227
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:27-05:00'
sources: []
---

**Execution Service – a Distributed Job Scheduler**

Imagine you’re running a large kitchen where chefs (workers) must prepare many dishes (jobs). The *execution service* is the head chef’s planner: it decides who gets which dish and when. In a distributed system, this planner lives on several computers so no single one can get overwhelmed.

**Key parts of the planner**

- **Job queue** – a list where every task waits its turn.  
- **Scheduler** – looks at the queue, reads each job’s “priority” (how soon it needs to finish) and assigns it to an available chef.  
- **Worker nodes** – the chefs that actually run the code.  
- **Heartbeat monitor** – keeps checking whether a chef is still alive; if a chef stops, its unfinished dish is put back in the queue.

The planner’s job is to keep the kitchen humming: tasks move from waiting to running, and any failure is caught quickly so the whole kitchen stays productive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
