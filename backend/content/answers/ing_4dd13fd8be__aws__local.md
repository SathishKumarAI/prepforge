---
qid: ing_4dd13fd8be__aws__local
question: 'Explain: Write Locally and Read Globally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 521
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:30-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of our e‑commerce platform’s real‑time comment feed. The goal was to keep write latency < 10 ms while ensuring every user worldwide could read comments within 200 ms, even during flash sales that generated > 1 M writes/second.

**Action (Technical)**  
* **Write Layer – “Local”**: Each edge location runs an **Amazon Kinesis Data Stream** with a *shard per region*. Writes hit the nearest shard, giving us sub‑10 ms latency. A small **AWS Lambda** function validates and forwards records to a regional **DynamoDB Global Table** (partition key = `postId`, sort key = `timestamp`).  
* **Read Layer – “Global”**: Users query DynamoDB via an **Amazon API Gateway** fronted by **CloudFront**. Because the table is globally replicated, reads hit the nearest replica; read latency stays < 200 ms even under 10× traffic spikes.  
* **Cold‑start Mitigation**: We pre‑warm Lambda containers and keep a small in‑memory cache (DAX) for hot posts.  
* **Cost & Availability**: DynamoDB Global Tables provide multi‑AZ durability; Kinesis gives auto‑scaling and replayability. The overall cost is ~ $0.15 per 1 M writes, with a 99.999% SLA.

**Result (Behavioral)**  
After launch we saw *write latency drop from 45 ms to 7 ms* and *read latency from 350 ms to 140 ms*. Traffic during the Black Friday sale increased by 12× without any service degradation, giving us a 30% uplift in user engagement. I iterated on shard sizing after monitoring “tail latency” spikes—learning that *dive deep into metrics* is essential for sustained performance.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivering instant feedback keeps shoppers engaged.  
- **Ownership & Dive Deep**: I took end‑to‑end responsibility, profiled every component, and continuously refined the architecture based on real telemetry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
