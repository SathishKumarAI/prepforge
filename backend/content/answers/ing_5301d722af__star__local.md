---
qid: ing_5301d722af__star__local
question: 'Explain: Frequently asked questions — Pydantic Logfire: AI Observability
  for LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 352
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:14-05:00'
sources: []
---

**Situation** – In my last role I was leading the monitoring stack for a customer‑facing chatbot built on GPT‑4. The production latency had spiked from 350 ms to over 1.2 s after we added a new RAG pipeline, and our SLA promised <500 ms response time.

**Task** – I needed to surface where in the LLM request/response flow the delays were happening, correlate them with user intent and document anomalies so that data scientists could iterate on the retrieval model without breaking the live service.

**Action** – I introduced Pydantic Logfire as our structured logger. First, I defined a `ChatEvent` schema capturing fields like `model`, `prompt_length`, `retrieval_time`, `generation_tokens`. Using Logfire’s async client I streamed events to ElasticSearch and Grafana dashboards in real time. Then I added a middleware that wrapped the RAG call and generated a log entry before and after each retrieval step, tagging them with correlation IDs. Finally, I wrote a small aggregation query that plotted average latency per intent type and flagged any spike >30 % over baseline.

**Result** – The dashboards revealed that most of the slowdown came from the document ranking stage, not generation. By tuning the BM25 parameters we cut retrieval time by 40 %, bringing overall latency back to 320 ms on average. The structured logs also reduced debugging time from hours to minutes, and I documented a “latency anomaly” playbook that is now part of our incident response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
