---
qid: ing_5c6aa9e2de__eli5__local
question: 'Explain: Worker Table — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 195
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:02:34-05:00'
sources: []
---

Imagine a giant kitchen where many chefs (workers) can each bake a cake, but the recipes (jobs) are too big to fit in one oven. A **Worker Table** is like a recipe board that lists every chef’s current task and how long it will take. The **Distributed Job Scheduler** is the head cook who looks at this board and decides which chefs get which recipes next.

When a new recipe arrives, the scheduler checks the table: if a chef is free or their current cake will finish soon, the new recipe gets assigned to them; otherwise, it waits in a queue. As each chef finishes, they update the table, freeing up space for the next job. This way, many chefs work simultaneously, no one sits idle, and all recipes are completed efficiently—just like a well‑coordinated kitchen keeps customers happy and the ovens humming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
