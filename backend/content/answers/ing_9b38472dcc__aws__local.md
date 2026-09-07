---
qid: ing_9b38472dcc__aws__local
question: 'Explain: The 8-step answer framework — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 440
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:11-05:00'
sources: []
---

**Situation / Task**  
I was tasked to launch a recommendation engine for an e‑commerce marketplace that could scale to 10 M daily active users while keeping latency < 200 ms.  

**Action – 8‑step AI System Design**  
1. **Define the Problem & Success Metrics** – Increase click‑through rate (CTR) by 15% and AUC > .82.  
2. **Data Inventory & Governance** – Pull user interaction logs from S3, enforce GDPR via Lake Formation tags.  
3. **Feature Engineering Pipeline** – Use Glue to clean, Athena for ad‑hoc joins; store engineered features in DynamoDB (low‑latency).  
4. **Model Selection & Training** – Train a LightGBM model on SageMaker; evaluate with cross‑validation.  
5. **Bias / Fairness Audit** – Run bias metrics in SageMaker Clarify; adjust weights to reduce disparate impact by 30%.  
6. **Serving Architecture** – Deploy as a SageMaker Endpoint behind an ALB; cache predictions in ElastiCache Redis (latency < 50 ms).  
7. **Monitoring & Feedback Loop** – CloudWatch metrics + Evidently for drift detection; retrain every 12 h automatically.  
8. **Cost & Scalability Review** – Spot instances + auto‑scaling → $0.08/req, projected savings of 25% vs on‑prem.

**Result**  
Post‑launch CTR rose to 18%, AUC hit .86; latency stayed <150 ms for 99.5 % requests. Monthly cost dropped from \$120k to \$90k.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Directly measured impact on user engagement.  
- **Ownership & Dive Deep** – I drove the full pipeline, audited bias, and iterated on metrics until goals were exceeded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
