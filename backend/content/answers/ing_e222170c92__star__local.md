---
qid: ing_e222170c92__star__local
question: 'Explain: Q: Design a system that lets a customer support agent answer questions
  using data from Zendesk, Salesforce, and an internal knowledge base.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 323
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:01:08-05:00'
sources: []
---

**Situation:**  
In my last role at a SaaS firm, our support team was drowning in fragmented data: tickets lived in Zendesk, customer histories were siloed in Salesforce, and our internal docs resided on an outdated SharePoint site. Agents often spent 20 % of their time hunting for the right information, leading to slow resolution times.

**Task:**  
I was tasked with building a unified query interface that would let agents pull relevant details from all three sources with a single click, reducing lookup time by at least 30 % and improving first‑contact resolution.

**Action:**  
I designed a microservice architecture using Node.js and TypeScript. A GraphQL gateway exposed a single schema; resolvers fetched data concurrently via the Zendesk REST API, Salesforce SOAP/REST endpoints, and an Elasticsearch cluster indexing our knowledge base. I added OAuth 2.0 for secure token handling and used Redis caching to keep latency below 200 ms per request. The UI was built in React with a “smart assistant” widget that auto‑suggested answers based on the ticket context.

**Result:**  
Post‑deployment, agents cut lookup time from 15 minutes to under 3 minutes—a 80 % reduction—and first‑contact resolution rose from 55 % to 72 %. I learned how to balance real‑time API calls with caching strategies and that a single, well‑designed GraphQL layer can dramatically simplify cross‑system integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
