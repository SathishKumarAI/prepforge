---
qid: ing_585bebff95__eli5__local
question: 'Explain: Design a Distributed Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 259
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:32-05:00'
sources: []
---

Imagine a big kitchen where many chefs (servers) must prepare dishes (jobs). A head chef (scheduler) tells each cook when to start, what ingredients they need, and how long the dish will take.  
**Distributed job scheduler** is that head chef spread across several kitchens so no single kitchen gets overwhelmed or stops working if one breaks down.

Key parts:

1. **Job queue** – a shared list of recipes waiting to be cooked.  
2. **Worker nodes** – chefs who pull a recipe, cook it, and report back when done.  
3. **Health checker** – keeps an eye on each chef; if a chef stops replying, the head chef moves their dishes to another chef.  
4. **Load balancer** – decides which chef gets which dish so all kitchens stay busy but not overworked.  

When a new recipe arrives, the scheduler places it in the queue, watches the chefs’ status, and hands each recipe to a healthy chef. If a chef crashes, its unfinished dishes are reassigned automatically. This keeps cooking running smoothly even if some kitchens fail or become busy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
