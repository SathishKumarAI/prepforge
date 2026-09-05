---
qid: ing_82b053f449__star__local
question: 'Explain: Infrastructure cost — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 383
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:39-05:00'
sources: []
---

**Situation** – At a mid‑size fintech startup I was responsible for the data platform that fed our real‑time fraud detection engine. The quarterly SLA required 99.9 % availability, but we kept hitting outages during peak trading hours because the primary PostgreSQL cluster in us-east-1 became saturated and a single point of failure.

**Task** – I had to design an affordable replication strategy that would keep latency under 50 ms while keeping infrastructure costs below our $200k/month budget.

**Action** – First, I evaluated logical vs. physical replication. For low‑latency reads I set up a logical stream (Debezium + Kafka) to push change events to a read replica in us-west-2; this kept the write load on the primary minimal and allowed near‑real‑time data consistency across regions. Second, for disaster recovery I implemented asynchronous physical streaming replication with WAL archiving to an S3 bucket, enabling point‑in‑time restores within minutes. I used Terraform to spin up managed RDS instances, reserved instances for cost savings, and leveraged Spot Instances for the Kafka brokers during non‑peak hours. Finally, I built a monitoring dashboard in Grafana that tracked replication lag and automated failover scripts via Lambda.

**Result** – After deployment, our system achieved 99.97 % uptime, with average read latency dropping from 120 ms to 35 ms. The replication cost was only $12k/month—well under budget—and we reduced the mean time to recovery from hours to under five minutes. I learned that combining logical streaming for real‑time needs with physical backups for disaster recovery can deliver both performance and resilience without breaking the bank.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
