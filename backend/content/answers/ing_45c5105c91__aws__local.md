---
qid: ing_45c5105c91__aws__local
question: 'Explain: You have high quality 720p The number — How NETFLIX onboards new
  content: Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 497
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:15-05:00'
sources: []
---

**Customer Obsession | Ownership**

> **Situation:**  
> At my last role, we were tasked with building an end‑to‑end pipeline to ingest 720p movie files from external studios and make them streamable on our platform within 48 hrs.

> **Task:**  
> Design a scalable, fault‑tolerant video processing workflow that guarantees the final transcoded file meets Netflix’s quality (10 Mbps H.264) while keeping costs under $0.02 per minute of source footage.

> **Action:**  
> 1. **Ingest** – S3 multipart upload + Glacier Vault Lock for compliance.  
> 2. **Metadata extraction** – AWS Lambda (Python) triggers on object creation, pulls XMP tags and pushes a DynamoDB “job” record.  
> 3. **Transcoding** – Step Functions orchestrate parallel `aws:elastictranscoder` jobs across 4‑node EC2 Auto Scaling groups (t3.medium). Each node runs FFmpeg with presets tuned for 720p, writing intermediate MP4s to S3 Glacier Deep Archive.  
> 4. **Quality check** – Another Lambda reads the transcoded file, runs `ffprobe` to verify bitrate and resolution; if <10 Mbps it reruns on a higher‑capacity instance (c5.large).  
> 5. **Delivery** – Successful jobs trigger CloudFront invalidation and push a “ready” flag to DynamoDB.

> 6. **Cost control** – Spot Instances + Savings Plans cut EC2 spend by 35 %. Lambda usage < $0.001 per job; Elastic Transcoder billed only for actual minutes processed.

> **Result:**  
> The pipeline handled 12,000 files/month with a mean turnaround of 36 hrs (≤48 hrs SLA). Cost per file dropped from $1.20 to $0.27, freeing $15k/yr for R&D. Customer satisfaction scores rose 12 pts on the “Content On‑Demand” survey.

> **Learnings:**  
> • Tuning FFmpeg presets dramatically reduced bitrate variance.  
> • Lambda retries were critical; adding a dead‑letter queue caught 0.5 % of jobs that failed due to transient S3 errors, improving overall reliability from 97 % to 99.8 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
