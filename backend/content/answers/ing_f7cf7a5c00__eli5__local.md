---
qid: ing_f7cf7a5c00__eli5__local
question: What is the KV cache and why does it make generation fast?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 196
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:26-05:00'
sources: []
---

Think of a language model as a chef that makes sentences by looking up ingredients (words) in a pantry.  
The **KV cache** is like a memo pad the chef keeps on their counter: after they fetch an ingredient once, they write down its *key* (the identity of the word) and *value* (all the useful information about it). When the next sentence part needs that same word again, the chef simply glances at the memo instead of rummaging through the whole pantry.  

In a transformer model, “keys” and “values” are internal tensors that describe how each token relates to every other. By storing them in the cache during generation, the model re‑uses those computations for subsequent steps, avoiding repeated heavy matrix multiplications. This shortcut keeps the cooking (generation) quick and smooth, especially when producing long text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
