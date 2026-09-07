---
qid: ing_73befd55da__faang__local
question: 'Explain: Functional Requirements — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 442
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:13:27-05:00'
sources: []
---

**Functional Requirements – TinyURL Service**

| # | Requirement | Why it matters |
|---|-------------|----------------|
| **1** | **Short‑URL generation** – Accept a long URL, return a unique short string (e.g., `tinyurl.com/abc123`). | Core feature; must guarantee uniqueness and idempotency. |
| **2** | **Redirect** – Visiting the short URL should redirect to the original URL with HTTP 301/302. | Enables end‑user experience and SEO friendliness. |
| **3** | **Custom alias support** – Users can request `tinyurl.com/myname`. | Enhances brandability; must validate format & availability. |
| **4** | **URL validation** – Reject malformed or potentially malicious URLs (e.g., non‑HTTP schemes, blacklisted domains). | Security & spam prevention. |
| **5** | **Analytics** – Track clicks, timestamps, referrers, and geographic data. | Business insight; billing or premium tiers. |
| **6** | **Rate limiting / throttling** – Prevent abuse (e.g., >1000 requests/min from a single IP). | Protects infrastructure & fairness. |
| **7** | **Expiration** – Optional TTL for short URLs, after which they return 410 Gone. | Storage hygiene and compliance. |
| **8** | **Scalability** – Handle millions of active links and billions of redirects per day. | Must use sharded DBs or key‑value store + CDN. |
| **9** | **High availability** – Zero downtime, graceful failover, read/write replication. | User trust & SLA compliance. |
| **10** | **Audit trail** – Immutable log of creations, updates, deletions for compliance. | Regulatory requirement (GDPR, etc.). |

These cover the essential *what* and *why* a production‑grade TinyURL service must support while leaving room to discuss trade‑offs in data modeling, cache strategy, and routing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
