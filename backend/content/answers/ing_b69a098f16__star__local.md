---
qid: ing_b69a098f16__star__local
question: 'Explain: Distributed consensus — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 325
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:24-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a global e‑commerce platform that needed a fault‑tolerant inventory service. The existing monolith was single‑point‑of‑failure, and our growth target was 10 M daily users with sub‑second latency.

**Task:**  
Design and implement a distributed consensus layer to keep inventory counts consistent across three data centers while keeping read latency under 20 ms and write throughput above 5 k ops/sec.

**Action:**  
I chose the Raft algorithm for its understandability and strong consistency guarantees. Using Go, I built a lightweight Raft node that persisted logs with BoltDB and exposed gRPC endpoints. To reduce cross‑region traffic I added a read‑only quorum mode: reads hit any follower, writes go through the leader. For reliability I integrated a health‑check circuit breaker and automated leader election retries. I also implemented log compaction to keep disk usage below 10 GB per node.

**Result:**  
The new service achieved 99.999% availability during a two‑week load test with 12 k concurrent users, reduced inventory latency from 120 ms to 18 ms, and cut write failures by 97%. I learned how trade‑offs between consistency, latency, and operational complexity shape production systems, and how tooling like Prometheus and Grafana can surface subtle performance regressions before they hit customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
