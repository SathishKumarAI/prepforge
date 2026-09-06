---
qid: ing_5f78a8b821__fp__local
question: 'Explain: surprised to find that we''re moving all — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 419
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:28:49-05:00'
sources: []
---

## Why “moving all” is the key to a hyper‑scale database

The core engineering problem for any distributed key‑value store is *how to keep every node’s view of the data consistent while never becoming a bottleneck*.  
A naïve approach keeps data in a single shard and replicates it to others only when reads or writes occur. That replication scheme turns the system into a *write‑heavy* bottleneck: each write must be propagated, which is expensive at scale.

The DynamoDB team solved this by **moving all** the data during rebalancing rather than moving only the hot spots.  
When a node leaves or joins, its entire key space is reassigned to a new set of nodes. Because every record’s *partition key* hash determines its home node, redistributing *all* keys guarantees that:

1. **Uniform load** – Every node receives roughly the same amount of traffic after rebalance, eliminating hotspots without continuous monitoring.
2. **Strong consistency** – Since each partition is owned by a single node at any time, write‑time quorum protocols (e.g., Paxos or Raft) can be applied locally, avoiding cross‑node coordination for most operations.
3. **Simplified recovery** – If a node fails, all its keys are known to have been moved elsewhere; there’s no need to scan the cluster for orphaned records.

The deeper principle is *massive parallelism through deterministic sharding*. By treating the entire dataset as a single logical array and moving it wholesale, DynamoDB turns what would be a complex, stateful migration into a stateless hash‑reassignment operation.  
**Non‑obvious insight:** The real gain comes from **shifting the cost of rebalancing from runtime to batch operations**; you pay for moving data once during cluster changes rather than repeatedly paying for tiny, incremental migrations that could never keep up with petabyte‑scale workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
