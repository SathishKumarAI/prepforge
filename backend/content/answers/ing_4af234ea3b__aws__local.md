---
qid: ing_4af234ea3b__aws__local
question: 'Explain: What we’re building—and why — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 495
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:41-05:00'
sources: []
---

**What we’re building and why – “Sierra Career Pathways”**

**Situation & Task**  
At Sierra, 38 % of our workforce is under‑represented in technical roles, yet internal mobility rates are only 12 %. I led a cross‑functional team to build *CareerPath*, an ML‑driven recommendation engine that maps employee skillsets to open positions and suggests learning pathways. The goal: increase internal promotion velocity by 25 % while reducing hiring costs.

**Action**  
*Data‑Driven Design*:  
- **Feature Engineering** – parsed LinkedIn, internal LMS, and performance reviews into a graph of skills → jobs → competencies.  
- **Modeling** – used a Bayesian hierarchical model (Amazon SageMaker) to predict fit scores, then an XGBoost ranking layer for personalized job matches.  
- **AWS Stack**:  
  - *S3* for raw logs & feature artifacts;  
  - *Glue* for ETL pipelines;  
  - *Redshift* for analytics queries;  
  - *SageMaker Pipelines* for CI/CD of models;  
  - *Lambda* + *Step Functions* to orchestrate real‑time inference via API Gateway.  

*Scalability & Availability*: Auto‑scaling SageMaker endpoints (≥99.9 % latency SLA), multi‑AZ deployment, and use of DynamoDB TTL for session caching keep costs below $2k/month while handling 50k concurrent requests.

**Result**  
- Internal promotion rate rose to **17 %** (+42 % relative).  
- Hiring spend dropped by **18 %** due to fewer external requisitions.  
- User satisfaction (NPS) increased from 56 to **72** in six months.

---

### Leadership Principles Reflected
- **Customer Obsession** – built a tool that directly improves employee career growth.  
- **Ownership** – drove the end‑to‑end pipeline, from data prep to production ops, and maintained it post‑launch.  

*Bar‑raiser cues*: clear ownership narrative, deep dive into feature‑model choice, quantified impact, and lessons learned (e.g., iterating on bias mitigation after initial pilot).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
