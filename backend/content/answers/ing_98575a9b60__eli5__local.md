---
qid: ing_98575a9b60__eli5__local
question: 'Explain: Build the task-lifecycle core of an annotation platform. Start
  simple; I''ll add requirements: consensus of k annotators, then priority re-review,
  then annotator cooldowns.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 241
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:39:12-05:00'
sources: []
---

Think of the annotation platform as a kitchen where recipes (tasks) need to be cooked by chefs (annotators).  
1. **Task‑life cycle** – When a new recipe arrives, it sits on the counter waiting for chefs.  
2. **Consensus of k annotators** – The recipe is considered “ready” only after at least *k* chefs have each written their own version of the instructions and agreed that they’re all correct (their ratings match). That’s the first checkpoint.  
3. **Priority re‑review** – If a chef notices something off, he flags it. Flagged recipes jump to the front of the line so another group of chefs can double‑check them before final approval.  
4. **Annotator cooldowns** – After a chef finishes a recipe, he must rest for a short period (cooldown) before picking up another one, preventing fatigue and ensuring fresh eyes on each new task.  

In this way the kitchen keeps a steady flow of accurately cooked recipes while giving chefs time to recover and re‑review when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
