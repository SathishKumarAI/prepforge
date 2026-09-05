---
qid: ing_6abd3eced9__eli5__local
question: 'Explain: What we''re exploring next — Rebuilding Devin for Claude Sonnet
  4.5: Lessons and Challenges | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 321
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:25:12-05:00'
sources: []
---

Imagine you’re a chef who knows how to make a classic soup (Devin), but now the restaurant wants a new recipe that uses a fancy, faster stove (Claude Sonnet 4.5). Re‑building Devin is like rewriting the cookbook so it tells the stove exactly what to do—what ingredients to add, when to stir, and how long to simmer—while still producing the same tasty dish.

**Key lessons:**  
1. **Know the new stove’s quirks** – Claude 4.5 has different “commands” (API calls) than older versions, so we must translate Devin’s instructions into that language.  
2. **Keep the flavor consistent** – Even though the cooking steps change, the final answer should still feel natural and helpful.  
3. **Test on a small batch first** – Run a few example questions through the new setup to spot any mis‑pronounced words or missing ingredients.

**Challenges:**  
- The new stove can “forget” context if we give it too many unrelated instructions at once, so we need tighter, clearer prompts.  
- Claude 4.5 is faster but less tolerant of vague wording; our prompts must be precise.  

By treating the rebuild like a recipe rewrite—respecting both the original taste and the new kitchen’s rules—you’ll get Devin working smoothly on the upgraded stove.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
