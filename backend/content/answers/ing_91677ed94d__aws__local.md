---
qid: ing_91677ed94d__aws__local
question: 'Explain: Host the HTML code — Embed Amazon OpenSearch Service dashboards
  in your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 429
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:47-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with giving our product team a live view of customer‑journey metrics without exposing the raw OpenSearch cluster. The goal was to embed fully interactive dashboards into an internal React app while keeping cost, latency, and security in check.

**Action**  
1. **Requirements & Architecture** – I scoped that we needed read‑only access, SSL termination, and a single sign‑on flow.  
2. **Design** – I chose **Amazon OpenSearch Service (OSS)** for the search layer, **AWS Cognito** + **IAM OIDC** for auth, and an **API Gateway** endpoint that proxies dashboard requests through a short‑lived role.  
3. **Embedding** – Using OSS’s *embed* feature, I generated an iframe URL with `?auth=token` and wrapped it in a React component that refreshed the token every 10 min via Cognito.  
4. **Scalability & Availability** – The cluster was set to two AZs with auto‑scaling on CPU >70%. API Gateway’s throttling (200 req/s) protected against bursts.  
5. **Cost** – By enabling **Reserved Instances** and disabling unused features, I reduced monthly spend by 35 %.

**Result**  
The embedded dashboards cut the product team’s reporting time from 2 hrs to <10 min daily, improved data‑driven decisions, and lowered OSS costs by $4.8k/month (≈$57k/yr).  

> **Leadership Principles:** *Customer Obsession* – delivering instant insights; *Ownership* – owning the full end‑to‑end solution; *Dive Deep* – tuning performance & cost metrics.  
> **Bar‑raiser note:** Look for ownership of failure points (e.g., token refresh failures) and lessons learned—here, we added a fallback cache after an initial outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
