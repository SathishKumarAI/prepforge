---
qid: ing_0e66700d84__aws__local
question: 'Explain: Tasks and Responbilities — Implementation Timeline | EU Artificial
  Intelligence Act'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 489
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:19-05:00'
sources: []
---

**S**ituation  
When I joined the EU AI compliance team at a fintech startup, we had to align our ML pipeline with the new EU Artificial Intelligence Act (AI‑Act) before the June 2024 deadline.

**T**ask  
I was responsible for mapping every model lifecycle stage—data ingestion, training, validation, deployment—to the act’s “high‑risk” and “low‑risk” categories, documenting risk mitigations, and building an automated compliance dashboard.

**A**ction  
1. **Risk Matrix & Roadmap (Week 1–2)** – Created a matrix in Confluence tying each model to the AI‑Act’s requirements; prioritized models by impact score.  
2. **Automated Metadata Capture (Week 3–4)** – Deployed SageMaker Pipelines with Step Functions, adding custom Lambda steps that push metadata (dataset version, hyperparams, bias metrics) into DynamoDB.  
3. **Audit Trail & Reporting (Month 1–2)** – Built an Athena‑based query layer over S3 logs; scheduled daily CloudWatch dashboards showing “compliance score” and drift alerts.  
4. **Stakeholder Review & Sign‑off (Month 2)** – Presented the dashboard to legal, product, and CISO; achieved 100 % sign‑off before the July cut‑over.

**R**esult  
- Reduced manual compliance effort by **70 %**, cutting review time from 3 days to 5 hours.  
- Cut model drift incidents in half (from 4/month to 2/month) through real‑time monitoring.  
- Delivered the compliant pipeline on schedule, avoiding a €200K fine.

**Leadership Principles Highlighted**  
- **Ownership** – Took end‑to‑end responsibility for compliance.  
- **Dive Deep** – Built data pipelines that surfaced hidden bias and drift metrics.  

**Bar‑raiser Takeaway**  
They’ll expect you to own the problem, quantify impact, and show how your solution scales cost‑effectively while learning from any missteps (e.g., initial over‑engineering of audit logs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
