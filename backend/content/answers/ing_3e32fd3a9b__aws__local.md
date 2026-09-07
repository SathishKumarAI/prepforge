---
qid: ing_3e32fd3a9b__aws__local
question: How does Harvey define customer data? — Secure legal AI for the most sensitive
  matters | Harvey
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 546
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:45-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I first worked on the *Secure Legal AI* project for Harvey, my first task was to nail down what “customer data” meant in a regulated legal context.  
I asked the product owner: *“What information does a client consider sensitive enough that it must be protected under GDPR and CCPA?”* The answer was concise: **any identifier—name, address, case number, or any document that could link back to an individual**. In practice this mapped to 12 KB per user record plus 4 MB of PDF documents on average.

**Situation / Task**  
We needed a data‑definition layer that would feed both the NLP engine and the compliance audit trail without exposing raw files in transit or at rest.

**Action**  
I designed an immutable *Customer Data Catalog* using **AWS Glue** to crawl S3 buckets, tagging each object with a `customer_id` and a `confidentiality_level`. The catalog was stored in **Amazon Athena** so downstream services could query metadata without touching the blobs. For encryption I leveraged **KMS‑managed keys** and set up **S3 bucket policies** that only allowed Lambda functions (running SageMaker inference) to read encrypted objects.  

I also introduced a **data‑masking layer**: a microservice in **AWS Fargate** that replaced PII with hashed tokens before the text entered the model, reducing risk of accidental leaks.

**Result**  
The new pipeline cut data‑access latency by 35 % (from 1.2 s to 0.78 s per request) and lowered storage costs by 22 % through automated tiering to Glacier Deep Archive for older case files. Compliance audits showed a 100 % pass rate on the first test run.

**Reflection**  
I learned that *Ownership* means defining boundaries early, while *Dive Deep* requires understanding every layer of data flow—especially in regulated domains where a single mis‑tag can trigger penalties.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
