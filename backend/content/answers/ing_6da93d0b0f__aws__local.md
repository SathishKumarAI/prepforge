---
qid: ing_6da93d0b0f__aws__local
question: 'Explain: Signature generation — ''A cheat sheet for API designs'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 609
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:35-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: While leading a new SaaS platform at my previous company, our product team needed a lightweight, secure way to let third‑party apps call our REST APIs without exposing credentials.  
*Task*: Design a signature‑generation scheme that is fast, auditable, and easy for developers to implement.  
*Action*: I built a **deterministic HMAC‑SHA256** workflow: each request body + sorted query string + timestamp → canonical string → signed with a secret stored in **AWS KMS**. The signature is passed as an `X-API-Signature` header and verified in a Lambda authorizer attached to **Amazon API Gateway**. I added rate‑limit logic, replay protection via a monotonic counter, and automatic rotation of keys every 90 days.  
*Result*: Within three months the adoption rate jumped from 12% to 87% among our developer community, and the average authentication latency dropped from 120 ms (basic token) to < 15 ms. The design also cut manual support tickets by 60% because developers could generate signatures locally with a single npm package.

**Technical / System Design**  
1. **Canonicalization** – Sort query keys, URL‑encode values, concatenate body hash (SHA256).  
2. **Signature** – `HMAC_SHA256(secret, canonical_string)` → hex string.  
3. **AWS Services**:  
   * **API Gateway** – entry point, custom authorizer Lambda for signature validation.  
   * **Lambda** – lightweight verifier; returns 401 on failure.  
   * **KMS** – key storage and automatic rotation (least privilege IAM).  
4. **Scalability / Availability** – API Gateway is global, multi‑AZ; Lambda scales horizontally with request volume; KMS provides 99.999% availability.  
5. **Cost Trade‑offs** – Using Lambda + API Gateway keeps operational overhead low (< $0.20/1M requests) versus a dedicated EC2 auth service.

**Bar‑raiser Checklist**  
- **Ownership**: I owned the end‑to‑end flow, from design to deployment and monitoring.  
- **Dive Deep**: Explored edge cases (clock skew, replay attacks) and quantified impact on latency.  
- **Quantified Impact**: 87% developer adoption, 60% ticket reduction, < 15 ms auth latency.  
- **Learning from Failure**: Initial version leaked timestamp in URL; after audit I moved to signed headers only, improving security posture.  

*Leadership Principles*: **Customer Obsession**, **Ownership**, **Dive Deep**, and **Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
