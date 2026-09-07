---
qid: ing_cdf4a818c3__aws__local
question: 'Explain: Study map — Backend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 430
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:44-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building the *Study Map* – a dynamic visual guide that shows students how course topics interlink and where they should focus next. The goal was to reduce drop‑out rates by 15% and increase engagement scores by 20%.

**Action (Technical)**  
I owned the end‑to‑end design:  

- **Data Layer:** Used *Amazon DynamoDB* with a composite key of `StudentID#TopicID` for low‑latency reads/writes.  
- **Business Logic:** Implemented serverless micro‑services in *AWS Lambda* (Python 3.11) triggered by *API Gateway*.  
- **Orchestration & Queueing:** Leveraged *Amazon SQS* to batch heavy graph computations, which run asynchronously in a *Fargate* container pool.  
- **Real‑time Updates:** Employed *WebSocket API Gateway* + *SNS* to push incremental changes to the UI.  

**Result** – *Customer Obsession & Deliver Results*  
Within 6 months:  
- Drop‑out rates fell by **18%** (vs target 15%).  
- Engagement scores rose from **72%** to **91%**.  
- Cost per active user dropped from $0.75 to **$0.32** due to the serverless, pay‑per‑invocation model.

**Reflection – Bar‑raiser Expectations**  
I demonstrated ownership by owning the whole stack and driving cross‑team alignment. My “Dive Deep” approach surfaced a DynamoDB hot‑partition issue; I redesigned the key schema, saving $1k/month. Learned that early cost modeling prevents over‑provisioning in a highly variable load scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
