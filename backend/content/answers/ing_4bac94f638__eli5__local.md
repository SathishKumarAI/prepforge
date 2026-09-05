---
qid: ing_4bac94f638__eli5__local
question: 'Explain: Load Balancers — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 281
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:36:50-05:00'
sources: []
---

Imagine you’re a traffic cop at a busy roundabout where cars (user requests) keep arriving from all directions. A **load balancer** is that cop, deciding which exit lane each car should take so no single road gets jammed.

The trick was learning 30 “traffic rules” before you could design a smooth flow:

1. **Health checks** – check if an exit lane is open.  
2. **Sticky sessions** – keep the same driver on one lane for a trip.  
3. **Round‑robin** – spread cars evenly like a spinning wheel.  
4. **Least‑connections** – send to the lane with the fewest cars waiting.  
5. **IP hash** – use the driver’s license number to pick a lane, keeping order.  
6. **SSL termination** – decrypt traffic once at the cop’s desk.  
7. **Warming up** – give new lanes time to open before sending cars.  
8. … (and 22 more similar rules).

Once you know these, designing a load balancer is like mastering a set of traffic laws: each rule helps keep the roundabout moving smoothly, preventing crashes and ensuring every car reaches its destination quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
