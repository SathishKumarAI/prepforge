---
qid: ing_2b961e83cf__star__local
question: 'Explain: Being a good distributed citizen — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 311
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:03-05:00'
sources: []
---

**Situation** – At my last role I was tasked to expose a bulk‑import endpoint for a SaaS platform that ingested financial transactions from partners. The service ran on Kubernetes behind an API gateway and was hit by burst traffic during market openings, leading to duplicate records and inconsistent balances.

**Task** – I needed to redesign the API so that it behaved predictably under retries, network glitches, and scale‑up events while preserving data integrity across microservices.

**Action** – First, I added a client‑generated request ID header (`X-Request-ID`) and stored it in Redis with a 24‑hour TTL. The handler checked this key before processing; if present, it returned the cached response instead of re‑executing the import logic. I also introduced versioned JSON schemas and used gRPC’s built‑in idempotency flag to enforce single execution at the transport layer. To guarantee consistency, I wrapped the database writes in a two‑phase commit with a compensating transaction that rolled back on partial failures.

**Result** – After deployment, duplicate imports dropped from 8% of traffic to <0.1%, and API latency stabilized at 120 ms average even during peak bursts. The system now reliably tolerates retries without side effects, and I learned how idempotency keys and compensating transactions can turn fragile distributed calls into robust services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
