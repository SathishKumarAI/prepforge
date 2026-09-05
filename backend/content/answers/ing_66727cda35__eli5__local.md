---
qid: ing_66727cda35__eli5__local
question: Explain speculative decoding. Why does it speed decode up, when does it
  not, and how is output quality preserved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 235
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:34-05:00'
sources: []
---

**Speculative decoding** is like a chef who pretends to taste every possible dish before the kitchen finishes cooking.  
When an AI language model wants to finish a sentence, it can *speculate*—it first guesses several likely next words and runs those guesses through its internal “taste test” (a quick calculation). If the guesses look good, it keeps only the best one; if not, it goes back and tries again.  

Because the chef checks many possibilities at once, the kitchen (the model) spends less time waiting for each word to finish cooking. This speeds up decoding when the model’s internal calculations are fast enough to handle the extra guesses in parallel.  
If the model is already slow or the hardware can’t keep up with the extra work, the speculation adds overhead and may even slow things down.  

The chef never lets a bad guess become the final dish: after each round of speculation, the model discards unpromising words, so the output quality stays as good as if it had cooked each word one by one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
