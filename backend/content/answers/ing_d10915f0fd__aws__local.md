---
qid: ing_d10915f0fd__aws__local
question: 'Explain: Use idempotency keys — ''10 Principles for Building Resilient
  Payment Systems'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 477
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:43-05:00'
sources: []
---

**Situation & Task (S)**  
I led a cross‑functional team that launched a new B2B marketplace in 2024. The checkout API had to support high‑volume credit‑card payments while guaranteeing *exactly once* processing—any duplicate request could trigger double charges, hurting customer trust.

**Action (A)**  
1. **Idempotency Key Design** – Each client generated a SHA‑256 key from order ID + timestamp and sent it in the `Idempotency-Key` header.  
2. **Storage Layer** – Used Amazon DynamoDB with a composite primary key (`KeyHash, Timestamp`) and a TTL of 30 days. The Lambda that processes payments first queried the table; if an entry existed, it returned the stored result instead of re‑executing the charge.  
3. **Service Mesh** – Integrated AWS API Gateway + AppMesh to route retries back to the same Lambda instance, ensuring consistent context.  
4. **Monitoring & Alerting** – CloudWatch metrics on `DuplicateRequests` and `PaymentSuccessRate` fed into a PagerDuty alert when duplicates exceeded 0.5 % of traffic.

**Result (R)**  
- Achieved **99.9999 % payment integrity**, cutting duplicate‑charge incidents from 4.2 % to <0.001 %.  
- Reduced mean time to recovery (MTTR) for retry logic by **70 %** because the system self‑corrected without manual intervention.  
- Earned a 4.7/5 customer satisfaction score in the post‑launch survey, directly tied to fewer billing disputes.

**Reflection & Learning**  
I owned the end‑to‑end flow and dove deep into DynamoDB’s consistency model; we learned that eventual consistency alone was insufficient for financial ops, so we enabled conditional writes. The bar raiser will note my ownership of the idempotency contract, the data‑driven impact, and the iterative learning loop that prevented costly failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
