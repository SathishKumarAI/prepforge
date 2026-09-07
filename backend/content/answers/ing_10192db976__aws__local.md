---
qid: ing_10192db976__aws__local
question: 'Explain: ACL (Access Control List) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 513
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:40-05:00'
sources: []
---

**Situation / Task**  
When I joined the Data‑Science Platform team at a fintech startup, we had no unified permission model for our ML pipelines. Every notebook owner could read or write any dataset, leading to accidental data leaks and audit failures. My goal was to design an ACL‑based permission system that would let us enforce fine‑grained access while scaling to 10 k users and 1 TB of training data.

**Action**  
I started with *Dive Deep* – mapped every read/write flow, identified hot spots, and defined the minimal set of roles (Data Owner, Modeler, Auditor). I chose **Amazon Cognito** for user identity, **AWS IAM** for service‑level permissions, and a **DynamoDB table** (`ACL: {resourceId, principalId, permission}`) to store ACL entries.  
The API Gateway + Lambda layer performed *Authorization* by querying DynamoDB (partition key = resourceId) and returning a policy document that the calling service used. For bulk access checks we pre‑cached ACLs in **ElastiCache Redis**.  

I introduced *Bias for Action* by iterating on a prototype in 48 hrs, then moved to production with an A/B rollout. I added automated *Unit+Integration* tests that asserted correct policy enforcement under concurrent loads (≥1000 requests/sec).  

**Result**  
After deployment we saw:  
- **93 % reduction** in unauthorized access incidents (from 45/month to 3/month).  
- **30 % faster** data‑access latency for modelers, thanks to Redis caching.  
- Cost stayed below $2k/month – DynamoDB’s on‑demand pricing + ElastiCache reserved nodes covered all traffic.

I also documented the failure mode when a user accidentally added an “ALL” permission; this taught us to enforce *Ownership* by requiring multi‑factor approval for high‑privilege changes.  

**Leadership Principles Highlighted**  
- **Customer Obsession / Ownership** – ensuring data integrity for our clients.  
- **Dive Deep & Bias for Action** – rapid prototyping, rigorous testing, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
