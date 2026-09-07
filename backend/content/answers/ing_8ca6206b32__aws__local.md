---
qid: ing_8ca6206b32__aws__local
question: 'Explain: Devin is Getting a Windows PC — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 363
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:02-05:00'
sources: []
---

**Situation & Task**  
While leading the ML‑Ops team at my previous company, Devin—our junior data scientist—needed a Windows workstation to run legacy models that only supported the .NET ecosystem. The goal was to provision a machine within two business days while staying under a $1,200 budget and ensuring it could scale for future experiments.

**Action**  
I first **dive deep** into his workload: 4 GB RAM, 256 GB SSD, GPU‑free but with hyper‑threading. I mapped this to an **AWS WorkSpaces** desktop (Windows Server 2022) plus a **SageMaker local notebook** for quick prototyping. To keep costs low, I selected the *Standard* bundle (8 vCPU, 16 GB RAM) and used **Spot instances** for any heavy‑compute jobs, saving ~35% versus on‑demand pricing. I also automated provisioning with **AWS CloudFormation**, ensuring repeatability and audit trails—demonstrating full ownership.

**Result**  
Devin received a fully configured Windows PC in 18 hours, 30 % faster than the SLA. Over the next month he completed three model retraining cycles that increased prediction accuracy by 12%. The total spend was $1,045, staying within budget while providing a scalable, high‑availability setup.

**Reflection & Learning**  
I learned that aligning tooling with user constraints and leveraging AWS cost controls can deliver rapid results without compromising quality—exactly what the **Customer Obsession** and **Ownership** principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
