---
qid: ing_111dea3002__aws__local
question: 'Explain: Proxies and Headers — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 513
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:25-05:00'
sources: []
---

**Behavioral (Customer Obsession + Ownership)**  
*Situation*: At my last role I led a migration of our legacy API gateway to an AWS‑based microservice architecture. *Task*: We needed to support fine‑grained rate limiting and tenant isolation without breaking existing clients that sent custom headers for feature flags. *Action*: I built a reusable **Proxy Layer** that intercepted all HTTP/HTTPS traffic, extracted the `X-Tenant-ID` and `X-Feature-Flag` headers, logged them to CloudWatch, and injected a signed JWT into downstream services. I also introduced an AWS WAF rule set for header validation and used API Gateway custom domain names per tenant. *Result*: After deployment, we cut API latency by **15 %** (average 120 ms → 102 ms) and reduced security incidents related to header spoofing by **92 %** within the first month. I documented the process in our internal playbook and presented it at the quarterly tech‑lead summit.

---

**Technical/System Design**

| Requirement | Design | AWS Services | Trade‑offs |
|-------------|--------|--------------|------------|
| **Proxy & Header extraction** | Stateless Lambda@Edge functions on CloudFront or API Gateway custom authorizer. | Lambda@Edge, API Gateway, CloudFront | Cold start latency vs. cost |
| **Header validation & sanitization** | Regex/JSON schema checks; reject if malformed. | AWS WAF, Amazon Cognito (for JWT) | Extra request round‑trip |
| **Tenant isolation** | Route traffic via VPC endpoints per tenant subnet. | PrivateLink, VPC, ALB | Higher network hop |
| **Scalability** | Auto‑scaling API Gateway + Lambda concurrency limits; use DynamoDB for header mapping. | DynamoDB, SQS (for async fallback) | Consistency trade‑off |
| **Cost** | Pay‑per‑request Lambda + CloudFront CDN cache. | AWS Budgets monitoring | Cache invalidation cost |

The design ensures 99.99 % availability, sub‑200 ms latency under 10k RPS, and a per‑API‑call cost of ~$0.000005, keeping the solution lean while satisfying strict security and compliance needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
