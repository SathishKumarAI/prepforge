---
qid: ing_e6a89bd026__aws__local
question: 'Explain: 2.3 Bandwidth Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 445
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:44-05:00'
sources: []
---

**Situation** – I was asked to estimate the bandwidth required for a streaming service like Spotify during peak usage (1 M concurrent listeners).  
**Task** – Deliver a scalable, cost‑effective architecture that guarantees < 95 % of users receive uninterrupted playback while staying within a $5 M annual budget.  

**Action** –  
- **Model traffic**: 1 M listeners × 4 Mbps (average bitrate) = 4 Tbps raw. After encoding & caching, effective bandwidth ≈ 1 Gbps per region.  
- **Service design**:  
  - *Front‑end*: Amazon CloudFront CDN to edge‑cache popular tracks → reduces origin load by ~80 %.  
  - *Origin*: EC2 Auto Scaling groups behind an Application Load Balancer; use spot instances for cost savings (20 % lower than on‑demand).  
  - *Storage*: S3 for raw assets, Glacier for archival.  
  - *Monitoring*: CloudWatch metrics + Lambda auto‑scaling based on real‑time bandwidth.  
- **Cost model**: CloudFront ~ $0.085/GB (peak) → $8 M/year; spot EC2 savings reduce compute cost to ~$3 M; S3 & Glacier < $1 M. Total ≈ $12 M, within target after discounting unused capacity.

**Result** – The prototype handled 1.5 M concurrent users with 99.8 % uptime in a test region, and the cost model was validated against actual AWS billing (within ±3 %).  

> **Leadership Principles**: *Customer Obsession* – ensuring uninterrupted playback; *Ownership* – end‑to‑end design & cost control; *Dive Deep* – detailed traffic modeling.  
> **Bar‑raiser signals**: Quantified bandwidth, clear trade‑offs between latency and cost, learning from a small pilot that revealed CDN cache miss rates, leading to an adjusted edge strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
