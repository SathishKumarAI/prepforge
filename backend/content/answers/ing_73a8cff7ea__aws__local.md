---
qid: ing_73a8cff7ea__aws__local
question: 'Explain: Data Disk Failure, Heartbeats and Re-Replication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 540
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:24-05:00'
sources: []
---

**Situation / Task**  
I was leading the data‑engineering team that feeds our nightly model training jobs on an on‑prem EC2 cluster backed by EBS volumes. A sudden disk failure in one node caused a 12 % drop in job throughput and risked violating our SLA of 99.9 % availability for downstream inference services.

**Action**  
1. **Heartbeat & health checks** – Added a lightweight daemon that writes a timestamp to the volume every minute and exposes it via CloudWatch custom metrics (`DiskHealth`).  
2. **Automated re‑replication** – Configured an EventBridge rule to trigger a Lambda when `DiskHealth` drops below threshold. The function initiates a snapshot of the failed EBS volume, copies it to a second AZ, and attaches the new volume to the node (EBS Multi‑AZ).  
3. **Redundancy in storage** – Moved critical training data from EBS to S3 with Cross‑Region Replication (CRR) to guarantee durability; used FSx for Lustre as an intermediate cache that auto‑syncs with S3.  
4. **Cost & availability trade‑off** – By keeping only a single active EBS instance per node and using S3 for long‑term storage, we reduced storage costs by 35 % while maintaining 99.9999 % durability.

**Result**  
Within 30 minutes the cluster returned to full capacity; nightly jobs resumed with <0.1 % latency increase. The new heartbeat system cut disk‑failure detection time from hours to minutes, and our cost per training job dropped by $12/month (≈ $1,440 annually).  

**Bar‑raiser notes**  
- Demonstrated **Ownership**: took full responsibility for the failure response and preventive design.  
- Showed **Dive Deep**: quantified impact of disk failures and engineered a precise, AWS‑native solution.  
- Highlighted learning: documented failure modes to refine our health‑check cadence and replication strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
