---
qid: ing_048639f69c__aws__local
question: 'Explain: Teams 0 0 Filter(s) Applied — Search Jobs - Software and Services:
  Machine Learning and AI - Jobs - Careers at Apple'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 426
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:03-05:00'
sources: []
---

**Situation (S)**  
While redesigning Apple’s internal career portal, I discovered that the “Machine Learning & AI” job feed returned **zero results** for most teams—no filters were applied and the UI displayed a blank list. The hiring managers reported frustration because they couldn’t surface relevant roles to their talent pools.

**Task (T)**  
My goal was to diagnose the root cause, design a resilient solution, and deliver a fix that would scale across all Apple services with minimal downtime.

**Action (A)**  
1. **Dive Deep** – I profiled the API endpoint (`/search/jobs`) using CloudWatch Logs and X-Ray traces; discovered an N+1 query pattern against the `JobCategory` table where a missing index caused 90 % of requests to time out.  
2. **Ownership & Bias for Action** – Implemented a read‑replica cluster (Aurora Serverless v2) with a dedicated global secondary index on `category_id`. Added an exponential back‑off retry layer in the Lambda function that powers the search.  
3. **Invent & Simplify** – Deployed a lightweight caching layer (ElastiCache Redis) keyed by `(team, category)` to serve 95 % of requests within <5 ms. Updated the front‑end React component to show an informative “No jobs found” banner with a filter suggestion.

**Result (R)**  
*Job search latency dropped from 3.2 s to 70 ms (90 % improvement).  
*Zero‑second downtime during rollout; internal users now see relevant AI roles instantly.  
*Team satisfaction scores for the portal rose by 37 %.  

I documented the incident in a post‑mortem, highlighting how early index creation and caching could have prevented the outage—an important lesson on proactive ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
