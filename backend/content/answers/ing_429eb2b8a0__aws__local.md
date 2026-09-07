---
qid: ing_429eb2b8a0__aws__local
question: 'Explain: Clients — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 680
total_tokens: 916
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:37-05:00'
sources: []
---

**Situation (S)**  
I was hired as a senior solutions architect to build a URL‑shortener for a fintech client that expected 1 M active users and 10 k requests/second during peak hours. The goal was to keep latency < 100 ms, cost < $0.05 per 1 000 calls, and ensure 99.99 % availability.

**Task (T)**  
Design a highly available, scalable system that supports custom aliases, analytics, and an easy rollback path for traffic spikes or outages.

**Action (A)**  

| Design choice | AWS services | Why |
|---|---|---|
| **Front‑end API** | Amazon CloudFront + Lambda@Edge | Low latency global edge caching; zero servers. |
| **API gateway** | Amazon API Gateway | Managed throttling, request validation, and built‑in WAF for abuse mitigation. |
| **Business logic** | AWS Lambda (Node.js) | Serverless scaling to 10 k RPS with cold start mitigated by provisioned concurrency. |
| **Storage** | DynamoDB (partition key = short code, sort key = user_id) + DAX | Single‑write latency < 5 ms; auto‑scaling capacity; DAX removes read traffic cost. |
| **Analytics** | Kinesis Data Streams → Lambda → Amazon Redshift Spectrum | Real‑time clickstream aggregation with 10× lower cost than RDS. |
| **Backup & rollback** | DynamoDB Global Tables (US‑East, EU‑West) + CloudFormation stack sets | Multi‑region replication; automated rollbacks via drift detection. |

*Scalability*: Lambda scales to thousands of concurrent invocations; DynamoDB auto‑scales based on traffic; Kinesis shards adjust with write throughput.

*Availability*: 3‑AZ architecture, health checks in API Gateway, and CloudFront edge caching reduce single point failures.

*Cost*: Estimated $0.03 per 1 000 requests (Lambda + API Gateway) + $0.01 for DynamoDB reads/writes; total <$0.05/1 k calls.

**Result (R)**  
Deployment met SLA: 99.997 % availability, < 80 ms average latency, and handled 12 k RPS during a flash sale with no throttles. Cost stayed 18 % below the $500/month budget. Post‑launch A/B testing showed a 35 % reduction in user drop‑off compared to the legacy system.

**Leadership Principles Highlighted**

- **Customer Obsession** – Built real‑time analytics so product teams could iterate on UX quickly.
- **Ownership & Dive Deep** – Took responsibility for end‑to‑end latency, digging into Lambda cold starts and DynamoDB provisioned throughput.
- **Deliver Results** – Exceeded performance targets while staying under budget.

*Bar‑raiser note*: I demonstrated ownership by running a live pilot, diving deep into metrics to tune DAX cache size, and learning from an initial 2 ms latency spike that led to adding a second Lambda concurrency tier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
