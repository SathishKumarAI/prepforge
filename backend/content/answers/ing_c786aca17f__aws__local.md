---
qid: ing_c786aca17f__aws__local
question: 'Explain: Gradual concept drift — What is concept drift in ML, and how to
  detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 476
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:20-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession**, **Dive Deep**

---

**Situation** – In my last role I built a churn‑prediction model for a telecom client. After two months of deployment the accuracy dropped from 88 % to 72 %.  
**Task** – Determine why and restore performance without re‑training from scratch.

**Action** –  
1. **Detect drift**:  
   * Set up an AWS SageMaker Model Monitor job that streams predictions and ground truth into Amazon Kinesis Data Firehose → S3, then runs a *concept drift* check (Kolmogorov–Smirnov test) nightly.  
   * Triggered on a 5 % change in the distribution of the target variable.  
2. **Diagnose**:  
   * Used AWS Glue to compute feature‑wise KS statistics and visualized with Amazon QuickSight. Found that “average call duration” shifted by +18 %.  
3. **Remedy** –  
   * Retrained the model on the last 90 days of data (SageMaker Training).  
   * Deployed via SageMaker Endpoint with an autoscaling policy (min 2, max 10) to keep latency <200 ms.  
4. **Prevent future drift**:  
   * Implemented a Lambda that schedules retraining every week and logs drift metrics to CloudWatch dashboards.

**Result** – Accuracy rebounded to 87 % within 48 h; model drift alerts prevented another 10 % drop over the next quarter. Cost increased by only 12 % due to efficient autoscaling, while response time remained <200 ms, meeting SLA.

---

*What a bar‑raiser looks for:*  
- **Ownership**: I owned the entire monitoring‑to‑deployment loop.  
- **Dive Deep**: KS statistics pinpointed the exact feature shift.  
- **Quantified Impact**: 15 % accuracy lift and <12 % cost increase.  
- **Learning from Failure**: Implemented automated drift detection to avoid manual oversight in future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
