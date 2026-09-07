---
qid: ing_96add1a5ad__aws__local
question: 'Explain: Path 2: AI Product Specialist (Business Track)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 425
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:49-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team for an e‑commerce startup, we needed to shift from ad‑hoc ML experiments to a repeatable AI product that could drive personalized recommendations at scale. The goal was to increase conversion by 15 % and reduce model drift latency below 30 s.

**Action**  
I applied **Customer Obsession** and **Ownership**: I mapped customer journeys, identified the key recommendation points, and defined success metrics (CTR, AUC). I designed a *Model‑as‑a‑Service* pipeline on AWS:

- **SageMaker Pipelines** for automated training & validation.  
- **AWS Glue** + **Lake Formation** to ingest 5 TB of clickstream data nightly into a central catalog.  
- **ECR** and **Lambda** for model packaging and real‑time inference, ensuring <30 ms latency via **Edge TPU** on SageMaker Edge Manager.  
- **CloudWatch** + **X-Ray** for observability; I set up an anomaly detector that auto‑triggers retraining when AUC drops 2 %.  

I wrote a Terraform module to provision the stack in 3 min, cutting infra cost by 25 % versus our previous on‑prem solution.

**Result**  
Within 4 months we achieved a **17 % lift in conversion** and reduced inference latency from 120 ms to <30 ms. Model drift incidents dropped from weekly to monthly, freeing 20 hrs of engineer time per week.  

**Learnings & Bar‑raiser cues**  
I documented every decision point, performed post‑mortem on a failed retraining job (it was due to stale IAM roles), and iterated the pipeline to avoid similar issues—demonstrating *Dive Deep* and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
