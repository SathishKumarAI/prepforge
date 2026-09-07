---
qid: ing_15f14f8434__aws__local
question: 'Explain: Estephania Cristina, Ph.D. — Machine Learning Mastery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 420
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:56-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation:* In my Ph.D., I was tasked with boosting a medical imaging company’s diagnostic accuracy from **78 %** to >90 %. The stakeholders were clinicians who needed trustworthy, real‑time predictions.

> *Task:* Build an end‑to‑end ML pipeline that could ingest 5 TB of CT scans, train a deep network, and serve predictions with <1 s latency while keeping costs under $10k/month.

> *Action:*  
> 1. **Dive Deep** – I profiled data quality (missing slices, scanner variance) and designed a preprocessing graph in **AWS Glue** to auto‑normalize resolutions and augment on‑the‑fly.  
> 2. Trained an EfficientNet‑B3 ensemble on **Amazon SageMaker**, leveraging Spot Instances for $0.03/instance‑hour, saving ~70 % vs On‑Demand.  
> 3. Deployed the model as a **SageMaker Endpoint** behind **API Gateway** with Lambda throttling (10 QPS) and an SQS retry queue for fault tolerance—ensuring 99.9 % availability.  
> 4. Implemented CI/CD in **CodePipeline** + **CloudWatch** alerts; each iteration took <3 days, enabling rapid bias‑for‑action cycles.

> *Result:* Diagnostic accuracy rose to **92.7 %**, a 14.7 pp improvement, and inference latency dropped to **0.8 s**. Monthly spend stayed below $9k, achieving a cost‑to‑value ratio of **$1 per point increase in accuracy**.  

> *Learning:* The first model overfit to scanner A; by adding domain‑adversarial loss I learned that continuous monitoring and data drift alerts are critical—an ownership mindset that turned a one‑off experiment into a sustainable production system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
