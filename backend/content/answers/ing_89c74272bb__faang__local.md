---
qid: ing_89c74272bb__faang__local
question: 'Explain: High Availability — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 611
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:54-05:00'
sources: []
---

**Clarify**  
*What is being asked?* You want a concise, interview‑ready explanation of how **Apache Kafka** achieves high availability (HA).  
Key assumptions: the audience knows Kafka’s basics (brokers, topics, partitions) but may not know its HA internals.

---

**Approach**  
1. Define “high availability” in Kafka terms.  
2. Describe the replication model that underpins HA.  
3. Explain leader election and failover.  
4. Mention configuration knobs that tune reliability.  
5. Touch on monitoring/alerting patterns.

---

**Depth**  

| Layer | Mechanism | Impact |
|-------|-----------|--------|
| **Replication** | Each partition has a *leader* broker and one or more *followers*. Followers replicate the leader’s log over TCP. | Guarantees that data survives broker failure as long as at least one replica remains alive. |
| **Leader Election (Zookeeper/ KRaft)** | On broker start, brokers register with ZK/KRaft. If a leader crashes, an in‑memory election picks a follower as new leader; the offset is preserved because followers are fully up‑to‑date (unless `min.insync.replicas` > 1). | Zero‑downtime reads/writes for consumers/producers that target the new leader. |
| **Ack semantics** (`acks=all`, `min.insync.replicas`) | Forces writes to be replicated before acknowledging, ensuring durability even if one replica dies during a write. | Balances latency vs durability; misconfiguration can lead to data loss. |
| **Broker health checks** | Heartbeats between brokers and the cluster controller detect dead nodes within ~5 s. | Triggers immediate re‑election, keeping availability high. |

---

**Edge cases**  
* All replicas of a partition on the same rack go down → data unavailable. Mitigate with `broker.rack` and multi‑rack replication.  
* Misconfigured `min.insync.replicas` = 1 → writes succeed even if only one replica remains, risking data loss.  
* Zookeeper/KRaft quorum loss → cluster becomes read‑only; requires manual intervention.

---

**Optimize & Communicate**  
Highlight that HA is a *feature*, not an add‑on: replication and leader election are baked into Kafka’s core. Emphasize tuning knobs (`replication.factor`, `min.insync.replicas`) as trade‑offs between durability, latency, and cost. Conclude with best practices: use multi‑rack clusters, enable TLS/ACLs for security, monitor broker health via JMX or Prometheus, and test failover scenarios in staging. This shows a solid grasp of Kafka’s HA design and operational readiness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
