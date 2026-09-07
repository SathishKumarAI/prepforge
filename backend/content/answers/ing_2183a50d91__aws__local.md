---
qid: ing_2183a50d91__aws__local
question: 'Explain: The Unit Economics of AI — Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 458
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:07-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team at a fintech startup to launch an on‑prem AI fraud detector that was $3 M/yr too expensive. My goal: reduce the unit economics of model training and inference by 35% while keeping latency <30 ms.

**Action (Dive Deep + Ownership)**  
1. **Cost audit:** instrumented SageMaker, EC2, EBS, and Lambda with CloudWatch metrics; discovered 60 % idle GPU time on Spot instances.  
2. **Architecture shift:** moved training to SageMaker Pipelines on spot‑based **ml.m5.4xlarge** GPUs, added a **model registry** for version control, and deployed inference via **EKS + Fargate** to auto‑scale per request.  
3. **Data strategy:** consolidated raw logs in S3 Glacier Deep Archive (cost $0.004/GB‑month) and used Athena queries for feature extraction, cutting storage from $12 k to $2 k/month.  
4. **Automation:** built Terraform modules for immutable infra; added CI/CD with CodePipeline that triggers cost‑budget alerts.

**Result (Deliver Results)**  
- Unit economics dropped from $1.20 per inference to $0.78 – a 35% reduction.  
- Monthly spend fell from $45 k to $30 k, freeing $150 k for product R&D.  
- Latency remained <28 ms; uptime 99.97%.  

**Bar‑raiser note**: I demonstrated ownership by taking end‑to‑end responsibility, dove deep into every cost line item, quantified impact with clear metrics, and iterated after a failed spot‑instance trial—learning that checkpointing + retry logic is essential for reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
