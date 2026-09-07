---
qid: ing_dc9b6b2e93__aws__local
question: 'Explain: Streaming and Long-Lived Connections — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 458
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:52-05:00'
sources: []
---

**Situation (S)**  
When launching a real‑time recommendation engine for our video platform, we had to support **10 M concurrent users** with sub‑200 ms latency while keeping costs under $2 M/month.

**Task (T)**  
Design the streaming & long‑lived connection infrastructure that could ingest live user events, push personalized updates, and gracefully handle churn without over‑provisioning.

**Action (A)**  
I chose **Amazon Kinesis Data Streams** for ingestion, coupled with **Amazon API Gateway + WebSocket APIs** to maintain persistent connections. The backend ran on **AWS Lambda** (via `@aws-cdk/aws-lambda`) for event processing and a **DynamoDB Global Table** for real‑time user state.  
*Scalability*: Kinesis auto‑scales shards; Lambda concurrency is bounded by API Gateway’s 10 000 concurrent connections per region.  
*Availability*: API Gateway offers 99.95% SLA, DynamoDB global replication gives cross‑region failover within seconds.  
*Cost*: Shard throughput (~1 MB/s) and Lambda invocations (≈30 M/month) kept spend at $1.8 M; we avoided EC2 reservations that would have locked us into a 20 % over‑budget.

**Result (R)**  
The system handled **12 M peak connections** with an average latency of **145 ms**, and we reduced the mean time to recover from connection drops by **70%** compared to our legacy polling approach. This translated into a **15% lift in user engagement** and a $0.5 M annual cost saving.

> **Leadership Principles Anchored:** *Customer Obsession* – delivering instant, personalized content; *Ownership* – taking end‑to‑end responsibility for reliability and cost.  
> 
> **Bar‑raiser cues:** depth of AWS service selection, clear trade‑off analysis, quantified performance gains, and reflection on scaling lessons learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
