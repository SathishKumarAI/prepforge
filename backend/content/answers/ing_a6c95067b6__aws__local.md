---
qid: ing_a6c95067b6__aws__local
question: 'Explain: Designing an authorization model — Designing an Authorization
  Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 718
total_tokens: 955
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:07-05:00'
sources: []
---

**Scenario (S)**  
I was hired as a Solutions Architect for a fintech startup that needed to expose 30+ micro‑services to partners while meeting PCI‑DSS and GDPR requirements. The core challenge: build an authorization model that scales to millions of requests per day, allows fine‑grained policy updates, and gives developers the flexibility to evolve without breaking existing contracts.

**Task (T)**  
Design a reusable, policy‑driven authorization service (“Cerbos‑style”) that:
- Enforces role‑based and attribute‑based rules at request time.
- Supports dynamic policy changes via CI/CD.
- Provides audit trails for compliance.
- Keeps latency under 15 ms per call.

**Action (A)**  
1. **Requirements & Constraints** – Gathered business rules, mapped them to *resource*, *action*, *subject* attributes; identified required data sources (user DB, partner contracts).  
2. **Architecture** – Chose a stateless Lambda + API‑Gateway entry point that forwards requests to an Amazon DynamoDB “Policy Store” and an in‑memory cache (Elasticache Redis) for hot policies.  
3. **AWS Services** –  
   - *Amazon Cognito* for identity federation.  
   - *AWS IAM & Cognito Identity Pools* for initial token issuance.  
   - *AWS Secrets Manager* to store policy templates securely.  
   - *DynamoDB Global Tables* for multi‑region replication (99.999% availability).  
4. **Policy Engine** – Implemented a custom rule engine in Go, leveraging the open‑source “Cerbos” core library, packaged into Lambda layers for reuse across services.  
5. **Scalability & Cost** –  
   - Cache hit rate 95 %, reducing DynamoDB reads by 80 %.  
   - Lambda concurrency auto‑scales; cost ≈ $0.0000167 per request → <$200/month at 10M calls/day.  
6. **Audit & Compliance** – Emitted JSON audit events to Kinesis Data Firehose → S3, then Athena for query; GDPR “right to be forgotten” achieved by TTL on policy records.  

**Result (R)**  
- Latency dropped from 120 ms to 12 ms (10× improvement).  
- Policy change rollout time reduced from days to minutes (CI/CD pipeline).  
- Compliance audit score rose to 100/100, eliminating a $500K potential penalty.

---

### Leadership Principles Highlighted
| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took end‑to‑end responsibility: from requirement gathering to deployment and monitoring. |
| **Dive Deep** | Analyzed latency bottlenecks, quantified cache hit ratios, and tuned DynamoDB provisioned throughput. |
| **Bias for Action** | Deployed a prototype in 3 days; iterated based on real traffic metrics. |
| **Deliver Results** | Achieved measurable performance gains and compliance success. |

---

### What a Bar‑Raiser Looks For  
- **Quantified Impact:** Clear metrics (latency, cost, audit score).  
- **Ownership & Depth:** Full ownership cycle + deep dive into caching, scaling, and compliance nuances.  
- **Learning from Failure:** Acknowledged initial 120 ms latency, iterated with cache, and documented lessons for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
