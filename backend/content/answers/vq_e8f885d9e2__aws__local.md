---
qid: vq_e8f885d9e2__aws__local
question: Looking to land a role as a machine learning engineer?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 422
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:20:34-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
When I joined my previous company, we had a fraud‑detection pipeline that processed ~10 M transactions/day but missed 18 % of high‑value frauds. My goal was to reduce the false‑negative rate below 5 % while keeping latency under 200 ms.

**Action (Dive Deep, Bias for Action)**  
I first performed a data audit in **Amazon Athena** and discovered that many “legitimate” transactions were mislabeled because of stale reference tables. I built an incremental ETL with **AWS Glue** to refresh those tables every 5 min.  
For modeling, I trained a gradient‑boosted tree in **SageMaker Studio**, then converted it to ONNX and deployed as a real‑time inference endpoint on **Amazon SageMaker Neo** (edge‑optimized). The endpoint was fronted by an **API Gateway + Lambda** proxy that throttles requests to 500 req/s, ensuring high availability.  
I introduced a feedback loop: every inference result is stored in **DynamoDB**, and a nightly job in **Glue** retrains the model with new labels, achieving continuous improvement.

**Result (Deliver Results)**  
Within three months:
- False‑negative rate dropped from 18 % to **4.2 %** (≈ 77 % reduction).  
- Latency stayed below **180 ms** for 99.5 % of requests.  
- Operational cost decreased by **$12k/month** due to the serverless architecture.

**Learnings & Bar‑raiser cues**  
I owned the end‑to‑end pipeline, dug into data quality issues, and quantified impact with real metrics. I also documented failure modes (e.g., model drift) and added automated alerts in CloudWatch, demonstrating a culture of continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
