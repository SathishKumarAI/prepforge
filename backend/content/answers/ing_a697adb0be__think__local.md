---
qid: ing_a697adb0be__think__local
question: 'Explain: How adaptive capacity works — How Amazon DynamoDB adaptive capacity
  accommodates uneven data access patterns (or, why what you know about DynamoDB might
  be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 508
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:04:27-05:00'
sources: []
---

**1. Clarify the question and state assumptions**  
- Identify that “adaptive capacity” refers to DynamoDB’s ability to adjust provisioned read/write throughput automatically.  
- Assume the reader knows basic DynamoDB concepts (tables, partitions, hot keys).  
- Note that AWS may change terminology or features; mention that “on-demand scaling” now supersedes some older adaptive‑capacity mechanisms.

**2. Adopt a mental model of DynamoDB’s partitioning**  
- Think of a table as many physical partitions spread across the cluster.  
- Each partition handles a subset of the key space and is limited to ~300 MiB of data.  
- Throughput is divided among partitions; if one key gets hammered, its partition becomes “hot”.

**3. Step‑by‑step reasoning toward the answer**  
a. Explain how provisioned capacity is initially split evenly across all partitions.  
b. Show that uneven access patterns (e.g., a popular “user_id” key) concentrate traffic on a single partition.  
c. Describe how adaptive capacity monitors per‑partition utilization, then moves hot partitions to new nodes or adds extra “write units” for them.  
d. Contrast this with the older “auto scaling” feature that only adjusts total provisioned throughput; adaptive capacity actually redistributes it at the partition level.  
e. Mention the current “on‑demand mode” where AWS automatically scales without any provisioning, effectively making adaptive capacity unnecessary.

**4. Common traps to avoid**  
- Don’t conflate adaptive capacity with auto‑scaling; they are distinct.  
- Avoid assuming that all hot keys are always on a single partition—sharding can spread them if the key space is wide enough.  
- Remember that DynamoDB’s limits (300 MiB per partition, 3,000 read/write units) still apply even after adaptation.

**5. Sanity‑check and communicate clearly**  
- Verify that each step logically follows from the previous one; e.g., show how a hot key triggers a capacity shift.  
- Use concrete numbers or examples (e.g., “10 read units per partition → 30 units for a hot partition”).  
- End with a concise summary: adaptive capacity watches per‑partition load and rebalances throughput, but today AWS recommends on‑demand mode for most workloads because it removes the need to manage this manually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
