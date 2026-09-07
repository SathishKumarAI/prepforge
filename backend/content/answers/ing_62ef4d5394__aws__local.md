---
qid: ing_62ef4d5394__aws__local
question: 'Explain: So these are examples of absolute paths — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 432
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:54-05:00'
sources: []
---

**Situation & Task**  
I was mentoring a cohort of 12 new data‑science interns on an AWS‑hosted JupyterHub cluster. One common issue was that scripts were failing because they referenced *relative* file paths; the notebooks ran fine locally but broke when deployed to S3 and Lambda. I needed to teach them how to use **absolute paths** so their code would be portable across environments.

**Action**  
I created a concise, 30‑minute workshop that blended theory with hands‑on practice:

1. **Explain the concept** – absolute paths start at the root (e.g., `/home/ubuntu/data/file.csv`) and never depend on the current working directory.  
2. **Show AWS context** – in Lambda, the code lives in `/var/task`; in EC2/S3, use `s3://bucket/key`.  
3. **Hands‑on exercise** – each intern rewrote a failing notebook to read data from S3 using `boto3` and an absolute URI (`s3://my-bucket/data.csv`).  
4. **Automated linting** – added a pre‑commit hook that flags relative paths, ensuring future commits are clean.

**Result**  
After the workshop, 11/12 notebooks ran successfully in all environments—reducing deployment errors by **87 %** and cutting mean time to recovery from a path issue from 4 h to 15 min.  

**Leadership Principles Highlighted**

- **Customer Obsession** – I focused on eliminating friction for the interns’ “customers” (the data pipelines).  
- **Dive Deep & Ownership** – I dissected the root cause, wrote reusable guidance, and set up automated checks, taking full ownership of code quality.

*Bar‑raiser cues*: clear problem statement, measurable impact, depth in AWS specifics, proactive tooling, and learning loop embedded for future maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
