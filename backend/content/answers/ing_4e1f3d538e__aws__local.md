---
qid: ing_4e1f3d538e__aws__local
question: 'Explain: Summary — How to Choose the Number of Topics/Partitions in a Kafka
  Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 494
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:04-05:00'
sources: []
---

**Situation & Task**  
In my previous role I led the migration of our real‑time analytics pipeline from a single‑node Kafka cluster to a multi‑broker Confluent Cloud deployment. The key challenge was deciding how many partitions per topic would give us the right mix of throughput, latency and fault tolerance without overspending on broker capacity.

**Action (Technical)**  
1. **Measure baseline** – I instrumented producer/consumer metrics (latency, request rate) over a 24‑hour window to capture peak traffic.  
2. **Rule of thumb** – Kafka recommends at least one partition per *10 %* of the expected concurrent consumers plus an extra for headroom. For our 5 kps workload and 8 consumer instances I started with 16 partitions.  
3. **Simulate skew** – Using `kafka-run-class kafka.tools.GetOffsetShell` I verified even distribution; any heavy‑lifter topic was rebalanced to 32 partitions.  
4. **Cost‑benefit** – Each partition adds a log segment on disk and an OS thread on the broker. I compared the $0.023 per GB/month for Confluent Cloud storage against the $0.10 per vCPU hour for increased broker load, concluding that 32 partitions kept us under the $200/month budget while yielding <50 ms latency.  
5. **Iterate** – After one week of production I tightened to 24 partitions when consumer lag dropped below 1 kB, saving 15 % on storage.

**Result**  
Through this data‑driven approach we achieved a 4× throughput increase and 30 % cost savings, while keeping consumer lag <5 ms. The system now scales linearly up to 10 kps with no broker bottlenecks.

**Leadership Principles Highlighted**  
- **Ownership** – I owned the end‑to‑end pipeline migration and continuous optimization.  
- **Dive Deep** – I dissected metrics, simulated partition skew, and performed cost modeling.  

*Bar‑raiser notes*: Look for evidence of ownership, quantitative impact (latency reduction, cost savings), deep technical dive into Kafka internals, and learning from iterative tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
