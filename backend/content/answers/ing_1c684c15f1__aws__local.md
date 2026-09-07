---
qid: ing_1c684c15f1__aws__local
question: 'Explain: Redundancy — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 474
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:16-05:00'
sources: []
---

**Situation & Task**  
While leading the ML inference platform for our recommendation engine, we hit a 15 % outage during peak traffic after a single‑node failure in the GPU cluster. The business impact was a $2M loss in revenue and a spike in user churn (3 %). I owned the redesign to make the system *reliable* through redundancy.

**Action – Design & AWS Services**  
1. **Compute Layer** – Moved from on‑prem GPUs to **Amazon SageMaker Endpoint with Multi‑Model Deployment** and enabled *Auto Scaling* based on CPU/GPU utilization.  
2. **Data Layer** – Replaced single S3 bucket with an **S3 Cross‑Region Replication (CRR)** to a secondary region, ensuring data availability if the primary region fails.  
3. **Orchestration** – Deployed **AWS Lambda** + **Step Functions** for model warm‑up and failover logic; on failure of the primary endpoint, Lambda triggers a fallback endpoint in the secondary region within 2 seconds.  
4. **Monitoring & Recovery** – Integrated **Amazon CloudWatch Alarms** with **EventBridge** to auto‑spin up an EC2 Auto Scaling group for burst traffic during regional outages.

**Result**  
- Zero downtime in subsequent 12 months; MTTR dropped from 45 min to <5 min.  
- Revenue loss avoided: $1.8M over the year, a 60 % improvement versus the previous architecture.  
- Cost increased by only 7 % due to efficient auto‑scaling and spot instance usage.

**Reflection (Bar‑raiser cues)**  
I *took ownership* of the outage root cause, *dove deep* into latency metrics, and *invented & simplified* a multi-region failover that balanced cost with reliability. The failure taught me to treat every model deployment as a critical service and to embed resilience from day one.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Protecting user experience during outages.  
- **Ownership** – Driving the end‑to‑end redesign and monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
