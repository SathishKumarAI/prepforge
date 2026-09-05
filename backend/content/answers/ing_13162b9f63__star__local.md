---
qid: ing_13162b9f63__star__local
question: 'Explain: Stage 1: Application and Resume Screening (1-3 Weeks)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 325
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:54-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we were launching an automated hiring assistant for the data science team. The recruiter had over 4,000 applicants in less than two weeks, but our manual review process could only handle about 50 per day.

**Task:**  
I was tasked with designing Stage 1 of the ML pipeline—automated application and resume screening—to reduce the initial triage time to under three weeks while maintaining a high recall for qualified candidates.

**Action:**  
First, I built a document‑ingestion workflow using Apache Tika to parse PDFs, DOCXs, and scanned images via OCR. Next, I trained a BERT‑based text encoder on our internal job descriptions and historical hiring data to extract key skills, education, and experience vectors. Using cosine similarity, the system ranked resumes against the role profile. I added a rule‑based filter for mandatory qualifications (e.g., minimum 3 years of ML experience). Finally, I set up an Elasticsearch index so recruiters could search by skill or project title in real time.

**Result:**  
The prototype cut screening time from 30 days to 7 days, processed all 4,000 resumes in under 48 hours, and achieved a 92 % recall of candidates who later passed the interview stage. I learned that combining deep‑learning embeddings with simple rule checks balances precision and explainability for hiring teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
