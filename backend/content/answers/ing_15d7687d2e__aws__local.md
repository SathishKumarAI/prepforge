---
qid: ing_15d7687d2e__aws__local
question: 'Explain: F2: Eval set becomes overfit — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 359
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:31-05:00'
sources: []
---

**Situation / Task**  
While launching a recommendation engine at my previous company, our automated **CI/CD pipeline** ran nightly evaluations on a fixed “eval set.” After several releases the model’s accuracy on that set spiked to 97 % while real‑world CTR dropped by 12 %. The team suspected *overfitting* to the eval data.

**Action**  
1. **Ownership & Bias for Action:** I rewrote the pipeline to sample a fresh, stratified 10 % of live traffic as an *eval guard* every run (AWS Lambda + DynamoDB).  
2. **Dive Deep:** Implemented a “gated” CI step that blocked promotion unless both the static eval set and the live‑traffic guard fell within ±1.5 % of baseline accuracy.  
3. **Invent & Simplify:** Added an AWS SageMaker Model Monitor to track drift; alerts fired if feature distribution changed >10 %.  
4. **Deliver Results:** Deployed the new gate in 2 days, reducing overfitting incidents from 7 per month to <1.

**Result**  
Real‑world CTR improved by **8 %** within a week of deployment. Cost impact was negligible (<$50/month for Lambda invocations). I documented the failure mode and updated our ModelOps playbook—an example of learning from error that now informs all AI releases across the org.  

*Leadership Principles invoked:* Customer Obsession, Ownership, Dive Deep, Bias for Action, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
