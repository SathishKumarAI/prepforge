---
qid: ing_1921c373be__eli5__local
question: 'Explain: Forces — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 248
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:52-05:00'
sources: []
---

**Pattern: Server‑Side Service Discovery**

Imagine a bustling airport where each flight (service) has its own gate, but the gates are always shuffled to keep security tight. Passengers (client programs) need to know which gate a particular flight is at before they can board. Instead of memorizing every gate number, passengers go to a **central information desk** that keeps an up‑to‑date list of all flights and their current gates.

In the same way, a *server‑side service discovery* pattern lets many small software services (the “flights”) register themselves with a central registry. When another service wants to call one of them, it asks the registry for the current network address (“gate”) instead of hard‑coding it. This keeps services loosely coupled and allows them to move or scale without breaking others.  

*Unavoidable terms defined*:  
- **Service**: A small program that offers a specific function over a network.  
- **Registry**: The central list that records where each service is currently running.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
