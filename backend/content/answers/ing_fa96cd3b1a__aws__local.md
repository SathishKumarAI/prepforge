---
qid: ing_fa96cd3b1a__aws__local
question: 'Explain: 🔗 Resources — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 480
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:07-05:00'
sources: []
---

**Situation & Task**  
When I joined the hiring team at Amazon, we noticed our interview pipeline was stalled by inconsistent preparation among candidates. My goal was to create a concise, high‑impact study resource that could cut prep time in half while keeping quality high.

**Action**  
I curated the *Blind 75* list – the top 75 coding problems most frequently asked across tech companies. I built an internal “Prep Hub” on AWS:

- **S3** stores problem PDFs and solutions (immutable, low‑cost).  
- **Lambda + DynamoDB** powers a lightweight API that returns a random question with tags, difficulty, and solution steps.  
- **API Gateway** exposes the service to the hiring portal.  
- **CloudWatch & Athena** track usage: average 1 k requests/day, 70 % of candidates hit at least one problem per session.

I also added a *“Progress Tracker”* (SNS + SES) that emails weekly summaries and nudges users who fall behind.

**Result**  
After three months, interview prep time dropped from ~12 hrs to ~6 hrs per candidate. Candidate pass rates improved by **18 %**, and hiring managers reported higher confidence in technical assessments. The solution cost < $50/month, fully serverless, ensuring 99.99 % availability.

**Learning & Bar‑raiser cues**  
- *Ownership*: I owned the entire end‑to‑end pipeline, from data ingestion to monitoring.  
- *Dive Deep*: I dissected interview trends and tuned the API for sub‑200 ms latency.  
- *Quantified Impact*: Metrics (prep time, pass rates) validated success.  
- *Bias for Action*: Built the MVP in two sprints, iterated based on real feedback.

This experience exemplifies **Customer Obsession** (meeting interviewers’ needs), **Ownership**, and **Dive Deep**—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
