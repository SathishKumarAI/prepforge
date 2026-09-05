---
qid: ing_b9eee0e616__star__local
question: 'Explain: Apple — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 340
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:03-05:00'
sources: []
---

**Situation:**  
During my senior capstone project, our team was tasked with building an automated code‑review bot to triage pull requests for a popular open‑source library on GitHub. The repository had over 10,000 PRs per month and the maintainers were overwhelmed by repetitive style checks.

**Task:**  
I needed to design a lightweight ML model that could classify incoming PRs into “style‑issue,” “logic‑bug,” or “feature‑add” categories with at least 85 % accuracy, so the bot could route each PR to the appropriate reviewer queue.

**Action:**  
First, I scraped the last two years of PR data using GitHub’s REST API and stored the commit diffs in a PostgreSQL database. For feature extraction, I tokenized the diff hunks with the `tokenize` library and encoded them via TF‑IDF vectors. I then trained a multinomial Naïve Bayes classifier (sklearn) and tuned hyperparameters with GridSearchCV, balancing precision/recall to minimize false negatives for logic bugs. After deploying the model in a Docker container on AWS Lambda, I set up continuous integration to retrain monthly on new PR data.

**Result:**  
The bot achieved 87 % overall accuracy, reducing manual triage time by ~35 %. Maintainers reported that critical bug‑related PRs were flagged within seconds. I learned how to blend GitHub APIs with ML pipelines in production and the importance of continuous retraining for concept drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
