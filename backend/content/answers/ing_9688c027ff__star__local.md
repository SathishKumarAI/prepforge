---
qid: ing_9688c027ff__star__local
question: 'Explain: Real-time cost tracking — Pydantic Logfire: AI Observability for
  LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 340
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:07-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our new chatbot that used an on‑prem LLM was exceeding the monthly GPU budget by ~30 % because we had no live view of inference costs. Stakeholders demanded a solution that could show cost per request in real time without adding latency.

**Task:**  
I needed to build a lightweight observability layer that would capture token usage, model version, and compute charges for each user query, then surface those metrics to the ops dashboard with sub‑second latency.

**Action:**  
I integrated Pydantic models into our request pipeline to validate payloads and automatically log inference metadata. Using Logfire’s structured logging, I emitted a single event per completion that included `prompt_tokens`, `completion_tokens`, `model_name`, and an estimated cost calculated from our cloud pricing API. On the backend, I set up a Kafka stream that ingested these logs, aggregated them in Redis Streams, and exposed a Prometheus endpoint for Grafana dashboards. To keep latency low, I off‑loaded the cost calculation to a worker pool so the main request thread only emitted the event.

**Result:**  
Within two weeks, we could see per‑request costs live on Grafana; the monthly GPU spend dropped from $12k to $8.4k— a 30 % reduction—while maintaining SLA compliance. I learned how lightweight schema validation and structured logging can turn raw LLM telemetry into actionable business metrics without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
