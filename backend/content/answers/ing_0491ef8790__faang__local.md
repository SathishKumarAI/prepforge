---
qid: ing_0491ef8790__faang__local
question: 'Explain: Amazon System Design Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 498
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:10-05:00'
sources: []
---

**Clarify**  
We’re asked to design an *Amazon‑scale parking garage* system—think of a multi‑level structure that can handle millions of cars, provide real‑time space availability, and integrate with Amazon’s logistics (delivery vehicles, Prime drivers). Key assumptions:  

- **Scale** – up to 10⁶ spaces per facility.  
- **Latency** – <100 ms for spot lookup.  
- **Reliability** – 99.999% uptime.  
- **Data** – vehicle ID, entry/exit time, spot number, payment status.  

**Approach**  
1. *Front‑end*: Mobile/web UI + API gateway.  
2. *Back‑end*: Two microservices – Spot‑Management & Billing.  
3. *Storage*: Distributed NoSQL (Cassandra) for spot state; relational DB for billing.  
4. *Cache*: Redis cluster for hot spots.  
5. *Event sourcing*: Kafka streams for entry/exit events → real‑time analytics.  

**Depth**  
- **Spot‑Management**: Each level is sharded by zone. A *hash* of spot ID maps to a node; updates propagate via Raft consensus. Read latency ≈ 2 R‑roundtrips (≤20 ms).  
- **Billing**: Calculates fee on exit, writes to relational DB. Uses idempotent message pattern (Kafka consumer with offset tracking) to avoid double charges.  
- **Scalability**: Horizontal scaling via Kubernetes; auto‑scales on CPU/latency metrics.  
- **Fault tolerance**: Data replicated 3× across AZs; Redis Sentinel for failover.  

**Edge Cases**  
- Simultaneous entry of two cars → optimistic locking on spot record.  
- Power outage → state recovery from Cassandra snapshot + Kafka log replay.  
- High traffic peak (e.g., holiday) → pre‑warm caches, increase Kafka brokers.  

**Optimize & Communicate**  
Future improvements: AI‑driven space prediction to guide drivers, edge devices for faster sensor reads. I’d explain trade‑offs—using NoSQL gives speed but sacrifices strong consistency; we mitigate with optimistic locking and eventual consistency checks. This shows a clear, scalable design aligned with Amazon’s reliability and performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
