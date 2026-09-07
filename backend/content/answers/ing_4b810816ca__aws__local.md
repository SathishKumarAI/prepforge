---
qid: ing_4b810816ca__aws__local
question: 'Explain: Doing Data Science for Social Good, Responsibly'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 437
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:55-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional “Data for Impact” squad at my previous company, we were asked to build an AI model that predicts homelessness risk in underserved neighborhoods. The goal was to help local NGOs allocate shelters more effectively—an initiative that had high social impact but also strict privacy and fairness constraints.

**Action**  
- **Ownership & Customer Obsession:** I formed a stakeholder group (city officials, NGO partners, data‑privacy lawyers) to surface the true pain points.  
- **Dive Deep & Bias for Action:** We collected anonymized utility usage, eviction notices, and public health records via Amazon Kinesis Data Firehose, storing them in an encrypted S3 bucket. Using Athena we performed exploratory analysis, revealing that a 20 % drop in rent payments correlated strongly with future homelessness.  
- **Design & AWS Services:** I architected a serverless pipeline: Kinesis → Lambda (data cleaning) → SageMaker for training a gradient‑boosted tree; the model was deployed as an endpoint behind API Gateway. To ensure fairness, we integrated Amazon Comprehend for sentiment analysis on public comments and used SageMaker Clarify to audit bias across demographics.  
- **Scalability & Cost:** The serverless stack kept monthly spend <$5k while scaling automatically to 10 000 requests per minute.

**Result**  
The model achieved an AUC‑ROC of 0.87, enabling NGOs to pre‑emptively assist 3 500 households in its first year—up from the previous 1 200. The initiative won our internal “Impact Award” and was adopted by two additional cities.  

**Learnings**  
I realized that early stakeholder engagement is critical; skipping it had once caused a model to misclassify a demographic group, which we corrected after an audit. This experience reinforced my belief that true ownership means iterating until the solution truly serves its customers—people in need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
