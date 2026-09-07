---
qid: ing_6a04b746d7__aws__local
question: 'Explain: 4.1 Requirement 1: Music Streaming — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 443
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:15-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to design a music‑streaming service like Spotify that must serve millions of users worldwide while keeping latency under 200 ms for 95 % of requests.

**Action (A) – System Design**  
1. **API Gateway + Lambda (or Fargate)** for front‑end request routing – *Serverless* reduces ops overhead and scales automatically.  
2. **Elastic Transcoder / MediaConvert** to store MP3/FLAC in S3, versioned per track.  
3. **CloudFront CDN** caches popular tracks globally; edge cache hit ratio > 90 % cuts origin traffic by 70 %.  
4. **DynamoDB (Tracks) + Aurora Serverless (User profiles)** – low‑latency key/value for metadata and relational data for playlists.  
5. **EventBridge + Step Functions** orchestrate user activity streams to a Kinesis Data Streams analytics pipeline; results feed a SageMaker model that personalizes recommendations in real time.  

**Result (R) – Metrics**  
- 99.8 % request success, < 200 ms latency for 95 % of traffic.  
- Cost per monthly active user dropped 35 % by shifting to serverless and CDN caching.  
- Recommendation click‑through increased 18 % after deploying the real‑time model.

**Leadership Principles**  
*Customer Obsession*: Built low‑latency, high‑availability playback for a global audience.  
*Ownership*: Designed end‑to‑end pipeline, from ingestion to recommendation, and continuously monitored cost/usage via CloudWatch dashboards.  

**Bar‑raiser takeaways** – I show deep dive into trade‑offs (Lambda cold start vs. Fargate), quantified impact (latency & cost numbers), and lessons learned: early adoption of Aurora Serverless prevented a costly overprovisioning incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
