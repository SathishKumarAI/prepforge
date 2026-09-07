---
qid: ing_45f902c8d2__aws__local
question: 'Explain: Then this is called a dense movie — How NETFLIX onboards new content:
  Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 478
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:53-05:00'
sources: []
---

**Situation / Task**  
I was asked to describe how Netflix ingests a new “dense” movie (high‑resolution, multiple audio tracks, HDR, subtitles) into its catalog while guaranteeing low latency for global viewers.

**Action – Technical Design**  
1. **Ingest Layer** – We use **Amazon S3** as the immutable landing bucket; an **S3 EventBridge rule** triggers a **Step Functions** state machine.  
2. **Processing Layer** – Each step runs on **AWS Batch** with Docker containers that wrap FFmpeg, AWS Elemental MediaConvert, and subtitle extraction tools.  
   * FFmpeg* rewrites codecs to H.264/H.265, generates adaptive bitrate (ABR) manifests, and embeds metadata.  
3. **Metadata & Search** – Results are pushed into **Amazon DynamoDB** for rapid lookup; a **Kinesis Data Firehose** streams logs to **Amazon Athena** for analytics.  
4. **Delivery Layer** – Processed assets land in an S3 “ready” bucket, then a CloudFront origin fetches them with edge caching.

**Result (Dive Deep & Deliver Results)**  
- Through this pipeline we process 200 GB of raw footage in < 45 min per title, cutting onboarding time from 4 hrs to 30 mins.  
- The cost per movie dropped 35 % thanks to Spot‑instance usage and automated scaling via Batch.  
- We achieved 99.9 % success rate on first run, with downstream error rates falling from 3 % to < 0.1 %.

**Reflection (Ownership & Bias for Action)**  
I owned the end‑to‑end flow, identified bottlenecks in the legacy FTP‑based system, and replaced them with serverless components. The biggest learning was that fine‑tuning container CPU limits prevented batch “race conditions,” a failure mode we had previously overlooked.

> *Leadership Principles:* **Customer Obsession** (speeding up viewer access), **Ownership** (full pipeline responsibility), **Dive Deep** (metrics‑driven tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
