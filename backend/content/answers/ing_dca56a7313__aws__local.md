---
qid: ing_dca56a7313__aws__local
question: How do you handle PII in an LLM pipeline end to end?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 458
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:59-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of a generative‑AI pipeline for a fintech client that processed ~30 M user requests/day. The data set contained PII (SSN, address, transaction history) and compliance demanded end‑to‑end encryption, auditability, and zero‑knowledge inference.

**Action**  
1. **Ownership + Customer Obsession** – I mapped the entire flow: ingestion → preprocessing → model inference → post‑processing → storage.  
2. **Dive Deep** – For each stage I identified risk points (e.g., tokenization leaks).  
3. **AWS Design**  
   * **S3 Object Lock & KMS** for immutable, encrypted raw data.  
   * **Lambda + Glue** to strip PII before sending to **Amazon SageMaker Endpoint**; the Lambda runs in a VPC with a dedicated **KMS key per customer**, ensuring keys never touch the model host.  
   * **SageMaker Runtime** uses a **private endpoint**; the inference payload is sanitized, and the response is re‑encrypted by a downstream Lambda before writing to **DynamoDB** (with point‑in‑time recovery).  
   * **AWS CloudTrail + Athena** for audit logs, enabling 95 % faster compliance queries.  
4. **Bias for Action & Deliver Results** – I rolled out the change in two weeks, reducing data breach risk score from 9/10 to 1/10 and cutting audit time by 70 %.

**Result**  
Compliance certification passed on first review; downstream teams now trust the pipeline without manual checks. The cost increased only 12 % due to KMS usage, but latency stayed <200 ms per request.

> **Bar‑raiser check:** I demonstrated full ownership (from design to deployment), deep technical dive into every risk point, quantified impact (risk score & audit time), and learned from a failed prototype that had exposed PII in logs—prompting the encryption‑first approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
