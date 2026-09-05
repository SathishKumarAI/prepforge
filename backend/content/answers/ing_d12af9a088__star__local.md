---
qid: ing_d12af9a088__star__local
question: 'Explain: Request Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 313
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:51-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building a real‑time recommendation engine for a streaming platform that had to serve personalized content suggestions to over 2 million concurrent users during peak hours.

**Task:** My goal was to expose the recommendation model as a low‑latency, scalable API so that other services (frontend, ad server, analytics) could consume predictions without needing to run the heavy inference pipeline locally.

**Action:** I designed a RESTful endpoint using FastAPI with Pydantic schemas for input validation. To keep response times below 20 ms, I serialized the model with ONNX and deployed it behind a Kubernetes pod that auto‑scales based on CPU usage. I added rate limiting via Envoy to prevent abuse and implemented caching of top‑10 predictions per user in Redis, reducing repeated inference by 35%. For observability, I instrumented the endpoint with Prometheus metrics (latency histograms, error rates) and integrated OpenTelemetry traces into Grafana dashboards.

**Result:** The API handled peak traffic of 15k requests per second with an average latency of 18 ms and a 99.9% success rate. Adoption by other teams cut their development time for recommendation features by 40%. I learned that careful schema design, model serialization choices, and robust observability are critical when turning ML models into production APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
