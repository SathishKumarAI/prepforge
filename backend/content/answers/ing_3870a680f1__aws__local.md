---
qid: ing_3870a680f1__aws__local
question: 'Explain: Does Databricks have inclusive hiring practices? At Databricks,
  we are committed to delivering an inclusive hiring process. Our hiring teams complete
  unconscious bias training to ensure fair and objective evaluations. We assess candidates
  based on role-specific competencies and our culture principles, ensuring a structured
  and equitable process. Additionally, we offer candidates the opportunity to connect
  with a member of one of our Employee Resource Groups (ERGs) during their interview
  journey. Our goal is simple: to hire the best person for the job.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 322
output_tokens: 339
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:20-05:00'
sources: []
---

**Situation / Task**  
When I joined a fast‑growing ML platform, we faced a 30 % drop in qualified applicants from under‑represented groups and the hiring cycle was averaging 45 days.

**Action (Customer Obsession & Ownership)**  
I led a cross‑functional task force that redesigned our pipeline. First, we mandated unconscious bias training for all interviewers—aligning with *Bias for Action* by rolling it out in one sprint. Second, we created role‑specific competency rubrics and paired each candidate with an ERG mentor to give them real‑time feedback (*Dive Deep*). We also automated the scheduling and scoring using AWS Lambda + DynamoDB, cutting manual effort.

**Result (Deliver Results)**  
Within six months:  
- Applicant diversity rose 42 % (from 18 % to 26 %).  
- Time‑to‑hire fell 37 % (45 → 28 days).  
- Interviewer satisfaction scores improved from 3.2/5 to 4.6/5.

**Bar‑raiser focus** – I demonstrated ownership by taking end‑to‑end responsibility, depth through data‑driven metrics, and learning from a failed pilot that over‑segmented roles—corrected by consolidating rubrics. This approach proved scalable: the Lambda architecture handles >10k interviews/month with <0.5 % latency, keeping costs <$2k/yr while ensuring high availability via multi‑AZ DynamoDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
