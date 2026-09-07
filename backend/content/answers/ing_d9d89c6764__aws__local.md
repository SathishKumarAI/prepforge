---
qid: ing_d9d89c6764__aws__local
question: Why Not One Vector DB Per Tenant? — Multi Tenant Saas
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 373
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:12-05:00'
sources: []
---

**Why not one vector‑DB per tenant in a multi‑tenant SaaS?**

> *Leadership Principles: Ownership & Dive Deep*

**Situation / Task**  
I led the architecture of a new AI search feature for our SaaS platform that serves 3,000 tenants. Each tenant needed isolated embeddings and fast similarity queries while keeping costs under $0.30/GB/month.

**Action**  
1. **Single‑tenant DBs** were rejected because they would require 3,000 separate Amazon QLDB or DynamoDB tables, each incurring its own provisioned throughput and storage costs (~$600k/year).  
2. I designed a *sharded vector store* on **Amazon Kendra + OpenSearch** with tenant‑ID tags in the document metadata.  
3. Implemented **fine‑grained IAM policies** so tenants could only query their shard, satisfying isolation without separate clusters.  
4. Leveraged **SageMaker Endpoint Autoscaling** to spike compute during peak similarity workloads, keeping latency < 200 ms for 95% of queries.

**Result**  
- Reduced infrastructure cost by **73%** (from $600k to $170k annually).  
- Achieved 99.8% query success rate and maintained <250 ms latency under 10× tenant load.  
- Received a customer satisfaction score lift of **+12 points** on the AI search feature.

*Bar‑raiser notes:* ownership over cost & performance, deep dive into sharding vs isolation trade‑offs, quantifiable impact, and iteration after initial pilot failures (e.g., re‑tuning shard size).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
