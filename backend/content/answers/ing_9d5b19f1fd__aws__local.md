---
qid: ing_9d5b19f1fd__aws__local
question: 'Explain: Resulting context — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 376
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:44-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a migration of an on‑prem monolith that stored all telemetry in a single PostgreSQL cluster to a cloud‑native microservice architecture on AWS. The business needed *real‑time* insights for 10 000+ devices while keeping data isolation per service.

**Action**  
I championed the **“Database per Service”** pattern, giving each microservice its own Aurora Serverless cluster (PostgreSQL) and an EventBridge event bus for cross‑service communication.  
- *Ownership*: I owned the end‑to‑end design, from schema isolation to cost optimization.  
- *Dive Deep*: Conducted a CAPACITY analysis; each cluster auto‑scales between 2–64 ACUs, keeping the 95th percentile latency under **120 ms** and the total monthly cost down by **35 %** versus a shared DB.  
- *Bias for Action*: Deployed with blue/green Canary releases via CodeDeploy to avoid downtime.  
- *Invent & Simplify*: Used AWS Secrets Manager + Parameter Store for secure, per‑service credentials, eliminating hardcoded secrets.

**Result**  
Post‑migration, query latency dropped from **750 ms** to **120 ms**, and the system handled a 3× traffic surge without performance loss. Operational overhead decreased by **40 %** because each team could manage its own database lifecycle. The architecture now supports rapid feature rollouts with minimal risk of data bleed‑through, directly improving customer satisfaction scores from 4.2 to 4.7/5.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
