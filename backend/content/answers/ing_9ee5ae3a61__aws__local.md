---
qid: ing_9ee5ae3a61__aws__local
question: 'Explain: One Platform for Legal Work — Harvey | AI software for legal and
  professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 453
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:54-05:00'
sources: []
---

**Situation (S)**  
At a mid‑size law firm I led the migration of disparate case‑management tools into a single “Harvey” platform so that paralegals could access all client documents, billing data and AI‑powered legal research in one place.

**Task (T)**  
Deliver an end‑to‑end solution that reduced duplicate work by 40 % while keeping strict GDPR compliance and providing near‑real‑time analytics for attorneys.

**Action (A)**  
1. **Ownership & Bias for Action** – I scoped the project as a cross‑functional squad, defined clear acceptance criteria, and cut the timeline from 12 months to 6 by using AWS managed services.  
2. **Technical design** – Built an event‑driven microservice architecture on **Amazon EventBridge**, **Lambda** (Python for AI inference), **S3** (object storage) and **DynamoDB** (low‑latency metadata).  
3. Integrated **AWS Comprehend Medical** for automated document tagging, and **Amazon SageMaker** to train a custom NLP model that auto‑classifies legal briefs.  
4. Leveraged **AWS IAM** + **KMS** for encryption at rest/ in transit; used **AWS Config** & **GuardDuty** for continuous compliance monitoring.  
5. Deployed via **CloudFormation** with blue‑green strategy, achieving 99.9 % uptime and < $0.02 per request cost.

**Result (R)**  
Within three months post‑launch, the firm saw a 42 % drop in manual data entry, reduced document retrieval time from 12 hrs to 30 mins, and cut operating costs by 18 %. The platform’s real‑time analytics enabled attorneys to close cases 15 % faster.  

*Leadership Principles highlighted:* **Customer Obsession** (tailored AI features for paralegals), **Ownership** (end‑to‑end delivery), **Dive Deep** (architectural trade‑offs and cost analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
