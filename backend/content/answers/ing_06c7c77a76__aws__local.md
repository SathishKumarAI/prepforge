---
qid: ing_06c7c77a76__aws__local
question: 'Explain: In-sync replicas — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 459
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:22-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of our real‑time analytics platform from an on‑prem Kafka cluster to **Amazon MSK**. The business required *zero data loss* for the fraud‑detection pipeline while keeping latency below 200 ms.

**Action**  
To guarantee durability I configured a **replication factor of 3** and set **`acks=all`** (i.e., `-1`). In Kafka, this means a producer waits until *every in‑sync replica* (ISR) acknowledges the write. I added an automated health check that pushes any broker falling out of ISR to the cluster’s Auto Scaling group, ensuring the ISR never drops below two replicas. I also enabled **broker-level compression** and **`min.insync.replicas=2`** to keep throughput high while still requiring majority acknowledgement.

I instrumented CloudWatch metrics (`KafkaBrokerISRCount`, `ProducerLatency`) and set alerts for ISR count < 2. During load testing, the pipeline processed 1.5 M events/s with < 180 ms latency, and no message was lost even under a broker failure scenario (simulated by killing a broker; the ISR automatically re‑balanced within 30 s).

**Result**  
The migration cut *data loss risk* from an estimated 0.05% to **< 0.001%**, and we achieved a 40 % reduction in producer latency versus the legacy cluster, directly improving fraud detection speed.

**Leadership Principles**  
- **Customer Obsession**: Delivered a fault‑tolerant system that protects sensitive customer data.  
- **Ownership & Dive Deep**: Took full responsibility for ISR configuration, monitored at the broker level, and iterated until metrics met SLA.  

**Bar‑raiser takeaway**  
Showed ownership by designing end‑to‑end durability, deep dive into Kafka internals (ISR mechanics), quantified impact (latency & loss reduction), and learned from a failure simulation to harden ISR resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
