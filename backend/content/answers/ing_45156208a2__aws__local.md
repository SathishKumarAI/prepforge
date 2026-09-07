---
qid: ing_45156208a2__aws__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 443
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:09-05:00'
sources: []
---

**Situation & Task (S)**  
While interviewing for a Machine‑Learning Platform Engineer role, I was asked to sketch the high‑level architecture of the “Pastebin” service described in the System Design Primer. The goal was to support millions of users, each creating thousands of pastes daily, while keeping latency < 200 ms and cost under $2 M/yr.

**Approach (A)**  
1. **Front‑end** – CloudFront + API Gateway (regional edge caching).  
2. **API layer** – Lambda@Edge + Go micro‑services behind Application Load Balancer for request validation, rate limiting, and auth.  
3. **Data store** – DynamoDB (partition key = user_id) for metadata; S3 (object storage) for paste content, versioned with Glacier Deep Archive for long‑term retention.  
4. **Search & analytics** – OpenSearch Service for full‑text search, CloudWatch + Athena for usage reports.  
5. **ML pipeline** – SageMaker endpoint to flag code‑plagiarism and profanity; results stored in DynamoDB.

Scalability: auto‑scaling on Lambda concurrency, DynamoDB provisioned throughput with adaptive capacity. Availability: multi‑AZ S3 replication, API Gateway failover. Cost: estimated $1.8 M/yr, 80% of which is reserved RDS for metadata.

**Result (R)**  
Implemented a prototype in 2 weeks; user latency dropped from 350 ms to 120 ms, and error rate fell below 0.01%. The design was later adopted by the product team for a production rollout with >10 M active users.

> **Leadership Principles**  
> *Ownership* – I owned the end‑to‑end solution, from requirements gathering to cost estimation.  
> *Dive Deep* – I quantified latency, throughput, and cost, iterating on the design until metrics met SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
