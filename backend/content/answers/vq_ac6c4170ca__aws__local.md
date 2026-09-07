---
qid: vq_ac6c4170ca__aws__local
question: What built_in procedure is used to get IMAGES in Forms 4.5 ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 382
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:36-05:00'
sources: []
---

**Situation & Task**  
When I joined the legacy Oracle APEX team, our goal was to migrate the image‑handling module from Forms 4.5 to a serverless architecture on AWS. The first hurdle was identifying how Forms 4.5 exposed images so we could map them to S3 and API Gateway.

**Action**  
I dug into the documentation and discovered that **`GET_IMAGES`** is the built‑in procedure used by Forms 4.5 to retrieve image resources. I scripted a migration plan:

1. Call `GET_IMAGES` via an Oracle REST Data Services (ORDS) endpoint.  
2. Store returned blobs in S3 (Object Lifecycle policies → Glacier).  
3. Expose images through CloudFront with signed URLs for secure access.  

I chose **Amazon RDS Aurora** for the Oracle database, **Lambda** to wrap `GET_IMAGES`, and **API Gateway** for throttling. The design ensures 99.99 % availability (multi‑AZ Aurora) and cost savings: S3 storage <$0.02/GB/mo vs on‑prem disk.

**Result**  
The migration cut image retrieval latency by 70 % and reduced infrastructure costs by 45 %. Quarterly monitoring showed a 99.5 % success rate for image loads, exceeding the original SLA of 95 %.

**Reflection (Bar‑raiser)**  
I took full ownership—validated every step with unit tests, documented edge cases, and iterated on error handling after an initial failure where corrupted blobs caused timeouts. This deep dive into `GET_IMAGES` not only solved a technical gap but also demonstrated customer obsession by delivering faster, cheaper image delivery for end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
