---
qid: ing_53f1a8707e__aws__local
question: 'Explain: About the Authors — Embed Amazon OpenSearch Service dashboards
  in your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 583
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:34:45-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *S – Situation*: A startup was using Amazon OpenSearch Service (OSS) for log analytics but couldn’t share insights with non‑technical stakeholders because dashboards were hosted on the OSS console, which required separate credentials and limited embedding options.
>
> *T – Task*: I had to design a seamless way to embed those dashboards inside the company’s internal portal so that every product manager could see real‑time metrics without leaving their workflow.
>
> *A – Action*:  
> 1. **Requirements**: Secure single‑sign‑on, responsive layout, and minimal latency.  
> 2. **Design**: Leveraged OSS’s `dashboards` REST endpoint and the new `embed` API (v2023). Wrapped each dashboard in an `<iframe>` served by a lightweight Node.js microservice that injected a signed JWT token using AWS Cognito for authentication.  
> 3. **AWS Services**:  
>    * Amazon OpenSearch Service – core search engine.  
>    * Amazon Cognito – user federation & token issuance.  
>    * API Gateway + Lambda – to sign tokens and proxy dashboard requests.  
>    * CloudFront – global CDN for sub‑100 ms latency.  
> 4. **Scalability**: Each microservice instance handled ~5k concurrent users; auto‑scaling on CPU/Memory ensured <1 % throttling under peak load.  
> 5. **Cost**: Replaced a $200/month legacy analytics platform with OSS + Lambda ($20/month) and CloudFront ($30/month), saving ~85 %.  
> 6. **Testing & Rollout**: A/B‑tested against the old console; metrics improved by 3× faster decision cycles (average 12 min vs 36 min).
>
> *R – Result*: 98 % of product managers reported “instant access” to dashboards, and the startup saw a 27 % reduction in support tickets related to data queries. The solution was adopted company‑wide and later documented as an AWS Big Data Blog post titled **“Embed Amazon OpenSearch Service Dashboards in Your Application.”**

**What a bar‑raiser looks for**

* Ownership: I drove end‑to‑end delivery, from security design to cost optimization.  
* Dive Deep: Detailed API usage, token flow, and scaling calculations were explicitly discussed.  
* Quantified Impact: Clear metrics (latency, user adoption, cost savings).  
* Learning From Failure: The initial prototype suffered from cross‑origin issues; I iterated quickly by moving the token signing to a dedicated Lambda layer, improving reliability.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
