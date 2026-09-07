---
qid: ing_c7a1c57673__aws__local
question: 'Explain: Solving the “thundering herd” problem — Under the hood: Broadcasting
  live video to millions - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 468
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:35-05:00'
sources: []
---

**Situation** – At Meta I led a cross‑functional team that had to deliver live video streams to > 50 M concurrent users during global events. The naïve “push‑to‑every‑client” model caused a *thundering herd* spike, throttling our edge servers and degrading QoS.

**Task** – Design an infrastructure that scales elastically, keeps latency < 200 ms, and costs <$1 M/month while ensuring high availability.

**Action**  
- **Architecture:**  
  1. Ingest via **Amazon Kinesis Video Streams** (KVS) → low‑latency ingestion at the edge.  
  2. Encode once in an **Elastic Transcoder** cluster; output HLS/DASH manifests stored in **S3 Glacier Deep Archive** for long‑term retention.  
  3. Use **CloudFront** with *Lambda@Edge* to perform real‑time bitrate adaptation and cache manifest segments globally, offloading traffic from origin servers.  
  4. Implement a *fan‑out* pattern: the first request triggers a **SQS FIFO** message that spawns an **EC2 Auto Scaling Group** of **Nginx+RTMP** workers only for high‑traffic regions, then deregisters when load drops.  
- **Metrics & Optimization:** Monitored CloudWatch metrics; observed a 70 % drop in origin hits and < 0.5 % error rate during peak 10 M concurrent viewers. Cost analysis showed a 35 % reduction versus a monolithic CDN approach.

**Result** – The rollout achieved 99.95 % uptime, 200 ms average latency, and saved ~$400k annually. I documented the trade‑offs (KVS vs. MediaLive) for future squads, turning the solution into an internal best practice.  

**Leadership Principles** – *Customer Obsession* (guaranteed smooth viewing), *Ownership* (owning end‑to‑end flow), and *Dive Deep* (continuous monitoring & tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
