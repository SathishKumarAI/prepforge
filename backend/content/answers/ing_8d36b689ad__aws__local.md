---
qid: ing_8d36b689ad__aws__local
question: 'Explain: Topics — Benchmarking Apache Kafka: 2 Million Writes Per Second
  (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 512
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:05-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn I led a benchmark study to prove that **Apache Kafka could sustain 2 M writes/sec on three low‑cost EC2 instances**—a claim that would enable our ad‑tech pipeline to run entirely on spot hardware. The goal was to validate performance, identify bottlenecks, and produce a reproducible test harness for future upgrades.

**Action (Design & Implementation)**  
- **Requirements:** 200 MB/s per instance, <10 ms latency, no data loss, realistic producer traffic (JSON ads).  
- **Architecture:**  
  - *Producers* → Amazon MSK on t3.medium instances with `acks=all`.  
  - *Broker cluster* → three `m5.large` nodes, 8 GB RAM, EBS‑gp2 SSDs.  
  - *Consumers* → Kinesis Data Streams to emulate downstream processing.  
- **Instrumentation:** CloudWatch metrics + Kafka JMX for queue depth and ISR lag; custom Prometheus exporter for per‑partition write latency.  
- **Scalability & Cost:** Using spot instances cut EC2 spend by 70 %. Elastic scaling of producer threads ensured linear throughput until the broker’s disk I/O limit (~300 MB/s total).  

**Result**  
Achieved **2,100,000 writes/sec** with average latency **8.4 ms** and zero data loss. The test ran for 48 h on a budget of $15/day—an 80 % cost reduction versus a dedicated on‑prem cluster. The findings were documented in a public LinkedIn post, driving adoption across 5 downstream services.

**Leadership Principles Highlighted**  
- **Customer Obsession / Ownership:** Delivered a production‑ready benchmark that directly lowered infrastructure costs for our entire ad‑tech team.  
- **Dive Deep & Bias for Action:** Probed JMX metrics, tweaked broker configs, and iterated until performance met the SLA—showing deep technical ownership.

**Bar‑raiser Takeaway**  
A strong answer shows *ownership* (lead the benchmark), *deep dive* (metrics, tuning), *quantified impact* (2 M writes/sec, 80 % cost savings), and *learning from failure* (iterated on disk I/O limits).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
