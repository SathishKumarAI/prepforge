---
qid: ing_c5eb18e7e7__eli5__local
question: How do you decide when to stop prompt engineering and fine-tune instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 246
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:49:41-05:00'
sources: []
---

Think of building a recipe book.  
**Prompt engineering** is like tweaking the wording of a single dish—adding “more salt” or “cook for ten minutes longer.” It’s quick, cheap, and you can test changes instantly.  

**Fine‑tuning** is like hiring a new chef to write an entirely new section of the cookbook: it costs time, data, and money, but gives the whole book a consistent style and deeper flavor.

You stop tweaking prompts when:

1. **The same edits keep giving similar results** – you’re stuck in a loop of small changes that don’t improve quality.
2. **Your task needs deeper understanding or many custom rules** – prompting can’t capture all nuances, so a new model trained on your data (fine‑tuned) will perform better.
3. **You have enough labeled examples and resources** – fine‑tuning becomes worthwhile once you can supply a few hundred to thousands of correct responses.

So, keep prompt engineering for quick fixes; switch to fine‑tuning when the problem is too complex or repetitive for simple wording changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
