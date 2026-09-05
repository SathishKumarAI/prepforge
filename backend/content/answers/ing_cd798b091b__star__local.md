---
qid: ing_cd798b091b__star__local
question: 'Explain: Databricks — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 301
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:09-05:00'
sources: []
---

**Situation:** While working on a data‑engineering sprint at my previous company, we needed a single source of truth for all the ML model artefacts and code reviews were getting lost in email threads.

**Task:** I was tasked with setting up a reproducible workflow that would let our data scientists push notebooks to GitHub, run them on Databricks, and automatically trigger CI pipelines for testing and deployment.

**Action:** I cloned the `ombharatiya/FAANG-Coding-Interview-Questions` repo from GitHub as a template, then created a new branch in our own org’s repository. Using Databricks’ Repos feature I linked the repo to an Azure DevOps pipeline that ran unit tests on each notebook commit. I added Jupyter‑style notebooks with parameterized cells and used `dbutils.notebook.run()` for modular execution. Finally, I configured a Databricks job to trigger nightly model retraining and pushed the resulting artefacts back to the same GitHub repo under a `models/` folder.

**Result:** The new workflow cut our review turnaround from 3 days to under an hour, reduced merge conflicts by 70 %, and increased deployment frequency from monthly to weekly. I learned how tightly coupling GitHub with Databricks Repos and CI/CD pipelines can dramatically improve model reproducibility and team velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
