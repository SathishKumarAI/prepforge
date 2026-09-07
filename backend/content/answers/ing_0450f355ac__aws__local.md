---
qid: ing_0450f355ac__aws__local
question: 'Explain: Block Storage — Storage Systems Overview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 438
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:29-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous firm I was tasked with redesigning the data‑plane that fed our recommendation engine. The existing on‑prem SAN had 30 % latency spikes and couldn’t support the 5× growth in user traffic projected for Q4.

**Action & Technical Design (A)**  
I championed a migration to **Amazon EBS** for persistent block storage, coupling it with **EC2 Nitro instances** and **EFS** for shared metadata. I scoped the requirements: sub‑millisecond IOPS, 99.999 % durability, and elastic scaling of 10 TB/month without provisioning overhead.

*Design choices:*  
- **Provisioned IOPS SSD (io1)** for the model checkpoints (≈200 GB) to guarantee 20k IOPS.  
- **Throughput Optimized HDD (st1)** for the raw training data pipeline (≈5 PB) where sequential reads dominate.  
- **EBS Multi‑AZ** for high availability and automatic snapshot replication.  
- **Lifecycle policies** on snapshots to keep cost under $0.05/GB/month.

I used CloudWatch metrics and AWS Cost Explorer to validate that the migration cut latency from 120 ms to <30 ms (a 75 % reduction) and reduced storage spend by 18 % annually.

**Result & Learnings (R)**  
The new stack supported a 7× increase in concurrent inference requests while keeping uptime at 99.999 %. I documented the failure mode of an early “self‑sufficient” design that ignored cross‑region failover, turning it into a learning loop that reinforced **Ownership** and **Dive Deep**.

> *Key AWS Services:* EBS (io1/st1), EC2 Nitro, EFS, CloudWatch, Cost Explorer.  
> *Leadership Principles Highlighted:* Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
