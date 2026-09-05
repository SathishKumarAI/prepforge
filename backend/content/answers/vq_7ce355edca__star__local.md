---
qid: vq_7ce355edca__star__local
question: Which of the following is not an advantage of a client/server model ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 353
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:22-05:00'
sources: []
---

**Situation:**  
During my senior year capstone, my team was tasked with designing an architecture for a real‑time stock‑trading platform that needed to support thousands of concurrent users while guaranteeing low latency.

**Task:**  
I had to evaluate different architectural styles and convince stakeholders which model would give us the best performance and maintainability. One of the options we considered was a pure client/server approach, so I had to identify any hidden drawbacks before recommending it.

**Action:**  
I set up a small prototype where clients sent trade orders directly to a single server process that handled all business logic and persistence. Using Python’s `asyncio` for concurrency, I measured request latency and throughput under simulated load. While the model was simple to implement, I observed that every failure in the single server (crash, memory leak) brought down the entire system. Moreover, scaling required a full rewrite of the server code; adding new services meant re‑architecting the whole stack. I compared this with a microservices approach where each service ran independently behind a load balancer.

**Result:**  
The experiment showed that the client/server model’s single point of failure and limited scalability were significant disadvantages, outweighing its simplicity. Consequently, we adopted a distributed microservice architecture, achieving 99.9% uptime and a 30 % improvement in average response time over the prototype. I learned that evaluating trade‑offs under realistic load is essential before committing to an architectural pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
