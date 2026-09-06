---
qid: ing_fecd03f954__fp__local
question: 'Explain: Back-of-the-Envelope Estimation — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 446
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:37-05:00'
sources: []
---

**Back‑of‑the‑Envelope Estimation for a WhatsApp‑style System**

The core problem: *“How many messages can we deliver per second while keeping latency < 200 ms and cost ≈ $0.01 per user/day?”*  
We start from first principles:

1. **Throughput** – Each message is ~1 KB (text + metadata). If 1 M users send 10 msg/s each, we need 10 GB/s of raw traffic.  
2. **Latency budget** – A 200 ms target implies that the *critical path* (client → edge → backend) must finish in < 200 ms. Since network RTT ≈ 50 ms, processing time per request ≤ 150 ms.  
3. **Cost model** – Cloud bill ≈ $0.1/GB for storage, $0.02/MB/s for egress. For 10 GB/s we pay ~$200k/day; to hit $0.01/user/day we need ~100 M users, so our scaling target is set.

From these numbers we derive:

- **Sharding**: Partition by user ID into 1,000 shards → each shard handles ~10 K msg/s.  
- **Message queue**: A broker (Kafka) with 2 × replication gives ≈ 99.999% availability; throughput per broker ~5 GB/s.  
- **Cache layer**: Redis for active conversation metadata; TTL 1 h keeps memory < 10 GB.

The *deep insight* most people miss is that **latency is dominated by the slowest shard, not the aggregate load**. Thus we must keep per‑shard traffic balanced and provision spare capacity (≈ 20 %) for bursty users. This turns a naïve “scale everything” plan into an efficient, cost‑effective architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
