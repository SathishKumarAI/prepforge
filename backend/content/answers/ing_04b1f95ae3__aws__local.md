---
qid: ing_04b1f95ae3__aws__local
question: 'Explain: Customer Engineering — Careers | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 574
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:32-05:00'
sources: []
---

**SITUATION / TASK**  
I was hired as a Senior ML Engineer on the *Customer Engineering – Careers* squad at Amazon, whose mandate is to build a recommendation engine that surfaces relevant career‑development resources (courses, certifications, internal mentorships) for millions of employees worldwide. The goal: increase employee engagement with learning content by 30 % while keeping inference latency under 100 ms.

**ACTION**  
1. **Requirements & Architecture** – I scoped the problem as a real‑time recommendation service.  
   *Data pipeline:* raw clickstream → S3 → Glue ETL → Redshift for feature store.  
   *Model training:* XGBoost on SageMaker, auto‑tuned with Hyperparameter Tuning jobs.  
   *Serving:* Deploy model to SageMaker Real‑Time Endpoint behind an Application Load Balancer (ALB) with Lambda@Edge caching for 99 % of requests in the US.  
   *Observability:* CloudWatch metrics + SageMaker Model Monitor for drift; automated retraining triggers every 48 h.

2. **Scalability & Cost** – Leveraged spot instances for training (70 % cost reduction) and opted for a multi‑region endpoint to keep latency <100 ms, achieving an overall spend of $12k/month versus the previous $18k baseline.

3. **Bias for Action / Invent & Simplify** – Instead of building a custom feature store, I adopted Amazon Personalize as a plug‑and‑play recommendation engine and later migrated back to SageMaker when we needed fine‑grained control over feature engineering.

4. **Result**  
   *Engagement:* 32 % lift in course enrollments within three months.  
   *Latency:* 92 ms average, 95th percentile <150 ms.  
   *Cost:* 33 % reduction compared to legacy system.

5. **Learning from Failure** – Early A/B tests showed cold‑start latency spikes due to model warm‑up. I introduced a pre‑warm Lambda that pinged the endpoint every 5 min, cutting warm‑start time by 80 %.

**LEADERSHIP PRINCIPLES**  
- *Customer Obsession* – Delivered a service that directly improved employee learning outcomes.  
- *Dive Deep* – Built end‑to‑end observability and iterated on latency bottlenecks until metrics met SLA.

**BAR‑RAISER NOTE**  
The interviewer will look for: clear ownership of the ML pipeline, depth in AWS service selection (Glue, Redshift, SageMaker, Personalize), quantified impact (32 % lift, 33 % cost savings), and evidence of learning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
