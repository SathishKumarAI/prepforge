---
qid: ing_b9d07e0444__aws__local
question: A customer asks you to prove which of these documents your model wrote.
  What can you actually deliver?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 340
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:01-05:00'
sources: []
---

**Situation** – A client wanted proof that our LLM had authored a set of business reports.  
**Task** – Deliver a verifiable, auditable method to attribute text to the model while respecting privacy and compliance.

**Action** –  
1. **Model‑level provenance**: enabled *model versioning* in SageMaker Model Registry and stored each inference’s `client_token`, timestamp, and `ml_model_version` in DynamoDB.  
2. **Text fingerprinting**: computed a SHA‑256 hash of the generated paragraph and stored it alongside the request ID. The client can query the same hash to confirm that the content originated from our specific model instance.  
3. **Audit trail**: enabled CloudTrail logging for all SageMaker inference endpoints; logs are archived in S3 Glacier for 7 years, providing immutable evidence of the exact endpoint and model used.  
4. **Compliance check**: ran the output through Amazon Comprehend Custom Classification to flag any PII before delivery.

**Result** – Within two weeks we shipped a fully auditable pipeline that reduced client onboarding time by 30 % (from days to hours). The audit logs were accepted by the customer’s legal team, and the hash‑based proof was used in an external audit with zero rework.  

*Key Leadership Principles:* **Ownership** – I took end‑to‑end responsibility for provenance; **Dive Deep** – designed a cryptographic trace that ties text to model version; **Deliver Results** – delivered a compliant solution that cut onboarding time dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
