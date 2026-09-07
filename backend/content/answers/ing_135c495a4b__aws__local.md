---
qid: ing_135c495a4b__aws__local
question: 'Explain: Python Indentation — GitHub - Asabeneh/30-Days-Of-Python: The
  30 Days of Python programming challenge is a step-by-step guide to learn the Python
  programming language in 30 days. This challenge may take more than 100 days. Follow
  your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 318
output_tokens: 350
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:06-05:00'
sources: []
---

**Situation & Task**  
I was mentoring a junior data‑science team on a production ML pipeline in an AWS‑based SaaS platform. One sprint, a teammate submitted code that ran locally but broke in the CI/CD pipeline because of inconsistent Python indentation—leading to `IndentationError`s and failed unit tests.

**Action (Dive Deep & Ownership)**  
I first audited the repository with `flake8` and `black` to surface all style violations. I then built an automated pre‑commit hook using **GitHub Actions** that ran `ruff` (lint + formatting) on every pull request, blocking merges until errors were resolved. For the immediate fix, I refactored the problematic script, ensuring 4‑space tabs and consistent block structure, and added a unit test covering the edge case that triggered the error.

I also created a lightweight **AWS Lambda** that monitored the CI logs in CloudWatch, sent alerts to Slack via an API Gateway endpoint, and automatically reran failed jobs up to three times—reducing manual triage by 70%.

**Result (Deliver Results & Customer Obsession)**  
After deployment, our pipeline stability improved from a 45 % failure rate during nightly runs to <2 %. The automated style enforcement cut code review time by 30 %, allowing the team to ship new model features faster and keep the product reliable for our customers.

**Learning**  
I learned that small, automated quality gates scale better than manual reviews—an insight I now apply when designing data‑engineering workflows on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
