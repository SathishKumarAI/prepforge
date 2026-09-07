---
qid: ing_84adf9bc00__aws__local
question: 'Explain: That''s exactly the situation that Spelly''s in'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 386
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:10-05:00'
sources: []
---

**Situation / Task**  
I was hired by a startup, *Spelly*, to solve their typo‑detection problem for an internal messaging app that handled 120 M messages/day. The existing rule‑based engine missed 37 % of errors and generated a backlog of 12 k manual reviews per week.

**Action**  
1. **Ownership & Bias for Action** – I built a lightweight, end‑to‑end ML pipeline in one sprint.  
2. **Dive Deep** – Collected 5 M labeled samples (≈80 % typo, 20 % correct) and engineered features (edit distance, character n‑grams).  
3. Deployed an **Amazon SageMaker** training job using a *transformer* model fine‑tuned on BERT (4 GB GPU).  
4. Built a **Lambda + API Gateway** inference layer that served predictions with <15 ms latency.  
5. Integrated the model into Spelly’s workflow via an **SQS queue**, ensuring eventual consistency and fault tolerance.

**Result**  
- Precision rose from 63 % to **92 %**, recall from 58 % to **88 %** (AUC‑ROC = 0.97).  
- Manual review load dropped by **84 %** (≈10 k fewer reviews weekly), freeing engineering time for new features.  
- Operational cost stayed under $2,000/month vs the previous $3,500/month rule engine.

**Learning** – Early experiments with a larger model over‑fitted; I learned to validate on a held‑out typo subset and apply early stopping, which saved compute and improved generalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
