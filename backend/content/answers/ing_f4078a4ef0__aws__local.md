---
qid: ing_f4078a4ef0__aws__local
question: What is Reliability? — Reliability | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 360
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:28:03-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role as a ML platform engineer at XYZ Corp, I led the migration of our recommendation engine from on‑prem GPUs to an AWS‑based inference service.  
- **Situation:** The existing system had a 0.92 % outage rate during peak traffic, causing revenue loss (~$1.2M/month).  
- **Task:** Build a highly reliable inference layer that meets SLAs (99.9 % uptime) while keeping costs under budget.  
- **Action:** I designed a *multi‑region* architecture using Amazon SageMaker Endpoint with *Multi‑Model Endpoints*, coupled with an Auto Scaling group behind an Application Load Balancer (ALB). I added CloudWatch metrics, X-Ray tracing, and automated recovery via Lambda that spins up new endpoints if latency > 200 ms.  
- **Result:** Uptime improved to 99.999 % in the first quarter; mean time to recover dropped from 45 min to <5 min. Cost savings of 18 % were achieved by leveraging spot instances for batch inference and using SageMaker’s managed scaling.  

**Leadership Principles highlighted:**  
- **Ownership & Deliver Results** – I took full responsibility for the migration, set measurable targets, and exceeded them.  
- **Dive Deep** – I profiled latency hotspots, examined CloudWatch logs, and iterated on architecture until thresholds were met.  

*Bar‑raiser cue:* Look for clear ownership, data‑driven impact, and evidence of learning from a prior failure (the high outage rate).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
