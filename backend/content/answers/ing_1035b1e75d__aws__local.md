---
qid: ing_1035b1e75d__aws__local
question: 'Explain: Quick Glossary — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 494
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:55-05:00'
sources: []
---

**Answer – Quick Glossary: AI Coding Workflow (Neo Kim & Louis‑François Bouchard)**  

**Situation / Task**  
At my previous company we had a fragmented ML pipeline: data scientists wrote notebooks, devs packaged models, ops deployed to prod. The result was 2–3 week lead times and frequent “model drift” incidents. I was tasked with creating an end‑to‑end workflow that reduced cycle time and improved reliability.

**Action (Design)**  
I built a **CI/CD‑driven AI pipeline** using:

| Step | AWS Service | Why |
|------|-------------|-----|
| Data ingestion & validation | **AWS Glue + Lake Formation** | Centralized, governed data lake |
| Feature store | **Amazon SageMaker Feature Store** | Reusable features across models |
| Training | **SageMaker Pipelines + Distributed training (MPI)** | Parallel GPU scaling, cost‑effective |
| Model registry & versioning | **SageMaker Model Registry** | Immutable model artifacts |
| Deployment | **SageMaker Endpoint + Lambda for inference routing** | Low‑latency, auto‑scaling |
| Monitoring | **CloudWatch + SageMaker Model Monitor** | Drift alerts with actionable dashboards |

I also introduced **GitOps** (CodeCommit + CodePipeline) to enforce code reviews and automated unit tests. The workflow runs in < 30 minutes from commit to production.

**Result**  
- Cycle time dropped from 14 days to **3 days** (≈ 80 % reduction).  
- Production errors fell by **70 %** due to versioned deployments.  
- Cost per inference decreased by **15 %** through better resource utilization.

**Leadership Principles Reflected**  
- **Ownership** – I led cross‑functional change, owning both technical and process improvements.  
- **Dive Deep** – Built a data‑driven audit trail, quantified every step, and iterated on metrics.  

**Bar‑raiser Takeaway**  
A strong candidate shows end‑to‑end ownership, deep technical insight (service choices, trade‑offs), and quantifies impact while learning from early failures (e.g., initial over‑provisioning corrected after monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
