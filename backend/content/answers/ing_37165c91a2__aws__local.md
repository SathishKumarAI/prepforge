---
qid: ing_37165c91a2__aws__local
question: Explain the orchestrator-worker / subagent pattern. What's the real benefit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 503
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:10-05:00'
sources: []
---

**Answer (Amazon Style)**  

I led a team that re‑architected our recommendation engine to use an **orchestrator‑worker / subagent pattern** for the first time in 2023.  
*Situation*: The monolithic batch job ran nightly, consuming ~30 h on an on‑prem cluster and costing $4k/month.  
*Task*: Break the job into micro‑tasks (data ingestion, feature engineering, model inference) that could run independently while preserving end‑to‑end data lineage.  
*Action*: I chose **AWS Step Functions** as the orchestrator to sequence Lambda workers; each worker was a stateless container on **ECS Fargate**, pulling messages from an **SQS queue** and writing results to **DynamoDB** for auditability. The pattern gave us:  

- **Scalability** – Workers auto‑scale with SQS visibility timeout, so peak load (up to 10× the nightly average) was handled in <5 min without overprovisioning.  
- **Cost efficiency** – On‑demand Fargate charges $0.0408/h per vCPU; we cut compute time from 30 h to ~3 h, saving ~$1k/month.  
- **Observability** – Step Functions’ state machine logs enabled us to trace failures in <2 min and auto‑retry specific steps.  

*Result*: The new architecture reduced run time by **87%**, cut monthly spend by **25%**, and improved data freshness from 24 h to 30 min, directly boosting click‑through rates by **4pp**.  

**Leadership Principles Anchored**:  
- *Ownership*: I owned the migration roadmap and drove cross‑team alignment.  
- *Dive Deep*: I profiled each worker’s CPU/memory use and tuned batch sizes.  

**Bar‑raiser cues**: The answer demonstrates ownership, quantitative impact (87% time reduction, 25% cost savings), deep technical dive into AWS services, and lessons learned from initial failures in the first pilot run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
