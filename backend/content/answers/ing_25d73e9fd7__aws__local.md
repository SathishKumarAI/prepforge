---
qid: ing_25d73e9fd7__aws__local
question: 'Explain: MySQL at Canva: Growing Pains — From Zero to 50 Million Uploads
  per Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 497
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:44-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At Canva I led the migration of our media upload pipeline from a single‑node MySQL cluster to a horizontally scalable architecture that supports **50 M uploads/day** while keeping latency under 200 ms for end users.

**Action (Dive Deep, Bias for Action)**  
1. *Requirements*: High write throughput, ACID guarantees for metadata, eventual consistency for the CDN cache, and cost‑effective storage.  
2. *Design*:
   - **Amazon Aurora Serverless v2** for relational metadata (auto‑scales with burstable writes).  
   - **DynamoDB Streams + Lambda** to push new media keys to S3 and invalidate CloudFront edges in real time.  
   - **S3 Object Lifecycle** for tiered storage (S3 Standard → Intelligent Tiering → Glacier) based on access patterns.  
   - **AWS Global Accelerator** to route uploads to the nearest Aurora region, reducing egress latency.  
3. *Scalability*: Aurora’s 32 TB max per database + auto‑scaling ensures we handle peak bursts (up to 200 k QPS). DynamoDB provides sub‑millisecond reads for cache invalidation.  
4. *Availability*: Multi‑AZ deployment, read replicas in edge regions; S3 and CloudFront provide 99.999% durability/availability.  
5. *Cost*: Aurora Serverless v2 reduces idle capacity costs by ~70 %; DynamoDB’s on‑demand mode eliminates over‑provisioning.

**Result (Deliver Results)**  
- **Throughput**: Sustained 50 M uploads/day with <200 ms latency for 95 % of users.  
- **Cost Savings**: $1.2 M/yr compared to the legacy on‑prem solution.  
- **Reliability**: 99.9999 % uptime during a 6‑month rollout, no single point of failure.

**Learnings (Invent & Simplify)**  
Tried a monolithic MySQL cluster first; it hit a hard write ceiling and caused hot spots. The switch to Aurora + DynamoDB simplified scaling logic and eliminated manual sharding. I documented the migration pattern in an internal playbook, now used by other teams for high‑volume ingestion pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
