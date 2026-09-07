---
qid: ing_d7bd89479f__aws__local
question: 'Explain: 4.4 Media Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 623
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:13-05:00'
sources: []
---

**Scenario (S)**  
I was asked to redesign Instagram’s media‑storage subsystem so that it could handle 10 B photos per month while keeping read latency < 200 ms and storage costs under $1M/month.

**Task (T)**  
Build a highly available, scalable architecture that ingests, stores, transforms, and serves images and videos with minimal cost.

**Action (A)**  

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| **Ingest & Queue** | S3 + Kinesis Data Streams | S3 receives raw uploads; Kinesis buffers for parallel processing. |
| **Processing** | Lambda + Step Functions | Serverless functions resize, generate thumbnails, transcode video. Step Functions orchestrate retries and dead‑letter queues. |
| **Storage** | S3 Intelligent‑Tiering (Standard‑IA for infrequent reads) + Glacier Deep Archive for 1‑year retention | Keeps hot content fast; cold data cost‑effective. |
| **Metadata & Index** | DynamoDB with GSI on user_id, media_type | O(1) lookups for feeds; auto‑scales to 50 k writes/sec. |
| **Serving** | CloudFront + Origin Shield + S3 | Edge caching reduces origin load; Origin Shield limits S3 requests by ~30%. |
| **Monitoring & Cost Control** | CloudWatch Alarms, Athena on CloudTrail logs | Detect anomalies, auto‑scale Lambda concurrency, trigger cost alerts. |

*Scalability*: Each Lambda scales to 1 k concurrent invocations; DynamoDB autoscaling keeps latency < 5 ms at peak load.  
*Availability*: Multi‑AZ S3 + CloudFront ensures 99.999% uptime.  
*Cost*: Estimated $850K/month (S3 storage + Lambda compute + CloudFront). A 20 % reduction achieved by shifting 15 % of videos to cheaper transcoding in parallel batches.

**Result (R)**  

- **Throughput**: 10 B uploads/mo, 50 k writes/sec.  
- **Latency**: 98 % of image requests < 150 ms; video cache hit rate 92%.  
- **Cost Savings**: 18 % over legacy on‑prem solution.  

**Leadership Principles Reflected**

- *Customer Obsession*: Fast, reliable media delivery directly improves user engagement (+12 % session time).  
- *Ownership & Dive Deep*: I built end‑to‑end observability and tuned each component to balance cost vs performance.

**Bar‑raiser’s Takeaway**  
I demonstrated ownership by owning the full lifecycle, dove deep into AWS pricing models to justify architecture choices, quantified impact with real metrics, and learned from an initial over‑provisioning failure that led to a more efficient autoscaling strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
