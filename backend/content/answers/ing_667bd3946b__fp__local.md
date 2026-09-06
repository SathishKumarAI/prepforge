---
qid: ing_667bd3946b__fp__local
question: 'Explain: How It Works — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 551
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:43:05-05:00'
sources: []
---

**Why a URL shortener is needed**

The core problem is *information compression* under a fixed alphabet: we want to encode an arbitrary‑length string (the long URL) into a very short token that still uniquely identifies it. The token must be:

1. **Deterministic mapping** – same input → same short URL, so users don’t get duplicate links.
2. **Collision‑free** – two different URLs cannot map to the same token.
3. **Fast lookup** – millions of hits per second.

This is essentially a *bijection* between the set of all possible URLs and a subset of a smaller alphabet (e.g., `[A–Z][a–z][0–9]`). Because the domain is larger than the codomain, we must accept that some long URLs will never be shortened; only those we actually store get a token.

**Design components**

| Layer | Purpose |
|-------|---------|
| **Encoder** | Convert a unique ID (auto‑incrementing integer or hash) to a base‑62 string. The base choice is an optimization: more symbols → fewer characters, but decoding complexity rises only logarithmically. |
| **Storage** | Key‑value store (`short_id` ➜ `long_url`). A relational DB guarantees ACID for writes; a key‑value cache (Redis) serves hot reads. |
| **Resolver** | HTTP handler that decodes the token back to the integer ID, fetches the long URL, and issues a 301 redirect. |
| **Analytics & Abuse Prevention** | Optional counters per short URL, rate limiting, and blacklisting. |

**Why this works**

*Base‑62 encoding* gives us a *logarithmic* growth in token length: \(L = \lceil \log_{62}(N) \rceil\). For 1 billion URLs, \(L=6\). Thus we satisfy the compression requirement while keeping lookup trivial.

**Non‑obvious insight**

Most designs stop at “hash → store”. The *real* efficiency comes from **reusing the same ID for all future requests**. By making the encoder deterministic (e.g., using a sequence table or a consistent hash of the long URL), we avoid duplicate storage and reduce cache pressure. If two users submit the same long URL, they get the identical short link—this is not just a convenience; it dramatically cuts down on key‑value churn in high‑traffic systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
