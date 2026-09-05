---
qid: ing_04671d045a__star__local
question: 'Explain: Cons of Horizontal Scaling — Vertical vs Horizontal Scaling |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 371
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:37-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a recommendation engine that had to serve millions of users in real time. The original monolithic deployment was running on a single powerful server, but traffic spiked during holiday sales and the response time grew from 150 ms to over 1 second.

**Task:**  
I needed to scale out the service so it could handle the load while keeping latency under 200 ms, all without rewriting the codebase or exceeding our $300k budget for infrastructure that year.

**Action:**  
We evaluated vertical scaling (adding more RAM/CPU to the existing server) versus horizontal scaling (spinning up multiple instances behind a load balancer). I built a quick prototype with Docker containers and Kubernetes, then ran a benchmark. The vertical option would have required a $120k upgrade for a single node, which also meant a single point of failure. Horizontally, we launched 12 identical pods on spot‑instanced VMs; the autoscaler spun up an additional 8 during peak traffic. We implemented consistent hashing to distribute user sessions across nodes and used Redis Sentinel for shared cache.

**Result:**  
Horizontal scaling cut response time to 140 ms under peak load and improved availability—downtime dropped from 2 hours/month to zero. The cost stayed below $200k thanks to spot pricing, and the architecture now supports future growth without needing a major refactor. I learned that while horizontal scaling adds operational complexity (state management, load balancing), it offers elasticity, fault tolerance, and cost efficiency that vertical scaling can’t match for high‑traffic ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
