---
qid: ing_c7a9a9972c__aws__local
question: 'Explain: Data & context strategy — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 474
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:36-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team at a fintech startup, we were asked to build a *Meeting Assistant* that could surface relevant documents and insights before every executive call. The data was siloed across Confluence, Salesforce, and an on‑premise SQL server; context lagged behind the meeting agenda by 3–4 days.

**Task (T)**  
Design a scalable, real‑time pipeline that ingests all data sources, extracts intent from agendas, ranks documents, and surfaces them in a Slack bot with minimal latency—while keeping costs under $5K/month.

**Action (A)**  

1. **Data Ingestion** – Used *AWS Glue* to crawl Confluence and Salesforce APIs on a nightly schedule; added an *S3 EventBridge* trigger for the on‑premise SQL server via *Direct Connect*.  
2. **Contextual Understanding** – Deployed *Amazon Comprehend Custom Entities* to tag agenda items, then ran a *Lambda* function that queries *OpenSearch* (managed by *Amazon OpenSearch Service*) using those tags.  
3. **Ranking & Delivery** – Leveraged *SageMaker Endpoint* (pre‑trained BERT) to compute relevance scores; results stored in an *ElastiCache Redis* cache for sub‑200 ms retrieval. The Slack bot, built on *API Gateway + Lambda*, pulls the top 5 docs and sends a concise summary.  
4. **Cost & Availability** – Reserved instances for OpenSearch (40% savings), auto‑scaling for Lambdas, and multi‑AZ deployment ensured >99.9 % uptime.

**Result (R)**  
Within two weeks of launch, executive satisfaction rose from 68 % to 92 %, meeting prep time dropped by **35 %**, and we stayed within the budget, saving $1.2K/month.  

*Leadership Principles*: **Customer Obsession** – focused on exec pain points; **Ownership** – drove end‑to‑end solution; **Dive Deep** – engineered a robust data pipeline; **Bias for Action** – iterated quickly with real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
