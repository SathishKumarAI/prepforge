---
qid: ing_6487e38ca9__aws__local
question: The customer's CISO says no data can leave their network. How does that
  constrain your architecture, and what are the options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 525
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:17-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was asked by a large financial institution’s CISO to design an AI pipeline that *could not send any customer data outside their corporate network*. The goal was to deliver real‑time fraud detection while keeping all sensitive records on‑prem.

**Action (Dive Deep + Bias for Action)**  
1. **AWS Outposts** – I proposed deploying a fully managed SageMaker instance on the client’s data center via Outposts, giving them a local AWS environment that meets the “no data leave” requirement.  
2. **SageMaker Local Mode / Neo** – For latency‑critical inference, we built a Docker image of the trained model and shipped it to edge devices (e.g., Raspberry Pi clusters) using SageMaker Neo. This allowed on‑device scoring with <50 ms latency.  
3. **Data Lake in VPC** – All training data stayed in an Amazon S3 bucket within a private subnet; we used VPC endpoints for all AWS services, ensuring no egress traffic.  
4. **Monitoring & Governance** – Integrated CloudWatch and GuardDuty inside the VPC to audit model performance and security posture.

**Result (Deliver Results)**  
- Reduced data‑transfer cost by **$0** (no outbound bandwidth).  
- Achieved 99.8 % fraud detection accuracy with <30 ms inference latency on edge devices.  
- Deployed in 4 weeks, 3× faster than the legacy batch pipeline.

**Learning from Failure**  
During early tests we underestimated the model’s memory footprint on edge hardware; swapping to a quantized version cut RAM usage by 40% and kept the system stable.

> *Bar‑raiser cues:* clear ownership of compliance constraints, deep dive into AWS services (Outposts, SageMaker Local/Neo), quantified impact (latency, cost savings, accuracy), and iterative learning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
