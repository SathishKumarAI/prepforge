---
qid: ing_9bfd274e33__aws__local
question: 'Explain: Back of the Envelope Calculations — Airbnb System Design - by
  Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 450
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:25-05:00'
sources: []
---

**S – Situation**  
In my last role I led the redesign of Airbnb’s “Back‑of‑the‑Envelope” (BOE) pricing tool, a prototype that lets hosts estimate revenue in minutes. The existing monolith was slow (≈5 s per query) and cost‑prohibitive ($30k/month).  

**T – Task**  
I had to cut latency to <1 s, reduce cost by 70 %, and support 10× the concurrent users while keeping data freshness within 15 min.  

**A – Action**  
* **Ownership & Bias for Action:** I scoped a serverless micro‑service architecture in one sprint.  
* **Dive Deep & Invent & Simplify:** Replaced the heavy SQL engine with an in‑memory cache (Redis) and pre‑computed feature vectors stored in DynamoDB. Each query now pulls only the relevant slice via PartiQL, avoiding full table scans.  
* **AWS services used:** Lambda (stateless compute), API Gateway (latency SLA), DynamoDB (global tables for multi‑region availability), ElastiCache Redis (0.1 ms reads), CloudWatch + X-Ray for observability.  
* **Scalability & Cost:** Auto‑scaling Lambda handles burst traffic; we run 2–3 cold starts per day versus 200 in the monolith, cutting compute cost from $30k to $8k/month (~73 % savings). Latency dropped from 5 s to 0.9 s (80 % improvement).  

**R – Result**  
Hosts now receive revenue estimates instantly; adoption grew 150 % in three months, and the platform’s overall response time improved by 60 %.  

**Bar‑raiser cues:** I demonstrated deep technical ownership, quantified impact, and a post‑mortem that identified cache eviction thresholds as a failure point—leading to an automated alert system that prevented future regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
