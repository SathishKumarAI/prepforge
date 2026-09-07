---
qid: ing_7777ec8922__aws__local
question: 'Explain: Risk Management Systems — EU AI Act 2026: Key Compliance Requirements
  for Enterprises | Secure Privacy Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 455
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:14-05:00'
sources: []
---

**Situation (S)** – In 2025 I led a compliance squad at a fintech that was preparing to launch an AI‑driven credit scoring model in the EU. The upcoming **EU AI Act 2026** mandated rigorous risk management, data governance and transparency for “high‑risk” systems.

**Task (T)** – Build an end‑to‑end risk‑management pipeline that meets the Act’s *Risk Assessment*, *Transparency* and *Human Oversight* clauses while keeping latency < 200 ms and cost <$0.02 per inference.

**Action (A)**  
1. **Data lineage & governance** – Built a catalog in **AWS Glue Data Catalog** with fine‑grained tags (`risk_level=high`, `model_version`).  
2. **Model risk scoring** – Deployed the model on **Amazon SageMaker Endpoint**; added a Lambda layer that computes *bias* and *fairness* metrics (using `aif360`) before inference.  
3. **Audit trail & explainability** – Stored every request/response in **DynamoDB** with a signed JWT audit token, and streamed logs to **Amazon Kinesis Firehose → S3** for immutable storage.  
4. **Human‑in‑the‑loop (HITL)** – Created an **SQS queue** that forwards flagged predictions (> 0.8 risk) to a SageMaker Ground Truth labeling job; results are fed back into the model nightly.  

**Result (R)** – The pipeline cut compliance review time from 6 weeks to 2 days, achieved < 1 % false‑positive rate on bias tests, and maintained $0.018 per inference. Post‑deployment audit revealed zero non‑compliance findings in the first quarter.

> **Leadership Principles**  
> • *Customer Obsession* – ensuring EU customers receive fair, transparent AI decisions.  
> • *Ownership & Dive Deep* – architected a fully auditable, scalable system that I personally maintained and iterated on based on real‑world metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
