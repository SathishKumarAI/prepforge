---
qid: ing_42e01adc20__aws__local
question: 'Explain: Rate Limits and Quotas — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 437
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:12-05:00'
sources: []
---

**Situation** – While architecting a recommendation engine for an e‑commerce platform, I had to pick the right SageMaker model under strict rate limits (10 req/s) and quota constraints (max 200 model inferences per day).  
**Task** – Deliver a solution that maximizes accuracy while staying within AWS’s default limits and keeping cost < $50/month.  
**Action** – I first *dive deep* into the service quotas for **SageMaker Endpoint**, **Lambda concurrency**, and **API Gateway rate limiting**. I created a *model selection matrix* (accuracy vs. inference latency) and benchmarked three algorithms: XGBoost, Linear Learner, and a custom TensorFlow model.  
I then *invented & simplified* by deploying the top‑scoring XGBoost model as a **SageMaker real‑time endpoint** with 1 instance of `ml.m5.large`. To stay under the 10 req/s cap, I introduced an **API Gateway throttling policy** (10 rps burst, 5 rps steady) and wrapped calls in a **Lambda function** that queues requests using SQS FIFO when the limit is reached.  
I also *owned* cost by enabling **SageMaker Spot Training** for model training, cutting compute spend to $12/month.  

**Result** – The system handled peak traffic with 99.8 % success, reduced latency from 250 ms (baseline) to 120 ms, and kept monthly spend at $45—well below the target. Post‑deployment, I *learned* that adding a caching layer with **ElastiCache Redis** could further reduce endpoint hits by ~30 %, which I now recommend for future iterations.  

> **Bar‑raiser focus:** ownership of quota constraints, deep technical dive into AWS limits, quantitative impact (latency & cost), and continuous learning from performance data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
