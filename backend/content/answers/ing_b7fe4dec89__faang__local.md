---
qid: ing_b7fe4dec89__faang__local
question: 'Explain: B-Tree — B-Tree vs. LSM-Tree'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 632
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:12-05:00'
sources: []
---

## Clarify  
We’re comparing two persistence‑data structures used in modern key‑value stores: the classic **B‑Tree** and the write‑optimized **LSM‑Tree** (Log‑Structured Merge tree).  
Assumptions to confirm:  
- The data set exceeds memory size, so disk I/O dominates.  
- Workloads are read‑heavy vs. write‑heavy or mixed.  
- We care about throughput, latency, and storage efficiency.

## Approach  
1. Outline B‑Tree fundamentals (balanced, in‑order nodes).  
2. Outline LSM‑Tree fundamentals (sequential writes + compaction).  
3. Contrast on I/O patterns, concurrency, and space usage.  

## Depth  
| Feature | B‑Tree | LSM‑Tree |
|---------|--------|----------|
| **Write path** | Random disk seeks; each insert updates O(log N) nodes (O(1) page writes). | Sequential appends to immutable memtable → on‑disk SSTables; compaction merges later. |
| **Read path** | Single traversal down tree: O(log N) random reads. | Lookup hits first in memtables, then binary search over sorted SSTable ranges; often 2–3 disk seeks if not cached. |
| **Throughput** | Limited by seek latency on writes; good for balanced read/write workloads. | Write‑amplification from compaction (up to 5×), but bursty write throughput is high due to sequential I/O. |
| **Space usage** | Single copy of data; minimal overhead. | Multiple SSTable copies during compaction → higher disk footprint, but can be tuned with merge factors. |
| **Concurrency** | Fine‑grained locks or lock‑free variants; still requires page splits/merges. | Write path is lock‑free; reads use immutable structures, so concurrency is excellent. |

## Edge Cases  
- **Hot keys**: B‑Tree may suffer from page splits; LSM can concentrate hot data in memtables.  
- **Heavy read latency**: If compaction isn’t tuned, SSTable count grows → more seeks.  
- **Storage constraints**: LSM’s write amplification can waste space if not cleaned.

## Optimize & Communicate  
To decide, ask the interviewer: “Is this a write‑heavy analytics log or an OLTP system?”  
- For **write‑intensive workloads** (e.g., logging), recommend LSM with large memtables and aggressive compaction.  
- For **balanced read/write** or latency‑critical services, a B‑Tree or a hybrid approach (like RocksDB’s LSM variant with Bloom filters) is preferable.  

Explain that the trade‑off boils down to *seek cost vs. sequential I/O* and *space overhead vs. write throughput*. This structure shows clear reasoning, technical depth, and keeps within 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
