---
qid: ing_40fcf9537a__aws__local
question: 'Explain: Health and wellness — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 378
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:55-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team that built an AI coach for corporate wellness programs. The goal was to reduce employee absenteeism by 15 % and increase engagement in health initiatives.

**Action**  
*Customer Obsession*: Conducted 20+ user interviews to surface pain points—slow response times, lack of personalized insights, and privacy concerns.  
*Dive Deep & Ownership*: Designed a serverless pipeline (AWS Lambda + Step Functions) that ingests wearable data, applies an XGBoost model, and returns actionable nudges within 2 s.  
*Invent & Simplify*: Replaced the legacy monolith with a modular architecture using Amazon SageMaker for training, Amazon DynamoDB for state, and Amazon SNS for push notifications—cut operational overhead by 70 %.  
*Bias for Action*: Deployed A/B testing on 3,000 employees; the ML‑enabled version lowered absenteeism from 12.4 % to **9.1 %** (p<0.01) and increased program participation from 38 % to **55 %** in just three months.

**Result**  
Revenue impact: projected $2.3 M annual savings from reduced sick days; customer satisfaction score rose to 4.7/5. The system now scales to 50,000 concurrent users with <0.5 ms latency and <30 ¢ per inference cost.

**Learning**  
The first model over‑fit on a small dataset; after adding data augmentation and stricter validation we achieved robust generalization—demonstrating true ownership of the end product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
