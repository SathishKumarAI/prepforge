---
qid: ing_1cc9989be5__fp__local
question: 'Explain: Amazon Dynamo Architecture — Amazon Dynamo Architecture - by Neo
  Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 419
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:07:23-05:00'
sources: []
---

**Amazon Dynamo – why it is the “de‑centralised key‑value store” that powers millions of requests**

The core problem: *“How can a large, globally distributed service keep data consistent and available when any node may fail or be unreachable?”*  
Dynamo answers by **relaxing consistency in favour of availability** (CAP theorem). It assumes the network is partitioned most of the time and therefore must keep serving requests. The cost is that reads may see stale values, but writes never block.

1. **Consistent hashing + virtual nodes**  
   Each server owns a *range* on an identifier circle; data are mapped to the first `N` successors (replication factor). Virtual nodes let a single physical host run many logical partitions, smoothing load when hosts join/leave.  
2. **Vector clocks & last‑writer-wins**  
   Every write increments a per‑key vector clock. When two replicas diverge, Dynamo keeps *all* versions; the client or application merges them (usually “last‑write wins” but not mandatory). This guarantees that no data is lost even if writes race.  
3. **Gossip protocol**  
   Nodes periodically exchange summaries of their known replicas, so membership changes propagate quickly without a central directory.  
4. **Merkle trees for anti‑entropy**  
   During read repair or background sync, nodes compare Merkle trees to detect divergent blocks and stream only the missing data, keeping bandwidth low.  

*Non‑obvious insight:* The use of *vector clocks* is not just for conflict detection—it also embeds a lightweight causal history. Even if you discard all but one version at a client, that clock still lets any later write know which updates it must supersede, ensuring eventual consistency without global locks.

In short, Dynamo trades strict correctness for robustness, using hashing, gossip, and vector clocks to keep data available while tolerating arbitrary failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
