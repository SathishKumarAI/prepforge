---
qid: ing_20988a3434__star__local
question: 'Explain: Object-oriented design interview questions with solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 337
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:32-05:00'
sources: []
---

**Situation**  
During a senior ML engineer interview at a fintech startup, the hiring manager asked me to walk through how I’d design an object‑oriented system for real‑time fraud detection. The product needed to ingest streaming transaction data, apply several machine learning models, and expose a REST API for risk scoring.

**Task**  
I had to propose a clean OOD architecture that could scale horizontally, support plug‑in new algorithms without breaking existing code, and maintain low latency (<50 ms per request).

**Action**  
I started with an abstract `Model` base class defining `fit`, `predict`, and `score`. Concrete subclasses (`IsolationForestModel`, `GradientBoostingModel`) inherit from it. A `FeatureExtractor` interface lets me swap feature pipelines, while a `Scorer` strategy pattern aggregates model outputs into a final risk score. I used dependency injection to wire these components in a Flask app container, enabling hot‑reloading of models via AWS S3 triggers. For performance, I leveraged a thread pool executor and batch inference for the GBM, cutting CPU usage by 30 %.

**Result**  
The prototype handled 10k TPS with <45 ms latency, and adding a new model required only implementing the `Model` interface—no changes to the API layer. The interview panel praised the clear separation of concerns, and I was offered the role on the spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
