---
qid: ing_a06855d1db__aws__local
question: 'Explain: Video Serving — YouTube\u00a0Architecture - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 482
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:48-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was asked to design a video‑serving pipeline for a global platform that needed to support 10 M concurrent viewers during peak events while keeping latency under 200 ms and cost below $0.02 per stream.

**Action – Architecture (Dive Deep + Deliver Results)**  

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| Ingestion & transcoding | **S3** + **Elastic Transcoder / MediaConvert** | Durable storage, serverless scaling for 1 TB/day of raw uploads. |
| Content delivery | **CloudFront** with origin‑access identity → **S3** or **EFS** | Edge caching reduces RTT; global edge cache keeps latency <200 ms even in Asia. |
| Dynamic manifest & adaptive bitrate | **Lambda@Edge** + **API Gateway** | Generates HLS/DASH manifests on the fly, supporting 5 ABR profiles without pre‑generation. |
| Analytics & throttling | **Kinesis Data Streams** → **DynamoDB** (hot keys) → **Redshift** | Real‑time metrics for burst control; DynamoDB throttles per‑region requests to avoid over‑subscribing CloudFront. |
| Failure recovery | **S3 Cross‑Region Replication** + **Route 53 latency routing** | Guarantees 99.999% availability, automatic failover if a region goes down. |

**Result (Quantified Impact)**  
- 30× reduction in transcoding time vs. on‑prem GPU farm.  
- Cost per stream dropped from $0.08 to $0.015 by using serverless services and spot‑based transcoding.  
- Peak concurrency handled with zero outages; latency stayed <180 ms globally (measured via CloudWatch metrics).  

**Bar‑raiser cues**  
I owned the entire flow, performed a cost–benefit trade‑off between MediaConvert vs. custom FFmpeg on EC2, and learned that caching manifests at edge (Lambda@Edge) cut 40% of origin hits. This design balances scalability, availability, and tight cost control while keeping the user experience front‑and‑center.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
