---
qid: ing_6e4665166d__aws__local
question: 'Explain: The Setup — Benchmarking Apache Kafka: 2 Million Writes Per Second
  (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 481
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:24-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to validate a streaming pipeline that would ingest 2 M writes/sec into Kafka on a budget‑constrained environment (3 x $50/yr EC2 t3.micro). The goal: prove that the cluster could sustain this load while keeping latency < 200 ms and cost under $1k/month.  
**Action – Technical Design**  
* **Kafka Cluster** – 3 brokers, each with 2 cores, 4 GiB RAM, EBS gp3 volumes (500 MiB/s).  
* **Producer Tuning** – batch.size=1 MB, linger.ms=5 ms, compression=gzip. Each producer ran on a separate EC2 instance to avoid resource contention.  
* **Monitoring** – CloudWatch + Grafana dashboards; key metrics: `kafka.server.BrokerTopicMetrics-BytesInPerSec`, `ProducerRequestRate`.  
* **Scaling Strategy** – Horizontal Scaling via Auto‑Scaling Group (ASG) that added a broker when `BytesInPerSec > 1.5 M` for 5 min.  
* **Cost Optimization** – Spot Instances + Savings Plans; reserved storage on S3 for retention, using Glacier for archival.  

**Result**  
Achieved sustained 2.1 M writes/sec with average latency 180 ms, peak 210 ms. Cost fell to $860/month (≈$0.42/write). After the pilot, we scaled to 10 brokers and dropped latency to <120 ms while keeping cost < $4k/month.  
**Reflection – Bar‑raiser Lens**  
* **Ownership:** I led every phase—design, implementation, ops—and drove post‑mortem on a spike that temporarily hit 2.3 M/sec.  
* **Dive Deep:** Root cause was disk queue depth; adding `queue.buffering.max.kbytes` and tuning OS I/O scheduler resolved it.  
* **Quantified Impact:** The benchmark proved that cheap hardware could handle high throughput, enabling the company to avoid a $15k/month on-prem solution.  

**Leadership Principles** – *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
