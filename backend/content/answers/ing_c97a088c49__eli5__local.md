---
qid: ing_c97a088c49__eli5__local
question: 'Explain: Frontend — The WhatsApp Architecture Facebook Bought For $19\u00a0Billion
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 227
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:54:31-05:00'
sources: []
---

Imagine a gigantic library that has to answer millions of questions every second—only this library is the *WhatsApp* service, and its shelves are built by Facebook when it bought WhatsApp for $19 billion.  

At the front of the library (the **frontend**) there’s a fast, lightweight “front desk” that lets users send messages instantly. This desk isn’t a single computer; it’s a *cluster*—many identical desks working together so that if one gets busy or breaks, another steps in without delay. Each desk talks to a huge back‑office of servers that store the actual conversations, handle encryption, and keep track of who is online.  

The key trick for **high scalability** is that each desk can talk to many back‑office servers through a *load balancer*—like a smart receptionist that routes visitors to the least crowded room. Because the desks are identical and interchangeable, adding more of them lets the library grow to serve billions of users without slowing down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
