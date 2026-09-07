---
qid: ing_012845bf25__aws__local
question: 'Explain: Permission-Aware Retrieval — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 464
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:07-05:00'
sources: []
---

**Permission‑Aware Retrieval – Knowledge Management**

*Situation:* At my last role I led a project to replace a legacy FAQ system that returned the same answer to every user, ignoring who had access to what data. The result was frequent compliance violations and an 18 % drop in user satisfaction.

*Task:* Build a retrieval layer that delivers content only to users with the appropriate permissions while keeping latency under 200 ms for 95 % of requests.

*Action:*  
- **Design:** Store documents in **Amazon DynamoDB** with a `permissions` attribute (list of IAM roles). Use **AWS Lambda** as a lightweight authorizer that reads the user’s Cognito identity and filters items via a GSI on `userId`. Cache hot queries in **ElastiCache‑Redis** to reduce read traffic.  
- **Search:** Index documents in **Amazon OpenSearch Service**, using role‑based access policies (fine‑grained) so search returns only allowed hits.  
- **Security & Compliance:** Leverage **AWS KMS** for encryption at rest and enforce TLS for all endpoints. Auditing is handled by **CloudTrail** and **GuardDuty** to detect anomalous reads.  
- **Scalability/Availability:** Lambda scales automatically; DynamoDB’s auto‑scaling keeps throughput consistent. OpenSearch clusters are multi‑AZ with cross‑region replicas, giving 99.99 % availability.

*Result:* The new system cut unauthorized access incidents by **92 %**, improved NPS from 72 to 88, and reduced average query latency from 350 ms to **145 ms**. We also saved $12k/month on storage by shifting from S3‑based static pages to DynamoDB + OpenSearch.

**Leadership Principles Anchored:**  
- *Customer Obsession* – Delivering the right answer to the right user improves trust.  
- *Ownership & Dive Deep* – I drove the entire stack, from data modeling to security audit, ensuring end‑to‑end responsibility and deep technical insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
