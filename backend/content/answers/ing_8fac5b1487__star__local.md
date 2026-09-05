---
qid: ing_8fac5b1487__star__local
question: 'Explain: Data & context strategy — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:08-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our compliance team needed real‑time fraud detection powered by an LLM. The existing pipeline fed raw transaction logs to the model in batches, causing 2–3 hour latency and stale context.

**Task:**  
I had to design a data & context strategy that would expose a low‑latency “LLM gateway” and a scalable serving platform so analysts could query the model with up-to-date transaction details and regulatory metadata within seconds.

**Action:**  
First, I built an ingestion microservice using Kafka Streams to stream every transaction into a Redis cache keyed by user ID. I wrapped the LLM in a lightweight FastAPI gateway that pulled context from Redis, enriched it with policy rules stored in PostgreSQL, and used LangChain’s prompt template to generate a query. For serving, I containerized the model with Triton Inference Server behind an NGINX load balancer, auto‑scaling on CPU usage via Kubernetes HPA. I also implemented a “context cache” that persisted recent conversation turns for each user in a DynamoDB table to avoid re‑generating prompts.

**Result:**  
Latency dropped from 2 hours to under 300 ms per request, and fraud detection accuracy improved by 12 % because the model had fresh context. The platform now supports 10k concurrent users with 99.9 % uptime. I learned that decoupling data ingestion, enrichment, and inference, and using a dedicated gateway, is key to scaling LLMs in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
