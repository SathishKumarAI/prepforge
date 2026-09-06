---
qid: ing_e3196b6fad__fp__local
question: 'Explain: Endpoint: GET /{short_code} — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 366
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:02:41-05:00'
sources: []
---

**GET /{short_code} – the “redirect” endpoint of a URL‑shortener**

*Why it exists.*  
The core business goal is *fast, stateless redirection*: a client requests `/abc123`, we return an HTTP 301/302 to the long target. The problem reduces to: given a key (the short code), retrieve its value (the original URL) with minimal latency and maximum throughput.

*How it must work.*  
1. **Key validation** – reject malformed or expired codes immediately (O(1)).  
2. **Cache lookup** – the most frequent accesses hit an in‑memory store (e.g., Redis). A miss triggers a backend query, which we keep asynchronous to avoid blocking the request thread.  
3. **Redirection response** – send a 301/302 with `Location` header and minimal body.  
4. **Analytics hook** – fire-and-forget an event to a log or metrics system (Kafka) so we can later compute click‑through rates.

*Underlying principle.*  
This is a classic *lookup‑then‑redirect* pattern, analogous to DNS resolution: constant‑time key lookup + minimal network hop. The cache layer embodies the “law of diminishing returns” – once a code appears in memory, subsequent hits are almost free, keeping latency sub‑10 ms even under millions of requests.

**Non‑obvious insight:**  
The short code itself can encode metadata (creation timestamp, bucket ID) using base‑62 or custom radix. Decoding it on the fly allows sharding decisions *without* a database round‑trip, further reducing latency and simplifying horizontal scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
