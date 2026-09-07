---
qid: ing_a7f3aec3b6__aws__local
question: 'Explain: Secondary Indexes — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 543
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:43-05:00'
sources: []
---

**Situation & Task**  
When architecting a real‑time recommendation engine for our e‑commerce platform, I had to decide whether to use **Cassandra** (wide‑column) or **MongoDB** (document) for the user‑profile store that required ad‑hoc queries on *country* and *subscription tier*. The key challenge: keep read latency < 10 ms while handling 3 M writes/day.

**Action**  
I compared secondary indexing mechanisms:

| Feature | Cassandra | MongoDB |
|---------|-----------|---------|
| **Index type** | Secondary indexes (partition‑key + clustering) | B‑tree indexes on fields |
| **Write amplification** | High – each index update writes to a separate SSTable | Lower – single document write updates all relevant indexes |
| **Read path** | Index lookup → partition key fetch; requires *coordinator* to route queries; can hit multiple nodes | Direct index scan → single node read |
| **Scalability** | Linear with partitions; however, many small secondary‑index tables lead to hotspotting and higher disk I/O | Handles large collections gracefully; indexes are stored in memory for hot data |
| **Consistency** | Tunable (e.g., QUORUM) but index visibility can lag by a few seconds | Strong consistency out of the box |

I prototyped both setups:

- **Cassandra**: 3 M writes/day → 200 GB/day. Index lookups added ~12 ms latency; read throughput dropped 25% under heavy write load.
- **MongoDB**: Same data volume, but index lookup remained < 4 ms even at peak, and CPU usage stayed 30% lower.

**Result**  
I selected MongoDB, saving ~$15K/month in operational costs (less hardware for compaction) and improving read latency by 70%. The migration also cut our mean time to recovery from 45 min to 12 min.  

**Leadership Principles**  
- **Customer Obsession**: Prioritized user‑experience with sub‑10 ms reads.  
- **Dive Deep**: Benchmarked both systems under realistic workloads, uncovered write amplification trade‑offs.  

**Bar‑raiser Takeaway**  
Demonstrated ownership by leading the experiment, quantified impact (latency & cost), and learned that secondary indexes in wide‑column stores can become a bottleneck under high write throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
