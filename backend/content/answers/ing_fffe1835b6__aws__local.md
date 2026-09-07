---
qid: ing_fffe1835b6__aws__local
question: 'Explain: Score within context — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 442
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:32-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of a customer‑facing recommendation engine that used a proprietary “Score Within Context” (SWC) metric to rank items per user session. The goal was to reduce churn by 15 % and lift click‑through rate (CTR) from 2.1 % to >3 %.  

**Action – Technical & Design**  
* **Data Pipeline:** Ingested raw click logs into Amazon Kinesis Data Streams, processed with AWS Lambda to compute session‑level context vectors (time of day, device type, recent interactions).  
* **Model Serving:** Deployed an XGBoost model on SageMaker endpoints; added a post‑processing layer that normalizes raw scores against the session context distribution.  
* **AWS Services Used:** Kinesis for low‑latency ingestion, Lambda for stateless enrichment, SageMaker for training/hosting, DynamoDB for persisting user context windows, CloudWatch for real‑time monitoring.  
* **Scalability & Cost:** Leveraged auto‑scaling on SageMaker endpoints (10 GB memory) and reserved capacity to keep cost < $2k/month while supporting 5M concurrent sessions.  

**Result**  
After a two‑month A/B test:  
* CTR increased from 2.1 % → **3.4 % (+61 %)**.  
* Monthly churn dropped by **12 %**, approaching the target.  
* Latency per recommendation < 120 ms, meeting SLAs.  

**Reflection (Bar‑raiser focus)**  
I owned every layer—from data ingestion to model inference—ensuring end‑to‑end observability. I dove deep into failure logs; a spike in cold‑start latency was traced to DynamoDB provisioned throughput, prompting an auto‑scaling policy change that cut failures by 90 %. This cycle of learning from failure and iterating quickly exemplified Amazon’s Ownership and Bias for Action principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
