---
qid: ing_08bad62990__fp__local
question: 'Explain: Use RESTful URLs and actions — Best Practices for Designing a
  Pragmatic RESTful API | Vinay Sahni'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 469
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:24:18-05:00'
sources: []
---

**Why RESTful URLs matter**

A RESTful API is a *stateless* interface that treats every resource as an entity addressable by a unique URI. The URI must describe *what* the client wants, not *how* it should be done. If the URL encodes the operation (e.g., `/users/activate`), you break the uniform interface and lose cacheability, discoverability, and composability.

**Fundamental design rule**

> **Resources ≠ verbs**  
> A URI → resource; HTTP verb → action on that resource.

This follows from the hypertext principle: hyperlinks should point to content, not commands. When clients use `GET /orders/123`, they retrieve the order regardless of how it was created or updated.

**Best‑practice checklist**

| Guideline | Why it works |
|-----------|--------------|
| **Use nouns in plural form** (`/customers`) | Reflects collections; makes “create” (`POST`) and “list” (`GET`) intuitive. |
| **Keep hierarchy shallow** (`/orders/{id}/items`) | Avoid deep nesting that forces clients to know the entire path. |
| **Represent state, not actions** (`PUT /orders/123` updates whole order) | Enables idempotency and easier caching. |
| **Leverage HTTP status codes** (201 for creation, 204 for no‑content) | Communicates intent without extra payload. |
| **Expose hypermedia links** (`_links`) | Allows clients to discover next steps (HATEOAS). |
| **Version via media type or path** (`/v1/orders`) | Keeps backward compatibility while letting servers evolve. |

**Non‑obvious insight**

> *The “resource” is a *conceptual* entity, not a physical file.*  
> A URI should identify the *semantic* resource (e.g., “order #123”) rather than its storage location (“/db/orders/123”). This decouples the API from underlying data models and allows you to evolve storage without breaking clients.

By treating URLs as declarative references and actions as HTTP verbs, you preserve REST’s simplicity, scalability, and discoverability—core to any pragmatic API design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
