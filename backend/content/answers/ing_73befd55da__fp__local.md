---
qid: ing_73befd55da__fp__local
question: 'Explain: Functional Requirements — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 442
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:03-05:00'
sources: []
---

## Why a URL‑Shortener Must Work the Way It Does

A short‑link is a *bijection* between two sets:  
1. The **domain space** – all possible URLs (infinite, highly redundant).  
2. The **code space** – a finite alphabet of length *n* (e.g., 62 = [0–9a–zA–Z]).

The fundamental problem is to map an arbitrary long string *u* → a short token *t* such that:

1. **Determinism**: The same *u* always yields the same *t*.  
2. **Collision‑free**: Different *u* produce distinct *t* until capacity is reached.  
3. **Compactness**: |*t*| ≪ |*u*| to satisfy UI/UX constraints.

These constraints turn into a classic *hashing* problem with a *perfect hash* up to the service’s storage limit. The service must:

- Generate *t* deterministically (e.g., SHA‑256 + base62) → satisfies 1.  
- Store mapping *t ↔ u* in a fast key/value store → ensures 2. by checking before insertion.  
- Expose CRUD APIs: create, resolve, delete, list → the functional interface.

### One Non‑Obvious Insight

Most designers ignore **semantic collision**: two distinct URLs that differ only in case or trailing slash may map to the same *t* if normalization is omitted. This subtlety can break cache consistency and SEO. Hence, a robust service normalizes input (e.g., canonicalization) before hashing—a requirement that stems directly from URL semantics, not merely technical convenience.

---

> **Bottom line**: A URL‑shortener’s functional spec is an engineered solution to the bijective mapping problem under finite resources, with normalization as a hidden but critical requirement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
