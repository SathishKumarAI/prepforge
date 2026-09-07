---
qid: ing_40a3da839e__aws__local
question: 'Explain: Glean Interview Guide (2026): Process, Questions, Compensation
  – techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 536
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:01-05:00'
sources: []
---

**Answer (Amazon style)**  

**Situation & Task**  
When I joined a fast‑growth fintech in 2024, we needed to overhaul the “Glean” fraud‑detection pipeline that fed into our real‑time risk engine. The goal was to reduce false positives by 30 % while keeping latency under 50 ms for each transaction.  

**Action (Design & Implementation)**  
* **Data ingestion** – I built an event‑driven architecture using **Amazon Kinesis Data Streams** for high‑throughput, low‑latency capture of transaction logs.  
* **Feature store** – Leveraged **AWS Glue** and **DynamoDB Global Tables** to maintain a global feature repository that auto‑updates every 5 s, ensuring consistency across regions.  
* **Model training & serving** – Trained XGBoost models on **Amazon SageMaker** notebooks; deployed them as **SageMaker Endpoints** behind an **Application Load Balancer (ALB)** with *Weighted Target Groups* for blue‑green rollouts.  
* **Observability** – Integrated **Amazon CloudWatch Metrics**, **X-Ray**, and **AWS Step Functions** to capture latency, error rates, and model drift in real time.  
* **Cost control** – Used **SageMaker Spot Training** (≈ 70 % cheaper) and **Reserved Instances** for the ALB; set up *budget alerts* via CloudWatch Alarms.

**Result**  
Within 3 months:  
- False‑positive rate dropped from 12 % to 8.4 % (+30 %).  
- End‑to‑end latency stayed at 38 ms (below the 50 ms SLA).  
- Operational cost fell by $45K annually due to spot training and reserved capacity.

**Leadership Principles Highlighted**  
1. **Customer Obsession** – Delivered a smoother user experience with fewer false alerts.  
2. **Dive Deep & Ownership** – Took end‑to‑end ownership, from data ingestion to model monitoring, and continuously refined the pipeline based on metrics.

**Bar‑raiser cues I’d hear**  
- Evidence of *ownership* (I was accountable for every component).  
- Depth in *scalability/availability* trade‑offs (e.g., choosing Kinesis vs. Kafka, ALB vs. NLB).  
- Quantified impact and learning loop (cost savings, latency metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
