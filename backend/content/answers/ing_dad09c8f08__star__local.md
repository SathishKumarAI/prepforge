---
qid: ing_dad09c8f08__star__local
question: 'Explain: How Serverless Works — Serverless Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 342
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:34-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a real‑time recommendation engine for an e‑commerce site that needed to scale from hundreds to tens of thousands of users per minute during flash sales. Our monolithic Java app on EC2 was hitting memory limits and cost spikes.

**Task:**  
I had to redesign the system so it could auto‑scale instantly, reduce operational overhead, and cut hosting costs by at least 30% while keeping latency under 200 ms for the recommendation API.

**Action:**  
I migrated the core inference logic to AWS Lambda functions triggered via API Gateway. Each function received a user request, pulled model parameters from DynamoDB, ran inference using a pre‑packaged TensorFlow Lite model, and returned results in <150 ms. I used Step Functions to orchestrate fallback paths for cold starts and integrated SQS for background queueing of high‑volume requests. To keep costs low, I leveraged Lambda’s provisioned concurrency only during peak hours and set up CloudWatch alarms to auto‑scale the underlying DynamoDB tables. I also added a lightweight caching layer with ElastiCache Redis to avoid redundant model loads.

**Result:**  
The new serverless pipeline handled 15 k concurrent requests during a sale without any outages, reduced monthly infrastructure spend from $12K to $7.5K (−37%), and cut average response time from 350 ms to 110 ms. I learned that thoughtful function partitioning, right‑size provisioning, and hybrid caching are key to making serverless work for ML workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
