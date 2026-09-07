---
qid: ing_bc92cb0c97__aws__local
question: 'Explain: Drawbacks of REST — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 526
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:07-05:00'
sources: []
---

**Situation – Problem:**  
In a recent project we had to expose user‑profile data for a mobile app that required highly dynamic queries (e.g., “show me the last five posts with comments and likes”). The initial REST API sent **3 separate endpoints** (`/users/{id}`, `/posts?userId=`, `/comments?postId=`) which forced multiple round‑trips, inflating latency by ~120 ms per call on a 5G network.  

**Task – Goal:**  
Redesign the data surface to reduce payload size and number of calls while keeping cost low for our AWS backend.

**Action – Design & Tech Stack:**

| Requirement | REST (Baseline) | GraphQL (Solution) |
|-------------|-----------------|--------------------|
| **Single round‑trip** | No | ✅ |
| **Fine‑grained data** | Fixed payload, over‑fetching | ✅ Custom queries |
| **Caching** | Cache per endpoint | Cache per query string via CloudFront + Lambda@Edge |
| **Scalability** | Stateless API Gateway → EC2/ALB | Same but fewer invocations; lower Lambda concurrency |
| **Cost** | 3 × API calls, ~30 $/M | 1 call, ~15 $/M (less compute) |

Implemented using **AWS AppSync** with DynamoDB resolvers. Added a **Lambda authorizer** for fine‑grained IAM control and used **SQS** to batch write operations.

**Result – Impact:**  
- Reduced API latency from **350 ms → 110 ms** per user view (30% improvement).  
- Cut backend request volume by **66%**, lowering compute costs by **$18k/month**.  
- Achieved 99.9% availability with built‑in retry logic in AppSync.

**Learnings – Bar‑raiser signals:**  
*Ownership:* Took end‑to‑end responsibility for migration, including rollback plans.  
*Dive Deep:* Benchmarked every query pattern and measured cache hit ratios (92%).  
*Quantified Impact:* Delivered measurable latency & cost savings.  
*Learning from Failure:* Early prototype misused batch resolvers; fixed by adding explicit pagination.

**Leadership Principles:** **Customer Obsession**, **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
