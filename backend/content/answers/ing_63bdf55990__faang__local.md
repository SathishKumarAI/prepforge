---
qid: ing_63bdf55990__faang__local
question: 'Explain: High Availability Config — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 516
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:36:27-05:00'
sources: []
---

**High‑Availability Configuration for Apache Kafka**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | “High availability” means the broker cluster must keep data and service up even when one or more nodes fail. I’d confirm: <br>• Desired replication factor? <br>• Number of brokers and racks/availability zones (AZs). <br>• Whether we need to preserve ordering per partition. |
| **Approach** | 1️⃣ Enable topic‑level replication (`replication.factor ≥ 3`).<br>2️⃣ Configure `min.insync.replicas` so producers wait for a quorum.<br>3️⃣ Deploy each broker on separate AZs and set `broker.rack` to spread replicas. <br>4️⃣ Set up ZooKeeper (or KRaft) redundancy: 5‑node ensemble, enable leader election.\n5️⃣ Tune `unclean.leader.election.enable=false` to avoid data loss.<br>6️⃣ Use ACLs and TLS for secure failover. |
| **Depth** | *Replication*: each partition has a leader + followers; on broker crash, follower becomes new leader automatically (≈200 ms). <br>*ZK/KRaft*: ensures cluster metadata consistency. <br>*`min.insync.replicas`*: if set to 2 and only one replica remains, writes are rejected → prevents “write‑behind” loss.<br>Complexity: O(1) leader lookup; recovery time ≈ network latency + follower sync. |
| **Edge Cases** | • A rack failure removes all replicas of a partition → data unavailable until new broker added. <br>• Network partition can cause split‑brain; mitigated by `unclean.leader.election.enable=false`. <br>• In KRaft mode, need to run ≥3 nodes for quorum. |
| **Optimize & Communicate** | • Use topic‑level configs instead of cluster‑wide defaults to keep replication factor flexible.<br>• Monitor broker health with Prometheus + Grafana; set alerts on under‑replicated partitions.<br>Explain trade‑offs: higher `min.insync.replicas` → stronger durability but higher write latency. Keep the narrative concise and tie each config back to HA goals. |

*Word count: 204*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
