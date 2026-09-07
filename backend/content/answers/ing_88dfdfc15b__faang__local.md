---
qid: ing_88dfdfc15b__faang__local
question: 'Explain: Hands-On Exercises (Upcoming) — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 390
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:02:31-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise walkthrough of the *Hands‑On Exercises* segment that will follow in our Machine Learning course’s “Course Introduction” module, and how it ties into system‑design thinking for ML pipelines.

**Approach**  
1. Outline the learning objectives (data ingestion, feature engineering, model training, evaluation).  
2. Map each objective to a micro‑system design task: data‑flow diagram, API contracts, scalability concerns.  
3. Show how to prototype with lightweight tools (Python + Pandas) before moving to production stacks.

**Depth**  
- **Data Ingestion**: Build an ETL service using Apache Kafka for streaming, schema registry for versioning.  
- **Feature Store**: Deploy a Redis‑based feature cache; discuss freshness vs latency trade‑offs.  
- **Model Training**: Use PyTorch Lightning to abstract training loops; containerize with Docker, orchestrate via Kubernetes (GPU nodes).  
- **Serving**: Expose a FastAPI endpoint behind an Envoy proxy, implement A/B testing knobs.  
Complexity: *O(N log N)* for sorting features, *O(1)* cache lookups, *O(T·M)* training time where T = epochs, M = parameters.

**Edge Cases**  
- Skewed class distribution → SMOTE or focal loss.  
- Schema drift → automated schema validation pipeline.  
- Model degradation → continuous evaluation with Prometheus alerts.

**Optimize & Communicate**  
Iterate on latency by batching inference; reduce memory footprint via quantization. Explain decisions in a 5‑slide deck: problem, constraints, design diagram, trade‑offs, next steps. This demonstrates end‑to‑end system thinking while staying grounded in ML fundamentals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
