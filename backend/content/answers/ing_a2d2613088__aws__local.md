---
qid: ing_a2d2613088__aws__local
question: 'Explain: IP Address — System Design was HARD until I Learned these 30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 422
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:24-05:00'
sources: []
---

**Situation (S)**  
I was tasked to build an internal “IP‑Address Allocation Service” for a global SaaS platform that had grown from 3 M to 30 M users, each requiring dynamic IPv4/IPv6 blocks. The legacy system hit *O(N²)* lookups and crashed during peak load.

**Task (T)**  
Deliver a fault‑tolerant, low‑latency service that could allocate, de‑allocate, and audit IP ranges at scale while staying under the $2 k/month budget.

**Action (A)**  
*Ownership & Dive Deep:* I mapped every failure point, discovered that our lookup table was a single DynamoDB table with no secondary indexes.  
I redesigned it using **Amazon DynamoDB Global Tables** for multi‑region replication, **ElasticCache Redis** for hot prefixes, and **AWS Lambda + API Gateway** as the stateless front end.  
Implemented an idempotent allocation algorithm that batches requests into *≤10 ms* micro‑transactions, ensuring ACID semantics via DynamoDB transactions.  
Added CloudWatch alarms, auto‑scaling on CPU/RCU usage, and a CI/CD pipeline with Terraform.

**Result (R)**  
- Latency dropped from 350 ms to <15 ms (99th percentile).  
- Throughput increased from 1 k req/s to >120 k req/s during a 24‑hr spike.  
- Operational cost fell by **65 %** while improving SLA from 95 % to 99.999%.  

**Bar‑raiser notes** – I took full ownership, dug into the data (dynamo read/write patterns), quantified impact with real metrics, and learned that caching can replace expensive lookups when designed correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
