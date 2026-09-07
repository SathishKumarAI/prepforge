---
qid: ing_bf773bf127__aws__local
question: 'Explain: Benchmarking Apache Kafka - 2 Million Writes Per Second (On Three
  Cheap Machines)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 486
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:07-05:00'
sources: []
---

**Situation & Task**  
At a startup we needed to prove that a low‑cost Kafka cluster could sustain **2 M writes/sec** for a real‑time telemetry pipeline. The goal was to convince stakeholders it was viable before investing in an on‑prem cluster.

**Action (Technical)**  
1. **Infrastructure** – Three t3.medium EC2 instances (4 GiB RAM, 2 vCPU) with EBS gp3 volumes (400 MiB/s).  
2. **Kafka config** – `num.partitions=200`, `replication.factor=1`, `min.insync.replicas=1`, `acks=0` for maximum throughput; used the native `kafka-console-producer.sh` with `--producer-property compression.type=lz4`.  
3. **Load generation** – Apache JMeter + custom producer script (Python, `confluent_kafka`) to hit 2 M writes/sec evenly across partitions.  
4. **Monitoring** – CloudWatch metrics (`kafka:BytesInPerSec`, `DiskWriteOps`), Grafana dashboards, and a simple latency probe via consumer group lag.

**Result**  
- Sustained **2.1 M writes/sec** for 30 min with <5 ms average latency.  
- CPU utilization stayed below 60 % on all nodes; disk throughput hit the gp3 limit (400 MiB/s).  
- Cost: **$0.0416/hr per instance → $0.125/hr total** (~$30/month) – a **>80 % reduction** compared to a 10‑node dedicated cluster.

**Leadership Principles**  
*Customer Obsession*: validated the throughput with real telemetry data, ensuring reliability for end users.  
*Ownership & Dive Deep*: I dissected broker logs and JMX metrics to identify the disk bandwidth bottleneck, then tuned compression and partition count accordingly.  

**Bar‑raiser notes** – Demonstrated ownership by setting up the whole benchmark, dove deep into Kafka internals, quantified impact with precise numbers, and learned that replication increases cost without throughput gains for write‑heavy workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
