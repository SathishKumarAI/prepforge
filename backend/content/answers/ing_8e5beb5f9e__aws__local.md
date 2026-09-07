---
qid: ing_8e5beb5f9e__aws__local
question: 'Explain: Staying Safe - Protect Yourself From Recruitment Fraud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 406
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:49-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional ML team for our talent‑acquisition platform, I noticed a spike—18 % of new job listings were flagged as phishing attempts that tricked candidates into sharing credentials.

**Task (T)**  
I was tasked to build an automated safety layer that could detect and block fraudulent recruitment ads before they reached users, while preserving 99.9 % precision so legitimate postings weren’t penalized.

**Action (A)**  
*Customer Obsession & Ownership* – I assembled a data‑science squad and defined the problem in terms of user impact: “Reduce credential‑theft incidents by 95 %.”  
*Dive Deep* – We labeled 120k ads, trained an XGBoost model on NLP features (TF‑IDF + sentence embeddings) and engineered anomaly scores.  
*Bias for Action* – Deployed the model as a **Lambda** function behind API Gateway, triggered by each new ad submission. Lambda invokes **Amazon SageMaker Endpoint** for inference, then routes to an **SQS queue** for manual review if score > 0.8.  
*Invent & Simplify* – The queue feeds a **Step Functions** workflow that auto‑blocks the ad and notifies the recruiter via SNS.  
*Deliver Results* – After 3 months, phishing incidents dropped from 18 % to 1.2 %, user complaints fell by 92 %, and we saved ~\$30k/yr in manual review labor.

**Result (R)**  
The system now handles 50k ads/day with < 200ms latency, costs <$0.02 per inference, and is fully autoscaling on Lambda. I presented the architecture at AWS re:Invent, receiving “Best in Class” recognition from the security team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
