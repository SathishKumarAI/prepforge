---
qid: ing_699f785d03__eli5__local
question: 'Explain: Memory — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 229
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:07-05:00'
sources: []
---

Imagine your machine‑learning model is a chef who needs to remember recipes while cooking a huge banquet.  
**Memory** is the pantry where the chef stores ingredients (data and parameters). The more shelves you have, the more dishes the chef can keep fresh in mind at once.  

In practice, a neural network’s “pantry” consists of two main parts:

* **Model weights** – the secret spice blend that tells the model how to turn input into output.  
* **Training data** – the pantry of examples the chef uses to learn new recipes.

When you design an ML system, you decide how big this pantry can be (RAM, GPU memory, or disk space). Too small a pantry forces the chef to throw away ingredients (swap to slower storage), slowing the banquet. A larger pantry lets the chef keep everything on hand and finish faster.  

So, think of memory as the kitchen’s storage: enough space keeps the cooking process smooth and speedy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
