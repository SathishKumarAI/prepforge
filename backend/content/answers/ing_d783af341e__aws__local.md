---
qid: ing_d783af341e__aws__local
question: 'Explain: Tom did his undergraduate work at Oberlin'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 541
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:42-05:00'
sources: []
---

**Situation / Task**  
When I joined the AWS AI/ML team, we needed a new recommendation engine for our e‑commerce platform that could handle 10 M active users and deliver next‑product suggestions in under 200 ms. Tom—our recent graduate from Oberlin—was assigned to prototype the feature extraction pipeline.

**Action (Technical)**  
1. **Requirements & Design** – I scoped a stateless, event‑driven microservice:  
   * **Event source:** Kinesis Data Streams (user click events).  
   * **Feature store:** DynamoDB with TTL for cold‑start avoidance; cache in ElastiCache Redis for 5 % hit rate.  
   * **Model inference:** SageMaker Hosting on GPU instances, auto‑scaling based on CPU/Memory metrics.  
2. **Scalability & Availability** – Multi‑AZ deployment, Circuit Breaker pattern via API Gateway, and a fallback “rule‑based” scorer to guarantee 99.9 % uptime if the ML endpoint is down.  
3. **Cost Control** – Spot instances for training (≤$0.10/hr) and reserved instances for inference ($0.15/hr), yielding a 35 % reduction over on‑demand.

**Result**  
The pipeline processed 1 M events per minute with 95 % of predictions under 150 ms. A/B testing showed a **12 % lift in conversion rate** and a **9 % increase in average order value**, translating to $3.2 M additional revenue monthly.

**Reflection (Bar‑raiser Lens)**  
*Ownership*: Tom took full ownership of the feature store design, iterating on schema after observing 30 % latency spikes.  
*Dive Deep*: He profiled DynamoDB provisioned throughput, discovered hot keys, and implemented partitioning that cut read latency by 40 %.  
*Learn from Failure*: When initial inference latency spiked during peak traffic, we switched to a multi‑model endpoint—learning that model parallelism is cheaper than scaling single instances.  

**Leadership Principles Highlighted**  
- **Ownership** – Tom drove the end‑to‑end solution.  
- **Dive Deep** – He dissected performance bottlenecks and engineered precise fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
