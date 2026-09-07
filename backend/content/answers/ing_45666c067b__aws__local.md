---
qid: ing_45666c067b__aws__local
question: 'Explain: Pattern: Naive RAG — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 390
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:41-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to prototype an AI‑powered FAQ bot for a retail client. The team used *Naïve Retrieval‑Augmented Generation (RAG)*: we simply indexed all product docs in Elasticsearch, queried them with the user’s question, and fed the top 3 snippets into GPT‑4 via OpenAI API.  
**Action** – Design & Implementation  
1. **Data ingestion** – Lambda + S3 to parse PDFs → DynamoDB for metadata, Elastic Search (OpenSearch) for full‑text indexing.  
2. **RAG pipeline** – API Gateway → Lambda → OpenSearch query → embed snippets into prompt → OpenAI completion.  
3. **Cost & scaling** – Autoscaled Lambda with provisioned concurrency; OpenSearch domain with multi‑AZ and 20 GB storage, yielding <0.5 $/10k queries.  
4. **Observability** – CloudWatch metrics for latency (avg 650 ms) and error rate (<1%).  
**Result** – Within two weeks the bot answered 92% of user intents correctly, cutting support tickets by 18 % (≈400 tickets/month). The prototype was green‑lit for production, saving the client ~$120k/yr in support labor.  
**Reflection** – I learned that naïve RAG is fast to ship but brittle at scale; next iteration will add semantic similarity via SageMaker embeddings and a fallback rule engine.  

> **Leadership Principles Anchored**: *Customer Obsession* (improved user experience), *Ownership* (end‑to‑end delivery), *Dive Deep* (metrics & trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
