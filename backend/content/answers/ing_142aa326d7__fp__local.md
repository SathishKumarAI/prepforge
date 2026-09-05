---
qid: ing_142aa326d7__fp__local
question: 'Explain: Implement "top-k most frequent search queries" over a large query
  log, then tell me what breaks when the log becomes an unbounded stream across many
  machines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 520
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:10-05:00'
sources: []
---

**From first principles**

The problem is: *“Given a multiset of query strings, report the k items that occur most often.”*  
If we have all data in memory, counting each occurrence and then sorting by count gives the answer. The key insight is that *frequency counts are additive*: the global count of an item equals the sum of its local counts on every machine.

**Distributed, bounded‑size solution**

1. **Local sketch** – Each node builds a compact counter (e.g., a Count–Min Sketch or HyperLogLog) for its shard of the log.
2. **Aggregation** – The sketches are merged by summing corresponding counters; the merge operation is associative and commutative, so any order of merges yields the same result.
3. **Top‑k extraction** – After merging, run a heap‑based selection to keep only the k largest counts.

This works because the sketch guarantees an *upper bound* on each count with sublinear space, and the additive merge preserves that bound.

---

### What breaks in an unbounded stream across many machines

| Issue | Why it fails |
|-------|--------------|
| **Memory blow‑up** | In a stream the number of distinct queries can grow without bound. A fixed‑size sketch eventually saturates; new items push old ones out, corrupting counts. |
| **Latency vs. freshness** | Aggregating sketches from all machines requires synchronization. In a high‑throughput stream, waiting for all nodes to flush introduces unacceptable delay; partial aggregates become stale. |
| **Non‑commutative updates** | If the sketch uses random hash tables that must be re‑seeded per node, merging becomes impossible once seeds diverge. |
| **Fault tolerance** | A single node’s loss of its local sketch erases all counts for queries it saw most often; without checkpointing or replication we lose accuracy. |

**Non‑obvious insight:**  
In a stream, the *distribution of query frequencies* evolves over time (concept drift). Even if each machine’s sketch is accurate at snapshot t, after a burst of new popular queries the global top‑k may shift dramatically before any aggregation can catch up. Thus, maintaining a *time‑decayed* weighting or sliding window is essential; otherwise the algorithm implicitly assumes stationarity and silently delivers stale results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
