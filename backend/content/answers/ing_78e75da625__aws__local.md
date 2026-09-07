---
qid: ing_78e75da625__aws__local
question: 'Explain: Your codebase is bigger than your IDE. (Newsletter partner).'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 439
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:42-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑science team that built an ML‑driven newsletter recommendation engine for a partner. The codebase (data pipelines + model training scripts) grew to ~1 GB of source and notebooks, while our IDE (VS Code on a laptop) could only hold 200 MB comfortably. We risked losing version control, test coverage, and reproducibility.

**Action**  
* Adopted **GitHub Enterprise** + **Git LFS** for large files—ensuring all code, model artefacts, and notebooks stayed in one place.  
* Migrated the heavy‑weight data pipelines to **AWS Glue** (serverless ETL) and **Amazon SageMaker Pipelines** for training, using **S3** as a shared repository for intermediate data.  
* Implemented a CI/CD pipeline with **CodeBuild** + **CodePipeline**, running unit tests on every push and automated linting.  
* Introduced **JupyterLab** on **Amazon SageMaker Studio**, giving each developer a cloud‑based IDE that scales to the full codebase without local limits.  

**Result**  
- Reduced merge conflicts by 68 % (tracked via GitHub metrics).  
- Cut deployment time from 12 h to 2 h, enabling weekly model retraining cycles.  
- Increased test coverage from 45 % to 92 %, improving production reliability (zero model‑related incidents in the next quarter).

**Reflection**  
I owned the end‑to‑end workflow and dove deep into each AWS service’s pricing model to keep costs under $3k/month. The bar‑raiser will notice that I quantified impact, chose scalable services, and learned from initial friction by iterating on the CI/CD pipeline until it fit our growth trajectory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
