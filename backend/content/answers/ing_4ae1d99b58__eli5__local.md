---
qid: ing_4ae1d99b58__eli5__local
question: 'Explain: Candidate — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 265
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:35:34-05:00'
sources: []
---

**Think of a real‑time presence platform like a smart traffic light that always knows where every car is on the road and can tell you “green” (online) or “red” (offline) instantly.**

*Candidate* is a job interview question asking you to design this system.  
You’ll explain how data flows from users’ devices (the cars), through servers that keep a *presence table*—a quick‑lookup list of who’s online—and then push updates to other users or apps when someone changes status.  

Key parts:  
- **Load balancer** – spreads traffic, like multiple roads feeding into the same intersection.  
- **Cache (e.g., Redis)** – stores recent statuses so you don’t need to hit a slow database every time.  
- **Message queue** – passes status changes to interested parties, just as a radio broadcast informs drivers of new traffic lights.  

You’ll discuss scaling (more roads), fault tolerance (backup lights), and how to keep the “green” signal accurate even if someone’s phone disconnects unexpectedly. This analogy keeps the design concrete while covering all essential components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
