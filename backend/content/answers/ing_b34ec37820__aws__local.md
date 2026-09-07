---
qid: ing_b34ec37820__aws__local
question: 'Explain: Human Preference — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 404
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:16-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* Our ML team was launching a new recommendation engine and needed an objective way to prove that our model outperformed the state‑of‑the‑art.  
*Task:* Build a human‑preference benchmark pipeline that automatically collects user feedback, aggregates it into a leaderboard, and surfaces actionable insights.

*Action:*  
1. **Requirements & Design** – Created a two‑stage system: (a) *Preference Capture* using Amazon Pinpoint events and an in‑app survey API; (b) *Leaderboard Engine* built on AWS Step Functions orchestrating Lambda for data ingestion, DynamoDB for storage, and SageMaker Ground Truth for labeling.  
2. **AWS Services** – Pinpoint (real‑time engagement), API Gateway + Lambda (low‑latency ingestion), S3 & Glue (data lake), Athena for ad‑hoc analysis, QuickSight dashboards for stakeholders.  
3. **Scalability/Availability** – Serverless architecture auto‑scales to 10k concurrent users; DynamoDB global tables ensure multi‑AZ resilience.  
4. **Cost Optimization** – Spot Instances for SageMaker training, reserved capacity for Lambda concurrency, S3 Lifecycle policies reduce storage spend.

*Result:* Within 8 weeks we launched the benchmark, achieved a 12% lift in click‑through rate compared to the baseline model, and reduced manual labeling time by 70%. The leaderboard became a product metric tracked quarterly, driving continuous improvement.  

**Bar‑raiser focus:** Demonstrated ownership of end‑to‑end pipeline, deep dive into AWS service trade‑offs, quantified impact on business KPIs, and iterated after an initial failure that revealed latency bottlenecks—resolved by switching to Lambda@Edge for edge‑caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
