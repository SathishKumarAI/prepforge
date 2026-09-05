---
qid: ing_8c04a840cb__eli5__local
question: 'Explain: Why does in-context learning work at all? The model''s weights
  don''t change.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 231
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:25-05:00'
sources: []
---

Think of a huge cookbook (the model’s weights) that has been written with every possible recipe you could imagine. The pages are fixed—no page is ever rewritten when you cook.  
When you give the chef a new dish to make, you show her a handful of sample recipes and say “now write me one more like these.” She flips back to the cookbook, looks at all those examples, and uses the patterns she has already learned (flavors, ingredient pairings, cooking steps) to predict what should come next.  
In in‑context learning the prompt is that set of example recipes; the model’s “attention” mechanism reads them, then generates the continuation by drawing on the knowledge stored in its weights. The weights stay exactly as they were after training—only the input context changes, and that alone lets the model produce new, sensible outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
