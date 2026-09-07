---
qid: ing_39ab81589d__aws__local
question: 'Explain: NFR — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 468
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:00-05:00'
sources: []
---

**Situation & Task**  
I led the migration of a video‑streaming service (similar to YouTube) from an on‑prem CDN to a fully managed AWS architecture. The goal was to satisfy strict Non‑Functional Requirements (NFRs): *latency < 200 ms*, *99.999% availability*, and *elastic cost per view*.

**Action – Design & Implementation**  
- **Compute & Delivery:** Deployed **AWS CloudFront** edge caches with custom behaviors; used **Lambda@Edge** to rewrite URLs on the fly, reducing origin hits by 70%.  
- **Storage & Encoding:** Video chunks were stored in **S3 Glacier Deep Archive** for infrequently accessed content and **S3 Standard‑IA** for recent uploads. Transcoding pipelines ran on **AWS Elemental MediaConvert** triggered via SQS, guaranteeing < 5 min encode time for 1080p videos.  
- **Scalability & Availability:** Leveraged **Auto Scaling Groups** with **Elastic Load Balancing (ALB)** behind an **Amazon ECS Fargate** cluster; used **AWS Global Accelerator** to route users to the nearest healthy endpoint, keeping latency < 150 ms globally.  
- **Cost Control:** Implemented **AWS Cost Explorer Alerts** and a custom metric that throttled background jobs during peak hours, cutting operational spend by 35% while maintaining QoS.

**Result**  
Post‑migration, we achieved **99.999% uptime**, reduced average view latency from 350 ms to 120 ms, and cut video delivery cost per GB by **$0.07 → $0.02** (≈ 70% savings).  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Focus on end‑user latency and reliability.  
- *Ownership & Dive Deep*: I drove the entire stack redesign, iterated on metrics, and owned cost optimization.  

Bar‑raisers look for ownership, deep technical reasoning, quantified impact, and lessons from trial/error—this solution demonstrates all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
