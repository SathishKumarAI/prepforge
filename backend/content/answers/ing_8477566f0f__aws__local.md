---
qid: ing_8477566f0f__aws__local
question: 'Explain: Learn how to design large-scale systems — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 425
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:37-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science squad at my previous company, we had to migrate our nightly model training pipeline from an on‑prem cluster to a fully managed AWS environment that could scale to 10 × the data volume and cut cost by 40 %.  

**Action (Design)**  
1. **Data ingestion** – Use Amazon S3 for immutable raw datasets; enable multipart upload and versioning.  
2. **Feature store** – Deploy Amazon SageMaker Feature Store to centralize feature access, with read‑through cache in Amazon ElastiCache Redis for sub‑millisecond latency.  
3. **Training orchestration** – Spin up SageMaker Training Jobs on Spot Instances (p4d or g5) and use hyper‑parameter tuning jobs; set a max run time of 48 h to enforce cost control.  
4. **Model serving** – Deploy models with SageMaker Endpoint, auto‑scaling based on CloudWatch metrics (CPU >70 % → add instance).  
5. **Monitoring & observability** – Route logs to Amazon CloudWatch Logs and use CloudWatch Alarms for error thresholds; integrate with AWS X-Ray for end‑to‑end tracing.  

**Result**  
- Training time reduced from 12 h on-prem to <3 h in the cloud (4× speed).  
- Cost per training run dropped from $120 to $72 (40% savings).  
- Model latency improved from 200 ms to 25 ms, meeting SLA for real‑time inference.  

**Learning & Ownership**  
I owned the migration plan, validated trade‑offs between on‑prem vs managed services, and documented a “runbook” that now serves as our internal playbook. The bar‑raiser will note my deep dive into cost models (Spot vs OnDemand), my bias for action in prototyping with SageMaker, and quantified impact through clear metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
