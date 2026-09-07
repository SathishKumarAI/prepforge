---
qid: ing_4c408364e2__aws__local
question: 'Explain: Add custom spans — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 456
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:30-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led the rollout of an AI‑evaluation platform that tracked model quality in real time. The engineering team was using **LangWatch** and **Langfuse** to instrument prompts, but we couldn’t correlate downstream metrics (latency, cost) with specific user flows because custom spans were missing.

**Action (A)**  
I owned the feature, scoped it as a single‑page “Custom Span Builder” in our web UI.  
1. Implemented a **Lambda** that ingests span definitions from DynamoDB and writes them to an S3 bucket.  
2. Updated the Langfuse SDK wrapper so each request pulls the latest spans via an API Gateway endpoint, caching in Redis for 5 s.  
3. Used CloudWatch Logs Insights to aggregate span data; queried with Athena to surface cost per span.  
4. Added automated tests that validate span boundaries against real‑world latency buckets.

**Result (R)**  
Within two weeks of deployment, engineers could tag spans for 92 % of production traffic. Cost attribution improved from “unknown” to **$0.02/req accuracy**, enabling us to reduce overall spend by 18 %. The feature was adopted across three services and saved the ops team ~12 h/month in debugging time.

**Key Learnings (L)**  
- *Ownership*: Took end‑to‑end responsibility, from UI to backend.  
- *Dive Deep*: Benchmarked Lambda cold starts and Redis TTLs; chose 5 s cache to balance freshness vs cost.  
- *Customer Obsession*: Delivered a tool that directly cut customer‑visible latency and billable usage.

**Leadership Principles Highlighted**  
- **Ownership** – spearheaded the end‑to‑end solution.  
- **Dive Deep** – profiled services, tuned caching, quantified impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
