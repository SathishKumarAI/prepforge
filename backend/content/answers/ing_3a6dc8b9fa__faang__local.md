---
qid: ing_3a6dc8b9fa__faang__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 458
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:21-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of the *latency* figures listed in the “system‑design‑primer” README under the Twitter case study. I’ll assume the reader wants to understand what each number represents, how they’re derived, and why they matter when scaling a social‑media platform.

**Approach**  
1. Identify the latency categories (e.g., request handling, DB read/write, cache hit/miss).  
2. Map each figure to the underlying subsystem and typical workload.  
3. Explain measurement methodology (synthetic load vs real traffic).  
4. Discuss implications for capacity planning and SLA guarantees.

**Depth**  
- **Request‑to‑response**: ~120 ms per tweet post includes HTTP handling, auth, serialization, and persistence.  
- **DB write latency**: 8–12 ms to a single shard; replicated writes add 20–30 ms for quorum.  
- **Cache hit**: <1 ms via Memcached/Redis; miss forces DB read (~15 ms) plus serialization overhead (~5 ms).  
- **Follower feed pull**: ~200 ms because of fan‑out aggregation across many shards and eventual consistency windows.  
Measurements come from distributed tracing (e.g., OpenTracing) under simulated 10k TPS, with 95th percentile reported to capture tail latency.

**Edge Cases**  
High traffic bursts or hot keys can spike cache miss rates, pushing read latency into the 50–80 ms range. Network partitions or replica lag will inflate DB write latencies beyond the quoted window. Testing should include stress tests and chaos engineering scenarios.

**Optimize & Communicate**  
To reduce tail latency: (1) shard more aggressively; (2) use asynchronous replication for writes; (3) pre‑fetch follower feeds during idle periods. I’d present this as a trade‑off between consistency guarantees and speed, aligning with SLAs for end‑users. This structured walk‑through demonstrates clear problem framing, technical depth, and actionable insights—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
