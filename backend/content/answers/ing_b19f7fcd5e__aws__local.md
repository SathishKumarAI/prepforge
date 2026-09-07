---
qid: ing_b19f7fcd5e__aws__local
question: 'Explain: ‘acks=1’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 458
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:35-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our real‑time analytics pipeline from a legacy queue to **Apache Kafka**. The business demanded 99.9 % latency guarantees for ad‑serve events, but the team feared that the default `acks=1` would risk data loss during broker failures.

**Action**  
I first *dived deep* into Kafka’s acknowledgment semantics and built an experiment: three identical producers sent 10M messages to a single topic with `acks=0`, `acks=1`, and `acks=all`. Using **Amazon MSK**, I monitored message latency, throughput (≈ 25 k msg/s), and broker logs. The results were clear—`acks=1` dropped ~2 % of records during a broker restart, whereas `acks=all` lost <0.01 %.  
I then designed a *fault‑tolerant* architecture:  
- **MSK cluster** with 3 brokers in an Availability Zone (AZ) spread for high availability.  
- Enable **broker replication factor 3** and set **min.insync.replicas=2** so `acks=all` would still succeed after one broker failure.  
- Use **AWS CloudWatch** alarms on `kafka.server.records-lost-total` to trigger auto‑scaling of producers.

I presented the findings to stakeholders, highlighting that switching from `acks=1` to `acks=all` with the above safeguards improved data integrity by 99.9 % while keeping latency under 200 ms and cost up to 15 % higher—an acceptable trade‑off for our mission‑critical traffic.

**Result**  
Post‑migration, we logged **0.003 % message loss** on a 1B event/month workload, achieving the SLA and earning a *“Data Integrity Champion”* award from the product team.  

> **Leadership Principles:** Customer Obsession (ensuring data accuracy for ad revenue), Ownership (taking end‑to‑end responsibility), Dive Deep (quantitative experiments).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
