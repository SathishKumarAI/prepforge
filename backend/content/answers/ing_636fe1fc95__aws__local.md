---
qid: ing_636fe1fc95__aws__local
question: 'Explain: Replication — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 425
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:02-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of our real‑time analytics pipeline from an on‑prem Kafka cluster to Amazon MSK (Managed Streaming for Apache Kafka). The business required >99.9 % message durability while keeping latency under 20 ms for 10 kTPS.

**Action**  
1. **Replication & Acks** – I explained that each partition has *N* replicas (default 3 in MSK). The leader handles writes; the follower replicators copy data over TCP.  
2. I set `acks=all` so a producer waits for all in‑sync replicas (ISR) to confirm receipt, guaranteeing no data loss if the leader fails.  
3. To keep latency low, we tuned `min.insync.replicas=2`, ensuring writes succeed with two replicas while still protecting against single‑node failure.  
4. I leveraged **Amazon CloudWatch** metrics (`kafka.server.ReplicationLagMs`) to monitor ISR lag; a 99th‑percentile lag <5 ms confirmed our SLA.

**Result**  
Post‑migration, we achieved 0.02 % message loss and maintained 18 ms average latency at 12 kTPS, exceeding the original target by 15 %. Cost fell 20 % due to using spot instances for follower brokers.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering ultra‑reliable, low‑latency analytics for our product team.  
- **Ownership & Dive Deep** – I owned the end‑to‑end data flow and deep‑dive tuned replication parameters to meet strict SLAs.

*Bar‑raiser cue:* Demonstrated ownership by handling both architectural design and operational tuning; quantified impact with latency & loss metrics; showed learning from prior on‑prem failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
