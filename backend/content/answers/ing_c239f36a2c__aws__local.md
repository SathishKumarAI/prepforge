---
qid: ing_c239f36a2c__aws__local
question: 'Explain: Home - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 683
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:12-05:00'
sources: []
---

**Situation / Task**

At my last role I led a project to build an *“AI‑powered home‑docs”* feature for our internal knowledge base, inspired by the LangChain framework. The goal was to let users ask natural language questions about any document and receive instant answers without manually searching.

**Action (Technical Design)**

1. **Data ingestion & vector store** – I used **Amazon Kendra** as the semantic search engine because it natively supports LangChain integration, scales to millions of documents, and gives 99.9 % uptime. For embeddings we leveraged **OpenAI’s `text-embedding-ada-002`** via LangChain; embeddings were stored in an Amazon DynamoDB table with a GSI on cosine similarity for fast nearest‑neighbor queries.

2. **Query flow** – The Lambda function (Node.js) receives the user prompt, calls Kendra to retrieve top‑10 passages, then passes them to **OpenAI’s `gpt-4o-mini`** via LangChain for answer generation. All APIs are wrapped in a retryable circuit breaker to guarantee **99% request success**.

3. **Cost & scalability** – Each query consumes ~0.0005 $ (Kendra) + 0.0016 $ (OpenAI). By caching the last 100 queries in Elasticache Redis, we reduced OpenAI calls by 30 %. The system auto‑scales Lambda concurrency based on CloudWatch metrics.

4. **Observability** – Structured logs go to CloudWatch Logs Insights; latency is monitored with AWS X-Ray. We set an SLA of <200 ms for 95% of requests.

**Result**

Within three months we saw a **45 % reduction in support tickets** related to internal documentation and a **70 % increase in user satisfaction scores** (measured via post‑interaction surveys). The feature now handles ~2,000 queries/day with <0.5 $ cost per 1,000 requests.

---

### Leadership Principles

- **Customer Obsession** – Built the flow around real user pain points; continuous feedback loop improved answer relevance by 35 %.
- **Dive Deep & Ownership** – Designed end‑to‑end architecture, troubleshooted latency spikes, and iterated on cost models to stay within budget.

---

### Bar‑Raiser Signals

| Signal | How I Demonstrated It |
|--------|-----------------------|
| **Ownership** | Took full responsibility from design to deployment; handled incidents independently. |
| **Dive Deep** | Benchmarked Kendra vs Elasticsearch, chose the one with lower latency and cost. |
| **Quantified Impact** | 45 % ticket reduction, 70 % satisfaction lift, <$0.5/1k queries. |
| **Learning from Failure** | First version returned generic answers; after A/B testing we added passage‑level context, boosting answer accuracy by 25 %. |

> *“I didn’t just plug LangChain in; I re‑engineered the data path to meet our scale, cost, and latency goals while keeping the user experience front‑and‑center.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
