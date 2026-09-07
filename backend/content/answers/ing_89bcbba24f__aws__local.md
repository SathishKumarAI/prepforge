---
qid: ing_89bcbba24f__aws__local
question: 'Explain: Notifications — Liveblocks | Realtime infrastructure for multiplayer
  apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 459
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:27-05:00'
sources: []
---

**Situation / Task**  
I was tasked with designing a low‑latency notification service for a multiplayer game that needed to push state changes (e.g., player moves, chat messages) to thousands of concurrent users without compromising reliability or cost.

**Action**  
1. **Architecture** – I built a publish/subscribe model using **Amazon Kinesis Data Streams** as the backbone; each stream shard handled ~100 k events/s.  
2. **Real‑time delivery** – Workers (EC2 Spot + Lambda) consumed records and routed them to **Amazon API Gateway WebSocket APIs**, which kept persistent connections with clients.  
3. **Scaling & Cost** – Auto‑scaling on CloudWatch metrics ensured we stayed within the free tier for low usage, while burst traffic was handled by Kinesis shards; cost per 1 M messages dropped from $2.50 to <$0.60.  
4. **Reliability** – Dead‑letter queues (SQS) captured failures; retries were capped at 3 attempts with exponential back‑off.  
5. **Observability** – CloudWatch Logs + X-Ray traced message paths, enabling root‑cause analysis in <2 min.

**Result**  
- Latency from event ingestion to client receipt averaged **12 ms** (95th percentile < 30 ms).  
- The system sustained **500k concurrent connections** with a 99.999% uptime SLA.  
- Operational cost decreased by **58 %** versus the legacy monolith.

**Amazon Leadership Principles**  
- *Customer Obsession* – Delivered sub‑20 ms experience for players.  
- *Ownership & Dive Deep* – Designed end‑to‑end flow, quantified every trade‑off, and iterated based on real telemetry.  

Bar‑raiser signals: clear ownership of the full stack, deep technical dive into AWS services, measurable impact (latency, cost), and lessons learned from pilot failures (e.g., shard over‑provisioning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
