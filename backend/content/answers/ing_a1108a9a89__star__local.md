---
qid: ing_a1108a9a89__star__local
question: 'Explain: Minimum in-sync replica — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 379
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:54:41-05:00'
sources: []
---

**Situation** – When we migrated our order‑processing pipeline to a new Kafka cluster, the production team was concerned that a broker failure could cause us to lose committed orders and break SLAs.

**Task** – I had to configure the cluster so that every write would survive a single broker crash while keeping latency low. That meant tuning the `min.insync.replicas` setting and making sure producers used `acks=all`.

**Action** – First, I examined our topic replication factor (3) and current ISR size under load. I set `min.insync.replicas=2`, which guarantees that at least two replicas must acknowledge a write before the leader commits it. Then I updated the producer config to `acks=all` and added a retry policy of 5 attempts with exponential back‑off. I also enabled the `unclean.leader.election.enable=false` flag so that an ISR‑less broker could never become leader, preventing accidental data loss. Finally, I monitored the `kafka.server:ReplicaLagMaxMs` metric to ensure no replica fell too far behind.

**Result** – After the change, a simulated broker failure caused only a 0.02 % drop in order records (versus ~1.5 % before), and our average write latency stayed under 10 ms. I learned that balancing durability with performance hinges on carefully aligning `min.insync.replicas`, producer acks, and ISR health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
