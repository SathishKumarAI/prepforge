---
qid: ing_4f548bfe7e__fp__local
question: 'Explain: Request Headers — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 374
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:53:55-05:00'
sources: []
---

**Why do webhook requests need headers?**  
At its core, a webhook is an *event‑driven* HTTP POST that pushes data from one service to another. The sender must convey *context* (identity, version, integrity) without embedding it in the URL or body, because URLs are cacheable and bodies may be compressed or encrypted. Headers become the lightweight “metadata envelope” that guarantees:

1. **Authentication & Authorization** – `X‑Webhook‑Signature` is a HMAC over the payload using a shared secret. By deriving the signature from the raw bytes, we prevent tampering without needing per‑request tokens.
2. **Content Negotiation** – `Accept`/`Content-Type` let the receiver choose JSON vs XML and indicate schema version (`application/vnd.myapp.v2+json`). This is an application of *information theory*: the header compresses a variable‑length policy into fixed‑size key/value pairs, minimizing bandwidth while preserving semantic meaning.
3. **Idempotency & Replay Prevention** – `X‑Request-ID` (UUID) and `Timestamp` allow deduplication and time‑based expiration, turning the stateless HTTP call into a *quasi‑transaction* that satisfies ACID‑like guarantees in an eventual‑consistency environment.

A non‑obvious insight: **Headers are not just metadata; they encode a *partial order* of events.** By including monotonic timestamps and sequence numbers in headers, downstream systems can reconstruct causal chains without parsing the body, enabling efficient conflict resolution in distributed state machines. This subtle use of header ordering turns HTTP from a simple request/response protocol into a scalable event‑streaming backbone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
