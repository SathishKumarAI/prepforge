---
qid: ing_355fec0414__aws__local
question: 'Explain: Migration Checklist — Tool Use And Mcp'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 420
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:26-05:00'
sources: []
---

**Situation / Task**  
When I led the migration of our on‑prem NLP pipeline to AWS for a global e‑commerce client, we had to move 12 TB of text data, 3 ML models and an orchestration layer while keeping SLA ≥99.9%. The key challenge was selecting tooling that would let us “own” the entire flow without breaking production.

**Action**  
1. **Tooling stack** – I built a migration checklist around AWS services:  
   * **AWS DMS** for incremental data sync,  
   * **Amazon SageMaker Pipelines** to capture CI/CD of model training,  
   * **AWS Step Functions** for orchestration, and  
   * **CloudFormation + CDK** for repeatable infra.  
2. I introduced a **Migration Control Plane (MCP)**: a lightweight microservice that queried each tool’s health API, logged progress to CloudWatch, and triggered rollback scripts if any step failed.  
3. To guarantee **availability**, the MCP ran in two AZs with an ALB; for cost, we enabled Spot instances for SageMaker training jobs, saving 40 % vs on‑demand.

**Result**  
The migration finished 2 weeks ahead of schedule, cut infrastructure costs by 35 %, and improved inference latency from 1.8 s to 0.9 s per request. Post‑migration, the client saw a 12 % lift in conversion rate attributed to faster search.

**Reflection (Bar‑raiser focus)**  
I owned every layer—from data replication to model serving—demonstrating *Ownership* and *Dive Deep*. The MCP’s failure‑backlog feature taught us that “bias for action” must be paired with robust rollback logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
