---
qid: ing_e0cc47261a__star__local
question: 'Explain: Solution — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 373
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:17-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a real‑time recommendation engine for an e‑commerce platform that had 4 million active users. The ML model lived in a TensorFlow Serving cluster, but the front‑end teams were struggling with latency and inconsistent data formats.

**Task** – Build a single, low‑latency entry point that could translate UI requests into the model’s expected payload, cache results, and expose a clean REST API to all mobile and web clients while keeping the backend services decoupled.

**Action** – I designed an **API Gateway + Backends‑for‑Frontends (BFF)** architecture. The gateway was implemented with Kong on Kubernetes; it handled authentication, rate limiting, and request routing. For each front end (iOS, Android, React) I created a lightweight BFF in FastAPI, containerized with Docker, that performed data enrichment, schema validation, and called the TensorFlow Serving endpoint over gRPC. I added an in‑memory Redis cache at the BFF layer to store recent predictions for 5 seconds, drastically reducing model hits.

**Result** – The average end‑to‑end latency dropped from 350 ms to 90 ms, and CPU usage on the serving cluster fell by 40 %. User engagement metrics improved: click‑through rate increased by 12 % within two weeks of deployment. I learned that separating concerns with a gateway and BFFs not only simplifies client development but also gives granular control over performance and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
