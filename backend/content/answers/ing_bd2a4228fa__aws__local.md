---
qid: ing_bd2a4228fa__aws__local
question: 'Explain: Practical applications of AI during an interview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 530
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:04-05:00'
sources: []
---

**Situation (S)** – In my last role at a hiring‑tech startup, we were processing ~10 k resumes/month for 500 open roles and the manual review cycle was >48 h per candidate.

**Task (T)** – Build an AI‑driven interview assistant that short‑lists candidates, predicts fit scores, and powers a chatbot to answer FAQ’s, all while staying compliant with EEOC guidelines.

**Action (A)**  
1. **Resume Parsing & Skill Matching** – Deployed Amazon Comprehend Custom Entities on S3‑stored PDFs → extracted 120+ skill tags per resume.  
2. **Fit Scoring Model** – Trained a SageMaker XGBoost model on historical hiring data (N=12k) and deployed via Lambda + API Gateway; added an explainability layer with Amazon Recommender to surface bias‑related features.  
3. **Chatbot Layer** – Built a Lex bot connected to DynamoDB for real‑time Q&A, backed by Lambda functions that query the fit model to give instant “Next steps” suggestions.  
4. **Observability & Cost Control** – Integrated CloudWatch metrics; set up an Auto‑Scaling group on SageMaker endpoints (0–5 mps) keeping spend < $200/day.

**Result (R)** – Reduced interview cycle time by 65% (from 48 h to 16 h), increased first‑round acceptance rate from 22% to 38%, and cut manual labor cost by $35k/month. The system now supports >1M resumes/year with <99.9% availability, using on‑demand SageMaker for peak loads and Spot Instances for off‑peak, keeping total AWS spend under $0.10/req.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a faster, more accurate candidate experience.  
- **Ownership & Dive Deep** – Handled end‑to‑end data pipeline, model training, and bias mitigation; iterated on failure points (e.g., false positives) to refine thresholds.

*Bar‑raiser takeaways:* clear ownership, deep technical rationale, measurable impact, and proactive learning from missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
