---
qid: vq_54d18035da__eli5__local
question: what are the parameters of mappers and reducers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 239
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:11:46-05:00'
sources: []
---

Think of a data‑engineering job like making a huge pot of soup from many different ingredient bags (the raw files).  
The **mapper** is the worker who opens each bag, pulls out the pieces that belong in the soup, and labels them with a “key” (like a flavor tag). It doesn’t care how big the bag is or how many flavors it has—just that it can read the bag’s contents and spit out pairs of *key–value*.

The **reducer** is the worker who receives all the labeled pieces for one particular key, mixes them together, and writes a single result (the final soup portion).  
Its parameters are simply:
1. **Key** – what you’re grouping by (e.g., “fruit type”).
2. **List of values** – all pieces that share that key.
3. **Output** – one summarized value per key (e.g., total quantity).

So, mappers read and tag data; reducers gather each tag’s items and combine them into a single output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
