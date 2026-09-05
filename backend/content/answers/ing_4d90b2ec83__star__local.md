---
qid: ing_4d90b2ec83__star__local
question: 'Explain: Web and APIs — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 377
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:03:42-05:00'
sources: []
---

**Situation**  
I was designing a real‑time recommendation API for an e‑commerce platform that had to serve millions of user requests per second while keeping latency under 20 ms.

**Task**  
Choose the transport protocol and build a lightweight, fault‑tolerant messaging layer that could handle high throughput, occasional packet loss, and strict ordering requirements for user session data.

**Action**  
I mapped out the traffic patterns: most calls were idempotent “get‑recommendation” requests (read‑only) but some writes (“record-click”) needed exact delivery. For the read side I built a UDP‑based multicast cache layer that pushed precomputed recommendation vectors to edge nodes; this gave sub‑10 ms propagation and allowed me to drop stale packets without affecting correctness because each node kept its own copy of the latest vector. For the write side I wrapped the data in a lightweight TCP stream with a custom congestion‑control header so we could guarantee ordering while still using the same port as the UDP service for simplicity. I also added sequence numbers and a small retry window to recover from occasional packet drops, keeping the API stateless.

**Result**  
The recommendation latency dropped from 35 ms to 18 ms on average, and throughput increased by 4× during peak traffic. The system tolerated up to 2% UDP loss without user‑visible errors, and TCP writes remained 99.9 % reliable. I learned that blending UDP for fast, best‑effort data with TCP for critical acknowledgments can give the best of both worlds in ML‑driven web services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
