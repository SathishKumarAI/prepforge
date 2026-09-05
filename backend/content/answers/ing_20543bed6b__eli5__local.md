---
qid: ing_20543bed6b__eli5__local
question: 'Explain: 4.3 Handling failure of Jobs — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 241
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:27:26-05:00'
sources: []
---

Imagine you’re running a big kitchen where dozens of chefs (workers) prepare dishes (jobs). The head chef is the **scheduler**: she tells each cook what to make, when, and keeps track of who’s busy.  

If a cook drops a dish or gets sick, the head chef immediately assigns that order to another free cook—this is **failure handling**. She also knows which dishes need to be made in what order (dependencies) and makes sure no two cooks try to use the same ingredient at once (resource conflicts).  

Key terms:  
- **Job** – a unit of work, like a dish.  
- **Worker** – a machine that runs jobs.  
- **Failure** – when a worker crashes or a job errors out.  
- **Retry policy** – how many times the scheduler will try again and with what delay.  

By treating each failure as a “dish spill” that can be quickly re‑assigned, a distributed scheduler keeps the kitchen running smoothly even when some cooks falter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
