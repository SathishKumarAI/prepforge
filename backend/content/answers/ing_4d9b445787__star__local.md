---
qid: ing_4d9b445787__star__local
question: 'Explain: Fetch recent scores — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 337
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:03:48-05:00'
sources: []
---

**Situation** – At my last role I was tasked with monitoring the performance of our new LLM‑based recommendation engine. The product team needed a live dashboard that showed real‑time accuracy scores from our automated evaluation suite, but the evals were running on an external platform (Langwatch) and storing results in Langfuse’s event store.

**Task** – Build a lightweight service that would poll for the latest “completion quality” events, aggregate them into a rolling 5‑minute average, and push the metric to Grafana without overwhelming the APIs or leaking credentials.

**Action** – I wrote a Python FastAPI microservice. Using Langwatch’s REST endpoint (`/evals/latest`) I fetched JSON payloads; then I queried Langfuse with a GraphQL cursor to pull only new events (`event_type: SCORE`). To keep latency low, I cached the last seen event ID in Redis and used exponential backoff on failures. The service transformed raw scores into a Prometheus‑exposed endpoint every 10 seconds, which Grafana scraped. I also added an alert rule that fired if the rolling average dropped below 0.78.

**Result** – The dashboard displayed up‑to‑date metrics with <200 ms latency, and we caught a regression in the model before it hit production—saving us ~$50k in potential churn. I learned how to orchestrate cross‑platform data pipelines efficiently while keeping cost and security in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
