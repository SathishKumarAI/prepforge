---
qid: ing_78954b1a9b__star__local
question: 'Explain: Stripe — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 362
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:07-05:00'
sources: []
---

**Situation:** At my previous company, we were preparing the data‑science team for an upcoming FAANG interview camp. The recruiters asked us to simulate real coding questions they’d see on GitHub repositories like *ombharatiya/FAANG-Coding-Interview-Questions*. I noticed many of those problems involved data preprocessing and feature engineering—exactly what our ML pipelines required.

**Task:** My goal was to build a reusable script that could fetch the top 20 “ML‑heavy” questions from that repo, parse their problem statements, generate synthetic datasets, and automatically evaluate baseline models. This would give the team hands‑on practice while aligning with our production workflows.

**Action:** I wrote a Python module using `PyGithub` to clone the repository and filter files by keywords (“regression”, “classification”). For each question I used `pandas` to create dummy dataframes, then applied `scikit-learn` pipelines: `SimpleImputer`, `StandardScaler`, and a `RandomForestClassifier`. I wrapped everything in a Docker container so teammates could run the script on any machine. To measure progress, I logged F1‑scores and training times to an SQLite DB for quick dashboards.

**Result:** Within two weeks, the team completed 15 mock interviews with a median F1‑score improvement of 12% over baseline models. The script was adopted as part of our internal bootcamp, reducing interview prep time by 30%. I learned that bridging public coding resources with production ML tooling can accelerate skill acquisition and improve real‑world performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
