---
qid: ing_6032ce984f__eli5__local
question: 'Explain: Summary — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 204
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:08:59-05:00'
sources: []
---

Think of a machine‑learning system like a busy kitchen. The **client** is the waiter who takes orders (requests for predictions) from diners and hands them to the chef. The **server** is the chef’s workstation where all the cooking happens—data are pre‑processed, models are loaded, and predictions are cooked up.  

When the waiter brings an order, it travels over a hallway (the network). On the server side, a “recipe book” (the model) tells the kitchen how to combine ingredients (input features) into a dish (output prediction). After the chef finishes, the dish is sent back down the hallway to the waiter, who delivers it to the diner.  

In this setup, the client stays lightweight—just sending and receiving messages—while the server does all the heavy computation, keeping the system fast, secure, and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
