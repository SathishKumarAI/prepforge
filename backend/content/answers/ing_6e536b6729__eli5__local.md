---
qid: ing_6e536b6729__eli5__local
question: 'Explain: 4.2. Server-Side Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 204
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:31:22-05:00'
sources: []
---

**Service discovery** is like a city’s phone book for computers.  
Imagine every micro‑service (a small program that does one thing) has its own “phone number” – an IP address and port where it can be reached. When the city’s traffic lights, police dispatch, or weather station need to call another service, they don’t have to remember each number. Instead, they look up the name in a shared phone book (the discovery system).  

The discovery system keeps a live list of all services: when a new one starts, it writes its address into the book; when it stops, it deletes the entry. Clients query this book just before calling, so they always get the current, healthy location without hard‑coding addresses. This dynamic lookup lets servers scale, replace, or move freely while clients stay connected seamlessly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
