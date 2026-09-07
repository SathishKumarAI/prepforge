---
qid: ing_4faa064b9b__aws__local
question: 'Explain: 6.1 AI-Powered Smart Matching & Discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 409
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:08-05:00'
sources: []
---

**Situation / Task**  
I led the launch of an AI‑powered “Smart Match & Discovery” engine for a B2B marketplace that connects suppliers with buyers. The goal was to increase transaction volume by 30 % and reduce search friction.

**Action**  
- **Ownership & Bias for Action:** I scoped the project, built a cross‑functional squad (data science, devops, product), and set a 6‑month roadmap.  
- **Dive Deep & Invent & Simplify:** We designed a two‑stage pipeline:  
  1. **Feature extraction** – Amazon SageMaker Ground Truth + Glue to ingest structured catalog data and unstructured PDFs; features stored in DynamoDB for low‑latency lookups.  
  2. **Matching model** – A multi‑label XGBoost model served via SageMaker Hosting, exposing a REST endpoint behind an Application Load Balancer.  
- **Scalability & Availability:** Auto‑scaling groups on EC2 Spot instances keep costs < $0.05 per inference; we used Route 53 latency routing for global users.  
- **Cost Control:** Leveraged S3 lifecycle policies and reserved instance pricing, achieving a 25 % cost saving over the prior rule‑based system.

**Result**  
Within three months post‑deployment:  
- Transaction volume rose from 12k to 16.5k / month (+38 %).  
- Search time dropped from 8.2 s to 1.9 s (75 % reduction).  
- Customer satisfaction scores improved from 3.7 to 4.6/5.  

**Learning** – The first model over‑fit on niche categories; we instituted a continuous monitoring dashboard that triggered retraining every 30 days, preventing drift and maintaining relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
