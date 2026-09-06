---
qid: ing_54bcdc20a1__fp__local
question: What is an URL Shortener? — Design URL Shortener | System Design Interview
  | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 471
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:05:08-05:00'
sources: []
---

### Why a URL shortener is needed

Web resources are long strings of characters that encode protocol, host, path and query parameters.  
When users share links via SMS, social media or printouts, these strings quickly become unwieldy and hard to type.  The fundamental problem is **information density vs. human‑readability**: we want to transmit the same *semantic content* (the destination) with fewer symbols.

### Core design principle

Treat a short URL as an **index into a deterministic mapping table**:

1. **Encode** – Convert a monotonically increasing counter or hash of the original URL into a base‑\(B\) string (often \(B=62\), using `[0-9a-zA-Z]`).  
2. **Lookup** – Store `(short_code → long_url)` in a fast key–value store (e.g., Redis, DynamoDB).  

This is essentially an *invertible hash* with collision resolution: each short code uniquely identifies one long URL, ensuring **lossless compression** of the address space while preserving retrieval speed.

### Deeper insight

The mapping exploits the *sparsity* of the URL space. Even though the universe of possible URLs is astronomically large, the set actually used by a service is tiny relative to that space. By allocating short codes from a larger alphabet (base‑62), we achieve **high packing density**—each character carries \(\log_2 62 ≈ 5.95\) bits of information—so we can represent millions of distinct URLs with just six characters.

### Non‑obvious point

Many designs overlook the *semantic leakage* problem: if a short URL is reused or deleted, old links may redirect to unintended content. The robust solution is **immutable short codes** coupled with a versioned lookup table and optional “soft delete” flags, ensuring that once issued, a code’s destination never changes—critical for compliance and user trust.

---  

This concise architecture satisfies the core requirements: low latency, high throughput, and strong consistency while leveraging fundamental principles of information theory and data structure design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
