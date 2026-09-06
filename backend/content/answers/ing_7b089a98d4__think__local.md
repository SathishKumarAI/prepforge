---
qid: ing_7b089a98d4__think__local
question: 'Explain: System Design - Tech Stack — Hld System Designs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 417
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:09:41-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Identify the audience (e.g., interviewee vs. stakeholder).  
   * Assume a typical ML pipeline: data ingestion → feature store → training → serving → monitoring.  
   * Note constraints: latency, scalability, data volume, regulatory compliance.

**2️⃣ Adopt a layered mental model**  
   * **Data layer** – ingestion & storage (Kafka, S3, Delta Lake).  
   * **Feature layer** – feature store or caching (Feast, Redis).  
   * **Model layer** – training frameworks and orchestration (PyTorch/TensorFlow + MLflow, Airflow).  
   * **Serving layer** – inference APIs (TensorFlow Serving, TorchServe, Triton) behind a load balancer.  
   * **Observability layer** – logging, metrics, model drift detection.

**3️⃣ Step‑by‑step reasoning**  
   1. Map requirements → layers.  
   2. Choose tech per layer based on trade‑offs (e.g., Kafka for real‑time, S3 for batch).  
   3. Define interfaces: REST/GRPC for serving, Pub/Sub for ingestion.  
   4. Sketch data flow and state management.  
   5. Highlight security & governance points.

**4️⃣ Common pitfalls to avoid**  
   * Over‑engineering the feature store (start simple).  
   * Ignoring model versioning and rollback capabilities.  
   * Neglecting latency budgets in serving infra.  
   * Assuming all data can be stored “as is” – enforce schema validation early.

**5️⃣ Sanity‑check & verbalize**  
   * Verify each layer satisfies the constraints.  
   * Ask: “What happens if traffic spikes? What about a model failure?”  
   * Communicate the high‑level diagram first, then drill into the critical components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
