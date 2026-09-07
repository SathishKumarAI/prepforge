---
qid: ing_9d109f1ed5__aws__local
question: 'Explain: Broadcast — Liveblocks | Realtime infrastructure for multiplayer
  apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 462
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:04-05:00'
sources: []
---

**Situation & Task (S)**  
While leading the real‑time engine for a multiplayer game studio, we had to replace a legacy WebSocket cluster that crashed under > 10k concurrent players during peak events. The goal was to build a low‑latency, fault‑tolerant broadcast service that could scale horizontally and support game agents (bots) in addition to human users.

**Action (A)**  
I designed a **serverless publish/subscribe pipeline** using **Amazon Kinesis Data Streams** for ingestion, **DynamoDB Global Tables** for state persistence, and **AWS Lambda** + **API Gateway WebSocket APIs** for routing. Each broadcast message is written once to Kinesis; consumers (client workers) read from shards via Lambda, which pushes updates through API Gateway to connected clients. We added a **deduplication layer** in DynamoDB to avoid duplicate agent messages, and used **CloudWatch Alarms** + **Auto Scaling** for shard adjustments.

I championed **“Bias for Action”** by launching an MVP in 3 weeks, then iterating with real‑time metrics (latency < 15 ms, throughput > 20k msg/s). We ran load tests that pushed 50k concurrent connections; the system sustained 99.98% availability.

**Result (R)**  
Post‑migration, we reduced average broadcast latency from 120 ms to **< 15 ms**, cut operational costs by **35%** (serverless vs EC2), and increased peak player capacity from 10k to **50k+** without code changes. The solution also enabled AI agents to receive real‑time state in < 20 ms, boosting gameplay quality.

---

*Leadership Principles Highlighted:*  
- **Customer Obsession** – delivering a smoother, more reliable multiplayer experience.  
- **Ownership & Dive Deep** – architecting from first principles, iterating on metrics, and learning from failure (initial shard bottleneck).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
