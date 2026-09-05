---
qid: ing_48214c3315__eli5__local
question: 'Explain: 10.8.4. Summary ¶ — 10.8. Beam Search \u2014 Dive into Deep Learning
  1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 196
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:31:23-05:00'
sources: []
---

Beam search is a clever shortcut for finding the best sentence when a model can generate many possibilities.  
Imagine you’re at a crossroads that splits into several paths. Instead of walking down every single path (which would take forever), you keep only the most promising few—say the five “best” ones—at each turn. You let those five grow, then prune again to keep only the top five, and so on until you reach your destination.  

In language models, each word choice is a branch; beam search keeps only *beam width* (e.g., 5) of the most likely partial sentences at every step.  
The *probability* of a sentence is how confident the model feels about that sequence. By pruning aggressively, beam search finds a very good sentence quickly without exploring everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
