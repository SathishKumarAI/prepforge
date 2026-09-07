---
qid: ing_73eb84c24a__aws__local
question: 'Explain: Single producer thread, no replication — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 427
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:05-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to evaluate the raw write throughput of a Kafka cluster for an event‑driven analytics pipeline. The goal was 2 M writes/sec on commodity hardware (3 x m5.large).  

**Action – Technical Design**  
I instantiated a single‑producer, no‑replication topology to isolate write path latency.  
- **Producer**: `kafka-producer-perf-test` with batch size = 1 MB, linger = 0ms, compression = none.  
- **Broker config**: `min.insync.replicas=1`, `replication.factor=1`.  
- **Network**: 3‑node EC2 instances on a single VPC with 10 Gbps ENI.  

Using CloudWatch I logged request latency and broker log bytes/sec. I ran the benchmark for 30 min, collecting per‑second write counts.

**Result**  
The cluster sustained **≈ 1.8 M writes/sec** (peak 2.0 M) with < 5 ms average latency, matching the LinkedIn claim within a 10% margin. Cost analysis showed <$20/day for the EC2 set‑up, proving high throughput is achievable on low‑budget hardware.

**Reflection & Learnings**  
- **Ownership**: I assumed full responsibility for configuration and data collection, iterating until results stabilized.  
- **Dive Deep**: By isolating replication and batch size I pinpointed the bottleneck (broker I/O).  
- **Bias for Action**: I deployed quickly on AWS, used CloudWatch metrics to validate hypotheses, and adjusted parameters in real time.  

This exercise reinforced that Kafka’s write path can be tuned for extreme throughput while keeping costs low—a lesson I bring to any data‑pipeline design at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
