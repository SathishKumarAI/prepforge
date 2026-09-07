---
qid: ing_4ee9264cb1__aws__local
question: 'Explain: Multi-Cloud Secrets Management Platform — Uber Engineering \u2014
  Where the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 382
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:52-05:00'
sources: []
---

**Situation & Task**  
At Uber I led a cross‑team effort to replace a monolithic secrets vault that failed to scale across our on‑prem, GCP and Azure environments. The goal was a unified, audit‑ready platform that could be queried in <5 ms while keeping 99.999% availability.

**Action (Technical Design)**  
I scoped the requirements: fine‑grained RBAC, automatic key rotation, zero‑trust network paths, and immutable audit logs. I chose **AWS Secrets Manager** + **KMS** for key storage, wrapped with a custom **API Gateway** exposing a *multi‑cloud proxy* that translated secrets requests to the appropriate provider’s SDK (GCP Secret Manager, Azure Key Vault). A **Lambda layer** handled encryption/decryption centrally using KMS keys; this kept latency low and avoided cross‑region traffic. I added an **SQS queue** for rotation events and a **CloudWatch alarm** feeding into an Auto Scaling group of Lambda functions to guarantee 99.999% uptime.

**Result**  
Deployment cut secrets access time from 150 ms to 4 ms (a 97% improvement). The new platform reduced manual key‑rotation incidents by 90% and lowered operational cost by $120K annually through consolidated billing and eliminated vendor lock‑in.  

**Reflection**  
I owned the entire lifecycle, from requirement gathering to post‑mortem. By diving deep into each cloud’s SDK I uncovered subtle latency spikes that would have crippled our latency SLA. The bar‑raiser expected this level of ownership, measurable impact, and a lesson learned: always prototype with real traffic before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
