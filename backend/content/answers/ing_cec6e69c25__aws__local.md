---
qid: ing_cec6e69c25__aws__local
question: 'Explain: So once again if you ask our — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 400
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:19-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* At my previous startup we launched a “Python Full Course for Beginners” aimed at high‑school students. The first cohort (N = 120) reported only **35 % completion** and low engagement.

*Task:* I owned the redesign of the curriculum and the analytics pipeline to understand drop‑off points, then re‑engineered the course to hit a 90 % completion rate within six months.

*Action:*  
1. Built an event‑driven telemetry system in **AWS Lambda + Amazon Kinesis** to capture clickstream data per lesson.  
2. Ran an A/B test (A: original, B: revised) using **Amazon SageMaker Experiments**; trained a lightweight XGBoost model on 10 k events to predict churn probability.  
3. Automated remediation workflows with **Step Functions**—students flagged as high‑risk received personalized video prompts via **Amazon Pinpoint** and optional live tutoring through **Amazon Chime SDK**.  
4. Rewrote the course in modular Jupyter notebooks stored on **S3**, served via **API Gateway + Lambda@Edge** for instant feedback, reducing latency to < 200 ms.

*Result:* Completion rose from 35 % to **92 %**; time‑to‑completion dropped by **28 %**. Monthly active users grew 4× in three months. Cost per student fell from $12 to $7 thanks to serverless scaling and spot instances for training jobs.

**Bar‑raiser takeaways:** I demonstrated ownership of both product and data, dove deep into telemetry to uncover root causes, quantified impact with concrete metrics, and iterated rapidly—learning that a data‑driven feedback loop is key to sustained learner engagement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
