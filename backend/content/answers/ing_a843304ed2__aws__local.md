---
qid: ing_a843304ed2__aws__local
question: 'Explain: Project Reference (PROJECT_REF) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 414
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:18-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with replacing a legacy REST API that served ML‑model predictions for our recommendation engine. The goal was to expose the same functionality via **GraphQL** while keeping data in **Supabase** (PostgreSQL) and ensuring low latency for mobile clients.

**Action**  
1. **Architecture** – Built an **AWS AppSync** GraphQL layer that proxies to Supabase over a secure VPC endpoint.  
2. **Serverless logic** – Used **Lambda@Edge** to add authentication, rate‑limiting, and cache hits in CloudFront.  
3. **Model inference** – Deployed the trained model as a **SageMaker Endpoint**, invoked from Lambda, returning predictions in milliseconds.  
4. **Observability** – Instrumented with **CloudWatch Logs** and **X-Ray** to capture end‑to‑end latency; set up alerts for >200 ms spikes.

**Result**  
- Cut average response time from 350 ms (REST) to 80 ms (GraphQL).  
- Reduced infrastructure cost by 30% by leveraging serverless components.  
- Achieved 99.9% availability during a 6‑month production run.  

**Learnings & Bar‑raiser cues**  
*Ownership*: I drove the end‑to‑end migration, coordinating with security and data teams.  
*Dive Deep*: Investigated latency bottlenecks via X-Ray traces and tuned Lambda memory/timeout settings.  
*Quantified Impact*: Reported precise metrics (latency, cost savings).  
*Failure Insight*: Early CloudFront cache misconfig caused a 15 % spike; fixed by adjusting TTLs and adding custom headers.

**Leadership Principles**: *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
