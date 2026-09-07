---
qid: ing_6402970247__aws__local
question: 'Explain: Message Service — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 429
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:15-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to build a **WhatsApp‑scale messaging backend** for a fintech app that needed > 1 M concurrent users and guaranteed end‑to‑end delivery with < 200 ms latency.

**Action (A)** – *Customer Obsession + Ownership*  
1. **Micro‑service architecture**: `Auth`, `MessageQueue`, `DeliveryAgent`.  
2. **Event‑driven queue** – Amazon Kinesis Data Streams for ingestion, auto‑scaling shards.  
3. **In‑memory store** – Redis (ElastiCache) as a message buffer; TTL = 30 s.  
4. **Persistence** – DynamoDB with GSI on `recipient_id` + `timestamp`.  
5. **Push delivery** – SNS Mobile Push, fallback to FCM/APNs.  
6. **Retry & DLQ** – Lambda polls DLQ every 10 min; exponential back‑off.  
7. **Observability** – CloudWatch metrics (latency, drop rate) + X-Ray traces.

**Result (R)** – *Deliver Results*  
- Achieved **99.999% message delivery** within 180 ms at peak load.  
- Cost under $2k/month vs. on‑prem baseline of $15k.  
- Reduced ops toil by 70 % thanks to auto‑scaling and serverless retries.

**Reflection (T)** – *Dive Deep & Bias for Action*  
The first sprint hit a 5 % drop due to throttled DynamoDB writes; I added conditional writes + provisioned throughput, learning that write amplification matters at scale.  

---

> **Bar‑raiser cues:** Ownership of end‑to‑end flow, deep dive into latency sources, quantified reliability metrics, and a clear lesson from the initial failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
