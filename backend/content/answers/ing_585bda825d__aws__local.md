---
qid: ing_585bda825d__aws__local
question: 'Explain: was in memory they have complicated transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 402
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:45:19-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we were building a real‑time fraud detection pipeline that had to process ~10 M transaction records per day. The legacy system loaded all data into memory, then ran nested SQL joins for each rule set—this caused 8–12 s latency and frequent OOM crashes during peak hours.

**Action (Design & AWS Services)**  
I proposed a **serverless micro‑service architecture**:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Ingest & de‑duplication | Amazon Kinesis Data Streams + Lambda | Low‑latency, auto‑scaling ingestion. |
| Feature enrichment | DynamoDB Global Tables (replicated to us-east-1) | Near‑real‑time access, high write throughput. |
| Rule engine | SageMaker Endpoint (batch transform) + AWS Step Functions | Enables parallel rule evaluation; step functions handle retries & circuit‑breaking. |
| Result storage | Redshift Spectrum on S3 | Cost‑effective analytics layer for compliance reporting. |

I added **AWS X-Ray** for tracing and **CloudWatch Alarms** to trigger auto‑scaling of Lambda concurrency.

**Result**  
- Latency dropped from 12 s to < 300 ms per transaction.  
- Throughput increased by 4×, handling peak traffic without OOM.  
- Operational cost fell 35% year‑over‑year due to pay‑as‑you‑go scaling.

**Reflection (Bar‑raiser cues)**  
I took full ownership of the migration, performed a deep dive into data skew and cold starts, and iterated on the Lambda timeout after the first failure. The quantified impact and lessons—e.g., caching hot keys in DynamoDB—showed measurable improvement and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
