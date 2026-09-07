---
qid: ing_68b44dda2e__aws__local
question: 'Explain: Event Notification — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 423
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:56-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I led the redesign of a real‑time fraud detection pipeline that processed ~1 M events per minute. The existing batch job caused 15–20 min latency; we needed sub‑second notifications to downstream services.

**Action (A)**  
I chose **Amazon SNS + Amazon SQS** for a decoupled, high‑throughput pub/sub layer, backed by **Lambda** and **DynamoDB Streams** for event enrichment.  
*Design decisions:*  
- *SNS Topic* publishes raw events; *SQS FIFO queues* guarantee order per account.  
- *Lambda* functions run in parallel (concurrency 5 k) to enrich data and write to a partitioned DynamoDB table.  
- *Dead‑letter queues* capture failures for replay.  

I implemented **auto‑scaling** on Lambda via the new *Provisioned Concurrency* to avoid cold starts, and enabled *SQS long polling* (20 s) to reduce API calls. Cost was cut 35% by shifting from EC2 workers to serverless.

**Result (R)**  
Latency dropped from 18 min to **<300 ms** for 95th‑percentile events; the system now supports 3× traffic growth with a 99.9 % SLA.  

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered instant alerts that prevented $2M in fraudulent losses.  
- **Ownership & Dive Deep:** Built end‑to‑end visibility (CloudWatch metrics, X-Ray traces) and iterated on failures.

**Bar‑raiser cues I met:** clear ownership, data‑driven impact, deep dive into trade‑offs (serverless vs EC2), and lessons from initial cold‑start spikes that informed my scaling strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
