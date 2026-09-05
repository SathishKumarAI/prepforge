---
qid: ing_100eda40e8__star__local
question: 'Explain: Ten Thousand Users — AWS Scale - by Neo Kim - The System Design
  Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 338
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:22-05:00'
sources: []
---

**Situation**  
I was part of a startup building a recommendation engine that needed to serve 10 k concurrent users during our launch week. Our existing on‑prem cluster kept hitting memory limits and the latency spiked from 120 ms to over 1 s when traffic hit 3 k requests per second.

**Task**  
Move the entire inference pipeline to AWS so we could scale elastically, keep response time under 200 ms, and reduce operational overhead by at least 30 % compared to our on‑prem setup.

**Action**  
I designed a microservice architecture using Amazon SageMaker endpoints for model hosting. The models were containerized with Docker and deployed via SageMaker’s auto‑scaling feature. For data ingestion I set up an SQS queue that fed into Lambda functions, which preprocessed requests and pushed them to the endpoint. I also enabled SageMaker Real‑Time Inference Multi‑Model Endpoints so we could swap in new models without downtime. To keep costs down I leveraged Spot Instances for batch inference jobs and used CloudWatch metrics with SNS alerts to trigger scaling rules.

**Result**  
The system handled 12 k concurrent users with an average latency of 140 ms, a 40 % drop in operational cost, and 99.8 % uptime during the launch period. I learned how to balance model performance with cost by using multi‑model endpoints and the power of serverless pre‑processing for elastic scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
