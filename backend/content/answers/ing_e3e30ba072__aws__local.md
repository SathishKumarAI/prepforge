---
qid: ing_e3e30ba072__aws__local
question: 'Explain: Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 454
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:14-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that needed to replace a legacy event bus used by our recommendation engine. The goal was to support > 10 M events/sec with < 200 ms latency while keeping costs under $1 M/year.

**Action**  
I chose **Amazon EventBridge + Kinesis Data Streams** as the core Pub/Sub fabric, backed by **Lambda** for downstream processing and **DynamoDB** for idempotency.  
*Design choices:*  
- *EventBridge* handles schema registry, routing rules, and cross‑account delivery—ensuring zero‑downtime upgrades (Ownership).  
- *Kinesis* provides horizontal scaling and replayability; we provisioned 2 MB/s shards and used **Kinesis Data Firehose** to sink data into S3 for batch analytics.  
- *Lambda* decouples consumers, auto‑scales with the event rate, and enforces **30 s timeout** to guarantee timely processing (Bias for Action).  
- To keep costs low we enable **On‑Demand capacity** during spikes and switch to **Provisioned** during steady periods (Dive Deep into pricing models).

**Result**  
The new system handled 12 M events/sec with < 150 ms average latency, a 45 % cost reduction versus the old RabbitMQ cluster, and zero data loss incidents in production. The architecture also allowed us to add a new fraud‑detection consumer without impacting existing pipelines—demonstrating true **Customer Obsession** for reliability.

---

*Bar‑raiser cues:*  
- Clear ownership of scaling and cost goals.  
- Deep dive into AWS service trade‑offs (EventBridge vs Kinesis).  
- Quantified impact: event rate, latency, cost savings.  
- Learning loop: post‑mortem on a transient throttling issue that led to the shard re‑balancing rule we now enforce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
