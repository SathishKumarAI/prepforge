---
qid: ing_1da03b1b28__eli5__local
question: 'Explain: Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 151
output_tokens: 239
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:23:16-05:00'
sources: []
---

Think of an AI model as a chef’s recipe book.  
The *training* phase is like the chef learning how to cook each dish in a huge, noisy kitchen—mixing ingredients, tasting, and tweaking until the flavors are just right.  

Once the recipe is perfected, the chef needs a place to serve customers quickly: that’s the **serving infrastructure**. It’s the restaurant’s front‑end – the waiting area, the menu display, the ordering system, and the kitchen stations all working together so diners get their dish promptly. In AI terms:

* **Inference servers** run the trained model on new data (the dishes being prepared).  
* **Load balancers** spread incoming requests across many servers, preventing any one from getting overwhelmed (like a host directing guests to open tables).  
* **Model versioning** keeps track of which recipe is in use and allows smooth updates.  

Together they turn a polished model into a reliable service that users can access anytime, just as a well‑run restaurant turns great recipes into meals served without delay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
