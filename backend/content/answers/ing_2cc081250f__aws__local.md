---
qid: ing_2cc081250f__aws__local
question: 'Explain: Technical screen — Get a Job at NVIDIA: Interview Process and
  Top Questions - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 470
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:07-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** While interviewing for an ML Ops role at NVIDIA, I was asked to explain how I’d design a scalable inference pipeline that could serve 10 M requests/day while keeping latency under 50 ms.

> **Task:** Build a production‑ready architecture on AWS that meets the performance and cost targets.

> **Action:**  
> • **Requirement Clarification** – identified key metrics (latency, throughput, cost per request) and constraints (GPU utilization > 70%, data residency).  
> • **Design** – used **Amazon SageMaker Endpoint** with a *Multi‑Model* deployment to host 12 distinct models on a single GPU fleet. Added an **Elastic Load Balancer** in front of the endpoint to auto‑scale based on CloudWatch metrics.  
> • **Services** – leveraged **AWS Lambda** for lightweight pre/post‑processing, **Amazon S3** for model storage, and **AWS Step Functions** for orchestrating complex inference workflows. Employed **Amazon CloudFront** edge caching to reduce round‑trip latency for global users.  
> • **Scalability & Availability** – configured SageMaker in a *Multi-AZ* deployment with an automatic failover to a standby endpoint; used **Auto Scaling** policies tied to CPU/GPU utilization.  
> • **Cost Trade‑off** – compared On‑Demand vs Spot GPU instances, opting for Spot + Savings Plans to cut infrastructure cost by 35 % while maintaining SLA.

> **Result:** The prototype handled 12 M requests/day with an average latency of 42 ms and achieved a 30 % reduction in inference cost versus the baseline. I presented this at the technical interview, demonstrating deep ownership, data‑driven impact, and a clear learning loop—adjusting model batch sizes after live A/B tests to further improve GPU utilization.

> **Bar‑raiser takeaways:** Ownership (took end‑to‑end responsibility), Dive Deep (analyzed CloudWatch metrics & cost models), Quantified Impact (latency & cost savings), and Learning from failure (iterated on batch sizing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
