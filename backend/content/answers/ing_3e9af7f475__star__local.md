---
qid: ing_3e9af7f475__star__local
question: 'Explain: Logs — Pydantic Logfire: AI Observability for LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 376
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:42-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we launched an AI‑powered fraud detection app that relied on a large language model for risk scoring. After the first month of production, our incident reports spiked: users complained about inconsistent scores and our ops team had no clear view into why the LLM behaved differently each run.

**Task** – I was tasked with building end‑to‑end observability so we could trace every request through the model, capture context, and surface actionable insights for both data scientists and DevOps without adding latency.

**Action** – I integrated Pydantic Logfire into our FastAPI pipeline. First, I defined a `RequestLog` schema that captured user ID, input text, token count, and a unique trace ID. Using Logfire’s async logger, each request emitted structured logs to an Elastic‑Search cluster. I then wrote a middleware that wrapped the LLM call, timing it, logging the prompt embeddings, and recording model metadata (token usage, GPU load). To surface anomalies, I set up a Kibana dashboard with alerts on sudden score variance or high latency, and built a small CLI tool that replayed logs to reconstruct the exact prompt‑response pair.

**Result** – Within two weeks we cut mean time to resolution for fraud‑score bugs from 3.5 days to under 30 minutes. The dashboard also revealed a 12 % drop in token usage after we tuned the prompt, saving us $2K/month on compute. I learned that structured, schema‑validated logs are the backbone of reliable AI ops and that observability is as much about data quality as it is about tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
