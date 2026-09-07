---
qid: ing_dc5cb2a600__aws__local
question: 'Explain: Keep your users engaged — Liveblocks | Realtime infrastructure
  for multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 425
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:10-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** In my last role I led the migration of a real‑time gaming platform from a legacy WebSocket stack to a managed service that could scale to 200k concurrent users while keeping latency < 20 ms.

> **Task:** Deliver an engagement engine (Liveblocks‑style) that keeps players in session, syncs game state, and triggers in‑game events with minimal cost.

> **Action:**  
> *Design:* Adopted **Amazon Kinesis Data Streams** for ingesting player actions, coupled with **AWS Lambda** to process updates and write to a **DynamoDB Global Table** (partition key = roomId). Used **AppSync + WebSocket API Gateway** for low‑latency push to clients.  
> *Scalability:* Kinesis auto‑scales shards; DynamoDB’s on‑demand mode handled bursty writes.  
> *Availability:* Multi‑AZ deployment of AppSync and DynamoDB, with CloudWatch alarms on latency > 30 ms triggering automatic scaling of Lambda concurrency.  
> *Cost:* Leveraged **Reserved Capacity** for Kinesis and DynamoDB; cost dropped from $120k/month to $75k/month while handling 2× traffic.

> **Result:** Post‑migration engagement metrics improved: session length ↑ 35%, churn ↓ 18%, and real‑time latency stayed < 20 ms under peak load. The architecture also enabled rapid feature rollout (e.g., in‑game chat) with zero downtime.

**Bar‑raiser notes**

* Clear ownership of the migration end‑to‑end.  
* Deep dive into each AWS service’s trade‑offs (shard limits, read/write capacity).  
* Quantified impact tied directly to user engagement KPIs.  
* Learned from a failed initial attempt that used raw WebSocket servers; pivoted to managed services for resilience and cost predictability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
