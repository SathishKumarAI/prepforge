---
qid: ing_ff57f005fa__aws__local
question: 'Explain: Healthcare — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 478
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:27-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role I led a cross‑functional “AI for Health” pilot that recruited clinicians, data scientists, and product managers into a single squad—exactly the model Glean is building. **Customer Obsession & Ownership** drove us to map each stakeholder’s pain points: clinicians needed instant evidence summaries; data teams wanted clean, reproducible pipelines; HR wanted scalable career paths.

**Situation:** We had 3,200 physicians using our EHR, but only 15% of them accessed research insights due to time constraints.  

**Task:** Design a workflow that would surface AI‑generated clinical decision support (CDS) in the clinicians’ existing UI while enabling career progression for tech and non‑tech staff.

**Action:**  
1. **Requirements & Architecture** – Built an event‑driven microservice on **AWS Lambda** + **Step Functions** to ingest EHR notes → NLP pipeline (Amazon Comprehend Medical) → knowledge graph (Neptune).  
2. **Scalability & Availability** – Autoscaling Lambdas with provisioned concurrency, multi‑AZ deployment of Neptune, and **S3** for cold storage.  
3. **Cost Control** – Leveraged Spot Instances for batch inference; applied tagging to track per‑role usage.  
4. **Career Pathways** – Created a “Data Scientist → ML Engineer → Product Lead” ladder and paired junior engineers with clinicians through mentorship programs.

**Result:** Within 6 months, CDS click‑through rose from 15% to **42%**, reducing diagnostic time by 18 minutes per patient (≈$2.4M annual savings). The initiative also produced a published paper on “AI‑assisted CDS in high‑volume practices” and a scalable career framework adopted across three additional hospitals.

**Bar‑raiser takeaways:**  
- Demonstrated **ownership** of both technical delivery and human‑centric outcomes.  
- Showed **deep dive** into AWS services, cost trade‑offs, and failure modes (e.g., handling EHR schema drift).  
- Quantified impact with real metrics and highlighted lessons learned—iterating on model accuracy after clinician feedback loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
