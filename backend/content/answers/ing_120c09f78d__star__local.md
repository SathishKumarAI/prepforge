---
qid: ing_120c09f78d__star__local
question: 'Explain: Performance: — AI Agents Explained - by Sairam Sundaresan and
  Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 408
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:39-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a small research lab that had just received a grant to prototype an autonomous customer‑support agent for a fintech client. Their existing chatbot handled only scripted queries and their support ticket volume had risen by 40 % during peak season, causing response times to slip past the 2‑minute SLA.

**Task** – My goal was to design an AI agent that could understand open‑ended user requests, retrieve relevant policy documents in real time, and generate concise, context‑aware replies—while keeping latency under 1.5 seconds per request so we met the SLA and maintained a high throughput (≈200 queries/min).

**Action** – I started by implementing a retrieval‑augmented generation pipeline using LangChain with an ElasticSearch vector store seeded from their policy corpus. To keep inference fast, I distilled the GPT‑4 model down to a 3B parameter T5 variant and wrapped it in FastAPI behind a GPU‑accelerated edge server. For performance monitoring I added Prometheus metrics: request latency, token count, cache hit rate, and a custom “semantic relevance” score derived from cosine similarity between user query embeddings and retrieved document snippets. When the latency spike threshold was breached, an automated circuit breaker would fall back to a lightweight rule‑based fallback engine.

**Result** – The new agent achieved an average response time of 1.2 seconds, cutting SLA violations by 78 % compared to the legacy bot. Throughput doubled from 100 to 250 queries per minute without additional hardware. Moreover, our semantic relevance metric improved from 0.65 to 0.83, correlating with a 35 % reduction in escalation tickets. I learned that coupling lightweight retrieval with model distillation and real‑time telemetry is key to building high‑performance AI agents that can scale under production load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
