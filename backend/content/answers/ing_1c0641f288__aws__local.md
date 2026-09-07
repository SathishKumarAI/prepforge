---
qid: ing_1c0641f288__aws__local
question: 'Explain: Reference — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 362
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:29:26-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of our real‑time analytics pipeline from on‑prem Hadoop to **Amazon MSK (Kafka)** for the ad‑tech platform that processes ~3 M events/sec. The key risk: data loss during broker failures could corrupt billing reports and violate SLAs.

**Action**  
1. **Dive Deep into Acks** – I mapped Kafka’s `acks` setting (`0`, `1`, `all`) to our durability requirements.  
2. Configured producers with `acks=all` and enabled *idempotence* (`enable.idempotence=true`) so each record is exactly once even on retries.  
3. Added a **Kafka MirrorMaker** cluster in a second AZ for cross‑region replication (latency < 50 ms).  
4. Leveraged **Amazon CloudWatch metrics** (`kafka:BrokerInSyncReplicas`, `brokerReplicationLag`) and set up an **AWS Lambda** alarm that auto‑scales the broker fleet when lag > 1 MB/s.

**Result**  
- Zero data loss incidents in 12 months, SLA improved from 99.9% to 99.999%.  
- Latency dropped by 35 ms, throughput increased to 4.5 M events/sec with <15 % cost variance versus the old system.  

**Learning**  
I realized that “ownership” means anticipating failure modes and proactively instrumenting them; I documented this pattern in our internal playbook so new engineers can ship resilient streams without re‑inventing the wheel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
