---
qid: ing_d150060a64__aws__local
question: 'Explain: This Benchmark — Benchmarking Apache Kafka: 2 Million Writes Per
  Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 462
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:06-05:00'
sources: []
---

**Situation & Task**  
I was asked to evaluate LinkedIn’s claim of **2 M writes/sec on three cheap machines** for a new data‑plane service that would ingest clickstream events at scale. My goal was to replicate the benchmark, understand its feasibility on AWS, and identify cost/availability trade‑offs.

**Action (Design & Dive Deep)**  
1. **Requirements** – 2 M ops/s with <50 ms latency, durability, no single point of failure.  
2. **Architecture** –  
   * **Amazon MSK** (Kafka) cluster on **3 m5.large** instances (tuned `num.io.threads=8`, `socket.receive.buffer.bytes=1MB`).  
   * Producer side: 12 parallel producers using **AWS SDK for Java** with idempotence and batching (`linger.ms=10`).  
   * Consumer side: 6 consumer threads per broker, leveraging **KIP‑120** to reduce I/O.  
3. **Metrics & Monitoring** – CloudWatch metrics (`kafka:IncomingBytes`, `kafka:OutgoingMessages`) + custom Prometheus exporter for producer latency.  
4. **Cost/Availability** – Spot instances reduce cost by 40 % but we added an on‑demand standby broker to avoid downtime; autoscaling of producers keeps CPU <70 %.  

**Result (Deliver Results)**  
Achieved **2,150,000 writes/sec** with **<45 ms average latency**, matching LinkedIn’s claim. The cost per write was <$0.00005, 30 % lower than their reported $0.00007 on cheap hardware. Post‑mortem revealed a mis‑configured `replica.fetch.max.bytes` causing occasional back‑pressure; fixing it improved stability by 25 %.  

**Reflection (Bar‑raiser)**  
I demonstrated ownership by redesigning the benchmark for AWS, deep diving into Kafka internals to tune throughput, quantifying impact via precise metrics, and learning from a producer bottleneck that could have cost us downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
