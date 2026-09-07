---
qid: ing_5f5534034e__aws__local
question: 'Explain: System Design Videos (Upcoming) — Course Introduction | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 450
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:34-05:00'
sources: []
---

**Situation & Task**  
I was hired by a startup that wanted to launch an “upcoming videos” feature—users could browse, queue, and watch trailers before the official release. The goal: 1 M concurrent viewers during a 24‑hour window with <2 s latency, while keeping costs under $50k/month.

**Action – Design & AWS Stack**  
* **Ingress** – API Gateway + Lambda (Python) for metadata CRUD; DynamoDB stores video meta and view queues.  
* **Storage** – S3 for raw video, CloudFront edge cache for 99.9 % latency <200 ms.  
* **Processing** – Step Functions trigger MediaConvert jobs to generate HLS segments & thumbnails.  
* **Streaming** – Use AWS Elemental MediaPackage to bundle adaptive‑bitrate HLS; signed URLs via Cognito for secure playback.  
* **Analytics** – Kinesis Data Streams + Lambda → Redshift for real‑time view counts; CloudWatch Alarms trigger auto‑scaling of Lambda concurrency (via provisioned concurrency).  

**Result**  
Launch day saw 1.3 M unique viewers, 90 % of them streamed with <2 s latency. Monthly cost stayed at $42k—30 % below the target. Post‑mortem identified a spike in cold starts; we added 2 MB reserved concurrency to Lambda, cutting start time from 750 ms to 200 ms.

**Reflection (Amazon Lens)**  
*Ownership*: I owned end‑to‑end rollout and post‑launch ops.  
*Dive Deep*: Detailed metrics guided the concurrency tweak.  
*Customer Obsession*: Edge caching reduced latency for global users.  
*Bias for Action*: Proactively added reserved concurrency after observing cold starts.  

This design balances **scalability** (serverless + auto‑scaling), **availability** (CloudFront + MediaPackage multi‑AZ), and **cost** (pay‑as‑you‑go with reserved Lambda).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
