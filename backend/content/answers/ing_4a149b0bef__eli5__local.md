---
qid: ing_4a149b0bef__eli5__local
question: 'Explain: 10.8.5. Exercises ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 201
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:34:22-05:00'
sources: []
---

Think of searching for the best recipe in a huge cookbook.  
You start with a handful of promising starters (the “beam width”), say five dishes.  
For each starter you try adding one more ingredient (expanding to the next layer) and keep only the top five new combinations that taste best so far.  
You repeat this: add another ingredient, prune back to five, until the dish is complete.  

In machine‑learning language:

* **Beam width** – how many partial solutions you keep at each step.  
* **Expansion** – generating all possible next words (or tokens) from a current partial sentence.  
* **Pruning** – ranking those candidates by probability and discarding everything but the top beam width.

This keeps the search fast while still exploring several good paths, just like picking the best recipe without tasting every single variation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
