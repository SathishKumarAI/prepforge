---
qid: ing_5179e5a1b4__aws__local
question: 'Explain: Making liberal use of idempotency — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 417
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:17-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a cross‑functional team building an ML inference service that accepted image uploads via a REST API. The downstream model was expensive to run (≈$0.02 per inference) and we observed duplicate requests during network retries, inflating costs by 18 % in the first month.

**Action & Design**  
I introduced *idempotency* at two layers:

1. **API Gateway + Lambda** – Clients send an `Idempotency-Key` header; Lambda checks DynamoDB for a record with that key before invoking the model. If found, it returns the cached result; if not, it runs inference and stores the JSON response keyed by the idempotency ID.

2. **S3 Object Naming** – Uploaded images are stored under `images/{idempotency‑key}/original.jpg`. This guarantees that repeated uploads do not overwrite or duplicate data, simplifying cleanup with lifecycle rules.

AWS services used:  
- API Gateway (request validation)  
- Lambda (stateless compute)  
- DynamoDB (low‑latency key/value store)  
- S3 (object storage & lifecycle policies)

**Result**  
After rollout, duplicate inference costs dropped from 18 % to <2 %. Latency improved by 12 % because cache hits bypassed the model. The system scaled to 10k concurrent requests with 99.9 % availability thanks to DynamoDB’s auto‑scaling and S3’s global replication.

**Reflection (Bar‑raiser cues)**  
I owned the end‑to‑end solution, *dived deep* into AWS pricing models, quantified impact with real metrics, and learned that a simple idempotency key can transform cost and reliability. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**—the Amazon way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
