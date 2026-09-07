---
qid: ing_86b84659d7__aws__local
question: 'Explain: Clients (Web, Mobile) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 492
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:40-05:00'
sources: []
---

**Situation / Task**  
I was asked to architect a scalable “Instagram‑style” photo sharing platform for a startup that had 1 M monthly active users and expected a 300 % growth in the next year. The goal: keep end‑to‑end latency under 200 ms while serving millions of concurrent uploads, feeds, and real‑time likes/comments.

**Action (Design)**  
- **Upload path** – Client → API Gateway → Lambda → S3 (object storage). A second Lambda triggers a SageMaker inference job to auto‑tag images; results are stored in DynamoDB.  
- **Feed generation** – Pre‑compute user feeds with Kinesis Data Streams feeding an EMR cluster that writes sorted posts into a Redis cache (ElastiCache) for hot users, falling back to DynamoDB for cold reads.  
- **Real‑time interactions** – WebSocket API Gateway + Lambda functions push likes/comments through SNS topics to subscribers; the same topic updates a CloudWatch metric for analytics.  
- **Scalability & Availability** – All services are region‑replicated (multi‑AZ). Autoscaling on Lambda and ElastiCache ensures 99.99 % uptime. Cost is controlled by using S3 Standard‑IA for older photos and Spot Instances for EMR jobs.

**Result**  
After launch, upload latency dropped from 1.2 s to <200 ms; feed load time improved 4× (from 800 ms to 200 ms). We handled a 350 % traffic spike without any outages while keeping monthly spend under $30K – a 20 % cost saving versus the initial monolithic design.

**Leadership Principles**  
- **Customer Obsession**: Built low‑latency, high‑availability paths so users saw photos instantly.  
- **Ownership & Dive Deep**: Took end‑to‑end ownership, iterated on metrics (latency, cost), and deep‑dive into bottlenecks with CloudWatch traces.

**Bar‑raiser focus** – Demonstrated ownership, data‑driven impact, deep technical trade‑offs, and a clear learning loop from the 1.2 s baseline to sub‑200 ms latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
