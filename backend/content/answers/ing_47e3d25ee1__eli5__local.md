---
qid: ing_47e3d25ee1__eli5__local
question: 'Explain: Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 266
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:31:00-05:00'
sources: []
---

**Designing a Load Balancer – the “Traffic Cop” of the Web**

Imagine a busy intersection where dozens of cars (user requests) arrive every second. A traffic cop stands at the crosswalk and directs each car to one of several lanes (servers). The goal is twofold: keep all lanes moving smoothly and never let any lane get stuck behind a traffic jam.

A load balancer works exactly like that cop, but for data on the Internet. It sits in front of a group of identical web servers and decides which server should handle each incoming request.  
* **Distribution** (the “how many cars per lane”) can be round‑robin, random, or based on current traffic load—just as a cop might let cars go when a lane is empty.  
* **Health checks** (the cop’s eye on the road) regularly confirm that each server is running; if a server stops responding, the balancer sends all new traffic to the healthy lanes and gradually brings the failing one back online.

So, think of the load balancer as a smart, ever‑watchful traffic cop ensuring every user request reaches a ready server without bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
