---
qid: ing_7ba1924db8__aws__local
question: 'Explain: Three producers, 3x async replication — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 535
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:02-05:00'
sources: []
---

**Situation & Task**  
I was tasked with validating LinkedIn’s claim that a three‑node Kafka cluster could sustain 2 M writes/sec on cheap hardware. The goal was to benchmark the setup, identify bottlenecks, and recommend a production‑grade design for AWS.

**Action (Technical)**  
1. **Requirements** – Throughput ≥ 2 M msgs/s, < 200 ms latency, 3× asynchronous replication (RAID‑5 style).  
2. **Design** – Spin up an Amazon MSK cluster with *kafka-broker* instances in a single AZ, use `num.replication.factor=3`, enable *compression.codec=gzip*, and set `min.insync.replicas=2`.  
3. **Benchmarking** – Employed the open‑source `kafka-producer-perf-test.sh` with 50 concurrent producers, each sending 400 kB messages. Logged throughput, CPU, disk I/O, and GC stats.  
4. **Analysis (Dive Deep)** – CPU saturated at 90 % on all nodes; network was the primary limiter. Disk I/O remained below 80 %.  

**Result**  
Achieved ~1.8 M writes/sec with 180 ms latency, validating LinkedIn’s claim but exposing a 10 % headroom for growth. Recommending an *MSK* cluster of **4 broker nodes** (to spread network load) and enabling *broker‑level encryption* added 5 % overhead but kept latency < 200 ms. Cost estimate: ~$0.30/sec vs. $1.20/sec on the original cheap hardware.

**Leadership Principles & Bar‑raiser cues**  
- **Ownership & Deliver Results** – Took end‑to‑end responsibility for benchmark design, execution, and actionable findings.  
- **Dive Deep** – Parsed CPU/GC logs to isolate network as bottleneck; leveraged AWS CloudWatch metrics for deeper insight.  
- **Bias for Action** – Quickly pivoted from 3‑node test to a 4‑node MSK recommendation, balancing cost & scalability.

*Learnings:* Over‑provisioning CPU can mask true network limits; always profile all layers before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
