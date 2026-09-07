---
qid: ing_354c6be726__faang__local
question: 'Explain: Scalability vs. Performance — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 705
total_tokens: 952
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:52-05:00'
sources: []
---

**Scalability vs. Performance – 15 Key Trade‑offs (Ashish Pratap Singh)**  

| # | Trade‑off | Core Insight |
|---|-----------|--------------|
| 1 | **Horizontal scaling vs. latency** | Adding nodes reduces load per server but may increase round‑trip time due to network hops. |
| 2 | **Replication factor vs. consistency** | More replicas improve fault tolerance & read throughput, yet stronger consistency (e.g., Paxos) hurts write speed. |
| 3 | **Sharding granularity vs. query complexity** | Finer shards lower per‑node load but join/aggregation across shards becomes expensive. |
| 4 | **Cache size vs. hit rate** | Larger caches increase hit probability, yet memory cost and eviction overhead grow. |
| 5 | **Batching writes vs. real‑time freshness** | Batching boosts throughput but introduces write latency. |
| 6 | **Eventual consistency vs. read accuracy** | Eventual models scale well; however stale reads may mislead ML inference. |
| 7 | **Compression ratio vs. CPU cost** | Higher compression saves bandwidth/storage, yet decompressing costs CPU cycles. |
| 8 | **Index depth vs. update overhead** | Deeper indexes speed lookups but slow inserts/updates due to tree maintenance. |
| 9 | **Data locality vs. load balancing** | Keeping hot data local reduces cross‑node traffic; aggressive balancing may scatter it, hurting performance. |
|10 | **Model size vs. inference latency** | Larger models capture nuance but need more memory and slower CPU/GPU inference. |
|11 | **Feature pre‑aggregation vs. flexibility** | Pre‑aggregated features speed pipelines but limit dynamic feature engineering. |
|12 | **GPU scaling vs. data transfer bottlenecks** | Scaling GPUs increases compute, yet shuttling data over PCIe or network can dominate time. |
|13 | **Autoscaling policies vs. stability** | Aggressive autoscale reduces cost but may trigger thrashing; conservative settings add capacity overhead. |
|14 | **Observability depth vs. overhead** | Rich metrics improve debugging but consume CPU, memory, and storage. |
|15 | **Security hardening vs. throughput** | Encryption/authorization preserve safety but introduce cryptographic overhead. |

### How to Use This Cheat‑Sheet  
1. **Clarify**: Define the system’s critical SLAs (latency, throughput) and constraints (budget, data freshness).  
2. **Approach**: Map each trade‑off to those SLAs; decide which side of the spectrum is acceptable for your use case.  
3. **Depth**: For chosen knobs, calculate expected cost/benefit—e.g., doubling replicas halves read latency but adds ~50 % storage overhead.  
4. **Edge Cases**: Test with burst traffic, node failures, and data skew to see where the trade‑offs break.  
5. **Optimize & Communicate**: Iterate on a hybrid strategy (e.g., moderate sharding + selective caching) and explain how each choice satisfies the business goal while staying within operational limits.

This framework lets you discuss scalability vs. performance systematically—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
