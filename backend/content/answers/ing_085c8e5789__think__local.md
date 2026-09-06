---
qid: ing_085c8e5789__think__local
question: 'Explain: Company — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 481
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:16:35-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   * Identify what “LedgerStore” is (Uber’s internal data store for logs/metrics).  
   * Decide that the focus is on how it scales to trillions of indexes—no need to dive into every implementation detail, just the high‑level strategies.  

**2. Adopt a mental framework**  
   * Treat the problem as *scalable indexing*: storage, query efficiency, fault tolerance, and cost.  
   * Break it down into four pillars: **data model**, **partitioning strategy**, **index structure**, and **operational tooling**.

**3. Step‑by‑step reasoning**  
   1. Start with the data model: logs are append‑only streams → natural for columnar or log‑structured storage.  
   2. Partition by time & service (sharding) to keep each node’s index small and write‑friendly.  
   3. Use a *compressed, sparse bitmap* or *Roaring Bitmap* per shard so that an index entry is tiny yet queryable in sub‑millisecond time.  
   4. Merge partitions lazily; keep hot data on SSDs, cold data tiered to cheaper storage.  
   5. Leverage a distributed coordination layer (e.g., ZooKeeper) for schema evolution and consistent hashing.  
   6. Build query engines that push predicates into the index before scanning raw data, reducing I/O by orders of magnitude.  

**4. Common traps to avoid**  
   * Assuming a single monolithic index will work—fails under write churn.  
   * Over‑optimizing for read speed at the expense of write throughput; balance is key.  
   * Neglecting compression: uncompressed indexes would explode in size.

**5. Sanity‑check & communicate**  
   * Verify that each pillar addresses a specific challenge (e.g., partitioning handles scale, bitmap indexing gives speed).  
   * Explain the trade‑offs clearly: e.g., why time‑based sharding is chosen over hash‑sharding for log data.  
   * Conclude with how these pieces together let LedgerStore index trillions of entries while keeping latency low and operational costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
