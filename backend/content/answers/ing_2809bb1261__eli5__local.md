---
qid: ing_2809bb1261__eli5__local
question: 'Explain: Q: Explain the "Block Table" in the context of vLLM.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 281
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:39:09-05:00'
sources: []
---

Imagine a kitchen where chefs (the GPU) need to pull ingredients (model weights) from many different pantry shelves (memory blocks). The **Block Table** is like the kitchen’s recipe index that tells each chef exactly which shelf holds the part of the ingredient they need for the next dish, and how much space on that shelf is free.  

In vLLM, a “block” is a fixed‑size chunk of GPU memory where pieces of a neural network’s weights live. The Block Table keeps three simple things for every block:  
1. **Block ID** – which physical spot in memory it occupies.  
2. **Size used** – how many weight parameters are already stored there.  
3. **Free space** – how much room remains for new parameters.  

When the model starts, the table is empty; as layers are loaded, chefs consult the table to find a block with enough free space, then write their weights there and update the table’s record. If all blocks are full, a chef must request a new shelf (allocate more GPU memory). This bookkeeping lets vLLM load only the parts of a huge model that are needed for the current request, keeping memory usage low while still serving many requests quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
