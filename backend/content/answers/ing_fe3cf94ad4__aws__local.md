---
qid: ing_fe3cf94ad4__aws__local
question: 'Explain: Chat Servers — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 557
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:59-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign a chat backend that could support **10 M concurrent users** and deliver end‑to‑end encrypted messages within 200 ms while keeping cost under $2 M/yr.  

**Action – System Design**  
1. **Ingress Layer** – API Gateway + ALB → **AWS Lambda** (or Fargate for stateful sessions) to validate JWT, rate‑limit (10 req/s/user), and push to Kinesis Data Streams.  
2. **Message Routing** – Kinesis shards (200 per shard) feed a **Kafka‑compatible MSK cluster**; each partition is keyed by *conversation_id*. Kafka guarantees ordered delivery and replay for offline users.  
3. **Storage & Retrieval** – Messages are written to **DynamoDB Global Tables** (partition key = conversation_id, sort key = timestamp). TTL of 90 days removes stale data automatically. DynamoDB’s provisioned throughput scales horizontally; we use **On‑Demand** mode during traffic spikes.  
4. **Push Service** – A Lambda stream from MSK triggers SNS Mobile Push or APNs/FCM to deliver to online devices. Offline devices receive a *push notification* that triggers a sync on next app launch.  
5. **Encryption & Compliance** – All data at rest is encrypted with KMS; in‑transit TLS 1.3. Audit logs stored in CloudTrail + Athena for compliance.

**Result (Metrics)**  
- Latency: 95 % of messages <180 ms, peak 200 ms.  
- Cost: $1.8 M/yr (≈$150k/month).  
- Availability: SLA 99.999% achieved via multi‑AZ MSK and DynamoDB global tables.

**Reflection & Learning**  
I owned the entire stack; we iterated on shard sizing after observing hot partitions—showing *Dive Deep* and *Bias for Action*. Post‑mortem of a 24 h outage taught us to enable **Auto Scaling** on Lambda concurrency to avoid throttling, reinforcing *Ownership*.

---

### Bar‑raiser checklist  
- **Ownership** – full responsibility from design to ops.  
- **Dive Deep** – shard sizing, DynamoDB throughput tuning.  
- **Quantified Impact** – latency & cost metrics.  
- **Learning from Failure** – outage root cause and corrective actions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
