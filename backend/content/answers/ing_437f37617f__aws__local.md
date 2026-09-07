---
qid: ing_437f37617f__aws__local
question: 'Explain: Security and Privacy — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 457
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:47-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑function team at an e‑commerce startup that needed to stream real‑time order data from our PostgreSQL catalog into a data lake for ML‑based fraud detection. The challenge was to keep customer PII secure while meeting sub‑second latency and 99.9 % availability.

**Action (Design & Implementation)**  
1. **CDC Engine** – Used **AWS DMS** with logical replication to capture inserts/updates in near real time, enabling *Change Data Capture* without blocking OLTP traffic.  
2. **Data Pipeline** – Streams events via **Amazon Kinesis Data Streams**, then a Lambda function transforms the payload: it masks SSN and credit card fields using deterministic hashing (HMAC‑SHA256) before writing to **S3 Glacier Deep Archive** for long‑term storage.  
3. **Real‑time Analytics** – Kinesis Firehose delivers the sanitized stream directly into an **Amazon Redshift Spectrum** table, where our ML model runs nightly batch jobs on **AWS SageMaker**.  
4. **Security & Compliance** – All transit is encrypted with TLS; data at rest uses SSE‑KMS with a dedicated CMK. IAM policies restrict Lambda to “read/write only” buckets.  

**Result**  
- Reduced fraud false positives by 27 % (from 12 % to 9 %) in the first quarter after deployment.  
- Achieved <200 ms end‑to‑end latency and 99.97 % uptime across all services.  
- Cut operational cost by 15 % versus a self‑hosted CDC solution.

**Reflection**  
I owned the entire pipeline, diving deep into DMS replication lag and Lambda cold starts; after discovering a 5 ms bottleneck in the hashing step, I swapped to **AWS Nitro Enclaves**, cutting processing time by 40 %. This experience reinforced that *ownership* + *dive deep* lead to measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
