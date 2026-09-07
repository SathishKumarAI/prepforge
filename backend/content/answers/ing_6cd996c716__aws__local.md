---
qid: ing_6cd996c716__aws__local
question: 'Explain: ​ MemorySaver does not persist between restarts'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 421
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:00-05:00'
sources: []
---

**Situation & Task**  
While working on the **MemorySaver** caching layer for a serverless AI inference pipeline (AWS Lambda + SageMaker), I discovered that cached embeddings disappeared after each function restart. The product spec required persistence across invocations to reduce GPU warm‑up latency by 40 %.  

**Action**  
I performed a root‑cause analysis (Dive Deep) and traced the issue to the **ephemeral /tmp storage** Lambda allocates, which is cleared on every cold start. I re‑architected the cache to use **Amazon Elastic File System (EFS)** mounted to the Lambda execution environment.  

*Technical choices:*  
- EFS provides **NFS v4.1**, 99.999 % durability, and low‑latency access for up to 10 TB.  
- Coupled with **Lambda Provisioned Concurrency** (5 instances) we ensured each instance could share the same persistent cache without contention.  
- Added a simple key‑value store layer using **DynamoDB Global Tables** as a fallback for high‑availability scenarios.  

I updated CI/CD to provision EFS via CloudFormation, added health checks, and ran load tests.  

**Result**  
Post‑deployment latency dropped from 350 ms to 210 ms (40 % improvement). Cache hit rate increased from 55 % to 88 %. Cost impact was +$0.02/month for EFS, fully justified by the performance uplift and SLA guarantees.  

**Reflection**  
Ownership: I owned the issue end‑to‑end, even though it involved multiple AWS services.  
Learning: The failure taught me that Lambda’s /tmp is not a substitute for durable state; persistence must be architected explicitly using managed services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
