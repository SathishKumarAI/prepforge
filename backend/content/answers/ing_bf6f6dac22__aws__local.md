---
qid: ing_bf6f6dac22__aws__local
question: 'Explain: 🧭 Prompt Engineering & Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 391
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:07-05:00'
sources: []
---

**Prompt & Context Engineering – A customer‑centric approach**

*Leadership Principles:* **Customer Obsession** + **Dive Deep**  
*Situation*: I led a product team that needed to reduce the time our AI assistant spent re‑querying users for missing context in a large e‑commerce knowledge base.  
*Task*: Build an automated system that enriches prompts with relevant product, user and session data before they hit the LLM.  
*Action*:  
1. **Data pipeline** – Ingested 5 M daily logs into *Amazon Kinesis Data Streams*, processed via *Lambda* to extract intent, SKU, and prior interactions.  
2. **Context store** – Persisted enriched vectors in *Amazon DynamoDB* (event‑driven TTL) and indexed with *OpenSearch* for sub‑second semantic lookup.  
3. **Prompt generator** – A lightweight *AWS Fargate* container ran a templating engine that merged user context, product metadata, and LLM prompt templates before forwarding to *Amazon Bedrock* or *OpenAI API*.  
4. **Observability** – Tracked request latency and answer quality via *CloudWatch Metrics*; achieved 92 % reduction in user follow‑up queries (↓ 3 min avg per session).  

*Result*: Cut response time from 8 s to 2.5 s, improved NPS by 12 points, and saved $1.4 k/month on API calls.  
*Bar‑raiser focus*: Demonstrated ownership (end‑to‑end pipeline), deep dive into data flows, quantified impact, and post‑deployment iteration based on real‑world user feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
