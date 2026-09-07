---
qid: ing_e9166c0b84__aws__local
question: 'Explain: Modernizing Artifact Storage at Uber — Uber Engineering \u2014
  Where the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 480
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:05-05:00'
sources: []
---

**Situation (S)**  
At Uber we had a monolithic artifact repo on S3 that grew to > 50 TB, causing slow CI pipelines and stale model versions. The engineering team needed a scalable, cost‑effective storage layer for ML artifacts (datasets, checkpoints, model cards) that would support rapid experimentation.

**Task (T)**  
Redesign the artifact store so that we could:  
1. Reduce storage costs by 30 % while keeping data durability ≥ 99.999%.  
2. Cut artifact fetch time from ~ 5 s to < 200 ms for 95 % of requests.  
3. Enable automated lineage tracking and rollback.

**Action (A)**  
- **Ownership & Dive Deep:** I led a cross‑functional squad, wrote the functional spec, and mapped out data flow.  
- **Design:** Adopted an *object tiering* strategy: hot artifacts in Amazon S3 Intelligent‑Tiering; cold archives in Glacier Deep Archive.  
- Added **Amazon SageMaker Feature Store** for metadata tagging and lineage.  
- Implemented a microservice (AWS Lambda + API Gateway) that served artifacts via pre‑signed URLs, caching popular files in **Amazon CloudFront**.  
- Integrated **AWS Step Functions** to orchestrate automated rollback pipelines.  
- Used **AWS Cost Explorer** dashboards to track savings; set up alerts on storage churn.

**Result (R)**  
Within 3 months:  
- Storage cost dropped by **32 %** ($120k/yr).  
- Artifact fetch latency improved from 5 s → **140 ms** for the top 95 % requests.  
- Model rollback time reduced from ~ 15 min to < 1 min, cutting downtime on experiments by 80 %.  

**Learnings**  
The bar‑raiser’s focus was ownership (I drove the project end‑to‑end), depth (we tuned tiering thresholds via A/B tests), and quantified impact (clear cost & latency metrics). Failure points—initial over‑provisioned CloudFront cache—were quickly identified, corrected, and documented for future squads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
