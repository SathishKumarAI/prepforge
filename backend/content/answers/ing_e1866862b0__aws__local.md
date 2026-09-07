---
qid: ing_e1866862b0__aws__local
question: 'Explain: In actual fact, our--our real document is'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:33-05:00'
sources: []
---

**Situation & Task**  
In my previous role at a fintech startup we needed to replace an ad‑hoc fraud‑detection script that ran nightly on a single EC2 instance. The script was 12 % accurate and flagged ~30 % of genuine transactions as fraud, costing us $0.4 M in lost revenue per quarter.

**Action (Dive Deep & Ownership)**  
I scoped the problem: data drift, feature sparsity, and lack of real‑time inference. I designed a **serverless ML pipeline** using:

- **Amazon S3** for raw logs (≈ 10 TB/month)  
- **AWS Glue** to clean & transform into Parquet  
- **Amazon SageMaker** to train an XGBoost model (auto‑scaling with Spot Instances, 4 h training cost ≈ $120).  
- **SageMaker Endpoint + Lambda** for inference (≤ 50 ms latency, 99.9% availability).  
- **AWS CloudWatch & SageMaker Model Monitor** to detect drift and trigger retraining automatically.

I also added a **feature store** in Amazon SageMaker Feature Store to serve consistent embeddings across training and inference, cutting feature engineering time by 70 %.

**Result (Deliver Results)**  
The new model achieved **93 % precision** and **88 % recall**, reducing false positives from 30 % to 4 %. Revenue recovered: $1.2 M per quarter. Operational cost dropped from $8 K/month (single EC2 + manual ops) to $3 K/month (serverless + spot). The system now auto‑scales and is fully auditable, meeting compliance.

**Reflection & Learning**  
I learned that *data quality* often outweighs algorithmic complexity. By automating the pipeline I eliminated human error and built a self‑healing model stack—an example of **Ownership** and **Bias for Action** in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
