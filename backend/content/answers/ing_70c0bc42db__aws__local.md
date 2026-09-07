---
qid: ing_70c0bc42db__aws__local
question: 'Explain: Design the recommendation system for Instagram Reels.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 452
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:33-05:00'
sources: []
---

**Recommendation System for Instagram Reels**

*Leadership Principles:* **Customer Obsession & Ownership**

**Situation:**  
When Reels traffic grew 3× in Q1, we saw a 12 % drop in watch‑through rate (WTR). I owned the project to restore engagement.

**Task:**  
Build an end‑to‑end recommendation pipeline that scales to millions of users per day while keeping latency <50 ms and cost under $5M/yr.

**Action:**  
1. **Data Layer** – Ingest click, watch, and interaction logs into Amazon Kinesis Data Streams → transform with AWS Glue; store in Redshift for batch analytics and DynamoDB (hot keys) for real‑time feature lookups.  
2. **Model Training** – Use SageMaker Pipelines to train a matrix‑factorization model (ALS) on historical user–video interactions, then fine‑tune with a LightGBM ranking layer. Models are versioned in SageMaker Model Registry and deployed via SageMaker Neo for edge inference.  
3. **Serving Layer** – Deploy the ranking service as a fleet of Lambda@Edge functions behind CloudFront to guarantee sub‑50 ms latency globally; fallback to EC2 Auto Scaling groups during traffic spikes.  
4. **Evaluation & Feedback Loop** – A/B test with 1% traffic, measuring WTR and revenue lift; retrain nightly using fresh data.

**Result:**  
Within two weeks of rollout, WTR rose from 88 % to 94 % (6 pp), driving a $3M increase in ad revenue. Latency stayed below 45 ms with an average cost of $4.2M/yr—15 % below the prior architecture.

**Bar‑raiser Takeaway:**  
I demonstrated **ownership** by delivering measurable lift, used **Dive Deep** to choose right AWS services, quantified impact, and iterated quickly from failure (initial latency spike) to success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
