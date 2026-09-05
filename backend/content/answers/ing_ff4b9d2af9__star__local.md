---
qid: ing_ff4b9d2af9__star__local
question: 'Explain: Codifying the design of robust APIs — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 328
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:20-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we had an onboarding API that customers used to submit KYC documents. Every time they retried a failed upload, the backend created duplicate records and triggered multiple compliance alerts, which our auditors flagged as a major data integrity risk.

**Task**  
I was tasked with redesigning the endpoint so it became idempotent, predictable, and resilient under high traffic, while keeping latency low for mobile clients.

**Action**  
First, I added a `Client-Request-ID` header and stored it in a Redis cache keyed to the user ID. On each request, the service checked if that ID already existed; if so, it returned the cached response instead of re‑processing the upload. I also introduced optimistic concurrency control on the document metadata table, using a version column and `SELECT FOR UPDATE` to avoid race conditions when multiple retries hit simultaneously. Finally, I switched from synchronous file storage to an S3 pre‑signed URL flow, so uploads bypassed our API layer entirely once the signature was issued.

**Result**  
After deployment, duplicate KYC entries dropped from 12% of all requests to <0.01%. The average latency improved by 15 ms due to offloading storage. Auditors praised the new design for meeting ISO 27001 requirements, and I learned how careful idempotency keys combined with optimistic locking can make APIs both user‑friendly and compliance‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
