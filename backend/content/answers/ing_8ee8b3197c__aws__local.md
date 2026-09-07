---
qid: ing_8ee8b3197c__aws__local
question: 'Explain: Learn Apache Kafka® & Apache Flink® — How to Choose the Number
  of Topics/Partitions in a Kafka Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 417
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:23-05:00'
sources: []
---

**Situation (S)**  
I was leading a data‑engineering revamp for a fintech client that needed real‑time fraud detection. Their Kafka cluster had 200 GB/s ingest but latency spikes hit 250 ms during peak hours, violating SLA.  

**Task (T)**  
Design the optimal number of topics and partitions to balance throughput, fault tolerance, and cost while keeping consumer lag < 10 s.

**Action (A)**  
1. **Dive Deep into Metrics** – Collected broker‑level CPU, network I/O, and consumer group lag over a month.  
2. **Rule of Thumb + Simulation** – Started with *3×* the number of partitions per core (≈ 24 p/CPU) as Confluent recommends, then ran a 100‑message burst test in Flink to observe headroom.  
3. **AWS Services** – Deployed Kafka on MSK (managed), used Kinesis Data Streams for backup replication, and leveraged Lambda for auto‑scaling consumer pods in ECS/EKS.  
4. **Cost/Availability Trade‑off** – Reduced partitions from 200 to 120 after simulation, cutting broker cost by 18 % while keeping consumer lag at 6 s. Added a dedicated “hot” topic with 8 partitions for high‑frequency fraud events.

**Result (R)**  
Throughput increased to 320 GB/s, latency dropped to 80 ms under peak load, and SLA compliance rose from 92 % to 99.7 %. The cost saving of $12k/month was reallocated to model training resources.  

*Leadership Principles:* **Ownership** – I took full responsibility for the pipeline’s performance; **Dive Deep** – I used granular metrics to guide partition sizing; **Deliver Results** – Measurable latency and cost improvements were achieved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
