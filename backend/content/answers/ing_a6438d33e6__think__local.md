---
qid: ing_a6438d33e6__think__local
question: 'Explain: Some REST API implementations might break them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 489
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:02:44-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Define “REST API” (stateless HTTP endpoints).  
   - Identify which ML‑specific rules are being considered (e.g., use of verbs for CRUD, idempotency, versioning, hypermedia).  
   - Assume the APIs expose model training, inference, and metadata.

**2️⃣ Adopt a REST‑principles framework**  
   - Map each rule to an HTTP concept:  
     *Statelessness → no session data.*  
     *Uniform interface → resource URIs, standard verbs.*  
     *Cacheability → immutable inference responses.*  
   - Overlay ML concerns (model versioning, large payloads, async training).

**3️⃣ Step‑by‑step reasoning**  
   1. **Statelessness vs. training state** – Training requires long‑running jobs; keeping job progress in the client violates statelessness unless you expose a separate status resource.  
   2. **Uniform interface vs. model artifacts** – Exposing raw binary blobs or custom headers can break the “resource” abstraction.  
   3. **Cacheability vs. inference drift** – If a model updates, cached responses become stale; need proper ETag/Cache‑Control handling.  
   4. **Hypermedia constraints** – Some APIs expose only endpoints for prediction but not for model lifecycle, violating the “discoverability” rule.

**4️⃣ Common pitfalls to avoid**  
   - Treating model training as a simple POST that returns results immediately (blocking).  
   - Using non‑standard verbs like `RUN` or `EXECUTE`.  
   - Forgetting to version URLs (`/v1/models/...`) when the schema changes.  
   - Ignoring large payload limits; sending raw tensors over HTTP can fail.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “Does each operation expose a URI, use standard verbs, and remain stateless?”  
   - If any answer is no, flag that rule as violated.  
   - Communicate the impact: e.g., “Because training state isn’t captured in the request/response cycle, clients must poll or use callbacks, breaking pure RESTfulness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
