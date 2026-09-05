---
qid: ing_185563d6d4__eli5__local
question: 'Explain: provide a bit more Precision into what — The Many Meanings of
  Event-Driven Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 261
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:14:12-05:00'
sources: []
---

Think of a city that runs on traffic lights and alerts instead of a single traffic controller.  
**Event‑driven architecture (EDA)** is like that city: every change— a car passing an intersection, a delivery truck arriving, or a sensor detecting heat—creates an *event* (a small message).  
Other parts of the system *listen* for those events and react in their own way, without needing to ask the original sender what to do next.  

- **Event**: a notification that something happened (e.g., “OrderPlaced”).  
- **Publisher**: the component that emits the event.  
- **Subscriber**: any component that receives and acts on it.  
- **Bus/Message broker**: the invisible highway that carries events between publishers and subscribers.  

In practice, EDA can mean a simple publish‑subscribe bus, a complex saga of microservices coordinating through messages, or even a single function reacting to cloud events. The common thread is *reacting to change automatically* rather than polling or waiting for a central command. This loose coupling lets each part evolve independently while still working together smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
