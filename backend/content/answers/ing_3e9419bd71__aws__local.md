---
qid: ing_3e9419bd71__aws__local
question: 'Explain: Learning & development — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 447
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:35-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a *Learning & Development (L&D) pipeline* for Glean’s AI product team so that every engineer could advance from junior to senior in two years while keeping the team’s skill set aligned with our rapidly evolving model stack.

**Action**  
1. **Customer Obsession + Ownership** – I mapped each learning goal to a customer‑impact metric (e.g., *model latency reduction*).  
2. **Dive Deep** – Using data from our internal LMS, I identified the top 10 knowledge gaps that correlated with 23 % of model errors.  
3. **Design** – Implemented a micro‑service architecture on AWS:  
   - **Amazon SageMaker JumpStart** for curated pre‑built notebooks.  
   - **AWS CodePipeline + Step Functions** to orchestrate automated skill quizzes and auto‑enroll in relevant courses.  
   - **DynamoDB** to store learner progress; **SNS** to notify mentors.  
4. **Bias for Action** – Launched a pilot with 50 engineers, delivering 12 personalized learning paths within 30 days.

**Result**  
- Within 6 months the team’s *model error rate dropped by 18 %* (from 0.35 % to 0.29 %).  
- 92 % of participants reported higher confidence in new AI tools, and promotion rate from junior to senior rose from 12 % to **27 %** annually.  
- Cost per learner was $45/month, a 30 % reduction vs our legacy LMS.

**Learning** – The pilot revealed that real‑time feedback loops (Step Functions) were critical; we now integrate continuous performance metrics into the learning loop to avoid stale skill sets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
