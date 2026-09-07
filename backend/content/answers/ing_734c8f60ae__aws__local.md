---
qid: ing_734c8f60ae__aws__local
question: 'Explain: Get to market faster. — Stripe | Financial Infrastructure to Grow
  Your Revenue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 373
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:25-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at Stripe to launch an AI‑driven fraud‑detection model that could be deployed to merchants within weeks instead of months. The goal was to “get to market faster” while maintaining accuracy and compliance.

**Action**  
* **Ownership & Bias for Action** – I rewrote the pipeline from data ingestion → feature store → training → inference, eliminating manual feature engineering steps.  
* **Dive Deep** – Built a modular, serverless architecture on AWS:  
  * **Amazon SageMaker Pipelines** for reproducible training (GPU instances), with **SageMaker Feature Store** to cache features in-memory (≤50 ms latency).  
  * **AWS Lambda + API Gateway** for real‑time inference, scaling automatically to 10⁶ requests/day.  
  * **AWS Step Functions** orchestrated the workflow and provided observability via CloudWatch metrics.  
* Implemented continuous evaluation with **Amazon SageMaker Model Monitor**, triggering retraining when precision dropped below 95 %.  

**Result**  
Launch time reduced from 12 weeks to 3 weeks (80 % faster). The model achieved 97 % fraud‑detection accuracy, cutting false positives by 30 %, which translated into $4.2M additional revenue in the first quarter. Costs were kept below \$150K/month through spot instances and auto‑scaling.

**Learning**  
The biggest failure was an initial over‑reliance on a single GPU type; switching to multi‑instance training resolved bottlenecks and taught us the value of diversified compute resources for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
