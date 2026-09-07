---
qid: ing_25fc837825__aws__local
question: 'Explain: The Components We Need — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 592
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:08-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a lightweight “WhatsApp‑style” messaging service that could handle 10 M daily active users (DAU) while keeping latency under 200 ms and cost per message < $0.0001. The goal was to prototype an end‑to‑end architecture on AWS.

**Action**  
I broke the system into four core components:

| Component | Key AWS services | Why |
|-----------|------------------|-----|
| **Client API** | Amazon API Gateway + Lambda (or EC2 autoscaling) | Serverless for instant scaling, zero ops. |
| **Message routing & persistence** | DynamoDB Streams → Kinesis Data Streams → Lambda → S3/Glacier | Streams give real‑time delivery; DynamoDB provides low‑latency storage; Kinesis buffers bursts. |
| **Push notifications** | Amazon SNS (mobile push) + FCM/APNS endpoints | Built‑in retries, cost‑effective scaling. |
| **Search & analytics** | OpenSearch Service (Elasticsearch) + Athena on S3 | Full‑text search and ad‑hoc queries without impacting latency. |

*Scalability*: Auto‑scaling groups + Lambda concurrency keep up with peak 50 k msgs/s.  
*Availability*: Multi‑AZ DynamoDB, Kinesis shards across AZs; API Gateway uses regional endpoints.  
*Cost*: Estimated $0.00008/message (≈$7.3M/month for 10 M DAU).  

**Result**  
The prototype passed a load test of 60 k msgs/s with < 180 ms average latency, and the cost model stayed within budget. The design was adopted by the product team as the basis for the MVP.

**Leadership Principles Reflected**

- **Ownership & Deliver Results** – I drove the end‑to‑end solution from requirement gathering to cost modeling.  
- **Dive Deep** – I quantified latency per component, tuned DynamoDB read/write capacities, and benchmarked Lambda concurrency.  
- **Bias for Action** – Delivered a deployable architecture in two days instead of weeks.  

**What a bar‑raiser looks for**

1. *Ownership*: Clear ownership of each layer and risk mitigation.  
2. *Depth*: Concrete metrics (latency, cost per msg) and trade‑offs between DynamoDB vs RDS, Lambda vs EC2.  
3. *Quantified impact*: 10 M DAU → $7.3M/month, latency <200 ms.  
4. *Learning from failure*: Noted that a single DynamoDB table caused hot partitions; future iterations will shard by user hash.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
