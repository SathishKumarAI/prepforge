---
qid: ing_5a29fa00f4__fp__local
question: 'Explain: The Cost of Context Switching — Concurrency vs Parallelism - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 329
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:15:55-05:00'
sources: []
---

**Cost of Context Switching – Concurrency vs Parallelism**

At the heart of any multitasking system is *resource contention*: a single CPU core can execute only one instruction stream at a time, yet we wish to give the illusion of many “tasks” running concurrently. The fundamental operation that enables this illusion is **context switching**—saving the state of the current task and restoring another’s.  

In a purely concurrent setting (single‑core), every switch incurs a *latency* proportional to the size of the context (registers, stack pointers, page tables). This latency consumes CPU time that could otherwise be spent on useful work, leading to **overhead** that grows linearly with the number of switches. In contrast, parallelism distributes tasks across multiple cores; each core runs its own context continuously, so switches are rare and their cost negligible.

The deeper principle is *optimization*: we trade off *parallel resources* (more cores) against *algorithmic overhead*. If a task’s critical path is short relative to the switch latency, concurrency pays off; if not, parallelism wins. A non‑obvious insight: **context switches are not just time costs—they also cause cache pollution**. Each switch flushes working sets from L1/L2 caches, forcing costly memory accesses that dominate in data‑intensive workloads. Thus, minimizing context switches is tantamount to preserving spatial locality, a subtle but powerful lever often overlooked in concurrency design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
