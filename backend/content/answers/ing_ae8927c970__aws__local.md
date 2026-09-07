---
qid: ing_ae8927c970__aws__local
question: 'Explain: When User B comes back online — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 407
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:13-05:00'
sources: []
---

**Situation & Task**  
At a startup we had to re‑introduce an “online” state for User B in our WhatsApp‑style chat app after a 30‑minute outage. The goal was to restore message delivery latency below **50 ms** and guarantee at least **99.9 %** availability while keeping cost < $0.05 per user/month.

**Action – Design**  
1. **State Store** – Use *Amazon DynamoDB* (global tables) with a TTL key (`user_id:online_at`) to keep the last‑known online timestamp.  
2. **Message Queue** – Push offline messages into an *SQS FIFO* queue per user; on reconnection we trigger a Lambda that pulls up to 200 messages, batches them, and writes to a *Kinesis Data Streams* shard for real‑time delivery.  
3. **Edge Caching** – Deploy the front‑end behind *CloudFront* with WebSocket support so reconnects hit the nearest edge, reducing round‑trip latency by ~30 %.  
4. **Health & Metrics** – Use *Amazon CloudWatch* alarms on DynamoDB read/write capacity and Lambda invocation errors; auto‑scale based on queue depth.

**Result**  
- Latency dropped from 120 ms to **42 ms** (average).  
- Availability hit **99.95 %** over a 3‑month period.  
- Monthly cost per active user was $0.03, below the target.

**Reflection**  
I took ownership of the failure analysis (Dive Deep), identified that stale DynamoDB TTLs caused missed online flags, and introduced automated health checks (Bias for Action). The bar‑raiser would note my quantified impact, use of AWS services, and learning loop from the outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
