---
qid: ing_3b23ae56a9__aws__local
question: 'Explain: Job’s Not Finished — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 455
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:02-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: I was leading a data‑science team at a fintech startup that built credit‑risk models for micro‑loans. The CEO asked us to “get the model out fast” because competitors were launching new products.

*Task*: Deliver a production‑ready, explainable ML pipeline within two weeks while ensuring compliance and scalability.

*Action*:  
1. **Define requirements** – Gathered legal, product, and ops constraints; mapped them into an architecture diagram (S3 for raw data, Glue for ETL, SageMaker training, Lambda for inference).  
2. **Prototype quickly** – Built a lightweight notebook pipeline in 48 hrs, then refactored it into a reproducible SageMaker Studio project.  
3. **Automate & monitor** – Used CloudWatch metrics + Step Functions to orchestrate retraining every month; set up SNS alerts for drift.  
4. **Cross‑functional ownership** – Hired a DevOps engineer mid‑project, trained the team on IaC (CloudFormation), and documented everything in Confluence.

*Result*: The model went live 12 days ahead of schedule, reduced loan approval time by **35%**, and cut infra costs by **20%** compared to our legacy batch system. Post‑launch, we observed a 15 % lower default rate over the next quarter—directly attributable to the new pipeline.

**What the bar‑raiser looks for**

- *Ownership*: I owned every layer from data ingestion to monitoring, and delegated responsibly.  
- *Dive Deep*: Quantified latency, cost per inference, and drift thresholds; iterated on those metrics.  
- *Quantified Impact*: Delivered measurable business KPIs (approval time, default rate).  
- *Learning from Failure*: After an initial spike in prediction errors due to a mislabeled feature, I instituted a nightly validation step—now our error rate is <0.1%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
