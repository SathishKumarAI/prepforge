---
qid: ing_733d03edf0__aws__local
question: Estimation - How to decide number of partitions in Kafka?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 465
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:09-05:00'
sources: []
---

**Situation / Task**  
While redesigning our real‑time fraud detection pipeline for a global payments platform, I had to decide how many Kafka partitions to allocate for the `transactions` topic. The goal was to guarantee sub‑millisecond latency for 95 % of events while keeping cost and operational overhead in check.

**Action**  
1. **Dive Deep into Workload** – Collected production telemetry: ~200 M events/day, peak burst 5 k/s, average message size 2 KB.  
2. **Compute Ideal Parallelism** – Used the rule of thumb *events per second ÷ (max consumer threads × throughput per thread)* → \(5{,}000 / (4×1{,}200) ≈ 1\). This suggested 4–8 partitions to keep each broker busy without over‑provisioning.  
3. **Simulate and Validate** – Employed *kafka-producer-perf* and *kafka-consumer-perf* on a test cluster; observed that 12 partitions yielded <2 ms average latency at peak, while 6 partitions hit 4–5 ms.  
4. **Cost & Availability Trade‑off** – With 12 partitions we used 3 broker replicas (RA=3) → ~30 GB disk usage and 18 % higher storage cost vs 6 partitions, but offered higher headroom for future growth.  

**Result**  
Implemented 12 partitions with RA = 3; achieved **99.7 % SLA on latency**, reduced consumer lag from 12 s to <200 ms, and maintained a 15 % margin for traffic spikes. The change lowered our Kafka cluster cost by 10 % after autoscaling was applied.

**Learning**  
The key takeaway: *start with data‑driven estimates, validate in staging, then scale conservatively*. This approach embodies **Customer Obsession** (ensuring fast fraud alerts) and **Ownership** (owning the end‑to‑end performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
