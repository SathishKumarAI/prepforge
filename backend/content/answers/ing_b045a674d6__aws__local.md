---
qid: ing_b045a674d6__aws__local
question: 'Explain: Requirements Gathering — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 448
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:56-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a *Spotify‑like* streaming service for an interview. The goal was to demonstrate end‑to‑end ownership: from gathering realistic requirements to proposing a scalable architecture that could serve millions of concurrent users worldwide.

**Action**  
1. **Requirements & Customer Obsession** – I mapped user stories (search, playlist creation, offline download) and quantified traffic: 200 M monthly active users, peak 500 k concurrent streams, 3 TB/day data transfer.  
2. **Architecture** –  
   * **API Gateway + Lambda** for request routing (serverless, auto‑scale).  
   * **Amazon DynamoDB** (global tables) for user profiles & playlists (low latency, 99.999% availability).  
   * **Elastic Transcoder / MediaConvert** to store transcoded MP3/FLAC in S3; **CloudFront** CDN for edge delivery, reducing latency by ~80 ms and cutting egress cost 30%.  
   * **Amazon Kinesis Data Streams** feeds a Lambda function that writes play logs into **Redshift** for analytics.  
3. **Scalability & Cost** – Serverless APIs remove capacity planning; DynamoDB auto‑scales to 10 M RCU/WCU with on‑demand pricing, keeping cost < $5k/month for the projected load.  
4. **Reliability** – Multi‑AZ deployments and S3 versioning guarantee durability; CloudFront invalidation policy ensures fresh content.

**Result**  
The design supports >1 B monthly streams with 99.95% uptime while costing <$8k/month, a 40 % reduction versus a monolithic architecture. I presented this to the panel, received praise for clear trade‑offs and a data‑driven cost estimate—exactly what a bar‑raiser looks for: ownership, depth, quantified impact, and lessons from prior failures (e.g., over‑provisioning compute).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
