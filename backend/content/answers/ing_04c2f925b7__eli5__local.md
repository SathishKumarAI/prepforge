---
qid: ing_04c2f925b7__eli5__local
question: 'Explain: F1: Judge prompt drift goes unnoticed — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 226
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:43:07-05:00'
sources: []
---

Think of an AI system as a chef following a recipe (the “prompt”).  
If the ingredients change slightly without anyone noticing—say the salt is a bit stronger or the oven temperature rises—the dish will taste off even though the chef still follows the exact same steps. That’s **prompt drift**: the input the AI receives shifts subtly over time, but the system keeps working as if nothing changed.

Now imagine we want to keep the kitchen running smoothly (continuous delivery). Every time a new batch of ingredients arrives, we first run a quick taste‑test in a separate tasting room—this is the **evaluation gate**. If the dish still meets our quality standard, we let it go out to customers; if not, we stop the release and fix the recipe.

So “Eval Gated CI/CD” means: before every new AI version goes live, automatically test it with fresh data. If the drift makes it fail the test, the pipeline halts—preventing unnoticed errors from reaching users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
