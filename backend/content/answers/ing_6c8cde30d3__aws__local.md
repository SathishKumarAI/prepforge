---
qid: ing_6c8cde30d3__aws__local
question: 'Explain: Handling Large Files — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 517
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:05-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  
> 
> **Situation / Task:** I was tasked to design a scalable system for ingesting, processing, and serving 100 GB+ media files from users worldwide while keeping latency under 2 s for read operations.  
> 
> **Action:**  
> 1. **Chunk & Parallel Upload** – use S3 multipart upload (≤5 GB parts) with pre‑signed URLs; store part metadata in DynamoDB for reassembly tracking.  
> 2. **Event‑driven Processing** – trigger Lambda (10 s timeout) per completed part to validate checksum, then fire an SNS event that triggers a Step Functions workflow (EMR Spark job or Glue ETL) for transformations.  
> 3. **Streaming & Caching** – push processed data into Kinesis Data Streams; consumer writes to Elasticache Redis for low‑latency reads, while also persisting final artifacts in S3 Glacier Deep Archive for cost savings.  
> 4. **Metadata & Search** – index file tags in OpenSearch (managed domain) for instant discovery; use AWS Cognito + IAM policies for fine‑grained access control.  
> 5. **Monitoring & Auto‑Scaling** – CloudWatch metrics (upload bytes/sec, Lambda errors) drive an Application Load Balancer that auto‑scales the EMR cluster; set budget alerts in Cost Explorer to cap spend at $2k/month.  
> 
> **Result:** The system handled 10 M uploads per month with a 99.9% success rate and reduced average read latency from 5 s to 1.4 s, cutting storage costs by 35 %.  
> 
> **Bar‑raiser cues:** I own the end‑to‑end flow, dive deep into multipart limits & error recovery, quantify impact (latency, cost), and learned that early integration of OpenSearch dramatically cut search latency—an iteration I documented in a post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
