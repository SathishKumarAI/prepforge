---
qid: ing_0e7fd3f5b7__aws__local
question: What is REST? — REST vs GraphQL - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 415
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:28-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In my last role I led the migration of our recommendation engine’s API from a legacy SOAP stack to a modern, scalable interface so that we could serve 1M+ requests/day with <200 ms latency.  
> **Task:** I had to decide between REST and GraphQL for the new endpoint while keeping cost and operational simplicity in mind.  
> **Action:**  
> *Conducted a **Dive Deep** analysis of traffic patterns, payload sizes, and client needs.*  
> 1. **REST** (API Gateway + Lambda) gives us fine‑grained throttling, caching (CloudFront), and built‑in versioning—ideal for our high‑volume, read‑heavy recommendation calls.  
> 2. **GraphQL** (AppSync) reduces over‑fetching but introduces a complex resolver layer; it scales well for variable client queries but adds ~30 % cold‑start overhead on Lambda and requires more IAM permissions.  
> I chose REST because our clients were mostly mobile/web apps that requested deterministic recommendation sets, and we could use **Caching** to cut downstream Lambda invocations by 70 %.  
> **Result:** Post‑migration, request latency dropped from 350 ms to 180 ms (50 % improvement), cost fell from $12K/month to $7.5K/month, and SLA compliance rose to 99.99 %.  
> **Learnings:** Ownership meant validating the trade‑off with real telemetry; bias for action was exercised by rolling out a phased migration that preserved uptime.  

**Leadership Principles Highlighted:** *Customer Obsession* (tailoring API design to client needs), *Ownership* (end‑to‑end delivery and cost control).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
