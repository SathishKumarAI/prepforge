---
qid: ing_03c64b2031__star__local
question: 'Explain: We want to add semantic search to our existing product. Design
  the service.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 377
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:07-05:00'
sources: []
---

**Situation** – Our SaaS platform had a keyword‑based document search that was hitting a 35 % click‑through rate on user queries. Feedback from the customer success team highlighted that users were often searching for concepts (“budget constraints”) rather than exact terms, leading to missed results and higher support tickets.

**Task** – I needed to design an end‑to‑end semantic search service that could replace the legacy engine within two sprints, integrate with our existing REST API, keep latency under 200 ms, and preserve the current security model.

**Action** – First, I scoped out a lightweight transformer pipeline: fine‑tuned a DistilBERT base on our domain corpus, then distilled it to a 2.5 M‑parameter model for inference. I built a microservice in Go using ONNX Runtime, exposing a `/search` endpoint that accepts a query and returns ranked document IDs. For indexing, I precomputed sentence embeddings with Sentence‑Transformers and stored them in an HNSW index via Faiss, hosted on a dedicated GPU VM to hit the latency target. I added a caching layer with Redis for hot queries and instrumented Prometheus metrics to monitor precision@10. I also updated our auth middleware so only authorized users could access the new endpoint.

**Result** – After deployment, click‑through rose from 35 % to 58 %, and support tickets related to search dropped by 42 %. Latency stayed below 180 ms on average. The project taught me how to balance model accuracy with operational constraints, and reinforced the value of end‑to‑end monitoring when rolling out AI features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
