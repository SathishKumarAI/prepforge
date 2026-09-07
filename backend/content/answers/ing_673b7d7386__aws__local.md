---
qid: ing_673b7d7386__aws__local
question: 'Explain: Evaluation — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 466
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:15-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build an end‑to‑end pipeline that scores customer queries against a knowledge base using Haystack’s *Evaluation* framework. The goal was to reduce manual QA time by 70 % while keeping the F1 score above 0.88.

**Action**  
- **Ownership & Bias for Action:** I scoped the project, wrote a detailed spec, and set up a CI/CD pipeline in GitHub Actions that triggers on every PR.  
- **Dive Deep & Invent & Simplify:** I leveraged Haystack’s `Evaluator` class to run 5 k question‑answer pairs nightly against two models (DistilBERT + RoBERTa).  
- **AWS Services:**  
  - *Amazon SageMaker* hosts the inference endpoints, auto‑scaling from 2 to 12 instances based on queue depth.  
  - *Amazon S3* stores raw logs and evaluation results; *Athena* queries them for dashboards.  
  - *CloudWatch* aggregates metrics (latency, error rate) and triggers SNS alerts when F1 drops below 0.86.  
- **Scalability & Cost:** Using Spot instances reduced inference cost by 45 %. I set a maximum budget of $200/month; actual spend stayed at $180 after optimizations.

**Result**  
Within two weeks, manual QA hours dropped from 120 hrs/week to 36 hrs/week (70 % reduction). The average F1 score remained 0.89 across all models, and the pipeline now flags any model drift automatically. I documented lessons learned—particularly that a single‑point failure in SageMaker can halt evaluation—and added health checks to mitigate it.

**Bar‑raiser cues**  
- Demonstrated full ownership from spec to deployment.  
- Showed deep technical knowledge of Haystack’s evaluator and AWS scaling mechanics.  
- Quantified impact with real metrics (time saved, cost reduction).  
- Reflected on failure modes and implemented proactive safeguards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
