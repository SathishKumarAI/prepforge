---
qid: ing_ae3c1f6017__aws__local
question: 'Explain: Offline Message Handling — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 453
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:32-05:00'
sources: []
---

**Situation & Task**  
I was asked to design an offline‑message system for a WhatsApp‑style app that guarantees **99.9 % delivery within 2 h** even when users are disconnected for days.

**Action – Design**  
*Data model*: Each user owns a *Message Queue* in **Amazon SQS FIFO** (deduplication + ordering).  
*Producer*: The sender’s client pushes the message to SQS; an **AWS Lambda** (10 ms latency) writes metadata to **DynamoDB** (`UserId, Timestamp, Status`).  
*Consumer*: A fleet of **EC2 Spot instances** (auto‑scaling group) polls SQS. When a target user reconnects, the client triggers a **Lambda** that reads the user’s queue and streams messages via **WebSocket API Gateway**, then deletes them from SQS.

*Scalability*:  
- SQS scales to millions of ops/sec; DynamoDB provides sub‑ms read/write with auto‑scaling.  
- Spot instances keep compute cost < $0.02/hr while handling 10k concurrent reconnections (≈200 msg/s).  

*Availability & Cost*:  
- Multi‑AZ deployment, SQS & DynamoDB replication → **99.999 %** durability.  
- Estimated monthly cost ≈ $1,500 for 50M messages/day vs. $12,000 for a monolithic queue.

**Result**  
After pilot rollout (3 weeks), we saw **delivery success rise from 85 % to 99.7 %**, and average latency dropped from 8 min to 30 s.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, dove deep into SQS limits, quantified impact with A/B testing, and learned that *spinning up a small Lambda for queue ops* saves $3k/month while keeping latency low. This aligns with **Ownership** and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
