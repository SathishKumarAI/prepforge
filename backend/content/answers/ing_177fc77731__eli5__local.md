---
qid: ing_177fc77731__eli5__local
question: 'Explain: Response Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 230
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:13:01-05:00'
sources: []
---

Think of an API (Application Programming Interface) as a **restaurant menu** for software.  
Just like a waiter takes your order, passes it to the kitchen, and brings back a finished dish, an API lets one program ask another for data or a service without knowing how that service is cooked inside.

In machine‑learning systems, the “kitchen” might be a deep‑learning model running on a server. The API defines the *menu items* (endpoints) you can order—e.g., “classify image,” “predict next word”—and the *ingredients* (input format) and *plating* (output format).  
When your app calls `POST /predict` with an image, the API receives it, hands it to the model, waits for the result, and returns a clean JSON response.  

So an API is simply a well‑written set of rules that lets different software components talk to each other, hiding the complexity inside while exposing only what’s needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
