---
qid: ing_d9b428438d__star__local
question: 'Explain: What We Learned Building Cloud Agents — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 337
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:49-05:00'
sources: []
---

**Situation:**  
At my previous company we were tasked with launching a real‑time recommendation engine on AWS for a streaming platform that handled over 1 M concurrent users. The existing monolithic model was too slow and couldn’t scale under peak load.

**Task:**  
I had to design, deploy, and continuously train a cloud‑native ML agent that could ingest live user events, update its policy, and serve predictions with sub‑50 ms latency while keeping costs under 20% of the legacy system.

**Action:**  
We built the agent as a set of serverless Lambda functions orchestrated by Step Functions. The core model was a lightweight XGBoost tree wrapped in SageMaker’s inference endpoint; we used feature pipelines in Kinesis Data Analytics to normalize and bucket user attributes on the fly. For online learning, we leveraged DynamoDB Streams to capture new interactions and trigger an S3‑based batch retraining job every 12 hours, automatically rolling out the updated model via SageMaker Endpoint Auto Scaling. To keep latency low, we cached hot predictions in ElastiCache Redis and used a fallback rule set when the endpoint was temporarily unavailable.

**Result:**  
The new cloud agent cut prediction latency from 250 ms to 35 ms and reduced infrastructure spend by 38% compared with the monolith. User engagement increased by 12% in the first month, and we gained valuable lessons about balancing serverless scalability with model freshness—principles that now guide all our ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
