---
qid: ing_8b3105764c__eli5__local
question: 'Explain: Load Balancing — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 210
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:17:05-05:00'
sources: []
---

Imagine you’re running a busy pizza shop that gets orders by phone (TCP) and text message (UDP).  

**TCP (phone calls)** is reliable: the waiter confirms each order, keeps track of who’s talking, and will keep trying until the customer answers or the call ends. A load balancer for TCP acts like a dispatcher that knows which cook can handle the current call and routes the conversation to them, ensuring no one gets lost or double‑served.

**UDP (texts)** is quick but “fire‑and‑forget”: you send a text, it may arrive out of order or not at all. The load balancer for UDP simply forwards each message to any available cook without keeping track—just like tossing the text into a shared inbox.  

So, TCP balancing cares about connection state and guarantees delivery; UDP balancing is stateless and just distributes traffic as fast as possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
