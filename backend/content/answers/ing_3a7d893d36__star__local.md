---
qid: ing_3a7d893d36__star__local
question: 'Explain: 0-RTT — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 349
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:47-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a new mobile shopping app that had to load product pages within 300 ms on average. Our backend was already using HTTP/2 over TLS 1.3, but the first request still required a full handshake, causing latency spikes during peak traffic.

**Task**  
I needed to reduce the time to first byte by eliminating the round‑trip for TLS negotiation while keeping security guarantees and preventing replay attacks.

**Action**  
I introduced 0‑RTT resumption on our HTTPS endpoints. First, I stored a short‑lived session ticket on the client after the initial full handshake. For subsequent requests, the app sent the ticket in the ClientHello so the server could immediately resume the TLS state and skip the key exchange. To mitigate replay risk, we set a 24‑hour window for each ticket and used per‑request nonces validated by a lightweight HMAC check on the server. I also updated our load balancer to route 0‑RTT traffic only to nodes that had cached the session keys, preventing cache misses.

**Result**  
Latency dropped from an average of 350 ms to 180 ms for page loads, boosting conversion rates by 12 %. The new flow added negligible CPU overhead (≈2 % extra per request) and we saw no security incidents in production. I learned that careful session‑ticket management turns a theoretical protocol feature into a tangible UX improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
