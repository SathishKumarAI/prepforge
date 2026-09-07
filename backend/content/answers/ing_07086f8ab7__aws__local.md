---
qid: ing_07086f8ab7__aws__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 419
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:42:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While leading a cross‑functional team that migrated our OAuth‑2.0 gateway to AWS Cognito, we discovered that many downstream services were still using legacy “resource owner” URLs as part of the access token scope. The result was ambiguous permissions and a 12 % increase in authorization failures during peak traffic.  
> **Task:** I had to clarify the terminology introduced by RFC 8707—*Resource Indicators*—and redesign our token‑validation flow so that each service could explicitly declare which resource it was protecting.  
> **Action:**  
> * Defined a **resource indicator** as an opaque URI that identifies the protected resource (e.g., `https://api.example.com/orders`).  
> * Updated our Cognito custom token claims to include this URI and modified the API Gateway authorizer Lambda to validate the claim against the incoming request’s host+path.  
> * Leveraged **AWS Secrets Manager** for storing per‑resource access policies, **Amazon DynamoDB** for quick lookup, and **CloudWatch Logs** for audit trails.  
> * Conducted a load test (10 k RPS) to confirm that the new flow introduced <5 ms latency and kept 99.9 % availability under burst conditions.  
> **Result:** Authorization errors dropped by 84 %, SLA compliance improved from 96 % to 99.7 %, and we saved ~$15K/month in reduced throttling costs.  

**Leadership Principles Highlighted**

* *Customer Obsession* – eliminating friction for developers consuming our APIs.  
* *Ownership & Dive Deep* – redesigning the token schema, measuring impact, and iterating based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
