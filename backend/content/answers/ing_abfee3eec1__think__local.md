---
qid: ing_abfee3eec1__think__local
question: 'Explain: Common Cache Key Choices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 471
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:21:49-05:00'
sources: []
---

**Metacognitive Road‑Map for Explaining “Common Cache Key Choices – CDN / System Design”**

1. **Clarify Scope & Audience**  
   - *What is a cache key?* (identifier used by CDN to fetch stored content)  
   - *Why it matters in system design?* (affects hit rates, invalidation, consistency)  
   - *Assumptions*: Reader knows basic HTTP/URL concepts and CDN terminology.

2. **Adopt the “Cache Key Taxonomy” Framework**  
   - **Identity Keys**: URL path only → pure static content.  
   - **Attribute‑Based Keys**: add query string, headers (e.g., Accept‑Encoding).  
   - **Contextual Keys**: include user/session data for personalization.  
   - **Versioning Keys**: embed version/hash in URL or header.

3. **Step‑by‑Step Reasoning**  
   a. Enumerate use‑cases (static assets, API responses, personalized pages).  
   b. For each case, list constraints (cacheability, freshness, security).  
   c. Map constraints to key components (which parts of request must be part of the key).  
   d. Show trade‑offs: larger keys → fewer collisions but higher cache miss overhead.

4. **Common Pitfalls to Avoid**  
   - *Over‑normalizing*: stripping too much (e.g., ignoring Vary headers) causes stale content.  
   - *Under‑hashing*: including sensitive data in the key leaks privacy.  
   - *Neglecting versioning*: deploying a new asset without changing the key leads to CDN serving old files.

5. **Sanity Check & Communication**  
   - Verify that each suggested key component logically follows from its constraints.  
   - Use concrete examples (e.g., `https://cdn.example.com/img/hero.jpg?v=123` vs. `?lang=en`).  
   - Summarize the decision tree so readers can apply it to new scenarios.

By following this structured approach, you transform a complex design choice into an easy‑to‑understand, repeatable explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
