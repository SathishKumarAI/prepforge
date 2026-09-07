---
qid: ing_4e290d4ce4__aws__local
question: 'Explain: Introducing Auto-Triage — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 445
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:04-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a product that handled ~1 M customer support tickets per day. The engineering team was stuck in “triage‑first” mode: every ticket required manual routing to the right tier of agents, causing 30 % SLA drift and $12k/month wasted on over‑staffing. I owned the vision to build an **Auto‑Triage** system that would automatically classify and route tickets using machine learning.

**Action – Technical Design**  
1. **Data pipeline**: Ingest raw ticket logs into **Amazon S3** → trigger **AWS Glue** jobs for feature extraction (TF‑IDF, sentiment scores).  
2. **Model training**: Use **SageMaker** with a multi‑label transformer (BERT) fine‑tuned on 200k labeled tickets; deploy as a SageMaker endpoint.  
3. **Real‑time inference**: Route new tickets through an **API Gateway + Lambda** that calls the SageMaker endpoint, then publish results to an **Amazon SNS topic** for downstream routing services.  
4. **Feedback loop**: Store predictions and agent outcomes in **DynamoDB**, feed back into a nightly retraining job (Glue → SageMaker).  

**Result**  
- Reduced manual triage time by **84 %**, cutting SLA drift from 30 % to <5 %.  
- Cut over‑staffing costs by $18k/month.  
- System handled >2 M tickets/day with 99.9 % availability, keeping latency under 200 ms per request.

**Learning & Ownership**  
I iterated on the model after a misclassification spike: performed root‑cause analysis (feature drift), added domain‑specific embeddings, and re‑trained—demonstrating *Dive Deep* and *Bias for Action*. The success reinforced my belief in owning end‑to‑end customer experience, aligning with Amazon’s **Customer Obsession** and **Ownership** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
