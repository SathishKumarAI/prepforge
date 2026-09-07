---
qid: ing_ad53ddc349__aws__local
question: 'Explain: acks=1 - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 449
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:30-05:00'
sources: []
---

**Situation (S)**  
While migrating our real‑time fraud detection pipeline from on‑prem to an AWS managed environment, we noticed latency spikes during peak trading hours. The team needed a quick fix that preserved data integrity without sacrificing throughput.

**Task (T)**  
Configure the Kafka producer so that it balances durability with low round‑trip time for 1 M events per second.

**Action (A)**  

- **Dive Deep & Ownership**: I examined the producer’s `acks` setting. With `acks=1`, a record is considered successful once the leader broker acknowledges receipt, avoiding extra replication rounds.
- **Design**:  
  - Use **Amazon MSK** with a *leader‑only* replication factor of 3 for fault tolerance.  
  - Set `acks=1` on producers; keep `retries` high to recover from transient failures.  
  - Enable **SASL/SCRAM** for security, and **Kafka Streams** for downstream processing.  
- **AWS Services**: MSK (managed Kafka), CloudWatch (metrics), Lambda (alerting).  

**Result (R)**  
Latency dropped from 250 ms to 80 ms during peak load while maintaining a <0.5% record loss rate, directly supporting $12M daily transaction volume. The change was rolled out in 2 hrs with zero downtime.

---

### What the bar‑raiser looks for

- **Ownership**: Took end‑to‑end responsibility for the migration and performance tuning.  
- **Dive Deep**: Detailed understanding of `acks` semantics and trade‑offs between durability, latency, and cost.  
- **Quantified Impact**: 80 % latency reduction, <0.5% loss on a $12M transaction stream.  
- **Learning from Failure**: Initial over‑replication caused bottlenecks; iterating to `acks=1` improved throughput without compromising business criticality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
