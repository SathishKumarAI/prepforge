---
qid: ing_c8ce5010a0__faang__local
question: 'Explain: Workflow — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 511
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:57-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise cheat‑sheet that walks through the *workflow* of a typical system‑design interview focused on machine‑learning services (e.g., recommendation engines, fraud detection). I’ll assume you need: 1) the high‑level phases interviewers expect, 2) key ML‑specific design points, and 3) how to present them concisely.

**Approach**  
1. **Scope & Goals** – define problem, latency, throughput, data volume.  
2. **High‑Level Architecture** – split into ingestion, feature store, training, serving.  
3. **ML‑Specific Subsystems** – model registry, A/B testing, drift detection.  
4. **Scalability & Reliability** – horizontal scaling, stateless workers, graceful degradation.  
5. **Monitoring & Ops** – metrics (latency, F1), alerts, retraining pipelines.  
6. **Trade‑offs & Next Steps** – explain why you chose one tech stack over another.

**Depth**  
- *Ingestion*: Kafka + Spark for batch, Kinesis for real‑time.  
- *Feature Store*: Delta Lake / Feast; schema versioning to avoid “data drift.”  
- *Training*: Distributed GPU clusters (Horovod) with pipeline orchestration (Airflow).  
- *Serving*: TensorFlow Serving or TorchServe behind a gRPC load balancer; cache predictions in Redis for cold‑start reduction.  
- *Model Registry*: MLflow tracking, version tags tied to dataset hash.  
- *Monitoring*: Prometheus + Grafana dashboards; use ROC curves as live metrics.  
Complexity: Training O(N·E) where N=data size, E=epochs; serving latency < 50 ms per request.

**Edge Cases**  
- Data skew → feature‑store partitioning.  
- Model drift → automated retraining triggers.  
- Regulatory constraints (GDPR) → on‑prem vs cloud decision.

**Optimize & Communicate**  
Summarize the flow in a single diagram, then walk through each layer with “why” and “what if” bullets. Highlight that this design balances *latency*, *throughput*, and *model fidelity* while keeping ops overhead manageable—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
