---
qid: ing_4329b85feb__aws__local
question: 'Explain: ABAC (Attribute-based access control) — Designing a Permission
  System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 503
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:53-05:00'
sources: []
---

**Situation & Task**  
When our data‑science platform scaled to 3 M users, the existing role‑based model caused “permission creep” and compliance violations (≈ 12 % of requests hit the audit queue). I was tasked with redesigning the permission system using Attribute‑Based Access Control (ABAC) so we could enforce fine‑grained policies without a governance bottleneck.

**Action**  
1. **Requirements & Design** – Each request carries user, resource, and contextual attributes (role, project, sensitivity level, time). Policies are expressed in AWS IAM’s *policy variables* and stored in DynamoDB for rapid lookup.  
2. **AWS Services** –  
   - **Amazon Cognito** for attribute enrichment at login.  
   - **AWS Lambda@Edge** to inject policy evaluation before invoking SageMaker endpoints.  
   - **AWS Step Functions** orchestrate multi‑step approval flows for high‑sensitivity data.  
3. **Scalability & Availability** – The stateless Lambda layer scales to 100 k concurrent requests; DynamoDB’s provisioned capacity + auto‑scaling keeps latency < 20 ms with 99.9 % SLA.  
4. **Cost Trade‑offs** – Switching from IAM roles (≈ $0.001 per request) to policy evaluation (~$0.0003) reduced monthly spend by $18K while cutting audit queue time by 78%.

**Result**  
- Permission violations dropped from 12 % to < 1 %.  
- Audit processing time decreased from 15 min to 2 sec per request, freeing compliance staff for new initiatives.  
- The system now supports real‑time policy updates with zero downtime.

---

### Leadership Principles Anchored
- **Customer Obsession** – Users get instant access while staying compliant.  
- **Ownership & Dive Deep** – I owned the full stack redesign, from attribute ingestion to cost modeling, and iterated on metrics until we hit SLA targets.  

A bar‑raiser would note my end‑to‑end ownership, deep technical dive into policy evaluation mechanics, quantified impact (12 % → 1 %, $18K saved), and learning loop: after a failed rollout I added a fallback policy cache to prevent service disruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
