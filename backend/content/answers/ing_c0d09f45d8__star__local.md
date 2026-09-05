---
qid: ing_c0d09f45d8__star__local
question: 'Explain: You don''t really care what is happening — Google Maps System
  Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 394
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:57-05:00'
sources: []
---

**Situation**  
While working on an in‑house navigation app for a logistics company, the data science team was asked to build a live traffic prediction module that could run at scale on Google Cloud. The product requirement was simple: deliver a traffic congestion score for any requested route segment within 500 ms, but the internal model details were considered irrelevant to the product manager—only the output mattered.

**Task**  
I had to design an end‑to‑end system that ingested millions of GPS pings per second, processed them through a real‑time ML pipeline, and exposed a RESTful API for route planners, all while keeping latency below 500 ms and cost under $0.02 per request.

**Action**  
I chose Google Pub/Sub to buffer raw pings, Cloud Dataflow (Apache Beam) to window the data into 30‑second batches and run a pre‑trained XGBoost model via Vertex AI Predictions for feature inference. The model output was cached in Memorystore Redis keyed by road segment ID; a fallback cache layer in Cloud Filestore ensured zero‑downtime during model retraining windows. I added an autoscaling Cloud Run service to expose the API, and used Cloud Monitoring dashboards to enforce SLAs.

**Result**  
The system handled 2 M pings/s with <480 ms average latency, reduced per‑request cost from $0.05 to $0.015, and improved route planner accuracy by 12% compared to the legacy rule‑based approach. I learned how to balance real‑time ML inference with operational constraints when stakeholders care only about the final metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
