---
qid: ing_934ecf815d__faang__local
question: What is AI system design? — Ai System Design Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 518
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:47-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a high‑level “AI system design” guide—how do you architect an end‑to‑end AI solution (data ingestion → model training → inference) that is scalable, maintainable, and production‑ready?  
Assumptions to confirm: target latency, data volume, model complexity, SLAs, cost constraints, regulatory needs.

**Approach**  
1. **Problem & Requirements** – Define business objective, success metrics, user personas, and compliance rules.  
2. **Data Layer** – Collect, clean, label, version (e.g., Delta Lake), store in a scalable lakehouse; use streaming pipelines (Kafka/Beam) for real‑time data.  
3. **Feature Store** – Centralize reusable features (online & offline); cache low‑latency access via Redis or Feast.  
4. **Modeling Pipeline** – Use reproducible notebooks → CI/CD for training jobs (Kubeflow, MLflow), hyper‑parameter tuning with Ray/Optuna; version models in a registry.  
5. **Serving Layer** – Deploy as stateless containers behind a load balancer; use model servers (TensorFlow Serving, TorchServe) or serverless (AWS SageMaker endpoints).  
6. **Observability & Governance** – Monitor latency, throughput, drift; log predictions; enforce explainability and audit trails.

**Depth**  
- *Complexity*: Training O(N·d) for data size N and feature dim d; inference O(d) per request.  
- *Trade‑offs*: Batch vs real‑time inference (batch cheaper but higher latency); monolithic vs microservices (simplicity vs flexibility).  
- *Scalability*: Autoscale GPU nodes; use spot instances for cost savings.

**Edge Cases**  
- Data skew → stratified batching.  
- Model drift → scheduled re‑training or online learning.  
- Security breaches → encrypted data at rest, IAM roles.

**Optimize & Communicate**  
Iteratively refactor pipelines to reduce data duplication, cache feature vectors, and adopt model compression (quantization) for latency gains. Explain decisions by mapping each component to a specific business requirement—e.g., “We use Feast because real‑time predictions require sub‑50 ms feature lookup.” This demonstrates structured thinking, technical depth, and clear communication expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
