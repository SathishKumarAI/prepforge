---
qid: ing_60bf1fb1d3__aws__local
question: 'Explain: Machines (ATS) — Software Engineer Resume - by Austen McDonald
  and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 570
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:34-05:00'
sources: []
---

**Answer – Amazon Interview Style**

> *“Explain: Machines (ATS) — Software Engineer Resume”*  
> **Leadership Principles:** *Customer Obsession*, *Ownership*

### Situation
At a previous firm I noticed that our engineering talent pipeline was shrinking because our ATS (Applicant Tracking System) only parsed resumes with very rigid formats. 90 % of qualified candidates were rejected before the first interview simply because their resumes didn’t match a pre‑defined schema.

### Task
I volunteered to redesign the resume ingestion workflow so it could understand natural language, extract skills, and score candidates automatically—without manual human curation—while keeping compliance with GDPR and internal data‑privacy policies.

### Action
1. **Requirements & Design**  
   * Built an end‑to‑end microservice on **AWS Lambda** (Python 3.11) triggered by S3 upload events.  
   * Leveraged **Amazon Textract** to OCR PDFs, then a custom **spaCy NLP pipeline** fine‑tuned on our own annotated resume corpus.  
   * Extracted entities (skills, experience, education) into DynamoDB for fast lookup.  
   * Implemented a scoring engine that weights skills against job descriptions stored in **Amazon OpenSearch**.

2. **Scalability & Availability**  
   * Lambda + API Gateway gives 99.999 % SLA; auto‑scales to 10k uploads/day.  
   * DynamoDB’s on‑demand capacity keeps cost at ~$0.25/month for our usage pattern.  

3. **Cost & Trade‑offs**  
   * Textract OCR (~$1.50 per page) was the largest variable expense, but we limited it to first 5 pages (average resume size).  
   * Alternative: pure open‑source OCR + on‑prem GPU cluster would cost ~$200k/yr and reduce agility.

### Result
Within **three months**:
- Candidate acceptance rate rose from **42 % → 68 %** for the same talent pool.  
- Interview-to‑offer ratio improved by **23 %**, cutting hiring time by **15 days** on average.  
- The new pipeline was adopted company‑wide, saving ~$120k annually in recruiter labor.

### Reflection
I learned that *dive deep* into data (resume corpora) uncovers hidden biases; I iterated the NLP model until precision > 0.92.  By taking **ownership** of both product and infrastructure, we delivered a scalable, cost‑effective solution that directly benefited our customers—our future hires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
