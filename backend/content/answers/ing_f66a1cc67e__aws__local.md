---
qid: ing_f66a1cc67e__aws__local
question: 'Explain: Train/dev/test split for the judge — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 365
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:11-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: At my last company we built a model that automatically flags fraudulent transactions. The QA team requested an automated “judge” to evaluate the model’s performance in CI/CD, but they had no clear train/dev/test split strategy.

*Task*: Design a reproducible pipeline that guarantees unbiased evaluation and quick feedback for every commit.

*Action*:  
1. **Data partitioning** – I introduced a deterministic hash‑based split (70/15/15) using the transaction ID as key, stored in an S3 bucket. This ensures each commit sees the same data distribution.  
2. **CI/CD integration** – Leveraged AWS CodePipeline → Lambda to trigger training on SageMaker with the train set, evaluate on dev and test sets, and push metrics (AUC‑ROC, precision@k) to CloudWatch.  
3. **Gatekeeping** – Implemented a “gate” in CodeBuild that fails if dev AUC drops below 0.92 or test precision falls by >5%.  
4. **Cost control** – Used Spot Instances for training and stopped them immediately after evaluation, saving ~40% vs on‑demand.

*Result*: The pipeline cut model review time from 3 days to 2 hours, increased deployment frequency by 150%, and reduced false positives by 12% across production.  

**Bar‑raiser takeaway**: Showed ownership (full end‑to‑end design), deep dive into data consistency, quantified impact, and a learning loop—each commit triggers an audit that drives continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
