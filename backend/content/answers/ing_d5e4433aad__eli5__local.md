---
qid: ing_d5e4433aad__eli5__local
question: 'Q: Why is LLM generation slower than classification?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 204
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:13:30-05:00'
sources: []
---

Imagine you’re in a kitchen.  
**Classification** is like choosing a sandwich from a pre‑made menu: the chef already has all ingredients lined up, so picking one and handing it to the customer takes just a few seconds.  

**Generation** is like cooking a custom pizza from scratch. The chef must first decide what toppings to use, then mix dough, spread sauce, add cheese, bake it, slice it, and finally plate it. Each step adds time, and the process can’t be skipped or overlapped because one step depends on the previous one.

A large language model (LLM) works like that pizza chef: it generates text word by word, each new word depending on all earlier ones. The model must run through a complex chain of calculations for every token, so it’s naturally slower than simply looking up an answer in a pre‑built list, which is what classification does.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
