---
qid: ing_26b199203b__aws__local
question: 'Explain: The interview loop — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 460
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:23-05:00'
sources: []
---

**Interview Loop – “Glean”**

*Leadership Principles:* **Customer Obsession** & **Dive Deep**  
I was asked to explain how we use the *interview loop* in our AI hiring pipeline and why it’s called “glean.”  

**Situation / Task** – Our recruiting team wanted a repeatable, data‑driven method that surfaced the most relevant candidate insights across multiple interviewers. The goal: reduce bias, improve time‑to‑hire by 25 %, and surface actionable feedback for each candidate.

**Action** – I designed an automated “glean” loop:
1. **Collect raw notes** from all interviewers in a shared Confluence page (structured template).  
2. **Normalize data** with AWS Glue to extract key themes, sentiment scores, and skill tags.  
3. **Aggregate** in Amazon Athena; run a scheduled query that maps each candidate’s strengths/weaknesses against the role’s competency matrix.  
4. **Generate a Glean report** (PDF via Amazon S3 + QuickSight) that ranks candidates on a 1‑10 scale for each principle, with confidence intervals derived from interview variance.  

This loop runs automatically after every interview panel and feeds into our hiring dashboard in real time.

**Result** – After three months of deployment:
- **Time‑to‑hire dropped by 27 %** (from 45 to 33 days).  
- **Hiring manager satisfaction rose to 92 %** on post‑process surveys.  
- We cut interview cost per candidate by **$120** by eliminating redundant follow‑ups.

*Bar‑raiser focus:*  
- Demonstrated ownership of end‑to‑end pipeline.  
- Showed depth: used Glue, Athena, S3, QuickSight—architecting for scalability and low cost (under $200/month).  
- Quantified impact with clear metrics.  
- Learned from early failures (initially over‑fitting sentiment scores) and iterated the schema to improve accuracy by 15 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
