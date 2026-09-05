---
qid: ing_a620328784__star__local
question: 'Explain: 4.1 Requirement 1: Traffic Distribution — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 351
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:05:23-05:00'
sources: []
---

**Situation**  
At my last role, we were launching a new streaming service that had to handle millions of concurrent viewers during peak times. The existing single‑server architecture was choking, and our SLA required 99.9 % uptime with <200 ms latency.

**Task**  
I needed to design a load balancer that would evenly distribute incoming HTTP requests across a fleet of stateless application servers while maintaining session affinity for live streams and gracefully handling server failures.

**Action**  
I chose a software‑based Layer 4/7 load balancer built on Nginx plus custom Lua scripts. First, I implemented consistent hashing (ketama) keyed on user ID to preserve sessions without sticky cookies. Next, I added health checks that ping each backend every 2 s and removed unhealthy nodes from the pool automatically. To handle flash traffic spikes, I introduced a rate‑limiting filter with token buckets per region, backed by Redis for cross‑instance coordination. Finally, I set up a dynamic configuration API so new servers could register themselves via gRPC, triggering an immediate rebalance.

**Result**  
After deployment, we saw a 45 % reduction in average response time and a drop from 0.4 % to <0.01 % of requests hitting the error page during peak hours. The system also automatically recovered from two simultaneous server failures with no user impact. I learned that blending proven open‑source components with lightweight custom logic can deliver robust, scalable traffic distribution without reinventing the wheel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
