---
qid: ing_63bdf55990__aws__local
question: 'Explain: High Availability Config — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 417
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:43-05:00'
sources: []
---

**Situation / Task**  
I was tasked with designing a high‑availability (HA) Kafka deployment for an e‑commerce platform that ingests real‑time click‑stream data and feeds downstream analytics pipelines. The goal: keep 99.9 % uptime while handling 5 M events/sec with sub‑second latency.

**Action**  
1. **Ownership & Dive Deep** – I chose Amazon MSK (Managed Streaming for Kafka) to offload operational overhead, then added a *cluster‑wide* multi‑AZ layout: two broker nodes per AZ (total 6 brokers).  
2. **Scalability / Cost** – Each broker was an r5.large instance; we reserved 3‑year contracts, cutting EC2 cost by ~30 % versus on‑demand.  
3. **Availability** – Configured *broker‑replication* factor of 3 and *inter‑broker ISR* > 50 %. Added a *Kafka Connect* cluster for CDC to S3 (using Kinesis Data Firehose) with cross‑region replication to mitigate AZ failures.  
4. **Monitoring & Auto‑Recovery** – CloudWatch alarms on broker lag triggered Lambda that spun up replacement brokers, ensuring zero manual intervention.  

**Result**  
- Uptime remained at 99.94 % over a 12‑month period (down from 97.8 % before redesign).  
- End‑to‑end latency dropped to 120 ms (vs. 350 ms).  
- Cost decreased by $18k/month thanks to reserved instances and efficient scaling.

**Learning & Bar‑Raiser Focus**  
I documented failure scenarios, ran chaos‑engineering drills, and refined the recovery playbook—showing true ownership and a bias for action that delivers measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
