---
qid: ing_fcb840c84a__aws__local
question: What is Deep Learning? Why is it relevant?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 420
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:17-05:00'
sources: []
---

**Answer – “What is deep learning and why does it matter?”**

> **Situation & Task**  
> In 2023 I led a cross‑functional team at Amazon to build an AI‑powered recommendation engine for the Prime Video catalog. The goal was to lift user engagement by 15 % while keeping inference latency under 200 ms.

> **Action**  
> I introduced a deep learning pipeline based on *transformer* models (BERT‑style) that learn contextual relationships between titles, genres, and viewing history.  
> - **Data ingestion**: Amazon Kinesis + Glue for real‑time user telemetry; S3 for archival logs.  
> - **Training**: SageMaker training jobs with Spot Instances to reduce cost by 40 %.  
> - **Inference**: Deployed the model as a Lambda layer behind API Gateway, autoscaling via AWS AppConfig to keep latency <200 ms.  
> I applied *Ownership* and *Dive Deep* by profiling GPU utilization and batch size trade‑offs, iterating until inference cost dropped from $0.15 to $0.08 per 1K requests.

> **Result**  
> The new engine increased average watch time by **18 %** and reduced churn in the target cohort by **12 %**, surpassing the 15 % target. Cost savings of $2M annually were realized through spot usage and efficient scaling.

> **Leadership Principles Highlighted**  
> *Customer Obsession* – delivering a richer viewing experience.  
> *Ownership* – driving the end‑to‑end ML lifecycle.  
> *Dive Deep* – continuous performance tuning and cost optimization.  

> **Bar‑raiser Takeaway**  
> Demonstrated measurable impact, rigorous engineering depth, and learning from early latency spikes to refine the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
