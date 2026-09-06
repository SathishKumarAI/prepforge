---
qid: ing_636497fc91__fp__local
question: Design agent orchestration across dozens of connected SaaS systems. Where
  is authorization enforced, and why can it not live in the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 420
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:29-05:00'
sources: []
---

**Where to enforce authorization?**  
In a distributed orchestration layer that sits *between* the SaaS services and the user‑facing agent, not inside each model’s inference engine.

---

### Why it cannot live in the model

| Reason | Deeper principle | Consequence |
|--------|------------------|-------------|
| **Model is agnostic to identity** | Information theory: a model learns statistical patterns; it does not know *who* requests a prediction. | A malicious user could feed arbitrary inputs and obtain privileged outputs if the model itself checked tokens. |
| **Models are immutable services** | Geometry of deployment: models are black‑box ML services (e.g., TensorFlow Serving). | Embedding auth logic would require re‑training or redeploying every time a policy changes, breaking continuous delivery. |
| **Side‑channel leakage** | Probability: side channels (timing, error messages) can leak secrets if the model itself decides what to return. | A model that selectively returns data could inadvertently expose confidential fields via inference patterns. |

---

### Where it must live

The orchestration layer receives a user request → authenticates **once** (JWT, OAuth 2.0), resolves *who* they are, and then consults an **access‑control service** (e.g., ABAC policy engine).  
It then forwards the request to the appropriate SaaS APIs, ensuring that each downstream call is scoped by a fresh bearer token tied to the same identity.

---

### One non‑obvious insight

**Authorization is fundamentally a *stateful* operation, whereas inference models are stateless.**  
If you embed auth in the model, you force it to maintain per‑user session state (e.g., last‑used tenant ID), which contradicts the scalable, parallel nature of modern ML serving. The orchestration layer, however, can keep a lightweight cache of token scopes and revoke them instantly—something impossible inside a stateless inference graph.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
