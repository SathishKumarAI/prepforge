---
qid: ing_4f2f01726c__aws__local
question: 'Explain: Ownership — Leadership Principles'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 473
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:18-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the migration of our fraud‑detection pipeline from on‑prem Spark to an end‑to‑end ML service in AWS. The goal was to reduce false positives by 25 % while keeping latency < 200 ms for real‑time transaction scoring.

**Action**  
I owned the entire stack:  
* **Data ingestion** – Kinesis Data Streams fed raw logs into S3 (event‑driven).  
* **Feature store** – Amazon SageMaker Feature Store held per‑customer attributes, versioned automatically.  
* **Model training & serving** – SageMaker Pipelines orchestrated nightly training on a GPU fleet; the resulting model was deployed to SageMaker Endpoint with Multi‑Model Serving and Auto Scaling.  
* **Observability** – CloudWatch Metrics + Evidently for A/B testing monitored precision/recall, and Lambda sent alerts when drift exceeded 5 %.  
I performed a cost‑benefit analysis (CBA) comparing EC2 Spot vs SageMaker Managed Spot Training; the latter cut training spend by 38 % while meeting SLA.

**Result**  
Within three months:  
* False positives dropped from 12.3 % to 9.1 % (≈ 25 % improvement).  
* Latency stayed at ~180 ms, satisfying real‑time requirements.  
* Monthly spend fell by $15k (~30 %) due to efficient spot usage and serverless components.

**Reflection / Learnings**  
Owning the pipeline meant I dove deep into data quality, model drift, and cost knobs—aligning with *Customer Obsession* (better fraud scores mean happier users) and *Ownership* (end‑to‑end responsibility). I documented trade‑offs: SageMaker’s managed services simplified ops but added vendor lock‑in; we mitigated this by keeping raw feature data in S3 for potential future migration. This experience reinforced that true ownership requires continuous measurement, rapid iteration, and a willingness to fail fast and learn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
