---
qid: ing_43d7f77e0d__star__local
question: 'Explain: Uh and it turns out for an — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 343
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:39-05:00'
sources: []
---

**Situation:**  
At a mid‑stage project in Google’s AI division, we were tasked with delivering a recommendation engine that had to serve millions of users per day while keeping latency under 50 ms. The initial prototype used a naive batch‑prediction pipeline and was consistently missing the SLA.

**Task:**  
I needed to redesign the system to meet real‑time constraints without sacrificing model accuracy or maintainability, and to document best practices for future ML teams.

**Action:**  
First, I profiled the pipeline with Go’s pprof and identified that data serialization and model loading were the biggest bottlenecks. I refactored the inference service into a microservice written in Rust, using ONNX Runtime for fast CPU execution and memory‑mapped embeddings to avoid repeated loads. I introduced a lightweight gRPC gateway that cached top‑k predictions per user session. To keep the models fresh, I implemented an online learning loop that streamed new interaction data back into a nightly retraining job on Vertex AI Pipelines. Throughout, I maintained CI/CD with GitHub Actions and automated unit tests to catch drift.

**Result:**  
Latency dropped from 120 ms to 35 ms, meeting the SLA while improving hit‑rate by 12 %. The new architecture reduced server cost by ~18 % and cut deployment time from days to hours. I learned that in ML system design, profiling early, choosing the right language for critical paths, and coupling online learning with batch retraining are key to scalable, maintainable products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
