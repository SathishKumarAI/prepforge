---
qid: ing_d9397eb69b__aws__local
question: 'Explain: 401k — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 432
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:09-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a *401(k) recommendation engine* for an internal HR platform (Glean). The goal was to deliver personalized investment plans that maximized employee retirement savings while staying compliant with IRS rules.

**Action**  
- **Ownership & Bias for Action** – I scoped the problem, gathered requirements from finance and legal, then built a prototype in just two sprints.  
- **Dive Deep** – I parsed 50 TB of historical contribution data, identified key features (age, salary, risk tolerance), and performed feature importance analysis with SHAP values.  
- **Technical Design** –  
  - *Data Lake*: S3 + Glue for ETL, cataloged in Athena.  
  - *Modeling*: SageMaker training jobs using XGBoost; hyper‑parameter tuning via Bayesian optimization.  
  - *Inference*: Deploy as a Lambda‑backed API behind Application Load Balancer, autoscaling on request volume.  
  - *Compliance*: Use AWS Config rules and KMS‑encrypted data to satisfy audit requirements.  
- **Scalability & Cost** – The model scales linearly with user count; each inference <5 ms. Estimated $0.15/month per employee for Lambda invocations, vs $2.50/month if we used a dedicated EC2 instance.

**Result**  
- 92 % accuracy in predicting optimal asset allocation versus the baseline rule‑based system.  
- Employees’ projected retirement savings increased by **18 %** over a one‑year horizon (measured via simulation).  
- Reduced compliance audit time from 3 days to <4 hours.  

**Learning & Bar‑raiser Insight**  
I iterated on feedback, adding an explainability layer that allowed advisors to view model reasoning—an essential feature for trust and regulatory review. This demonstrates *Customer Obsession* (empowering employees) and *Ownership* (end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
