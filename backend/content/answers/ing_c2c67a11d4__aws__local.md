---
qid: ing_c2c67a11d4__aws__local
question: 'Explain: Worker utilization load shedder — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 433
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:25-05:00'
sources: []
---

**Situation / Task**  
I was tasked with keeping our recommendation API responsive during a sudden spike in traffic after a new product launch. The SLA required <200 ms latency for 99.5 % of requests, but we were seeing 70 % of calls exceed that threshold.

**Action**  
1. **Ownership & Customer Obsession** – I assumed full ownership and mapped the pain points to our users’ experience.  
2. **Dive Deep** – Instrumented request latency and error rates with CloudWatch metrics; discovered a bottleneck in the worker pool that stalled when queue depth exceeded 5 k items.  
3. **Design** – Implemented a *worker‑utilization load shedder*:
   - A rate limiter (AWS API Gateway + Lambda authorizer) throttles inbound traffic to 10 k RPS.
   - An ECS Fargate service runs the workers; a CloudWatch alarm triggers an auto‑scaling policy that adds/removes tasks based on average CPU >70 % and queue depth <2 k items.
   - When the queue exceeds 5 k, the load shedder returns HTTP 429 to excess callers (rate limiting) instead of queuing them forever.  
4. **Bias for Action** – Deployed in blue/green; rolled back if latency >300 ms.

**Result**  
- Latency dropped from 350 ms average to 145 ms, meeting the SLA.
- 99.8 % of requests stayed within target window; overall cost fell by 12 % due to fewer over‑provisioned workers.
- The system now gracefully handles 20 k RPS peaks without impacting customers.

**Learning**  
I learned that proactive queue monitoring and graceful degradation (rate limiting) are cheaper than reactive scaling. This approach has been codified in our ops playbook for future traffic surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
