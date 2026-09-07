---
qid: ing_1232a6a4e5__aws__local
question: 'Explain: Rate limiters and load shedders — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 455
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:41-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the rollout of a public analytics API that served 4 M requests/day. During peak traffic we hit 90 % error rates because downstream services throttled and our database ran out of provisioned throughput. I was tasked with designing a scalable, cost‑efficient rate limiting & load shedding layer.

**Action**  
I built an **API Gateway + Lambda** front‑end that reads per‑user quotas from a DynamoDB table (read‑throughput 10 k RPS).  
* **Rate limiter:** A token‑bucket algorithm runs in Lambda; if the bucket is empty, the request is rejected with *429*.  
* **Load shedder:** If API Gateway’s throttling quota is exceeded, we enqueue excess requests to an SQS FIFO queue and return a *202* with a “retry‑later” header. Background workers poll the queue, re‑injecting traffic only when downstream services are healthy (checked via CloudWatch alarms).  
I added **CloudWatch metrics** for request counts, bucket fill rates, and retry success to enable auto‑scaling of Lambda concurrency.

**Result**  
Post‑deployment, peak error rate dropped from 90 % to <2 %, while latency stayed under 200 ms. Cost increased by only 12 % (mainly due to SQS usage) but we avoided over‑provisioning DynamoDB and prevented a potential outage that could have cost millions in lost API revenue.

**Leadership Principles**  
* **Customer Obsession** – ensured uninterrupted service for end users.  
* **Ownership & Dive Deep** – architected, instrumented, and iterated on the solution until it met SLA targets.  

Bar‑raisers look for ownership, depth of analysis (token‑bucket math, DynamoDB throughput), quantified impact (error reduction, cost), and learning from a failed spike test that led to this design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
