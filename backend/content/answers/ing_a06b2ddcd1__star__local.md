---
qid: ing_a06b2ddcd1__star__local
question: 'Explain: 2.5 Key Insights — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 332
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:25-05:00'
sources: []
---

**Situation:**  
During a senior engineer interview for a cloud‑native platform role, the interviewer asked me to sketch a high‑availability load balancer that could serve millions of concurrent users while ensuring low latency and graceful failover.

**Task:**  
I had to design a system that distributed traffic across multiple backend instances, performed health checks, maintained sticky sessions, and supported dynamic scaling—all within 30 minutes on a whiteboard.

**Action:**  
I started with a layer‑4 TCP load balancer using HAProxy configured in active‑passive mode. For DNS routing I added AWS Route 53 weighted records to spread traffic globally. Health checks were implemented as HTTP probes every 5 seconds; unhealthy nodes were automatically removed from the pool and replaced via Auto Scaling groups. To preserve session affinity, I used a consistent hashing algorithm on client IP + cookie, storing state in Redis for failover. I also added an edge‑cache layer (Varnish) to reduce round‑trips for static assets, and set up a circuit breaker with fallback responses when downstream services lagged.

**Result:**  
The prototype achieved 99.999% uptime in our mock load test, handling 1 M QPS with <20 ms average latency. I learned that balancing simplicity (TCP HAProxy) with intelligent routing (consistent hashing + Redis) delivers both performance and resilience—key for any production load balancer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
