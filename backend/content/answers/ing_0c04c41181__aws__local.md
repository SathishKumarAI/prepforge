---
qid: ing_0c04c41181__aws__local
question: 'Explain: Addressing the Limitations — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 512
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:55-05:00'
sources: []
---

**S – Situation**  
In my last role I led the redesign of a public URL‑shortening service that had grown to 1 M requests/day. The existing monolith was hitting latency spikes (500 ms) and couldn’t support our planned 10× traffic surge for an upcoming marketing campaign.

**T – Task**  
I owned the end‑to‑end architecture: reduce latency, guarantee 99.9 % availability, keep cost < $0.05 per request, and enable a simple “create/lookup” API that could scale horizontally.

**A – Action**  
1. **Service decomposition** – split into *API Gateway → Lambda* for request routing, *DynamoDB* for key‑value storage, and *S3 + CloudFront* for static analytics pages.  
2. **Idempotent ID generation** – used a deterministic base‑36 hash of the original URL + a 6‑char random suffix; collision rate < 1e‑12 verified via unit tests.  
3. **Caching layer** – Global *ElastiCache Redis* cluster with read replicas to serve hot URLs, reducing DynamoDB reads by ~80 %.  
4. **Autoscaling & Multi‑AZ** – Lambda provisioned concurrency + ALB health checks; DynamoDB auto‑scaling on throughput and S3 cross‑region replication for disaster recovery.  
5. **Cost controls** – reserved capacity for Lambda (70 % discount) and DynamoDB tables (on‑demand to pay only when needed).  

**R – Result**  
- Latency dropped from 500 ms to 35 ms average, with 99.95 % under 50 ms.  
- Cost per request fell to $0.018, a 64 % reduction.  
- The system handled 15 M requests/day during the campaign without any outage.  

**Learnings**  
Ownership drove me to validate every trade‑off (e.g., caching vs. consistency) and “Dive Deep” into AWS pricing models. I documented failure scenarios in an incident playbook, which reduced mean time to recovery from 12 min to < 2 min after a simulated Lambda cold start.  

*Leadership Principles:* **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
