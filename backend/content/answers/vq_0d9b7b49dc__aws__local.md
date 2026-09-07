---
qid: vq_0d9b7b49dc__aws__local
question: Why does one remove or add datanodes freaquently?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 432
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:35-05:00'
sources: []
---

**Why do we frequently add or remove datanodes in a cluster?**

> **Situation:** At my previous company we ran an on‑prem Spark cluster that processed ~30 TB of log data nightly. During peak traffic (promotions, sales events) the cluster would saturate CPU and memory, causing 15–20 min SLA violations.  
> **Task:** I had to design a dynamic scaling strategy that kept costs low while meeting SLAs.  
> **Action:**  
> * Adopted **Amazon EMR** with **Auto Scaling Groups (ASGs)** tied to CloudWatch metrics (`EMRCluster:JobQueueUtilization`).  
> * Implemented an **EventBridge rule** that triggered a Lambda function to adjust the number of core nodes by ±2 every 5 min based on real‑time CPU/memory usage.  
> * Added **Spot Instances** for non‑critical ETL jobs, and reserved instances for steady state workloads.  
> * Integrated **Redshift Spectrum** so that heavy queries could spill over to S3 without impacting the EMR cluster.  
> * Monitored cost vs performance with a custom metric (`CostPerJob`) in CloudWatch dashboards.  
> **Result:** SLA compliance rose from 78 % to **99.5 %**, while overall compute costs dropped by **18 %** annually. The team gained confidence that the system could elastically handle traffic spikes without manual intervention.

*Leadership Principles:*  
- **Customer Obsession** – ensuring timely data delivery for downstream analytics.  
- **Ownership & Dive Deep** – architecting a self‑sufficient scaling loop and continuously tuning it based on metrics.  

Bar‑raisers look for: ownership of the end‑to‑end solution, deep understanding of AWS services, quantifiable impact, and lessons learned from initial manual adjustments that led to automation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
