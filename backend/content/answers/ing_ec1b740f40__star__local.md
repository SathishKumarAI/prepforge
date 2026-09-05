---
qid: ing_ec1b740f40__star__local
question: 'Explain: Metrics — Pydantic Logfire: AI Observability for LLMs, Apps &
  RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 411
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:09-05:00'
sources: []
---

**Situation**  
I was leading a rapid‑prototype team building an LLM‑driven customer support bot for a fintech client. The SLA required 95 % of queries answered within 2 seconds, but early tests showed latency spikes and untracked errors during inference.

**Task**  
We needed to instrument the entire stack—LLM calls, retrieval‑augmented generation (RAG) pipelines, and downstream API responses—to collect actionable metrics in real time, so we could meet SLA targets and debug failures quickly.

**Action**  
I introduced Pydantic models for every data payload (request, response, cache hit/miss, token usage). Using Logfire’s structured logging, each model was automatically serialized to JSON logs that streamed into Grafana Loki. I added a custom `MetricsCollector` wrapper around the OpenAI client and the vector‑store fetcher; it emitted Prometheus metrics for latency buckets (0–500 ms, 500–1000 ms, >1s), error counts, and token consumption per user segment. For RAG, I logged retrieval rank distribution to detect drift in relevance. Finally, I set up alerting rules: if the 95th percentile latency exceeded 2 s or cache hit rate dropped below 80 %, a PagerDuty incident would fire.

**Result**  
Within two weeks we reduced average latency from 1.8 s to 1.4 s and increased cache hits from 65 % to 82 %. SLA compliance rose to 97 %. The observability stack also cut debug time by 60 %, allowing us to triage a sudden drop in relevance scores within minutes. I learned that coupling strict schema validation with structured logs turns raw telemetry into fast‑acting insights, especially when dealing with noisy LLM outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
