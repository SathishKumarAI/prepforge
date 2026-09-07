---
qid: ing_c412c548b1__aws__local
question: Why Kafka is so fast? — Whykafkasofast
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 491
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:30-05:00'
sources: []
---

**Why Kafka Is So Fast**

*Leadership Principles:* **Ownership** – I own the end‑to‑end performance of our data pipeline, and **Dive Deep** – I dissect every layer of the stack.

**Situation**  
Our real‑time analytics platform was throttling at 1 M events/s. We needed a high‑throughput broker that could handle bursty traffic without sacrificing latency.

**Task**  
I evaluated alternatives (RabbitMQ, Kinesis) and decided to prototype Kafka on AWS.

**Action**  
*Kafka Architecture:*  
- **Zero‑Copy I/O**: Uses OS page cache; data is read into memory once and written directly to disk via `sendfile`.  
- **Batching & Compression**: Producers batch up to 1 MB per request and optionally use LZ4, reducing network round‑trips.  
- **Log Segmentation & Append‑Only**: Writes are sequential; each segment is a memory‑mapped file that the kernel can cache efficiently.  
- **Parallel Consumers**: Topic partitions allow multiple consumers to read in parallel, scaling linearly with partitions.

*AWS Services:*  
- EC2 Spot Instances (c5.large) for brokers, autoscaled by CloudWatch metrics (`BytesInPerSec`, `DiskReadOps`).  
- EBS gp3 volumes (400 IOPS baseline + 1 M IOPS burst) to match write throughput.  
- Elastic Load Balancer to distribute producer traffic across brokers.

**Result**  
We achieved **5 × higher throughput** (5 M events/s) with <10 ms average latency, and cost‑per‑event dropped from $0.0004 to $0.00008. The system sustained 30 days of continuous load without degradation.  

*Bar‑raiser takeaway:*  
- **Ownership:** I led the migration and maintained SLA compliance.  
- **Dive Deep:** I quantified I/O paths, tuned segment size, and monitored disk utilization.  
- **Quantified Impact:** 5× throughput, 80% cost savings.  
- **Learning from Failure:** Early trials showed high GC pauses; moving to K‑Tables mitigated that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
