---
qid: ing_59edd0620a__star__local
question: 'Explain: Hiring Managers — Software Engineer Resume - by Austen McDonald
  and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 351
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:32-05:00'
sources: []
---

**Situation:**  
At my previous company we were hiring for a new AI‑ops team and the recruiter inbox was flooded with 1,200 resumes per month. Screening manually took an average of 15 minutes per CV, meaning each recruiter spent 300 hours a month just tri‑aging.

**Task:**  
I was asked to design a system that could automatically rank resumes by fit for the “Machine Learning Engineer” role and flag top candidates in real time so recruiters could focus on interviews instead of reading every file.

**Action:**  
I built an NLP pipeline with spaCy to parse PDF/Word files, extracted key skills, education, and project descriptions. Using a pre‑trained BERT model fine‑tuned on our internal hiring data, I scored each resume against the job description. The scores were fed into a lightweight Flask API that pushed ranked lists to the ATS dashboard via REST calls. To keep false positives low, I added an attention‑based rule layer that flagged any missing mandatory qualifications for manual review.

**Result:**  
The prototype reduced recruiter tri‑age time by 70 % (from 300 hrs to 90 hrs/month). Recruiters reported a 40 % increase in interview scheduling speed and a higher quality candidate pool. I learned how to blend deep learning with rule‑based logic to meet real‑world hiring constraints while keeping the system maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
