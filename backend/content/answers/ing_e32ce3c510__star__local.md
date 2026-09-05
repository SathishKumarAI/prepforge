---
qid: ing_e32ce3c510__star__local
question: 'Explain: Observability: tracing LLM apps — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 373
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:08-05:00'
sources: []
---

**Situation** – In my last role, our team launched a conversational AI product for financial advisory that had to run 24/7 with zero SLA violations. Early in production we saw a spike in latency during peak hours and intermittent hallucinations in the generated responses.

**Task** – I was tasked with building an end‑to‑end observability framework that could trace request flows through the LLM, detect quality drift, and provide actionable alerts before users noticed errors.

**Action** – First, I instrumented every API gateway call with OpenTelemetry, tagging each request with a unique correlation ID and embedding model metadata (token count, prompt length). I then deployed a custom Prometheus exporter that sampled embeddings and token usage per inference. For tracing, I set up Jaeger to capture the entire chain from user input → preprocessing → LLM call → post‑processing. To evaluate hallucinations, I integrated an automated “truth‑check” microservice that cross‑referenced responses against a curated knowledge base and logged mismatches in ElasticSearch. Finally, I built Grafana dashboards that visualized latency, error rates, token consumption, and hallucination scores, with alerting thresholds based on rolling averages.

**Result** – Within two weeks of deployment, we reduced 99th‑percentile latency from 1.8 s to 0.9 s during peak traffic and cut hallucination incidents by 70%. The dashboards also enabled the data science team to spot drift in model performance early, leading to a proactive retraining cycle. I learned that comprehensive tracing coupled with domain‑specific evaluation metrics is essential for maintaining trust and reliability in LLM applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
