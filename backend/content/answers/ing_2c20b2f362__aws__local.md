---
qid: ing_2c20b2f362__aws__local
question: 'Explain: IOPS — Amazon EBS I/O characteristics and monitoring - Amazon
  EBS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 465
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:01-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of our recommendation engine from on‑premise to Aurora + EBS. The model’s training loop performed ~1 M I/O ops per hour; any latency spike would push the SLA from 99.9% to 95%. My goal: guarantee sub‑10 ms latency while keeping cost < $2k/month.

**Action – Technical Design**  
* **Choose the right EBS volume type** – provisioned‑IOPS SSD (io1) with 20 000 IOPS, backed by a 500 GiB size to stay below the 90 % utilization threshold.  
* **Use EC2 Nitro instances** (c5n.large) for low CPU‑to‑I/O contention and attach volumes in *multiple AZs* for *high availability*.  
* **Enable CloudWatch Metrics**: `VolumeReadOps`, `VolumeWriteOps`, `VolumeIdleTime`, `BurstBalance`. Set an alarm on `VolumeIdleTime < 10%` to auto‑scale the IOPS by adding a second io1 volume (burst).  
* **Implement EBS Multi-Attach** for read‑only inference nodes, reducing contention.  
* **Cost control**: use Spot Fleet for worker instances; keep IOPS fixed until alarms fire.

**Result**  
Latency dropped from 18 ms to 7 ms (Δ −61%). Throughput increased by 35%, enabling a 2× increase in concurrent training jobs without SLA impact. Cost stayed at $1,850/month – a 15% reduction versus the baseline.

**Reflection (Bar‑raiser focus)**  
*Ownership*: I took end‑to‑end responsibility for I/O performance and cost.  
*Dive Deep*: Monitored granular CloudWatch metrics to pinpoint contention.  
*Quantified Impact*: Reported latency & cost figures in executive dashboards.  
*Learning from Failure*: After a 48 hr outage, we added an auto‑scaling rule on `BurstBalance` that prevented recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
