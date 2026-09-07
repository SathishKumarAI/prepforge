---
qid: ing_cca5148f4e__faang__local
question: 'Explain: Scalability — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 528
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:36:17-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *Cloud Spanner* achieves scalability for ML workloads. I’ll confirm they mean horizontal scaling of read/write throughput, low‑latency consistency across regions, and support for large analytical pipelines.

---

**Approach**  
1. Explain Spanner’s distributed architecture (TrueTime + Paxos).  
2. Show how it shards data horizontally and balances load.  
3. Highlight the built‑in replication and sharding that keeps ML pipelines fast.  
4. Tie it back to typical ML use cases (feature stores, model serving).

---

**Depth**  

| Feature | Mechanism | Benefit for ML |
|---------|-----------|----------------|
| **TrueTime API** | Global clock with bounded staleness | Guarantees ACID even across continents—critical when training on data from multiple regions. |
| **Paxos consensus per tablet** | Each shard (tablet) replicates to ≥3 nodes | Provides linearizable reads/writes, so feature values are always fresh for inference. |
| **Automatic sharding & rebalancing** | Data is split into 256‑KB tablets; load balancer migrates hot tablets to new nodes | Enables scaling from a few GBs to petabytes without manual tuning—important when storing millions of training samples. |
| **Read‑only replicas** | Read‑optimized copies of each tablet | Supports heavy analytical queries (e.g., feature importance) without blocking writes. |

ML pipelines benefit: low‑latency reads for inference, high write throughput during bulk ingestion, and global consistency that eliminates data drift.

---

**Edge Cases**  
- **Hotspot tablets**: If a single key dominates traffic, rebalancing may lag; monitor and manually split.  
- **Network partitions**: Paxos can’t commit, leading to temporary unavailability—acceptable if the ML job is tolerant of brief stalls.  
- **Large schema migrations**: Spanner’s online DDL is safe but can cause transient load spikes.

---

**Optimize & Communicate**  

I’d suggest adding a feature‑store layer on top of Spanner that caches hot features in Redis, reducing latency further for inference workloads. In explaining this, I’ll emphasize the trade‑off between consistency and speed and how Cloud Spanner’s design lets us keep both high. This narrative showcases my structured thinking, depth of knowledge, and ability to propose practical improvements—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
