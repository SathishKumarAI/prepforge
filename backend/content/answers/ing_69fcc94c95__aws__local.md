---
qid: ing_69fcc94c95__aws__local
question: 'Explain: Playback Service — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 453
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:58-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to build a *Playback Service* for a music streaming platform similar to Spotify. The goal was to support 20 M concurrent users with < 200 ms latency while keeping cost under $5 M/yr.

**Action – Design**  
I scoped the system into three layers: **Ingestion → Serving → Playback**.  

1. **Ingestion** – Use **Kinesis Data Streams** to capture track play events, then a Lambda pipeline writes metadata to **DynamoDB (partition key: user‑id)** and triggers an update in a **Redis‑Elasticache** cache for quick next‑track lookup.  
2. **Serving** – A fleet of EC2 Spot instances behind an Application Load Balancer runs the *Playback API* written in Go. The API queries Redis for pre‑computed recommendation graphs; if miss, it falls back to DynamoDB and updates the cache.  
3. **Playback** – Media files reside on **S3**, served via CloudFront with signed URLs that expire after 30 s.  

For scalability I used **Auto Scaling Groups** tuned by CloudWatch metrics (CPU > 70 % → +1 instance). Availability was ensured with multi‑AZ deployments and read replicas for DynamoDB.

**Result**  
After launch, latency dropped from 350 ms to **180 ms** (30 % improvement) and peak cost fell to **$4.2 M/yr**, beating the target by 16 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Built a system that delivers instant playback, directly improving user satisfaction.  
- **Ownership / Dive Deep** – I led all layers, from data pipelines to CDN configuration, and iterated on metrics until we hit SLAs.  

Bar‑raisers will note my end‑to‑end ownership, data‑driven trade‑offs (Spot vs On‑Demand), and the learning loop of tuning cache TTLs after observing cold‑start spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
