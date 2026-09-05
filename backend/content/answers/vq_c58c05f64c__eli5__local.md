---
qid: vq_c58c05f64c__eli5__local
question: What are the complex data types in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 189
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:04-05:00'
sources: []
---

Think of Hive’s complex data types like a toolbox for building intricate LEGO creations.  
* **Array** is a single‑row list—think of a row of identical blocks that you can walk through one by one.  
* **Map** pairs each block with a label, like stickers on the blocks; you can look up a block by its name instead of its position.  
* **Struct** is a mini‑set of different colored blocks glued together into one unit—each color represents a field (name, age, etc.).  

You can mix them: an Array of Structs lets you store many people’s records in one column; a Map of Arrays lets each key hold its own list. These “complex” types let Hive keep related pieces of information together without spreading them across many columns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
