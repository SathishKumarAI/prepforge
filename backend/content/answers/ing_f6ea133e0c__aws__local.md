---
qid: ing_f6ea133e0c__aws__local
question: 'Explain: Security and Permissions — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 437
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:59-05:00'
sources: []
---

**Answer – Amazon‑style**

*Leadership Principles:* **Ownership**, **Dive Deep**  

**Situation:** I was tasked to build a high‑traffic URL‑shortening microservice (TinyURL) that had to protect user data while staying cost‑effective.

**Task:** Define the security model, enforce permissions, and design for scale.

**Action:**

1. **Identity & Access Management**  
   * Each API gateway endpoint is protected by an IAM authorizer that validates a short JWT issued by Cognito (`tinyurl_user`).  
   * Fine‑grained resource policies on DynamoDB tables (user IDs as partition keys) ensure *least privilege*—users can only read/write their own URLs.  

2. **Encryption & Network Controls**  
   * Data at rest: DynamoDB SSE‑KMS with a customer‑managed CMK.  
   * In transit: HTTPS via API Gateway, WAF to block OWASP Top‑10 attacks and rate‑limit 100 req/min per IP.  

3. **Audit & Monitoring**  
   * CloudTrail logs every IAM action; Athena queries detect anomalous patterns (e.g., >50 new URLs in <5 min).  
   * Lambda “audit” job runs nightly, flagging orphaned keys and cleaning up expired links.

4. **Scalability / Cost**  
   * Serverless stack: API Gateway → Lambda (Python) → DynamoDB (on‑demand).  
   * Estimated 1 M requests/day → < $15/month on AWS free tier + 10 % buffer for traffic spikes.  

**Result:** Deployed in 3 weeks; first month saw 2 M active URLs with zero security incidents, and a 99.999% availability SLA achieved by design.

*Bar‑raiser notes:* clear ownership of IAM roles, deep dive into encryption & WAF rules, quantified cost/traffic metrics, and post‑mortem plan for future scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
