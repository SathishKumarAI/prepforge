---
qid: ing_497f7da926__aws__local
question: Tell me about a time you disagreed with your team's technical direction.
  What did you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 380
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:39-05:00'
sources: []
---

**Situation / Task**  
In my last role as a senior ML engineer at a fintech startup, the product team decided to ship an AI‑powered fraud detector using a monolithic TensorFlow model deployed on EC2. I believed this would not scale beyond 50k transactions/day and risk SLA breaches.

**Action**  
I organized a quick “Design Review” meeting (Ownership + Dive Deep). I presented data: our traffic was growing 30% MoM, and a single‑node inference latency averaged 120 ms, leading to 0.5 % of users experiencing timeouts. I proposed a micro‑service architecture:

- **Amazon SageMaker endpoints** for model hosting (auto‑scaling, A/B testing).  
- **AWS Lambda + API Gateway** for lightweight request routing and preprocessing.  
- **DynamoDB** for feature store and hit‑rate caching.  
- **CloudWatch & X-Ray** for end‑to‑end observability.

I ran a cost simulation: the new stack would reduce monthly compute spend by 15% while maintaining 99.9 % availability, versus the projected $20k/month EC2 bill.

**Result**  
The team approved the shift. Within three weeks we launched the SageMaker endpoint; latency dropped to <50 ms, and error rates fell from 0.5 % to <0.01 %. Monthly ops cost decreased by $3k, and our fraud detection accuracy improved by 8% (measured via ROC AUC).  

**Reflection**  
I learned that early, data‑driven advocacy can pivot a project toward scalability and cost efficiency—an essential bar‑raiser trait.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
