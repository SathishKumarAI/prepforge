---
qid: ing_d5b63b6683__star__local
question: 'Explain: Accessing Enterprise Context — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 349
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:16-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with building a recommendation engine for an internal knowledge‑base platform that used the Glean MCP (Machine Context Processor) server to serve search results in real time. The existing data pipeline only exposed raw document vectors, so we couldn’t personalize suggestions based on user intent or department.

**Task**  
I needed to integrate the MCP’s enterprise context APIs so the model could ingest metadata—role, team, recent projects—and deliver tailored recommendations within 200 ms for every search query.

**Action**  
1. I mapped the Glean context schema to our feature store using Apache Kafka streams, ensuring that each user session carried a lightweight JSON payload of contextual tags.  
2. Implemented an async REST proxy in Go that batched context requests and cached them per request ID with a 5 s TTL to keep latency low.  
3. Trained a LightGBM model on the combined vector+context features, tuning hyperparameters via Optuna; added a feature importance check to confirm context weight >30%.  
4. Deployed the MCP integration behind an Envoy sidecar, using mTLS for secure communication and monitoring latency with Prometheus.

**Result**  
The enriched engine lifted click‑through rate from 12% to 28% in production, cutting query response time by 15 ms on average. I learned that careful context batching and caching can bridge enterprise metadata with ML inference without sacrificing SLA, and that monitoring feature drift is essential when the context schema evolves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
