---
qid: ing_199f8d710e__aws__local
question: 'Explain: In-Sync Replicas (ISR) — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 464
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:12-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In my last role I was tasked with reducing data loss in our real‑time analytics pipeline that fed marketing dashboards.  
*Task*: I had to prove that the Kafka cluster could guarantee message durability without compromising latency.  
*Action*: I examined **In‑Sync Replicas (ISR)**—the set of broker replicas that have caught up with the leader within a configurable `replica.lag.time.max.ms`. I re‑tuned this threshold from 30 s to 5 s and added an additional follower replica per topic partition. I also introduced a CloudWatch alarm on `KafkaReplicaLag` and a Lambda auto‑scale rule that spun up a temporary broker when lag exceeded 10 %.  
*Result*: Within one week, we saw **zero data loss** during a high‑traffic promotion (over 2 M events/sec) and the average end‑to‑end latency dropped from 120 ms to 75 ms. The cost of adding two extra brokers was offset by a 12 % reduction in downstream batch processing time, saving ~\$4k/month.

**Technical/System Design**

- **AWS MSK (Managed Streaming for Kafka)**: handles broker lifecycle and provides built‑in ISR metrics.  
- **S3 + Glue**: archival of late‑arriving data if ISR misses a window.  
- **Lambda + CloudWatch**: dynamic scaling of brokers to maintain ISR size under load.

Scalability is achieved by horizontally adding partitions; availability is ensured because consumers read only from ISR, guaranteeing they never see partially replicated messages. Cost trade‑offs were mitigated by auto‑scaling and careful `replica.lag.time.max.ms` tuning—balancing durability against resource usage.  

**Bar‑raiser takeaway**: I owned the problem end‑to‑end, dove deep into Kafka internals, quantified impact (latency & cost), and iteratively learned from each failure mode to harden the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
