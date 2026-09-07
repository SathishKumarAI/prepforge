---
qid: ing_e377d26710__aws__local
question: 'Explain: Connection Load — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 455
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:20-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the “Connection‑Load” redesign for a real‑time chat app (≈ 5 M daily active users). The goal was to support 10× traffic while keeping latency < 200 ms and cost < $0.50/user/month.

**Action – Design & AWS Services**  
1. **Front‑end**: Elastic Load Balancer (ALB) with WebSocket termination, auto‑scaling behind it.  
2. **Message routing**: Amazon MQ (ActiveMQ) + SNS topics per user group; messages fan‑out to a *Connection Manager* Lambda that keeps an in‑memory cache of active sockets in DynamoDB Streams → Redis (ElastiCache).  
3. **Scaling**: Each Lambda instance handles 5 k concurrent connections; auto‑scaling based on CloudWatch metrics (invocation latency, queue depth).  
4. **Durability & Failover**: Multi‑AZ deployments, SQS dead‑letter queues for transient failures, and CloudFront edge caching for static assets.  
5. **Cost control**: Spot Instances for background batch jobs; Lambda’s pay‑as‑you‑go keeps idle cost negligible.

**Result**  
- Reduced average connection latency from 350 ms to **180 ms** (36% improvement).  
- Achieved 99.999% availability during a 24‑hour load spike test (≈ 50 M concurrent connections).  
- Cut operational costs by **22 %** year‑over‑year.

**Learning & Ownership**  
I took full ownership of the failure window that caused a 5 min outage; post‑mortem revealed a misconfigured scaling policy. I updated the guardrails and introduced automated rollback scripts, which eliminated similar incidents for two years.

> *Leadership Principles:* **Ownership** (owning the entire system), **Dive Deep** (analyzing metrics to pinpoint bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
