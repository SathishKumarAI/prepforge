---
qid: ing_6cc95a0aed__aws__local
question: 'Explain: Heartbeat with Health Check — How to Detect Node Failures in Distributed
  Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 403
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:45-05:00'
sources: []
---

**Situation / Task**  
I led the upgrade of our micro‑service platform (≈ 1 M daily requests) where node failures were silently propagating, causing 2–3 min latency spikes and a 0.7 % SLA breach.

**Action**  
*Ownership & Dive Deep*: I scoped a two‑phase solution: **(1)** an active‑heartbeat via Redis Streams (≈ 10 k messages/s) and **(2)** passive health checks using CloudWatch Alarms on the EC2/EC2‑based containers.  
I built a lightweight Go agent that pushes a TTL‑pulsing message to Redis every 5 s; if a node misses two consecutive pulses, its status flag flips to *unhealthy*. The agent also exposes `/healthz` endpoints monitored by ALB health checks (interval 10 s).  
AWS services used: **Amazon ElastiCache (Redis), CloudWatch Alarms, Elastic Load Balancing, and SQS for alerting**. I added a Lambda that triggers an Auto Scaling policy when the unhealthy count exceeds 3% of nodes.

**Result**  
- Node‑failure detection time dropped from ~ 3 min to < 30 s.  
- SLA breaches fell from 0.7 % to < 0.01 %.  
- Cost impact was only +$150/month for the Redis cluster, offset by $12k/yr saved in avoided incident response.

**Reflection**  
I learned that coupling *heartbeat* with *passive health checks* gives a safety net against both transient and permanent failures—an approach I now standardize across all new services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
