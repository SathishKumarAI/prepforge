---
qid: ing_6db51ebb09__aws__local
question: 'Explain: Authorization via permissions in access tokens'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 375
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:34-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a cross‑functional team that built a recommendation engine for an e‑commerce platform. The ML model was exposed through a REST API behind Amazon Cognito and Lambda. We needed to enforce fine‑grained authorization so that each user could only query products in their own store, without compromising performance or security.

**Action (Dive Deep & Ownership)**  
I first mapped the data‑flow: token → Lambda → DynamoDB read/write. I introduced *resource‑based policies* on Cognito ID tokens using custom claims (`store_id`). In Lambda I validated these claims against a `stores` table and cached them in an Elasticache Redis layer to avoid repeated DB lookups.  

For scalability, the Lambda function was provisioned with 1 GB memory and 2 vCPU; I used AWS X-Ray to spot a 30 % cold‑start latency spike during peak traffic. I switched from synchronous invocation to *Lambda@Edge* behind CloudFront, reducing average latency from 120 ms to 45 ms for global users.

**Result (Deliver Results)**  
Post‑deployment, the authorization layer processed 1.2 M requests per day with a 99.9 % success rate and zero data leaks in a year of penetration testing. Cost dropped by 18 % thanks to efficient caching, while response times improved by 63 %.  

**Reflection (Bias for Action & Learn)**  
The first iteration missed the cache‑miss penalty; I learned to instrument every path early with CloudWatch metrics, allowing us to iterate faster and avoid a potential SLA breach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
