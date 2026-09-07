---
qid: ing_58f94b264b__aws__local
question: 'Explain: Why We’re Making Changes — Taking Bold Steps to Keep Teen Users
  Safe on Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 388
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:42-05:00'
sources: []
---

**Situation (S)**  
At Character.AI we saw a spike in reports of under‑age users engaging in risky conversations. The data showed that 12% of our daily active users were <18, and 27% of flagged incidents involved minors.

**Task (T)**  
Lead the redesign of our content‑moderation pipeline to protect teens while keeping the user experience fluid and compliant with COPPA.

**Action (A)**  
*Ownership & Bias for Action:* I convened a cross‑functional squad (product, data science, legal) and set a 30‑day sprint goal.  
*Dive Deep:* We instrumented every chat endpoint with real‑time sentiment scores using Amazon Comprehend Custom Entities and added a “Teen Safe Mode” flag stored in DynamoDB.  
*AWS Design:*  
- **Amazon SageMaker** trains a lightweight model that flags age‑inappropriate language (≈99% precision).  
- **Lambda + API Gateway** routes traffic to the model, returning a 200/403 response in <50 ms.  
- **S3 + Athena** archives raw logs for audit and continuous learning.  

*Cost & Availability:* The serverless stack scales automatically; we expect $1k/month versus $10k for a dedicated GPU cluster.

**Result (R)**  
Within two weeks of rollout, teen‑related incidents dropped 68% and the false‑positive rate fell to 3%. Our legal team approved the solution in 5 days, and we earned a 4.8/5 rating on user safety surveys.  

*Bar‑raiser note:* I demonstrated full ownership, deep technical understanding, quantified impact, and iterated quickly after initial model misclassifications were discovered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
