---
qid: ing_08979e85fc__star__local
question: 'Explain: Broker — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 330
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:15-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked to migrate a real‑time analytics pipeline from RabbitMQ to Kafka for our ad‑tech platform. The data volume was ~30 M events per day, and any loss could skew revenue reports.

**Task:**  
I needed to guarantee that no messages were lost during normal operations or broker failures while keeping latency below 50 ms.

**Action:**  
First, I set `acks=all` on producers so a write only succeeds when all in‑sync replicas have persisted the record. Then I configured each topic with `replication.factor=3` and enabled *min.insync.replicas* = 2 to prevent writes from succeeding if fewer than two brokers are alive. To monitor potential loss, I added a JMX metric check on `UnderReplicatedPartitions`; whenever it spiked, an alert triggered a rebalance. During testing, I intentionally killed the leader broker and observed that the follower automatically became leader and continued accepting writes without dropping any events.

**Result:**  
After deployment, our Kafka cluster logged zero lost messages over 6 months, with average latency staying at 35 ms. The key takeaway: Kafka can “lose” messages only if replication is misconfigured or brokers are unavailable beyond the in‑sync set; proper settings and monitoring eliminate that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
