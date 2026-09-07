---
qid: ing_fbbd8e58d9__aws__local
question: 'Explain: Availability and Single Points of Failure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 429
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:26-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of an AI inference pipeline from a single‑node GPU cluster to a fully managed, highly available architecture on AWS. The business required 99.95 % uptime for real‑time recommendation requests; any single failure would cost us ~\$1 M in lost revenue per month.

**Action**  
I applied **Ownership** and **Dive Deep**: I first mapped all components (model server, data store, feature cache) to identify *single points of failure* (SPOFs).  
- Replaced the monolithic GPU node with a **Multi‑AZ Auto Scaling Group** of **Amazon SageMaker Endpoint** instances, using **Elastic Load Balancing** and health checks.  
- Migrated stateful caches to **ElastiCache for Redis** in a *cross‑region replication* topology (primary + read replicas).  
- Decoupled data ingestion with **Kinesis Data Streams** and processed features via **AWS Lambda**, eliminating synchronous dependencies.  

I introduced **blue/green deployments** on SageMaker, leveraging **S3 versioning** for model artifacts to rollback instantly. Cost was kept within 15 % of the previous budget by using **spot instances** for non‑critical inference traffic.

**Result**  
Post‑migration, uptime rose from 99.2 % to **99.97 %**, saving ~\$1.2 M per month in avoided revenue loss. The system handled a 3× increase in concurrent requests without additional CAPEX. I documented the failure modes and recovery playbooks, which were later adopted as best practice across three other services.

**Learnings**  
I learned that *identifying SPOFs early* and designing for **statelessness** and **elasticity** not only improves availability but also drives cost efficiency—an insight I bring to every AI‑centric solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
