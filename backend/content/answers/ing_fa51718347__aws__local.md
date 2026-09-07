---
qid: ing_fa51718347__aws__local
question: 'Explain: Software Engineer, Agent - Financial Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 504
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:27-05:00'
sources: []
---

**Situation** – At my previous role I was tasked to build an *agent* that automatically reviews loan applications and flags potential fraud before approval. The business required 99.9 % accuracy and sub‑second response for a 10 k app/day workload.

**Task** – Deliver a fully automated ML pipeline that scales, stays compliant with PCI‑DSS, and is cost‑effective.

**Action**  
1. **Data ingestion & feature store** – Amazon Kinesis Data Streams streamed raw application data to an AWS Glue crawler; features were persisted in DynamoDB (partitioned by customer ID) for low‑latency lookup.  
2. **Model training** – SageMaker hosted a `GradientBoosting` model trained nightly on 1 M labeled records, with hyper‑parameter tuning via SageMaker Hyperband.  
3. **Inference** – Deployed the model as a SageMaker real‑time endpoint behind an Application Load Balancer, auto‑scaling to 2–10 instances based on CPU utilization.  
4. **Monitoring & rollback** – CloudWatch Alarms triggered Lambda to roll back to the previous stable model if AUC dropped below 0.97.  
5. **Cost control** – Spot Instances for training (≈ 70 % savings) and use of `ml.m5.large` for inference kept monthly spend <$12k.

**Result** – Accuracy rose from 92 % to 98.3 %, false‑positive rate dropped 40 %, and response time improved from 1.2 s to <300 ms, reducing manual review effort by 35 %. The solution handled peak loads of 30 k requests/day with 99.95 % availability.

**Leadership Principles** – *Customer Obsession* (meeting SLA), *Ownership* (full ML lifecycle), *Dive Deep* (metrics‑driven tuning).  

Bar‑raisers look for ownership, depth, quantified impact, and lessons learned—here I iterated on feature selection after a 5 % drop in precision, documented the change, and shared it with the team to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
