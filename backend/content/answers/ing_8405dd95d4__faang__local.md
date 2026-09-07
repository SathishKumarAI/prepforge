---
qid: ing_8405dd95d4__faang__local
question: Design the observability stack for a production LLM application. What does
  a good trace look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 570
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:48-05:00'
sources: []
---

**1️⃣ Clarify**  
We need an end‑to‑end observability stack that lets us see latency, errors, resource usage, and data quality for every request to a production LLM (LLM‑API → embeddings → prompt‑engineering → inference). I’ll assume: • Microservice architecture with gRPC/REST calls. • High‑volume traffic (~10k req/s). • Need real‑time alerts + historical analysis.

**2️⃣ Approach**  
1. **Instrumentation** – OpenTelemetry SDK in every service; automatically inject trace IDs, span names (“ingest”, “tokenize”, “inference”).  
2. **Tracing backend** – Jaeger/Tempo with long‑term storage (Cassandra) for low‑latency queries and retention.  
3. **Metrics** – Prometheus + Grafana: request latency percentiles, error rates, GPU utilisation, memory, token counts.  
4. **Logs** – Structured JSON to Loki or Elastic; include trace_id for correlation.  
5. **Event stream** – Kafka topic “llm_events” for model‑specific telemetry (e.g., prompt length, embeddings similarity).  

**3️⃣ Depth**  
A *good trace* spans the entire request lifecycle:  
- **Root span**: client → API gateway.  
- **Child spans**: tokenization, embedding fetch, prompt assembly, inference call to GPU service, post‑processing.  
Each span records: start/end timestamps, status code, error details, metadata (model version, user ID), and resource metrics (CPU/GPU). The trace should be less than 100 ms in total latency for a normal request; any child span > 80 % of the parent is flagged.  
Complexity: O(1) per request to emit spans; storage cost ~size_of_trace × retention_days.

**4️⃣ Edge Cases**  
- **Cold starts**: GPU spin‑up → large initial span.  
- **Circuit breakers**: propagate fallback status.  
- **Batching**: multiple requests in one inference call – split into sub‑spans.  
Test with synthetic load, simulate failures, and verify alert thresholds.

**5️⃣ Optimize & Communicate**  
Reduce cardinality by hashing high‑cardinality tags (user_id → user_hash). Use sampling for 99th percentile traces to keep storage low while keeping full detail on errors. Present the stack diagram in a deck: “Instrumentation → Tracing ↔ Metrics ↔ Logs ↔ Event Stream”. Emphasise that this architecture gives end‑to‑end visibility, fast root cause analysis, and capacity planning for LLM workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
