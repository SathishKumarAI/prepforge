---
qid: vq_10a1be683e__aws__local
question: How to count the lines in a file by using linux command?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 485
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:15-05:00'
sources: []
---

**Situation (Customer Obsession)**  
I was tasked with delivering a real‑time ingestion pipeline for the company’s log analytics platform. The first step required verifying that the raw log files were complete before they entered the ETL stage, so I had to count lines quickly on dozens of 10 GB files in S3.

**Task (Ownership)**  
Implement a scalable, cost‑effective method to validate file completeness across our data lake without pulling entire objects into EC2.

**Action (Dive Deep + Invent & Simplify)**  
1. **AWS Glue**: Created a crawler that reads the *s3://logs/* bucket and tags each object with `LineCount`.  
2. **AWS Lambda + S3 Select**: For files >5 GB, invoked a stateless Lambda that runs `SELECT COUNT(*) FROM s3object` via S3 Select, which streams only metadata.  
3. **Command‑line fallback**: When debugging locally or on an EC2 spot instance, I used `zcat file.gz | wc -l` for compressed logs and `wc -l` for plain text.

The Lambda returned a JSON payload with the count, stored in DynamoDB, and triggered a Step Functions workflow to proceed only if the count matched the expected value.  

**Result (Deliver Results)**  
Reduced validation time from 30 min per file to <10 s, cut EC2 usage by 80%, and eliminated data loss incidents—achieving a 99.9% on‑time ingestion rate for the past quarter.

---

### What a bar‑raiser looks for  

| Signal | Why it matters |
|--------|----------------|
| Ownership of the end‑to‑end pipeline | Shows you’re accountable beyond the command line |
| Deep dive into AWS services (Glue, Lambda, S3 Select) | Demonstrates knowledge of scalable, serverless options |
| Quantified impact (time & cost savings) | Validates business value |
| Learning from failures (previous 30 min approach) | Highlights continuous improvement |

This answer blends a concrete Linux command with an end‑to‑end AWS solution, aligning with Amazon’s Leadership Principles and showcasing measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
