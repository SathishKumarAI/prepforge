---
qid: ing_08bad62990__star__local
question: 'Explain: Use RESTful URLs and actions — Best Practices for Designing a
  Pragmatic RESTful API | Vinay Sahni'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 335
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:30-05:00'
sources: []
---

**Situation:**  
At my previous company, we were building an analytics platform that exposed a public REST API for third‑party data scientists. The initial design used ad hoc endpoints like `/getMetrics?type=traffic&date=2024-01-01`, which caused confusion and made caching ineffective.

**Task:**  
Redesign the API surface so it follows true RESTful conventions, improves discoverability, and supports efficient caching while keeping backward compatibility for existing clients.

**Action:**  
I mapped resources to nouns (`/metrics`, `/datasets`) and used HTTP verbs (GET, POST, DELETE) instead of action words in URLs. For filtering I added query parameters (`?type=traffic&date=2024-01-01`), and introduced pagination via `page` and `size`. I implemented HATEOAS links for navigation and leveraged content‑negotiation headers to serve JSON or XML. To maintain legacy clients, I versioned the API with `/v1/metrics` and provided a redirect mechanism. I also added ETag support so clients could cache responses and avoid unnecessary data transfer.

**Result:**  
Client error rates dropped by 42 %, while average response time improved from 650 ms to 310 ms due to better caching. The new design reduced endpoint count from 27 to 9, simplifying onboarding documentation. I learned that a disciplined RESTful approach not only aligns with HTTP semantics but also yields tangible performance and developer‑experience gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
