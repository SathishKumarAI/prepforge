---
qid: ing_a4fcf5543d__faang__local
question: 'Explain: Ordering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 528
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:46-05:00'
sources: []
---

**Clarify**  
We’re asked how a publish‑subscribe system can guarantee message *ordering* (e.g., per‑topic or per‑key) while still supporting high throughput. I’ll assume:  
1. A single logical topic with many partitions/partitions.  
2. Multiple producers and consumers, possibly across datacenters.  
3. Ordering must be preserved only within a logical stream (not globally).

**Approach**  
1. **Partition by key** – hash the message key to a deterministic partition.  
2. **Sequential writes per partition** – each producer buffers messages for its target partition and sends them in order.  
3. **Consumer-side sequencing** – consumers read from a single partition sequentially, so they receive an ordered stream.  
4. **Global ordering (optional)** – use a centralized sequencer or a two‑phase commit to assign global sequence numbers.

**Depth**  
*Partitioning* gives linear scalability; each partition can be replicated independently (e.g., Raft). Producers maintain a per‑partition write queue; the broker appends messages atomically. Consumers read from the leader replica of that partition, guaranteeing FIFO order within it. Complexity: O(1) append per message, O(P) read where P is partitions.  
For *global ordering*, a sequencer assigns monotonically increasing IDs before replication, but this becomes a bottleneck and single point of failure—hence used only when strict global order matters.

**Edge Cases**  
- **Producer crashes mid‑batch** → use idempotent writes or deduplication.  
- **Rebalancing partitions** → re‑hash keys or move in-flight messages atomically.  
- **Network partitions** → leader election ensures at most one write per partition.

**Optimize & Communicate**  
We can shard the sequencer horizontally (range of IDs) to reduce bottlenecks, or use *log compaction* to drop old offsets. In an interview I’d explain that the key insight is “order = locality + atomicity” and then walk through how a system like Kafka implements it with per‑partition logs, replication, and optional global sequencing. This shows clear problem framing, concrete design choices, complexity reasoning, and awareness of failure modes—all hallmarks of a FAANG interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
