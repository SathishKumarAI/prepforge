---
qid: ing_63bdf55990__star__local
question: 'Explain: High Availability Config — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 346
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:24-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a real‑time analytics platform on AWS that processed billions of click events per day. Our Kafka cluster was the backbone, but a single broker failure would drop a day’s worth of data and trigger SLA breaches.

**Task:**  
I had to design and deploy a high‑availability Kafka setup that could tolerate broker, Zookeeper node, and even network partition failures without losing messages or violating at‑least‑once delivery guarantees.

**Action:**  
First, I switched from the default single‑Zookeeper ensemble to an odd‑numbered (3‑node) ZooKeeper cluster with automatic leader election. For Kafka, I configured every topic with a replication factor of 3 and enabled *min.insync.replicas* set to 2 so producers would reject writes only if two replicas were down. I also launched each broker in separate Availability Zones, used Elastic Load Balancing for client traffic, and set `auto.leader.rebalance.enable` to true for quick failover. Finally, I scripted nightly rolling restarts of brokers via Ansible and monitored lag with Kafka Manager, alerting on any replica lag > 10 minutes.

**Result:**  
After the rollout, we saw a 99.999% uptime over six months, broker failure recovery time dropped from ~45 min to <5 min, and no data loss incidents occurred during simulated outages. I learned that HA is as much about thoughtful configuration (replication, in‑sync replicas) as it is about infrastructure placement and monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
