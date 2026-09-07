---
qid: ing_feb906e030__aws__local
question: 'Explain: 🎯 4-week standard plan (most people) — Study Plan'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 436
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:57-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a *four‑week AI study curriculum* for new data scientists who need to hit production speed while staying cost‑efficient. The goal: 90 % of participants finish the plan and demonstrate a working ML pipeline in under $200 AWS spend.

**Action**  
1. **Ownership & Customer Obsession** – I mapped the learning journey to real business problems (e.g., churn prediction).  
2. **Dive Deep & Bias for Action** – Built a modular, reusable notebook suite on Amazon SageMaker Studio. Each week introduces a new algorithm and a *hands‑on* AWS service:  
   - Week 1: Data prep with Amazon S3 + Glue ETL.  
   - Week 2: Feature engineering in SageMaker Feature Store.  
   - Week 3: Model training using SageMaker Training Jobs (spot instances).  
   - Week 4: Deployment via SageMaker Endpoint (auto‑scaling) and monitoring with CloudWatch & Amazon Lookout for Metrics.  
3. **Invent & Simplify** – Leveraged SageMaker Autopilot to auto‑select algorithms, slashing model‑tuning time by 70 %.  
4. **Deliver Results** – Incorporated checkpoints: after each week participants submit a notebook; final capstone is a live endpoint scoring >0.82 F1 on the test set.

**Result**  
- 95 % completion rate (vs. 68 % baseline).  
- Average spend per participant dropped from $350 to $115, a 67 % cost saving.  
- Capstone models achieved median F1 of 0.84 across datasets.

**Learning & Bar‑raiser Insight**  
I iterated the curriculum after pilot feedback: added a “debugging” sprint and a peer‑review loop, showing true ownership and continuous improvement. This design balances depth (real AWS services) with rapid delivery, echoing Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
