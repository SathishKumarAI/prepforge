---
qid: ing_f739b89e80__aws__local
question: 'Explain: Retry Pattern — Retrypattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 545
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:38-05:00'
sources: []
---

**Situation (S)** – While launching a real‑time fraud‑detection pipeline for a payment platform, the model inference endpoint on SageMaker began to spike with *429 Too Many Requests* during traffic bursts. If we simply dropped requests, false negatives rose by 12 % and revenue fell.

**Task (T)** – Design a fault‑tolerant retry mechanism that preserves customer experience, keeps latency < 200 ms for 99 % of calls, and costs <$0.02 per inference.

**Action (A)**  
1. **Retry Pattern**: Implement an exponential backoff with jitter in the client SDK, capped at three attempts.  
2. **AWS Services**:  
   * **API Gateway + Lambda Authorizer** → gate traffic and inject retry headers.  
   * **SageMaker Endpoint** → autoscaled via CloudWatch alarms (CPU > 70 % → add instance).  
   * **Amazon SQS FIFO** as a buffer for “retry‑eligible” requests; visibility timeout = 30 s, max receives = 3.  
   * **AWS Step Functions** orchestrate the retry flow and publish metrics to CloudWatch.  
3. **Observability**: Custom CloudWatch metric `RetryCount` feeds an alarm that auto‑scales Lambda concurrency (target tracking).  
4. **Cost/Scalability**: Using FIFO SQS keeps ordering, limits duplicate processing, and the retry budget stays under 5 % of total inference cost.

**Result (R)** – After deployment, request failure rate dropped from 12 % to < 0.3 %, latency stayed below 200 ms for 99.7 % of traffic, and revenue increased by 4.8 %. The system handled a 5× traffic spike without manual intervention.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Ensured uninterrupted fraud checks for users.  
- **Ownership** & **Dive Deep**: Built end‑to‑end retry flow, monitored metrics, and tuned parameters iteratively.  

**Bar‑raiser cues** – clear ownership of the problem, data‑driven impact, deep dive into AWS service trade‑offs, and a learning loop (alarm → auto‑scale → metric review).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
