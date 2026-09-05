---
qid: ing_468bb25a7a__eli5__local
question: 'Explain: Split Services Carefully — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 244
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:28:53-05:00'
sources: []
---

Think of a machine‑learning model as a very smart chef who can whip up any dish from a recipe book (the data).  
The **client** is the kitchen counter where customers place their orders and receive food. The **server** is the chef’s workshop: it has the stove, pans, and all the ingredients, plus the recipe book.  

When you “split services carefully,” you decide which parts of the cooking happen on the counter and which stay in the workshop.  
- **Client‑side tasks** are simple ones that keep the kitchen light—like displaying a menu or showing a preview image.  
- **Server‑side tasks** are heavy, resource‑intensive—like training the chef’s skills (model training), cooking complex dishes (inference on large data), and storing the recipe book (the model weights).  

This separation keeps the counter fast for customers while letting the workshop handle the tough work. It also lets you update recipes without touching the kitchen layout, just like updating a ML model on the server without changing client code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
