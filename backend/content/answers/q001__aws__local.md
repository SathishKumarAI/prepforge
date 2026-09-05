---
qid: q001__aws__local
question: What is the difference between Artificial Intelligence, Machine Learning,
  and Deep Learning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 489
total_tokens: 734
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer (Amazon‑style)**  

> **Situation / Task** – I was mentoring a junior data scientist who asked me to explain the hierarchy: AI → ML → DL.  
> **Action** – I used a concrete analogy: *AI* is the umbrella goal (“make machines act intelligently”), *ML* are the algorithms that learn patterns from data, and *DL* is a subset of ML that uses deep neural nets with many layers to discover high‑level abstractions automatically.  
> **Result** – She could now map each term to real use cases (AI: recommendation engines; ML: logistic regression for churn; DL: image classification in SageMaker). In our sprint, this clarity cut onboarding time by 30 % and we launched a pilot with an accuracy jump from 78 % to 92 %.  

**Technical / System Design** –  
- **Requirements:** Build a scalable inference pipeline that can serve both ML and DL models.  
- **Proposed Architecture:**  
  - *Data ingestion*: Kinesis Firehose → S3 (raw & processed).  
  - *Training*: SageMaker Studio for ML experiments; SageMaker Training Jobs with multi‑GPU instances for DL.  
  - *Model Registry*: SageMaker Model Registry to version models.  
  - *Inference*: Deploy via SageMaker Endpoint (real‑time) or Batch Transform for cost‑effective offline scoring.  
- **Scalability & Availability:** Auto‑scaling endpoints, Multi‑AZ deployment, and use of Elastic Inference for DL to reduce GPU usage.  
- **Cost Trade‑offs:** Use Spot Instances for training, reserve capacity for inference during peak hours; monitor with CloudWatch Alarms.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensuring the solution meets end‑user accuracy and latency needs.  
- **Ownership & Dive Deep** – Designing an end‑to‑end pipeline that I can troubleshoot from data ingestion to model deployment.  

**Bar‑raiser cues** – I show ownership by presenting a measurable KPI improvement, dive deep into architectural trade‑offs, and reflect on how earlier monolithic ML models failed to scale (learning: modular, cloud‑native services).
