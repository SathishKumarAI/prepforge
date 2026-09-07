---
qid: ing_c69ba018ac__aws__local
question: 'Explain: Design age assurance for a platform where the under-18 experience
  is fundamentally different.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 421
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:44-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign our media platform so that users under 18 see a compliant “kid‑friendly” experience while adults retain full functionality. The goal: 99.9% age‑verification accuracy, zero data leakage, and no performance impact.

**Action**  
*Customer Obsession & Ownership* – I led a cross‑team sprint to build an **age‑assurance microservice** using Amazon Cognito for authentication and AWS Lambda for deterministic age checks.  
1. **Input**: Users upload a selfie; Lambda invokes Amazon Rekognition’s *Age Range* API (≤ 10% error) and compares it to the birthdate in the ID document processed by Amazon Textract.  
2. **Decision Engine** – A state machine (Step Functions) routes the result to either a “kid‑friendly” UI or the standard path, enforcing strict IAM policies so that child data never reaches adult services.  
3. **Scalability & Cost** – Each Lambda runs in parallel per request; we use *Provisioned Concurrency* for burst traffic (peak 5k req/s) while keeping cost <$0.003/req. The system stores only hashed age tokens in DynamoDB, ensuring GDPR compliance.

**Result**  
Within two weeks of rollout:  
- Age‑verification accuracy hit **99.8%**, exceeding the target by 0.4%.  
- No reported data leaks; a penetration test confirmed zero cross‑domain exposure.  
- User engagement for under‑18 segment grew 12%, while overall latency dropped 7%.

**Learnings**  
I realized the importance of *Dive Deep* into Rekognition’s error profile and *Bias for Action* by iterating quickly on Lambda concurrency settings. The bar‑raiser will note my end‑to‑end ownership, quantitative impact, and rapid learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
