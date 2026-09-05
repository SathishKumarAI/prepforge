---
qid: ing_3f52281f32__think__local
question: 'Explain: How to choose the right workflow API — Introduction | Developer
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 495
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:54:09-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   - Identify the *type* of ML task (classification, regression, clustering, etc.).  
   - Assume you’re working in a typical production setting: data ingestion → preprocessing → training → evaluation → deployment.  
   - Note any constraints: latency requirements, batch size, need for real‑time inference, or model explainability.

**2️⃣ Adopt a mental workflow map**  
   - Break the pipeline into discrete stages: *Data*, *Feature Engineering*, *Modeling*, *Evaluation*, *Deployment*.  
   - For each stage ask: “What API patterns (REST, gRPC, batch jobs, streaming) best fit this operation?”  
   - Remember that an API should expose a clean contract: input schema → output schema + metadata.

**3️⃣ Step‑by‑step reasoning**  
   1. **Data ingestion** – if data arrives continuously, choose a streaming API (Kafka/REST).  
   2. **Feature prep** – heavy CPU tasks may need batch endpoints or serverless functions.  
   3. **Training** – typically internal, use an orchestrator (Kubeflow) with a training‑specific API.  
   4. **Inference** – low latency → gRPC/HTTP/1.1; high throughput → HTTP/2 or gRPC‑Web.  
   5. **Monitoring** – expose metrics via Prometheus/OpenMetrics endpoint.

**4️⃣ Avoid common pitfalls**  
   - Don’t over‑expose internal logic; keep the API surface minimal.  
   - Resist the temptation to mix synchronous and asynchronous patterns in one service—clarity matters.  
   - Beware of versioning: lock your schema early and use semantic versioning for API contracts.

**5️⃣ Sanity‑check & communicate**  
   - Sketch a diagram showing each stage, its input/output, and chosen protocol.  
   - Run through an end‑to‑end example (e.g., ingest → preprocess → predict) to confirm latency meets SLA.  
   - Explain your choices in plain language: “We use gRPC for inference because it gives us sub‑millisecond round trips and binary payloads, which is essential for our real‑time alerts.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
