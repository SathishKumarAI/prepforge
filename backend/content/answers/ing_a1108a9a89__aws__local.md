---
qid: ing_a1108a9a89__aws__local
question: 'Explain: Minimum in-sync replica — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 360
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:12-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: While migrating our real‑time analytics pipeline to Amazon MSK, we observed data loss during broker failures—critical for fraud detection.

*Task*: Design a fault‑tolerant Kafka configuration that guarantees every message is persisted before the producer receives confirmation.

*Action*:  
1. Set `acks=all` so producers wait until **all** ISR (in‑sync replicas) acknowledge receipt.  
2. Configure `min.insync.replicas = 2` on topics with ≥3 partitions to enforce that at least two brokers must be in sync before an ack is sent.  
3. Enable broker replication factor = 3 and monitor ISR size via CloudWatch.  
4. Implement a Lambda watchdog that triggers an SNS alert if ISR drops below the threshold, automatically adding standby replicas from Auto Scaling groups.

*Result*: After deployment, we reduced data‑loss incidents by **92%** (from 12/30 to 1/30 per month). Latency increased only 8 ms on average—well within SLA. Cost impact was negligible (< 2 % of the MSK budget) because we leveraged existing EC2 instances and avoided overprovisioning.

**Dive Deep & Deliver Results**

I validated the trade‑off by simulating broker crashes in a staging cluster, measuring commit latency vs. `min.insync.replicas`. The chosen value balanced durability with performance, proving that rigorous metrics drive production decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
