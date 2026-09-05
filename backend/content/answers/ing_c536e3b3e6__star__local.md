---
qid: ing_c536e3b3e6__star__local
question: 'Explain: In the News — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 364
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:19-05:00'
sources: []
---

**Situation** – At my previous company, we were tasked with building a predictive hiring model for the “In the News — Careers | Harvey” portal. The portal had seen a 30 % drop in qualified applicant traffic over six months because recruiters struggled to match candidates to niche roles.

**Task** – I needed to design an ML pipeline that could rank resumes against role embeddings, reduce manual triage time by 40 %, and surface high‑fit candidates for senior managers.

**Action** – First, I scraped the portal’s historical applicant data (≈ 120k resumes) and used spaCy to extract skills, certifications, and experience levels. I then trained a BERT‑based fine‑tuned model on role descriptions to generate dense embeddings. Using Faiss for approximate nearest neighbors, I built a real‑time recommendation service in Python/Flask, deploying the model on an AWS SageMaker endpoint with autoscaling. I added A/B testing dashboards in Grafana and integrated feedback loops so recruiters could flag mismatches, which fed back into continual learning.

**Result** – Within three months, qualified applicant traffic rose 27 %, manual triage time fell by 42 %, and the recruiter satisfaction score improved from 3.8 to 4.6/5. I learned how to blend NLP, scalable inference, and continuous feedback to solve real hiring challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
