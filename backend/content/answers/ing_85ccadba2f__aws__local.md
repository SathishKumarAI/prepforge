---
qid: ing_85ccadba2f__aws__local
question: 'Explain: Accessibility — Careers with Waymo - Autonomous Vehicle Industry'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 422
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:19-05:00'
sources: []
---

**Situation & Task**  
While leading Waymo’s “Accessibility‑for‑Careers” program, I noticed that low‑income communities had <15 % participation in our autonomous‑vehicle (AV) internships—far below the 40 % diversity goal. My mission was to design a scalable pipeline that lowered entry barriers and doubled outreach.

**Action**  
1. **Ownership & Bias for Action:** I assembled a cross‑functional team, wrote an internal charter, and set a 90‑day sprint.  
2. **Dive Deep & Deliver Results:** We mapped the entire application journey—advertising → pre‑screen → interview → onboarding—and identified three friction points: costly travel, limited mentorship, and lack of foundational STEM skills.  
3. **Technical Design:**  
   - Built an AWS‑based microservice stack (API Gateway, Lambda, DynamoDB) to auto‑match candidates with virtual “starter kits” (AWS Educate credits + free online courses).  
   - Deployed a SageMaker‑hosted NLP model that triages applicants based on skill gaps, freeing 30 % of recruiter time.  
   - Implemented an AWS Step Functions workflow to automate mentorship pairing via Amazon Chime SDK.  

**Result**  
Within six months: applicant pool grew from 250 to **1,200** (480 % increase), internship acceptance rose from 12 % to **34 %**, and we achieved a 42 % representation of under‑represented groups—exceeding the 40 % target. Costs were reduced by 25 % through serverless architecture.

**Learnings**  
I learned that *ownership* means owning both the problem space and its solution, and that *data‑driven decisions* (e.g., model‑based triage) unlock scalable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
