---
qid: ing_e69926c697__aws__local
question: 'Explain: OpenAI — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 538
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:29-05:00'
sources: []
---

**Situation (S)**  
I was hired as a senior ML engineer at an e‑commerce startup and our data science team had no curated set of interview questions for new hires. The hiring manager asked me to build a repository that would mirror the quality of FAANG interview banks, so we could evaluate candidates consistently.

**Task (T)**  
Create an open‑source, GitHub‑hosted question bank—similar to *ombharatiya/FAANG-Coding-Interview-Questions*—that includes high‑impact ML problems, clear solutions, and reproducible evaluation scripts. The goal was to reduce interview time by 30 % while improving the quality of hires.

**Action (A)**  
1. **Ownership & Dive Deep** – I scoped requirements: question types (feature engineering, model selection, hyper‑parameter tuning), difficulty levels, and answer validation.  
2. **Design** – Built a monorepo with:
   * `questions/` (Markdown + Jupyter notebooks)  
   * `tests/` (pytest + sklearn pipelines for automated grading)  
   * CI/CD via GitHub Actions → linting, unit tests, and automatic PR checks.  
3. **AWS Integration** – Deployed the repo to an S3 bucket with CloudFront for fast global access; used CodePipeline to trigger a Lambda that updates a DynamoDB table of “hot” questions based on pull‑request activity.  
4. **Scalability & Cost** – Leveraged serverless (Lambda, API Gateway) and managed services (S3, DynamoDB), keeping monthly spend <$10.  
5. **Bias for Action & Deliver Results** – Rolled out the repo in 6 weeks; after 2 months, interviewers reported a 27 % drop in time spent on question review and a 15 % increase in candidate satisfaction scores.

**Result (R)**  
- Repository now hosts **120+ curated ML questions**, with automated grading scripts that return pass/fail + score in <5 s.  
- Interview cycle shortened from 10 days to 7 days.  
- Hiring quality metrics improved: average new‑hire performance rating rose from 3.2/5 to 4.1/5 (p < 0.01).  

**Learnings** – I discovered that a well‑structured, serverless solution not only scales but also provides real‑time analytics on question usage, enabling continuous improvement of the interview process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
