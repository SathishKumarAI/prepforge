---
qid: ing_5fad20e221__aws__local
question: 'Explain: Read more — Messagebrokervsdb'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 438
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:26-05:00'
sources: []
---

**Situation & Task**  
I led a data‑science team building a real‑time fraud‑detection pipeline for a payments startup. Our models required low‑latency feature enrichment from streaming transactions and historical context, while still persisting audit logs for regulatory compliance.

**Action – Design Choice**  
We evaluated two ingestion patterns:  
1️⃣ **MessageBroker (Kinesis Streams / Kafka)** – decouples producers & consumers, guarantees at‑least‑once delivery, scales horizontally, and supports exactly‑once semantics with checkpointing.  
2️⃣ **Database (RDS / DynamoDB)** – offers strong consistency but introduces write amplification and higher latency under burst load.

We chose Kinesis for streaming ingestion, backed by Lambda to enrich features in real time, and persisted enriched records to a **DynamoDB Global Table** for fast lookups during model inference. This split allowed us to:

- *Scale* to 5 M TPS with sub‑50 ms latency (Kinesis auto‑scaling).  
- *Guarantee* durability via Kinesis retention (7 days) and DynamoDB Multi‑AZ replication.  
- *Reduce cost* by using on‑demand Lambda for burst periods ($0.20 per million invocations) instead of provisioning a large RDS instance.

**Result**  
Model inference latency dropped from 200 ms to 35 ms, and fraud detection accuracy improved by 12% (precision ↑4%, recall ↑8%). Operational cost fell 28% year‑over‑year.  

**Reflection**  
I owned the trade‑off analysis, dove deep into consistency vs. performance metrics, and iterated on the design after a failed RDS spike test that caused 1.5 s latency spikes. This experience reinforced *Customer Obsession* (delivering low‑latency decisions) and *Ownership* (taking end‑to‑end responsibility for data flow).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
