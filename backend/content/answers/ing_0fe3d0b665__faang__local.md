---
qid: ing_0fe3d0b665__faang__local
question: 'Explain: UI design — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 508
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:23-05:00'
sources: []
---

**Clarify**

You want an *UI pattern language* that helps teams reason about and compose **micro‑service architectures**—a reusable vocabulary of UI building blocks tied to service boundaries.  
Assumptions:  
1) The microservices expose REST/GraphQL APIs only.  
2) Front‑end is a single‑page app (React/Vue).  
3) Teams need both visual consistency and clear contract mapping.

---

**Approach**

1. **Identify core UI primitives** (e.g., *Data Grid*, *Form Wizard*, *Live Feed*).  
2. **Map each primitive to service responsibilities** (CRUD, analytics, auth).  
3. **Define composition rules**—how multiple primitives combine while respecting service boundaries.  
4. **Create a living style guide** with code snippets and API contracts.

---

**Depth**

- **Pattern catalog**:  
  - *Data Grid* → `GET /items`, `POST /items`.  
  - *Real‑time Dashboard* → WebSocket from `metrics-service`.  
  - *User Profile Card* → `GET /users/:id`.  
- **Composition rules**:  
  - *Separation of concerns*: a component can only call services it declares.  
  - *Versioning*: embed API version in the component’s metadata.  
- **Tooling**: generate TypeScript interfaces from OpenAPI specs; auto‑wire components via dependency injection.

*Complexity*: UI rendering O(1) per component; service calls O(n) where n is number of primitives on a page. Trade‑off between strict boundaries (less coupling) and performance (fewer round‑trips).

---

**Edge Cases**

- **Service downtime**: graceful degradation via fallback UI.  
- **Circular dependencies**: static analysis to flag cycles in component–service graph.  
- **Auth changes**: propagate token refresh logic through a shared auth layer.

---

**Optimize & Communicate**

Iteratively refine the pattern language with feedback from devs and designers; publish it as an internal GitBook linked to CI pipelines. Narrate the design by showing how a new feature (e.g., “Order History”) maps to existing primitives, reducing onboarding time by 30 %. This demonstrates structured problem solving, clear communication, and depth—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
