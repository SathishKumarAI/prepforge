---
qid: ing_c26502e4cd__aws__local
question: 'Explain: Hear from Our Associates — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:36-05:00'
sources: []
---

**Situation / Task**  
When I joined the Talent Acquisition team at Amazon, hiring managers complained that their “candidate experience” scores were flat and hard to interpret. The business needed a data‑driven way to surface insights from associate interviews and feedback so we could iterate on our career pages (e.g., *Hear from Our Associates — Careers | Harvey*).  

**Action**  
I spearheaded an end‑to‑end pipeline that extracted, analyzed, and visualized interview transcripts.  
1. **Data ingestion** – AWS Glue crawled S3 buckets holding recorded interviews (audio) and transcript files (JSON).  
2. **Speech → Text & NLP** – Amazon Transcribe converted audio to text; Amazon Comprehend identified sentiment, key phrases, and named entities.  
3. **Feature engineering** – I wrote a Lambda function that mapped sentiment scores to “experience heat‑maps” per career page section.  
4. **Modeling & Recommendation** – A SageMaker notebook trained a simple XGBoost model to predict which content changes would lift satisfaction by ≥ 10%.  
5. **Visualization** – Results were pushed into QuickSight dashboards shared with hiring managers and content owners.

**Result**  
Within three months, the *Hear from Our Associates* page saw a 17% increase in click‑through rate and a 12% rise in candidate conversion. The model’s predictions guided two major content revamps that reduced interview cycle time by 18 hours per hire.  

**Leadership Principles Reflected**  
- **Customer Obsession** – We treated internal candidates as customers, delivering actionable insights.  
- **Ownership & Dive Deep** – I owned the entire pipeline, digging into data quality issues and iterating on feature sets until metrics improved.  

**Bar‑raiser takeaways** – The interviewee demonstrated ownership, deep technical chops (Glue, Transcribe, Comprehend, SageMaker), quantified impact, and a clear learning loop from initial failures to production success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
