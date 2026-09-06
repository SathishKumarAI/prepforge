---
qid: ing_dec7efa69a__think__local
question: 'Explain: API Design — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 481
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:41:27-05:00'
sources: []
---

**1️⃣ Clarify the scope and audience**  
*Assumptions*: The learner knows basic ML concepts but is new to building production‑grade services. Ask: “Do we focus on REST, gRPC, or serverless?” and “Is the target platform cloud‑native or on‑premise?”  

**2️⃣ Adopt a layered mental model**  
Use a classic **API → Service → Data** stack:  
- **Interface layer** (endpoints, contracts)  
- **Business logic layer** (model inference, pre/post‑processing)  
- **Infrastructure layer** (scaling, monitoring).  
Map ML‑specific concerns—latency, batch vs. streaming, model versioning—to each layer.

**3️⃣ Step‑by‑step reasoning**  
1. Identify *use cases* (real‑time scoring, bulk inference).  
2. Choose an *API style* that matches the use case (REST for simple CRUD, gRPC or GraphQL for high‑throughput).  
3. Define **resource contracts**: e.g., `/predict` POST with JSON payload → prediction response.  
4. Add **metadata endpoints** (`/health`, `/metrics`, `/model-info`) for observability.  
5. Plan **scaling strategies** (horizontal pods, autoscaling, edge caching).  
6. Embed *security* (API keys, OAuth) and *rate‑limiting*.  

**4️⃣ Avoid common pitfalls**  
- Don’t let the model become a “black box”; expose versioning and provenance.  
- Ignore latency: batch inference endpoints can hide per‑request delays.  
- Skip versioned URLs → hard to roll back or A/B test models.  
- Over‑complicate with too many micro‑services; start simple and evolve.

**5️⃣ Sanity check & verbalize**  
Ask yourself: “Does every endpoint serve a clear business need?” “Can we instrument metrics for each request?” Explain the design by walking through a sample prediction request, highlighting how each layer handles it. This narrative confirms that the API design aligns with both ML operational requirements and system‑engineering best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
