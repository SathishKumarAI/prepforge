---
qid: ing_df639a0faf__aws__local
question: 'Explain: Consumer Throughput — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 667
total_tokens: 914
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:42-05:00'
sources: []
---

**Situation / Task**  
When I joined the data platform team at a fast‑growing fintech, we needed to prove that our event‑driven pipeline could handle **2 M writes/sec** without breaking our cost envelope. The leadership asked us to benchmark Apache Kafka on three low‑cost EC2 instances (t3.medium) and document the results for the upcoming architecture review.

**Action**  
*Built a microbenchmark harness in Java that produced random JSON events, using the official Kafka client with `acks=1` and `batch.size=32 KB`.  
Configured each broker with the default 4‑core, 2 GiB RAM instance, tuned `num.network.threads`, `io.max.request.size`, and enabled `compression.type=gzip`.  
Deployed a three‑node cluster on an **AWS us-east-1** VPC, each node in a separate AZ to exercise cross‑AZ traffic.*  

I ran the benchmark with **kafkacat** for 10 minutes per run, capturing *producer latency* and *broker CPU/memory*. After two iterations I lowered `linger.ms` from 5 ms to 1 ms and increased `max.in.flight.requests.per.connection` to 5, which cut the average producer latency from 15 ms to **8 ms** while maintaining throughput.

**Result**  
Achieved **2.1 M writes/sec** across the three nodes, with < 30 % CPU usage on each broker and a 0.9 ms tail latency (99th percentile). Cost per write was <$0.000003—well under our target of $0.00001. The benchmark proved that a small, well‑tuned Kafka cluster can meet high throughput without expensive hardware.

**Technical Takeaways**  
* **Scalability** – Horizontal scaling with more broker nodes would linearly increase throughput; however, cross‑AZ traffic adds latency, so we’d consider a single‑AZ deployment for ultra‑low latency workloads.  
* **Availability** – With three brokers and replication factor = 2, we retained 99.9 % availability even when one node failed.  
* **Cost** – Using spot instances reduced cost by ~35 %; adding SSD EBS volumes improved disk I/O but raised costs—trade‑off tuned to our SLA.

**Leadership Principles**  
- *Customer Obsession*: Delivered a solution that met the platform’s performance needs while keeping user data ingestion cost‑effective.  
- *Dive Deep & Ownership*: I owned the benchmark from design through iteration, diagnosed bottlenecks (CPU vs. network), and published a detailed report for cross‑team learning.  

**What a bar‑raiser looks for**  
*Clear ownership of the end‑to‑end experiment.*  
*Depth in understanding Kafka internals and AWS networking.*  
*A quantified impact (2 M writes/sec, <30 % CPU, <$0.000003/write).*  
*A lesson learned: tuning `linger.ms` had a bigger payoff than increasing batch size, guiding future producer configs.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
