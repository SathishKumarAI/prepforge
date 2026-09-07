---
qid: ing_6e619f7ee8__aws__local
question: 'Explain: So if you want to cheat, you — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 439
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:37-05:00'
sources: []
---

**Situation / Task**  
I was hired by a university’s research office to build an automated system that flags potential plagiarism in student code submissions (the “cheat‑detect” problem). The goal: reduce manual review time from 4 hrs per batch to under 30 min while keeping false positives < 5 %.  

**Action**  
I framed the requirement as a supervised learning classification task. Using **Python 3.9**, I:

1. Collected 12,000 labeled pairs of code snippets (cheat vs. original) from past plagiarism reports.  
2. Built a feature set: token‑n‑gram frequencies, abstract syntax tree metrics, and edit‑distance vectors.  
3. Trained an **XGBoost** model on an EC2 m5.large instance, tuned hyperparameters with Optuna, achieving 92 % precision/recall on a held‑out 20 % test set.  
4. Deployed the inference pipeline to **AWS SageMaker Endpoint** (dockerized container) and wrapped it in a Lambda function that triggers on S3 upload events.  

**Result**  
The system cut review time by **87 %**, processed each batch in < 25 min, and maintained false positives at **4.2 %**. Across the semester, we flagged 1,200 potential cheats that were subsequently confirmed by human reviewers, saving $15k in labor costs.  

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into feature engineering until diminishing returns hit. I iterated quickly (Bias for Action), logged every change in a Jupyter notebook, and documented lessons learned—e.g., that AST metrics added only 1 % lift but doubled training time. This experience reinforced my commitment to **Customer Obsession** (students’ learning integrity) and **Ownership** (full lifecycle responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
