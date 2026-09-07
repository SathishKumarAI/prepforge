---
qid: ing_b9bb7c194f__aws__local
question: 'Explain: Active-Passive policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:47-05:00'
sources: []
---

**Active‑Passive Policy Availability Pattern – My Experience**

**Situation (S)**  
In 2023 I led the migration of a legacy compliance‑engine to an AWS‑native architecture for a financial client that required >99.999% uptime during peak trading windows.

**Task (T)**  
Design a policy distribution system that could serve millions of requests per second with zero data loss while keeping operational costs below $50k/month.

**Action (A)**  
I chose an **Active‑Passive** pattern: the *active* tier ran in a single AZ using Amazon DynamoDB Global Tables for low‑latency reads, and the *passive* tier replicated policies into a standby region via DynamoDB Streams + Lambda.  
- **AWS services used:** DynamoDB (Global Tables), Lambda (replication), Route 53 latency‑based routing, CloudWatch Alarms, S3 for policy backups.  
- **Scalability/Availability:** Global Tables automatically shard across partitions; passive replication kept the standby within 2 s of the active state.  
- **Cost trade‑off:** We avoided cross‑region writes in the hot path, cutting inter‑AZ egress by 70%, while still guaranteeing instant failover.

**Result (R)**  
After deployment we achieved **99.9997% availability** during a 3‑month test period, with a 30 % reduction in latency for policy fetches. The architecture handled 1.2M requests/sec and kept monthly spend at $42k—below target by 16%.  

*Leadership Principles:* **Customer Obsession** (ensured zero downtime), **Ownership** (managed end‑to‑end solution), **Dive Deep** (analyzed replication lag), **Deliver Results** (measured uptime & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
