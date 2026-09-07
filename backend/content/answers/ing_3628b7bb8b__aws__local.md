---
qid: ing_3628b7bb8b__aws__local
question: 'Explain: Coding Resource: Interactive Coding Challenges'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 474
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:13-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: At my previous company we had an internal “Coding Resource” platform that hosted interactive coding challenges for junior engineers. Usage was low—only 12 % of the engineering team logged in, and the average time spent per challenge was under 3 minutes.  
*Task*: I volunteered to revamp the platform so it would both engage developers and surface skill gaps for hiring managers.  
*Action*:  
1. **Dive Deep** into usage logs (AWS CloudWatch + Athena) → identified that most drop‑offs occurred after the first code run due to slow feedback loops.  
2. Built a **serverless evaluation pipeline**:  
   * **API Gateway** + **Lambda** for challenge submission,  
   * **SageMaker Batch Transform** with pre‑trained models (e.g., CodeBERT) to provide instant code quality scores and suggestions,  
   * **DynamoDB** for state persistence.  
3. Added an **ML‑driven recommendation engine** (using Amazon Personalize) that surfaced challenges matching a user’s skill level and past performance.  
4. Deployed via **CloudFormation** with multi‑region support to guarantee 99.9 % availability, and used **SQS** to queue submissions for throttling during peak times.

*Result*: Within three months post‑launch, platform usage jumped to **68 %** of the engineering team; average session length increased from 3 min to **12 min**, and the recommendation engine raised first‑attempt pass rates by **25 %**. The cost per evaluation dropped 40 % thanks to serverless scaling.

**Bar‑raiser Takeaways**

* Demonstrated *ownership* by leading cross‑functional teams (DevOps, Data Science).  
* Showed *depth* through the choice of AWS services and trade‑off analysis (serverless vs. EC2, DynamoDB consistency).  
* Quantified impact with concrete metrics (usage %, time, cost).  
* Learned from a failed pilot that used EC2 instances; we switched to Lambda after observing high idle costs—highlighting bias for action and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
