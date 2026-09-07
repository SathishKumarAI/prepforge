---
qid: ing_1da03b1b28__aws__local
question: 'Explain: Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 517
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:33:26-05:00'
sources: []
---

**Question:** *Explain: Serving Infrastructure*

**Situation / Task**  
When launching a generative‑AI product for 5 M daily active users, I was tasked with building the real‑time inference layer that could scale to 50k concurrent requests while keeping latency <150 ms and cost under $1.2 M/yr.

**Action (Design)**  
I chose **Amazon SageMaker Endpoint** + **AWS Lambda** for stateless routing, backed by an **Elastic Load Balancer (ALB)** fronting a fleet of **EC2 Spot Instances** with **Auto Scaling Groups** tuned to CPU/memory thresholds. For bursty traffic, I integrated **SQS** and **Step Functions** to buffer requests and retry on transient failures.  
- *Scalability:* Spot instances let us elastically add 200 vCPU nodes during peak hours, keeping response times <120 ms (95th percentile).  
- *Availability:* Multi‑AZ deployment with ALB health checks gives 99.99% uptime; we auto‑switch to on‑demand instances if spot capacity drops.  
- *Cost:* Spot pricing at $0.05/hr vs on‑demand $0.20/hr reduced inference spend by **68 %** (≈$350K/yr).  

**Result**  
We achieved 99.97 % SLA, served 3× the projected traffic with a 12 % margin of safety, and cut operating costs from $1.6 M to $0.9 M annually.

**Leadership Principles Anchored**  
- **Customer Obsession** – latency below user‑perceived threshold.  
- **Ownership** – end‑to‑end cost/availability trade‑offs, continuous monitoring with CloudWatch and automated alerts.  

**Bar‑raiser cues I hear**  
- Demonstrated *ownership* through proactive cost optimization.  
- *Dive deep* in explaining autoscaling metrics and failure handling.  
- Quantified impact (68 % cost savings, 99.97 % SLA).  
- Learned from a prior outage where we mis‑estimated spot capacity; now we implement real‑time capacity alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
