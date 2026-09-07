---
qid: ing_4763b40888__aws__local
question: 'Explain: Summary — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 432
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:13-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to redesign the recommendation engine for our e‑commerce platform. The existing model was scaling vertically on a single GPU server; it hit 95 % CPU utilisation at peak traffic and had a 2 s latency SLA, yet we were losing 0.4 % of sales during flash‑sale events.

**Action**  
*Customer Obsession & Ownership* – I mapped the customer journey to understand the latency pain points.  
*Dive Deep* – I profiled the inference pipeline: data ingestion (S3), preprocessing (Glue), model serving (SageMaker Endpoint).  
I proposed a **horizontal‑scale architecture** using **Amazon SageMaker Multi‑Model Endpoints** behind an **Application Load Balancer** and auto‑scaling groups. For batch jobs, I moved to **AWS Batch** on Spot Instances, coupled with **ECS Fargate** for stateless micro‑services.  
We added **DynamoDB** for real‑time feature store caching (99.999 % availability) and leveraged **CloudWatch Alarms** for dynamic scaling thresholds.

**Result**  
- Latency dropped from 2 s to <400 ms (average).  
- Throughput increased by 3×, supporting a 150 % traffic surge during the holiday sale without SLA violations.  
- Cost fell 28 % due to spot‑instance utilisation and elimination of idle GPU hours.  

**Bar‑raiser Takeaway**  
I demonstrated *ownership* by driving end‑to‑end change, *depth* with profiling & trade‑off analysis (e.g., multi‑model vs single‑model endpoints), quantified impact (latency & cost metrics), and learned from the initial vertical‑scale failure to pivot to a horizontally resilient solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
