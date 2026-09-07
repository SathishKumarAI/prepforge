---
qid: ing_894c5377dd__aws__local
question: 'Explain: Positions — We are hiring interns!'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 400
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:36:20-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* Our data‑science team was lagging behind the quarterly demand for predictive churn models.  
*Task:* I pitched a new “ML Intern Program” to fill the gap and accelerate model delivery.  
*Action:*  
1. **Requirements** – Defined 4 core roles: Data Curator, Feature Engineer, Model Trainer, Deployment Ops. Each intern worked on end‑to‑end pipelines (S3 → Glue → SageMaker → Lambda).  
2. **Design** – Built a reusable Terraform stack with IAM policies, EC2 Spot fleets for training, and an automated CI/CD pipeline in CodePipeline that auto‑scales based on queue depth.  
3. **AWS Services** – S3 for raw data, Athena for quick ad‑hoc queries, SageMaker Pipelines for reproducible experiments, Step Functions to orchestrate multi‑step jobs, CloudWatch for cost & performance metrics.  
4. **Scalability/Availability** – Leveraged auto‑scaling groups and Spot Instances to keep training costs < $0.15/hr while maintaining 99.9% uptime during peak loads.  
5. **Cost** – Quarterly savings of $12k by shifting from on‑prem GPU clusters to Spot + SageMaker.  

*Result:* Within six months, the program produced 3 production‑ready churn models that reduced churn by 7%, a 15% lift over baseline. Interns earned 100% of their target metrics and were promoted to full‑time data scientists.  
*Bar‑raiser takeaway:* I owned the end‑to‑end solution, dove deep into cost/performance trade‑offs, quantified impact with real numbers, and turned a failure (initial under‑utilization) into a scalable framework that still runs today.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
