---
qid: ing_ff2377ad31__eli5__local
question: 'Explain: KV cache — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 225
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:19:07-05:00'
sources: []
---

Think of an LLM as a chef making a stew, and each word it “serves” is a batch of ingredients.  
When the chef (the model) needs to know how much salt or spice to add next, it first looks at the *keys*—a quick snapshot of what’s already in the pot (previous words). The *values* are the actual amounts of each ingredient that were used earlier.  

Instead of re‑cooking the whole stew every time a new word is added, the chef keeps a small notebook (the KV cache) with the keys and values from the last few batches. When a new word comes in, the model just flips to the right page, reads the relevant key, pulls out the associated value, and mixes it into the current calculation.  

So the KV cache is like that handy notebook: it stores past “key–value” pairs so the LLM can quickly reference earlier context without recomputing everything from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
