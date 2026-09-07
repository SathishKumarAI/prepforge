---
qid: ing_a697adb0be__faang__local
question: 'Explain: How adaptive capacity works — How Amazon DynamoDB adaptive capacity
  accommodates uneven data access patterns (or, why what you know about DynamoDB might
  be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 521
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:23-05:00'
sources: []
---

**Clarify**  
We’re asked how *DynamoDB’s Adaptive Capacity* handles skewed workloads, and why the classic “one‑write per partition key” rule may no longer hold. I’ll assume we’re talking about read/write amplification on hot partitions and that the reader knows the basics of DynamoDB’s partitioning scheme.

**Approach**  
1. Restate the problem in my own words.  
2. Outline the underlying mechanism: partition key → hash → physical node; then Adaptive Capacity’s “hot‑partition mitigation.”  
3. Dive into the core logic (partition splitting, on‑the‑fly rebalancing).  
4. Touch on limits/edge cases and how to test them.  
5. Conclude with trade‑offs and a quick comparison to older DynamoDB behavior.

**Depth**  
DynamoDB stores data in *partitions* determined by the hash of the partition key. Historically, if one key received 80 % of traffic it would become a hot spot, throttling all reads/writes that key. Adaptive Capacity (AC) introduced in 2020 monitors per‑partition throughput and automatically **splits** a hot partition into multiple *sub‑partitions* without any schema change or manual re‑sharding. Each split inherits the same key range but is distributed across different physical nodes, so subsequent requests hit distinct servers. AC also keeps a *hotness score* for each sub‑partition; if traffic subsides it can merge them back, ensuring storage efficiency.

**Edge cases**  
- Extremely bursty workloads that spike faster than AC can split (throttling still occurs).  
- Mixed read/write patterns where one operation type is hot while the other isn’t—AC splits per operation type.  
- Very small tables: no partitioning overhead, so AC has little to do.

Testing: generate skewed traffic via *dynamodb-stress* and monitor `ThrottledRequests` and `HotPartitionCount`.

**Optimize & communicate**  
Explain that AC removes the “single‑hot key” bottleneck but still respects provisioned throughput limits. It’s a trade‑off between automatic scaling (better performance) and predictability (slightly higher latency during splits). I’d finish by noting that while AC is powerful, developers should still design for even access patterns where possible to avoid unnecessary split/merge churn.

---  
*Word count: ~200*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
