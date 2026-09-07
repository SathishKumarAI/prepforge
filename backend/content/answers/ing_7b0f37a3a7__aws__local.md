---
qid: ing_7b0f37a3a7__aws__local
question: 'Explain: have to trigger the insurance quoting system'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 498
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:41-05:00'
sources: []
---

**Situation / Task**

At my previous role I built a real‑time insurance‑quoting engine that served 200 k active users daily. The requirement was to trigger a new quote whenever a user updated their policy details or when the system detected a change in external risk factors (e.g., traffic incidents, weather alerts). The challenge was to keep latency below 300 ms while scaling to millions of concurrent requests.

**Action**

1. **Event‑driven architecture** – I used Amazon EventBridge to capture changes from DynamoDB Streams and from an external IoT device stream.  
2. **Serverless compute** – Each quote calculation ran in a Lambda function (Python 3.11) that pulled the latest user profile, fetched risk data from S3 (pre‑computed models), and invoked SageMaker Batch Transform for the ML inference.  
3. **Caching & throttling** – A Redis cache on Amazon ElastiCache held the last 1 k predictions per policy to avoid repeated model calls. Lambda concurrency was reserved with a burst limit of 5 k to stay within the account’s quota while maintaining high availability.  
4. **Observability** – CloudWatch metrics (latency, error rate) fed into an SNS alert that triggered an auto‑scaling rule for the Lambda pool and a retry policy using SQS dead‑letter queues.

**Result**

- **Latency:** 92 % of quotes completed under 250 ms; average latency dropped from 1.2 s to 0.24 s.  
- **Cost:** Operational cost fell by 38 % (from $12k/month to $7.6k) thanks to serverless pay‑per‑invocation and caching.  
- **Business impact:** The new system increased policy conversion rate by 14 % in the first quarter after launch.

**Reflection**

I owned every layer of the stack, diving deep into Lambda’s cold start profile and redistributing traffic across multiple regions to mitigate latency spikes. I learned that coupling EventBridge with SageMaker Batch Transform gives a clean separation between event ingestion and heavy ML inference, enabling easier rollback and A/B testing. This experience aligns strongly with Amazon’s **Ownership** (I took full responsibility for end‑to‑end performance) and **Dive Deep** (I investigated every layer to optimize cost and latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
