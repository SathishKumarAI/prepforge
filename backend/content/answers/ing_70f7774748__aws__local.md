---
qid: ing_70f7774748__aws__local
question: 'Explain: Entities — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 435
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:56-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team at my previous company, we were asked to build an internal ML service that automatically tags blog posts (e.g., “Clean Coder”, “Python Tips”) for the company’s content recommendation engine. The goal was to reduce manual effort and improve click‑through rate (CTR) by 15 % on tagged articles.

**Action**  
- **Ownership & Bias for Action:** I scoped a micro‑service architecture in one sprint, defining clear SLAs (≤ 5 s inference).  
- **Dive Deep / Technical Design:**  
  - *Data ingestion:* Amazon Kinesis Data Streams to stream new posts from the CMS.  
  - *Feature extraction:* AWS Lambda + SageMaker Processing jobs to tokenize and generate TF‑IDF vectors.  
  - *Model training:* SageMaker built a multi‑label classifier (FastText) with hyperparameter tuning on an EC2 spot fleet (p3.2xlarge).  
  - *Inference:* Deployed the model as a SageMaker Endpoint behind an Application Load Balancer, auto‑scaling to 0–4 instances based on CloudWatch metrics.  
  - *Cost/Availability trade‑off:* Spot instances cut training cost by 40 % and the endpoint’s 99.9 % SLA was achieved with multi‑AZ deployment.  
- **Deliver Results:** Rolled out to production in 3 weeks; CTR on tagged posts rose from 8.2 % to 9.7 % (≈ 18 % lift), and manual tagging time dropped by 70 %.

**Result**  
The service now processes ~10k articles/day with < 5 s latency, saving $12K/month in labor and driving a measurable business KPI. I documented lessons—e.g., initial over‑tuning caused cold starts—and shared them in a retrospective to help future ML initiatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
