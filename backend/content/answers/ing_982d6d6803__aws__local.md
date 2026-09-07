---
qid: ing_982d6d6803__aws__local
question: 'Explain: It''s like, oh, let''s add another 10 — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 525
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:44-05:00'
sources: []
---

**Situation**  
When I joined the Video Platform team at a mid‑size streaming startup, we were hitting a 95 % peak‑hour request latency of 650 ms on our on‑prem CDN while serving 4 M concurrent viewers in Seattle during a live conference. The engineering lead asked: *“What if we add another 10 nodes? Will that solve the problem?”*

**Task**  
I needed to evaluate whether simply scaling out was the right solution, quantify its impact, and propose an AWS‑native architecture that could handle the same load with higher availability and lower cost.

**Action**  
1. **Dive Deep into Metrics** – Collected CloudWatch traces (request latency, CPU, I/O) and identified a *CPU bottleneck* on 70 % of nodes during peak.  
2. **Design** – Built an autoscaling Video‑Transcode service using **Amazon Elastic Transcoder** + **AWS Lambda** for job orchestration, backed by **Amazon S3** (object storage) and **CloudFront** (global CDN).  
   * Added **Amazon RDS Aurora Serverless** for metadata to eliminate a single point of failure.  
3. **Cost & Scalability Analysis** – Simulated 10× node addition vs. the new design:  
   * 10 nodes → $12k/month, 650 ms latency, 1.2% error rate.  
   * New AWS stack → $6k/month, <200 ms peak latency, 0.02% error rate, auto‑scales to 50× traffic with no manual intervention.  

**Result**  
The migration cut peak‑hour latency from **650 ms to 180 ms**, reduced operational cost by **47 %**, and increased concurrent viewership capacity from 4 M to 25 M without a single outage during the next Seattle conference.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering smoother viewing for millions of users.  
- **Ownership & Dive Deep** – Taking full responsibility, dissecting metrics, and designing an end‑to‑end solution that outperforms naive scaling.  

Bar‑raisers listen for clear ownership, depth in analysis, data‑driven impact, and the ability to learn from a “what if” question by turning it into a scalable, cost‑effective AWS architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
