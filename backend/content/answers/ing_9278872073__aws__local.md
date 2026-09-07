---
qid: ing_9278872073__aws__local
question: 'Q: How do you detect quality degradation in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 378
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:19-05:00'
sources: []
---

**Situation / Task**  
At my previous role I launched a recommendation model into production on **SageMaker** that served ~50 M requests/day. Two weeks after rollout we saw a spike in user churn—our A/B test showed a 12 % drop in click‑through rate (CTR).  

**Action**  
I set up **SageMaker Model Monitor** to capture per‑request predictions and feature distributions, streaming data into **Amazon CloudWatch Logs**. I wrote a **Lambda** function that pulls the latest inference metrics every hour, compares them against a rolling baseline stored in **DynamoDB**, and calculates an anomaly score (z‑score > 3). When the threshold is breached, the Lambda triggers an SNS alert and automatically spins up a **Batch Transform job** to re‑evaluate the last 24 h of data.  

I also added a **CloudWatch Dashboard** that visualises CTR, prediction drift, and latency, so stakeholders could see impact in real time.  

**Result**  
Within 48 hours we identified a feature shift (user “age” distribution skewed toward older users). After retraining with the updated data and redeploying, CTR rebounded to baseline (+10 % relative), and churn fell by 8 %. The monitoring pipeline cost <$50/month and added <5 % latency.  

**Reflection**  
I learned that proactive drift detection is a *bar‑raiser*: it requires ownership of the model lifecycle, deep dive into metrics, and bias for action to mitigate impact before users notice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
