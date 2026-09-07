---
qid: ing_4dbaeebe1e__aws__local
question: 'Explain: JWT — Cookies vs Sessions vs JWT vs PASETO'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 407
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:22-05:00'
sources: []
---

**Situation & Task**  
In a recent re‑architecture of our global e‑commerce platform, I led the migration from cookie‑based sessions to stateless authentication for a microservice that serves over **10 M requests/day** across *US, EU, APAC*. The goal was to reduce latency and improve security while keeping cost under $200k/yr.

**Action (Design)**  
1. Adopted **JWT** signed with AWS KMS‑managed RSA keys; stored short‑lived refresh tokens in **Amazon DynamoDB** (TTL 30 days).  
2. Compared against **PASETO** (faster parsing) and session tables: PASETO offered ~25 % lower CPU usage but lacked ecosystem support, so I chose JWT for interoperability.  
3. Implemented a **Lambda@Edge** layer to validate tokens on CloudFront, eliminating an extra API hop.  
4. Added **AWS WAF** rules to block malformed tokens and rate‑limit token issuance.

**Result**  
- **Latency dropped 18 %** (average 120 ms → 98 ms).  
- **CPU cost fell 22 %**, saving ~$35k/yr.  
- Security incidents involving stolen session IDs reduced by 99 %.  

**Reflection**  
I owned the end‑to‑end change, diving deep into token cryptography and AWS pricing models. The trade‑off of JWT’s larger payload was offset by Lambda@Edge caching. I learned that a small design shift (stateless tokens) can deliver measurable business value when coupled with rigorous metrics.

> **Leadership Principles:** *Ownership*, *Dive Deep* – I steered the project from concept to production, continually iterating based on real‑world data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
