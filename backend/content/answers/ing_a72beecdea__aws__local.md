---
qid: ing_a72beecdea__aws__local
question: 'Explain: Resume and Job Description Tips — My 2026 Perplexity AI Interview
  Process and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 433
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:40-05:00'
sources: []
---

**Customer Obsession + Ownership**

During my last role, I built a *“Resume‑to‑Job Match”* microservice that parsed 8 k resumes daily and scored them against job descriptions with 92 % precision (precision/recall >0.9).  
- **Situation:** Hiring managers were overwhelmed by the volume of applications; manual triage took ~2 hrs per batch, causing delayed offers.  
- **Task:** Automate matching while keeping the user experience intuitive for recruiters.  
- **Action:** Leveraged AWS Lambda + Amazon Comprehend (custom entity recognizer) to extract skills, certifications, and project names. I stored normalized data in DynamoDB and used a lightweight S3‑based “job‑profile” index. A front‑end UI built with React hooks fetched matches via API Gateway.  
- **Result:** Reduced triage time from 2 hrs to 12 min per batch (80% faster), increased offer acceptance rate by 15%, and cut infrastructure cost by 35% by scaling Lambda on demand.

**Dive Deep + Bias for Action**

I iterated the model in a *continuous‑learning loop*: every week I pulled recruiter feedback, updated the entity recognizer’s training set, and redeployed via CodePipeline. The system hit a 0.95 F1 score after three iterations, proving that rapid experimentation and data‑driven tuning pay off.

**Bar‑raiser takeaways**

- **Ownership:** Took end‑to‑end responsibility from requirement gathering to production rollout.  
- **Depth:** Documented entity extraction logic, error budgets, and fallback plans for low confidence matches.  
- **Quantified Impact:** 92 % precision, 80% time savings, 15% hiring boost.  
- **Learning from Failure:** Initial model over‑fitted to common buzzwords; resolved by adding a “skill‑frequency” penalty in the scoring algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
