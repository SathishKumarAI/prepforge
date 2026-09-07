---
qid: ing_965fcaf295__aws__local
question: 'Explain: Social Media App — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 488
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:44-05:00'
sources: []
---

**Situation – Task**  
I was hired by a fast‑growing social‑media startup to build the next‑gen recommendation engine that surfaces content in real time while staying compliant with privacy regulations. The goal was to increase daily active users (DAU) by 15 % and keep latency under 200 ms.

**Action – Design & Execution**  
*Customer Obsession & Ownership* – I first mapped user pain points: long load times, irrelevant posts, and data‑privacy concerns.  
1. **Feature pipeline**: Collected clickstream (Kafka), profile attributes, and content metadata; stored in DynamoDB for low‑latency access.  
2. **Modeling**: Trained a LightGBM ensemble on 50 M rows, then distilled into an ONNX model that runs on AWS Inferentia via SageMaker Neo.  
3. **Serving**: Deployed with API Gateway + Lambda@Edge to keep response <200 ms; autoscaling based on CloudWatch metrics.  
4. **Privacy**: Used differential privacy during training (ε=1) and hashed user IDs in DynamoDB.  

*Dive Deep & Bias for Action* – I built a monitoring dashboard that flags any drop >5 % in click‑through rate (CTR). After the first week, latency spiked due to a sudden influx of 30 k new users. I quickly switched to Spot Instances for batch training and added an additional caching layer with Redis, restoring SLA within 2 hrs.

**Result – Impact**  
- DAU rose from 1.2 M to **1.38 M** (+15 %) in three months.  
- CTR increased by **22 %**, and average session length grew from 4.3 min to 5.6 min.  
- Cost per inference dropped 30 % thanks to Inferentia & spot‑pricing optimization.

**Learning** – The biggest lesson was that *small, incremental data‑privacy checks* prevented a potential regulatory breach; we now audit every pipeline change for privacy impact before deployment. This cycle of rapid iteration and rigorous compliance became the baseline for all future ML projects at the company.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
