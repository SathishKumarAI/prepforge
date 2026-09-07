---
qid: ing_c3446062da__aws__local
question: 'Q: How do you justify the cost of an AI system to a CFO?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 364
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:27-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Customer Obsession & Deliver Results** – I frame the ROI in terms of *customer‑centric value* and *operational savings*.  

**S**: At a mid‑size retailer, we proposed an AI recommendation engine to replace manual merchandising.  
**T**: The CFO questioned the $1.2 M upfront cost for data pipelines, model training, and inference infrastructure.  
**A**: I built a proof‑of‑concept on **Amazon SageMaker** (auto‑ML + custom containers), orchestrated with **AWS Step Functions**, and deployed inference via **API Gateway + Lambda** behind an **Elastic Load Balancer** to guarantee 99.9 % availability. Cost controls came from **Spot Instances** for training, **S3 Intelligent Tiering** for data storage, and **Reserved Instances** for long‑term compute.  
**R**: Within six months, the recommendation engine lifted conversion rates by **12 %**, translating to an incremental $4.8 M in annual revenue. Operational labor fell 30 %, saving $900K annually. The total cost of ownership over three years was < $1 M, yielding a payback period of **< 9 months**—a clear upside for the CFO.

**Bar‑raiser cues**: I demonstrated *ownership* by owning the entire cost–benefit model, *dive deep* into AWS pricing and scaling trade‑offs, quantified impact with real revenue numbers, and shared lessons from a failed pilot (over‑estimating compute capacity) that led to tighter sizing rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
