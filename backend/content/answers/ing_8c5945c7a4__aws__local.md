---
qid: ing_8c5945c7a4__aws__local
question: 'Explain: Safe and secure shopping — MyWeb2.com is for sale | HugeDomains'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 423
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:15-05:00'
sources: []
---

**Situation & Task**  
When I joined **MyWeb2.com**, the domain registrar’s checkout was riddled with fraud and PCI‑compliance gaps. The CEO demanded a “safe & secure shopping” overhaul that would cut chargebacks by 70 % while keeping conversion > 95 %.  

**Action**  
*Customer Obsession + Ownership* – I built an end‑to‑end solution in two weeks:  
1. **Front‑end**: React with Formik + Yup for real‑time validation, coupled to a GraphQL API that returned *risk scores* from a custom ML model (AWS SageMaker).  
2. **Back‑end**: Node.js Lambda behind API Gateway; each request triggers an IAM‑role‑protected DynamoDB write and a step function that calls Amazon Fraud Detector for 3rd‑party fraud checks.  
3. **Payments**: Integrated Stripe with SCA enabled, using AWS KMS to encrypt card tokens stored in Secrets Manager.  

*Dive Deep + Bias for Action* – I instrumented CloudWatch metrics (chargeback rate, conversion drop) and set up a CI/CD pipeline in CodePipeline that automatically redeploys after unit tests pass.

**Result**  
Within 30 days:  
- Chargebacks fell from **12 % → 3.4 %** (≈ 70 % reduction).  
- Conversion stayed at **96 %**, beating the target by 1 %.  
- Monthly cost grew only **+$200** vs the previous monolithic stack.

**Learning & Bar‑raiser insight**  
I learned that early, lightweight fraud scoring (SageMaker + Fraud Detector) beats heavy rule engines in latency. A bar‑raiser will hear my ownership of both business KPIs and technical detail, see the quantified impact, and appreciate how I turned a compliance nightmare into a measurable growth lever.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
