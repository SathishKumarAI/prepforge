---
qid: ing_afc6435f2d__aws__local
question: 'Explain: Building a Chat Agent with Function Calling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 498
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:51-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to launch a real‑time customer support chatbot that could invoke internal business APIs (e.g., order status, ticket creation) using OpenAI’s function‑calling feature. The goal was to reduce average handling time from 8 min to under 2 min while keeping SLA ≥ 99.5%.

**Action**  
I designed a serverless architecture:  

| Layer | Service | Reasoning |
|-------|---------|-----------|
| Ingress | API Gateway + Lambda (Python) | Zero‑cap, auto‑scale, 1 ms cold start with provisioned concurrency. |
| Orchestration | Step Functions | Handles multi‑step calls, retries, and fallback to human agent. |
| AI | OpenAI GPT‑4 via AWS SDK | Function calling payload built from Lambda; results parsed in the same function. |
| Backend APIs | API Gateway + DynamoDB (global tables) | Low latency reads/writes with multi‑region replication for 99.9 % availability. |
| Monitoring | CloudWatch + X-Ray | Traces end‑to‑end latency, error rates, and cost per request. |

I implemented a **“function registry”** in SSM Parameter Store so new capabilities could be added without redeploying code—exemplifying *Invent & Simplify*.

**Result**  
- Avg. handling time dropped to 1.3 min (−84 %).  
- First‑contact resolution rose from 55 % to 78 %.  
- Monthly cost remained <$5k, a 30 % reduction vs the legacy monolith.

**Reflection**  
I learned that function‑calling demands strict schema validation; a missing field caused 12 % of failures initially. Adding runtime checks and unit tests reduced errors by 90 %. I’ll continue to *Dive Deep* into latency traces to shave another 200 ms per request.

> **Bar‑raiser cues:** Ownership (end‑to‑end design), depth (service trade‑offs, cost/latency calculations), quantified impact (metrics above), and proactive learning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
