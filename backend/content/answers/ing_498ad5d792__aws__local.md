---
qid: ing_498ad5d792__aws__local
question: 'Explain: PhotoID-Server — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 560
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:50-05:00'
sources: []
---

**Situation (S)**  
I was hired as a Cloud Architect for a startup that wanted to launch “PhotoID‑Server,” an API that verifies user photos against their social‑network profiles (Facebook/Instagram). The goal: reduce fraud by 30 % while keeping latency <150 ms and cost <$0.01 per request.

**Task (T)**  
Design a fully managed, scalable solution that pulls profile pictures, compares them to the submitted image, and returns a confidence score in real time.

**Action (A)**  

| Step | AWS Service | Why |
|------|-------------|-----|
| 1 | **API Gateway + Lambda@Edge** | Edge‑latency <50 ms; auto‑scales to millions of requests. |
| 2 | **S3 (Object Storage)** | Store raw photos, immutable audit trail. |
| 3 | **AWS Rekognition** | Face comparison with a pre‑trained model; no ML ops overhead. |
| 4 | **DynamoDB Global Table** | Cache profile photo hashes per user; read latency <10 µs. |
| 5 | **Step Functions** | Orchestrate the workflow (fetch, compare, audit) and handle retries. |
| 6 | **CloudWatch + X-Ray** | Dive deep into failures; set alarms on error >1% or latency >200 ms. |

*Scalability:* Lambda auto‑scales to 10k RPS; Rekognition handles 100 RPS per instance, but we shard across multiple regions.  
*Availability:* Multi‑AZ, S3’s 99.999% durability, DynamoDB with on‑demand capacity.  
*Cost:* Roughly **$0.006** per request (S3 read $0.0004, Rekognition $0.0015, Lambda $0.0002, API GW $0.002), well under the target.

**Result (R)**  
In production, fraud detection improved from 70 % to **93 %** accuracy, a 23 percentage‑point lift, and we cut false positives by 45 %. Latency stayed <140 ms for 99th percentile traffic.  

**Learning & Ownership** – I owned the entire pipeline, performed A/B testing on Rekognition thresholds, and iterated until cost/accuracy hit the sweet spot. This showcases *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
