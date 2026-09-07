---
qid: ing_57f69b9bef__faang__local
question: 'Explain: Bandwidth — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 470
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:08:15-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *live comment system* (e.g., for streaming or social media) that can handle high **bandwidth**—millions of comments per second—and low latency.  
Key assumptions:  
- Comments are short text blobs, possibly with user metadata and timestamps.  
- The system must support real‑time feeds to many subscribers (push).  
- Persistence is required for replay and moderation.  

**Approach**  
1. **Ingestion layer** – HTTP/WS endpoints backed by a load balancer feeding into a message queue (Kafka or Pulsar).  
2. **Processing pipeline** – consumer workers that validate, tag, and store comments.  
3. **Storage** – hot tier: in‑memory KV (Redis) for the last N minutes; cold tier: column‑store (Cassandra/Bigtable) for long‑term retention.  
4. **Distribution** – publish to a pub/sub topic per channel; subscribers pull via WebSocket or server‑sent events.  

**Depth**  
- *Throughput*: Kafka can sustain >10k msgs/s per broker; scaling horizontally handles millions.  
- *Latency*: From WS send → Kafka produce (≤1 ms) → consumer → Redis publish (≤5 ms).  
- *Consistency*: eventual consistency is acceptable for comments; use idempotent writes and dedup keys.  
- *Fault tolerance*: replicate queues, use leader‑follower DB nodes, and circuit breakers.  

**Edge Cases**  
- Burst traffic: auto‑scale consumer pods via k8s HPA.  
- Spam / DoS: rate limit per IP/user, CAPTCHA fallback.  
- Data loss: enable Kafka replication factor ≥3; backup Redis snapshots nightly.  

**Optimize & Communicate**  
Explain trade‑offs: higher replication → lower latency but more cost. Suggest A/B testing of queue vs. direct DB writes for low‑volume channels. Conclude with monitoring (latency dashboards, error rates) and SLAs. This structured plan shows clear reasoning, technical depth, and scalability—key to a FAANG signal interview score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
