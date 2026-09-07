---
qid: ing_ab07f0db45__faang__local
question: 'Explain: Database/Storage — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 475
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:22:18-05:00'
sources: []
---

**Clarify**  
We need a *notification service* that pushes messages (email, SMS, push) to users in real time.  Assume millions of users, high write throughput, eventual delivery guarantees, and the ability to filter by user preferences.  Confirm: message types, latency SLA, durability requirements, and whether we’ll support retries or batching.

**Approach**  
1. **Ingress layer** – API gateway → rate‑limit & auth.  
2. **Queue tier** – Kafka topics per notification type; use partitions for horizontal scaling and ordered delivery.  
3. **Worker pool** – stateless consumers that pull from Kafka, transform payloads, and call channel adapters (SMTP, Twilio, APNs).  
4. **State store** – DynamoDB/Redis to track user preferences, last‑sent timestamps, and retry counters.  
5. **Delivery layer** – per‑channel sinks with back‑pressure handling; fallback to dead‑letter queues on persistent failure.

**Depth**  
- *Throughput*: Kafka can handle >10k msg/s per partition; use 50 partitions → 500k msg/s.  
- *Latency*: End‑to‑end <200 ms for push, <1 s for email/SMS (depends on external API).  
- *Durability*: Kafka replicates logs; DynamoDB with strong consistency ensures preference reads are fresh.  
- *Scalability*: Auto‑scaling consumer groups and partition rebalancing keep up with traffic spikes.

**Edge Cases**  
- Network partitions causing delayed delivery → retry logic with exponential backoff.  
- Users disabling a channel mid‑send → check state store before sending.  
- Duplicate messages from retries → idempotent design using unique message IDs stored in DynamoDB.

**Optimize & Communicate**  
Start simple (single queue, single worker) to validate correctness, then shard by user ID for horizontal scaling. Use metrics (queue depth, success rate) to auto‑scale consumers. Explain trade‑offs: Kafka gives durability but adds latency; a cache layer reduces DB hits but can stale preferences. Conclude with a monitoring dashboard and SLAs tied to business KPIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
