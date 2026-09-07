---
qid: ing_c1cf774317__aws__local
question: 'Explain: on a weekly or bi-weekly basis and — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 513
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:22-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with deploying a **real‑time recommendation engine** for a streaming platform that had just moved to microservices on AWS. The system needed to ingest user interactions, update models, and serve predictions with < 100 ms latency while handling 5 M requests/day.

**Task**  
I led the design of a **bi‑weekly “Chaos Mastery” sprint**: every two weeks we would inject failures (network partitions, EC2 hibernations, S3 read errors) into the pipeline to validate resilience and discover hidden bottlenecks. Simultaneously I had to orchestrate an end‑to‑end ML workflow that could retrain models on fresh data without downtime.

**Action**  
- Built a **serverless stack**: *EventBridge* triggers a *Step Functions* state machine → *SageMaker Processing* → updated model stored in *ECR*.  
- Deployed the inference service on *Amazon ECS Fargate* behind an *Application Load Balancer*, with auto‑scaling based on CPU/latency metrics.  
- Implemented **Chaos Monkey for AWS** (open‑source) to randomize instance termination and S3 read latency; logged outcomes in *CloudWatch Logs* and visualized via *Grafana*.  
- Created a **“Model Drift” alert** using *Amazon Lookout for Metrics*, automatically re‑triggering retraining when drift > 0.15.

**Result**  
After 8 weeks of bi‑weekly chaos runs, we reduced unplanned outage time by **87%** and increased prediction latency compliance from 92% to 99%. The retraining pipeline cut model refresh cycles from 24h to 6h, boosting recommendation relevance (CTR up 12%).

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivering reliable recommendations directly improves user experience.  
- **Ownership / Dive Deep** – I owned the entire ML lifecycle and dived deep into failure scenarios to surface hidden risks.

### Bar‑Raiser Signals  
- Quantified impact (latency, availability, CTR).  
- Demonstrated ownership by building a full CI/CD/Chaos testing pipeline.  
- Showed depth with architecture choices (serverless, Step Functions, SageMaker) and trade‑offs (cost vs. resilience).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
