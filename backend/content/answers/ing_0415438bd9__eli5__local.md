---
qid: ing_0415438bd9__eli5__local
question: 'Explain: Load Balancing — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 247
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:41:48-05:00'
sources: []
---

Imagine a busy kitchen where chefs (your machine‑learning models) need to cook many orders at once. If every chef keeps working on the same big pot, that pot gets overloaded and slows everyone down. Load balancing is like having a smart waiter who watches how busy each chef is and sends new orders to the least‑occupied one.  

In a computer system, “load” means how much work a server or GPU is doing—requests, data processing, training steps. A load balancer (the waiter) distributes incoming tasks across many machines so no single one gets swamped while others sit idle. It keeps the kitchen running smoothly, improves speed, and prevents crashes.  

Key terms:  
- **Server/GPU** – a computer that runs your model.  
- **Request/Task** – a piece of work (e.g., predicting or training).  
- **Load balancer** – software that assigns tasks to servers based on current load.  

By balancing the load, you get faster responses and higher reliability for your machine‑learning service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
