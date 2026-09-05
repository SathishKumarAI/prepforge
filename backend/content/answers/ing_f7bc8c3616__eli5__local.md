---
qid: ing_f7bc8c3616__eli5__local
question: Exact-match assertions are useless here. What do you actually assert on
  an LLM response?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 199
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:14-05:00'
sources: []
---

Think of a large‑language model (LLM) like a very knowledgeable but sometimes unpredictable storyteller.  
When we test it, we don’t say “the story must read exactly this sentence” – that would be impossible because the model can word things differently and still get the point across.  

Instead, we ask it to **give the right idea or answer**. We check:  
*Did it mention all the required facts?*  
*Does its conclusion follow from those facts?*  
*Is the tone appropriate?*  

So we assert on *content relevance, logical consistency, and correctness of information*, not on exact wording. It’s like verifying a recipe’s outcome (the dish tastes right) rather than demanding every single ingredient be listed in the same order. This lets us trust the model’s useful output while accepting natural variation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
