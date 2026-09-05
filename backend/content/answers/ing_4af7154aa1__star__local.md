---
qid: ing_4af7154aa1__star__local
question: 'Explain: DNS — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:16-05:00'
sources: []
---

**Situation** – At my previous company we were launching a global CDN that needed to resolve millions of custom domain names per second for edge servers. Our existing DNS service was built on UDP and hit a 30 % error rate during traffic spikes, causing cache misses and latency jumps.

**Task** – I had to redesign the resolver layer so it could handle large queries reliably while keeping round‑trip time low, without breaking backward compatibility with legacy clients.

**Action** – First, I profiled DNS traffic: most lookups were single A/AAAA records (UDP works fine), but bulk zone transfers and dynamic TXT updates required reliable transport. I added a hybrid resolver: for standard queries it used UDP with 512‑byte limits and implemented the EDNS0 extension to allow larger packets; for large payloads or when a truncated response was received, the client automatically fell back to TCP. On the server side I introduced connection pooling for TCP sessions and capped simultaneous connections per IP to avoid DoS. I also switched to DNS over TLS (DoT) for internal control traffic, using gRPC on top of HTTP/2 to multiplex queries.

**Result** – After deployment, lookup error rates dropped from 30 % to <1 %, overall latency improved by 15 ms on average, and we saw a 25 % reduction in failed edge cache populates. I learned that choosing UDP for speed but falling back to TCP for reliability—and adding modern transport like DoT—can give you both performance and robustness in large‑scale DNS systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
