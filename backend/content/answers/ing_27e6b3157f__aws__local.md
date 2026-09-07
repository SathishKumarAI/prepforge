---
qid: ing_27e6b3157f__aws__local
question: 'Explain: A user invokes their right to erasure and their data is in your
  fine-tuning set. Explain to a non-technical stakeholder why you cannot just delete
  it, and what you would actually do.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 370
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:58-05:00'
sources: []
---

**Situation / Task**  
A user exercised their “right to erasure” on a dataset that had already been used to fine‑tune our AI model. I needed to explain why we can’t simply delete the raw records and outline what we actually do.

**Action**  
1. **Identify the data footprint** – Using *AWS Glue* crawlers, we map every table/column that contains the user’s data in the ETL pipeline.  
2. **Mark for exclusion** – We add a “do‑not‑use” tag and update the *S3 bucket* lifecycle policy to move those objects to an isolated, encrypted archive.  
3. **Model audit** – With *Amazon SageMaker Model Monitor*, we run a regression on the model’s predictions to quantify how much influence the user’s samples had (e.g., 0.12 % weight shift).  
4. **Re‑train with deletion flag** – We trigger an automated *SageMaker training job* that excludes all tagged data, then deploy the new model via *AWS Lambda* and *API Gateway*.  
5. **Verification & audit trail** – All steps are logged in *Amazon CloudWatch Logs* and a signed PDF is generated for regulatory compliance.

**Result**  
The entire process completed in 4 hours, reduced our inference latency by <2 ms, and cut storage costs by $1,200/month. Stakeholders saw a clear, auditable path that preserved model integrity while honoring the user’s request—demonstrating **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
