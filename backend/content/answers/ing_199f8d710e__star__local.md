---
qid: ing_199f8d710e__star__local
question: 'Explain: In-Sync Replicas (ISR) — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 340
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:38-05:00'
sources: []
---

**Situation**  
At my previous company we had a real‑time fraud detection pipeline built on Kafka. A sudden spike in transaction volume during the holiday season pushed our brokers beyond their advertised throughput, and one of our critical topics began dropping messages. The SLA required 99.9% delivery guarantee.

**Task**  
I was tasked with diagnosing why the topic’s replication lag was growing and restoring full fault tolerance without impacting the live traffic.

**Action**  
First I inspected the broker logs and used JMX metrics to confirm that several replicas were falling out of the In‑Sync Replicas (ISR) set for the topic. I added a new broker with identical hardware, rebalanced the partitions, and increased `replica.lag.time.max.ms` from 5 s to 15 s to give slower nodes more breathing room. Then I scripted an automated health check that pinged each replica’s heartbeat interval (`heartbeat.interval.ms`) and adjusted it so that replicas could respond faster during peak load. Finally, I enabled `unclean.leader.election.enable=false` to prevent any leader from being elected from a non‑ISR node.

**Result**  
The ISR count stabilized at 3 for all partitions; replication lag dropped below 200 ms and the delivery success rate rose to 99.97% over the next week. I learned that tuning ISR parameters is a balancing act: too strict and you lose availability, too lenient and you risk data loss. This experience sharpened my ability to fine‑tune Kafka clusters for both reliability and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
