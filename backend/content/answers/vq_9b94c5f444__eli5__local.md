---
qid: vq_9b94c5f444__eli5__local
question: Spark transformations & actions are evaluated lazily?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 209
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:37-05:00'
sources: []
---

Think of Spark as a chef in a busy kitchen.  
When you give the chef a recipe (a **transformation**), she writes down every step—chop, sauté, season—but doesn’t actually start cooking yet. She just notes *what* needs to be done and how each step depends on the previous ones.  

Only when someone orders a dish (an **action**, like `count` or `show`) does the chef finally walk through the written steps, pulling ingredients from the fridge only as they’re needed.  
Because she doesn’t cook until the order arrives, Spark avoids doing work that might never be used and can combine many notes into one efficient cooking plan.

**Transformation:** a recipe step that creates a new RDD/DataFrame but does not compute data immediately.  
**Action:** a request that triggers Spark to run all pending transformations and produce a result or side‑effect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
