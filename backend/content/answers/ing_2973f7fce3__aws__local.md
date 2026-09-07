---
qid: ing_2973f7fce3__aws__local
question: 'Explain: Source(s) and further reading — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 407
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:27-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** Our ML inference service was hitting a *service‑level objective* of 99.9 % uptime while serving 10 M requests/day.  
> **Task:** Redesign the pipeline to be truly high‑availability across AZs without blowing costs.  
> **Action:** I architected a dual‑region, multi‑AZ deployment using **Amazon SageMaker Endpoint** with *Multi‑Model* endpoints and **AWS Global Accelerator** for low‑latency routing.  
> - **S3 + CloudFront** cached the training artifacts; **EFS** stored model weights so all replicas stay in sync.  
> - I added a **Route 53 health check** that triggers a Lambda rollback if an AZ’s endpoint shows >5 % error rate, ensuring *instant fail‑over*.  
> - Leveraged **AWS Auto Scaling** on the underlying EC2 instances to handle traffic spikes (up to 30×) while keeping spend ≤ $120/day.  
> **Result:** Uptime rose from 99.3 % to 99.97 %, latency dropped 40 ms, and cost‑per‑request fell 15 %. The team adopted this pattern for all downstream inference workloads.  

**Sources & Further Reading**

1. *AWS Well‑Architected Framework – Reliability Pillar* (https://aws.amazon.com/architecture/well-architected/)  
2. *SageMaker Multi‑Model Endpoint Design Docs* (https://docs.aws.amazon.com/sagemaker/latest/dg/multi-model-endpoints.html)  
3. *Global Accelerator FAQs & Pricing* (https://aws.amazon.com/global-accelerator/faqs/)  

**Leadership Principles Highlighted:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
