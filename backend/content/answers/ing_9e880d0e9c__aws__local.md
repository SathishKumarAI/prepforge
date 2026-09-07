---
qid: ing_9e880d0e9c__aws__local
question: 'Explain: That''s why we have this directory called'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 492
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:08-05:00'
sources: []
---

**Situation (S)** – In my last role I was tasked to overhaul the *model‑training* repository for a fraud‑detection service that processed ~10 M events/day. The folder structure was flat and every engineer added scripts without versioning, leading to duplicated models and stale experiments.

**Task (T)** – Build an “ML‑pipeline” directory that enforces reproducibility, tracks data lineage, and scales with the growing model catalog.

**Action (A)** –  
1. **Ownership & Customer Obsession**: I mapped user stories from data scientists and ops to a new structure:  
   ```
   ml/
     ├─ data/          # raw → curated datasets (S3 + Glue)
     ├─ notebooks/     # experiment notebooks (JupyterHub)
     ├─ pipelines/     # Airflow DAGs (or Step Functions) for ETL & training
     ├─ models/        # SageMaker model packages with version tags
     └─ infra/         # CDK stack (S3 buckets, ECR repos, IAM roles)
   ```
2. **Dive Deep**: Added automated metadata capture in Airflow (`XCom`) and integrated MLflow for experiment tracking; each run writes to DynamoDB for auditability.
3. **Bias for Action & Deliver Results**: Deployed the new layout on a single CodeCommit repo, migrated 25 existing models, and set up CI/CD with CodePipeline that triggers SageMaker training only when data drift >5 %.  
4. **Invent & Simplify**: Replaced manual shell scripts with CDK constructs to auto‑spin temporary Spot instances for hyper‑parameter tuning, cutting GPU cost by **30 %**.

**Result (R)** – After 3 months the model hit rate improved from 78 % to **85 %**, and deployment time dropped from 12 h to under 2 h. The new directory reduced duplicated experiments by 60 %, freeing engineers to focus on feature work.  

*Bar‑raiser notes*: I showed clear ownership, deep dive into data lineage, quantified impact (accuracy & cost), and learned that early stakeholder alignment prevents costly rework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
