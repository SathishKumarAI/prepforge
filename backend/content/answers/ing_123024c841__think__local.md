---
qid: ing_123024c841__think__local
question: 'Explain: An API Contract in Practice — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 500
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:55:42-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Assume the audience knows basic ML concepts but not system‑design jargon.  
   - Define “API” as a contract between two software components (client ↔ server).  
   - Focus on *practice* rather than theoretical specs: how APIs shape ML pipelines.

**2️⃣ Adopt a mental model**  
   - Treat an API like a **service interface**: inputs → processing → outputs.  
   - Map it to the ML workflow: data ingestion, feature extraction, model inference, and feedback loops.  
   - Think in layers: *exposure layer* (public endpoints), *execution layer* (ML logic), *infrastructure layer* (scaling, monitoring).

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the *use cases* your ML service must support (predict, train, evaluate).  
   2. Define clear **request/response schemas** (JSON, gRPC protos) that capture required inputs and expected outputs.  
   3. Decide on **auth & rate‑limiting** to protect model resources.  
   4. Choose an **endpoint pattern**: RESTful routes (`/predict`, `/train`) or RPC calls for low latency.  
   5. Incorporate *versioning* (v1, v2) so that new models don’t break existing clients.  
   6. Build **logging & metrics** into the API to monitor inference latency and error rates.

**4️⃣ Common traps to avoid**  
   - Exposing raw model parameters or training data through the API.  
   - Ignoring backward compatibility when updating model schemas.  
   - Over‑optimizing for speed at the cost of observability.  
   - Forgetting to decouple the ML inference layer from the API gateway.

**5️⃣ Sanity‑check & communicate**  
   - Run a **use‑case walkthrough**: client → request → API gate → inference → response → metrics.  
   - Ask, “Does each step respect the contract?” and “Are clients able to handle errors gracefully?”  
   - Summarize the design in a diagram, then explain how it supports scalability, maintainability, and ML‑specific concerns (model drift, A/B testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
