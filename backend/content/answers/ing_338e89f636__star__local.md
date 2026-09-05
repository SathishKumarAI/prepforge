---
qid: ing_338e89f636__star__local
question: 'Explain: 4.4 Putting It All Together — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 352
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:44-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, our real‑time transaction API was hitting 3 k requests per second during peak hours. The latency spiked from 120 ms to over 800 ms and the backend services were throttling, causing service interruptions.

**Task:**  
I had to design a load balancer that could distribute traffic evenly across four microservice instances, keep session affinity for in‑flight payments, support graceful scaling, and provide health checks—all while staying under a $200/month budget.

**Action:**  
I chose NGINX Plus because of its built‑in health‑check API and Lua scripting. I configured it with round‑robin plus least‑conn fallback, added IP‑hash for session stickiness, and wrote a Lua health probe that pinged each instance’s `/health` endpoint every 5 s. For scaling, I hooked the balancer to AWS Auto Scaling via CloudWatch metrics; if CPU >70% for 2 min, it spun up another container. I also set up Prometheus + Grafana dashboards to monitor request latency and error rates in real time.

**Result:**  
After deployment, peak‑hour latency dropped to 180 ms (a 78% reduction). Error rate fell from 3.5% to <0.2%. The system handled a sudden spike of 6 k rps during a promotional launch without downtime. I learned that balancing simple round‑robin with dynamic health checks and auto‑scaling can deliver robust, cost‑effective load distribution in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
