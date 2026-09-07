---
qid: ing_edcab67f10__aws__local
question: 'Explain: Location Service — Design Google Maps'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 418
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:02-05:00'
sources: []
---

**Situation & Task (S)**  
I led a cross‑functional squad tasked with building an internal “Location Service” that powers our on‑prem and mobile mapping product—similar to Google Maps but for 10M+ users across 50 countries. The goal was to deliver real‑time routing, offline map caching, and geofence alerts while keeping latency < 100 ms.

**Approach (A)**  
1. **Data ingestion** – Stream raw GPS logs via *Amazon Kinesis* → *Glue* for ETL, storing clean points in *DynamoDB* (partitioned by region).  
2. **Vector tiles & routing** – Generate OpenStreetMap‑derived vector tiles with *AWS Lambda@Edge*, cache them in *CloudFront* and *S3*.  
3. **Geofence engine** – Use *Amazon Neptune* graph DB for proximity queries; trigger SNS notifications when users cross zones.  
4. **Scalability & cost** – Auto‑scaling Kinesis shards + on‑demand Lambda handles 1M TPS spikes. Cost < $0.04 per request, down from $0.12 in the legacy system.

**Result (R)**  
- Reduced routing latency by **65%** (from 280 ms to 100 ms).  
- Cut infrastructure spend by **48%** while supporting a 3× user growth forecast.  
- Achieved 99.99% availability during peak traffic, meeting SLA targets.

**Learning & Ownership**  
I owned the end‑to‑end pipeline and conducted post‑mortem on a 24‑hour outage that taught me to add *AWS CloudWatch* anomaly detection for shard health. This iterative dive deep into failure modes embodies Amazon’s **Ownership** and **Dive Deep** principles, ensuring continuous improvement and reliable service delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
