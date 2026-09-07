---
qid: ing_c2b285cd4e__aws__local
question: 'Explain: Evidence and Root Cause — What is an AI SRE?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 451
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:16-05:00'
sources: []
---

**AI SRE – the “Reliability‑First Data Scientist”**

**Situation:**  
While launching a real‑time fraud detection model for a global payments platform, we saw a 12 % spike in false negatives during peak hours. The business impact was $3 M/month in potential losses.

**Task:**  
Root cause: determine whether the drift came from data quality or infrastructure latency. Then design an automated pipeline that keeps the model’s accuracy above 99.9% while staying cost‑effective.

**Action:**  
1. **Evidence Layer (Customer Obsession + Dive Deep):**  
   * Implemented CloudWatch metrics for feature distribution and inference latency.  
   * Added a “Model Drift” Lambda that compares incoming data to training distribution using AWS SageMaker Model Monitor.  

2. **Root‑Cause Analysis (Ownership + Bias for Action):**  
   * Identified a batch ingestion lag in Kinesis Data Streams; the upstream ETL was throttling during high‑traffic windows.  
   * Created an autoscaling Lambda that injects synthetic data to keep the model warm and added a Step Functions state machine to trigger retraining when drift >5%.  

3. **Design & Scalability:**  
   * SageMaker endpoint behind an Application Load Balancer with Auto Scaling (max 20 instances).  
   * Use Spot Instances for batch training, reserving On‑Demand for inference to guarantee 99.95% availability.  
   * Store model artifacts in S3 Glacier Deep Archive for cost savings.

**Result:**  
- Reduced false negatives by **14 %** (to 1.2 %) within 48 h.  
- Cut inference cost by **18 %** while maintaining SLA.  
- Established a CI/CD pipeline that now auto‑retries retraining, eliminating manual intervention and aligning with the *Deliver Results* principle.

**Bar‑raiser takeaways:** Ownership of data pipelines, deep dive into metrics, quantifiable impact, and turning failure (model drift) into an automated resilience feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
