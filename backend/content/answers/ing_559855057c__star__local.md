---
qid: ing_559855057c__star__local
question: 'Explain: HTTP Request/Response — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 552
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:07-05:00'
sources: []
---

**Situation:**  
I was leading a workshop for the product team at a fintech startup where we were deciding whether to expose our pricing API through a public REST endpoint or keep it internal. They needed a concrete picture of what actually happens when someone types a URL into their browser.

**Task:**  
Explain the end‑to‑end flow of an HTTP request/response in plain language, highlighting each technical layer and its trade‑offs so they could weigh latency, security, and scalability for our design.

**Action:**  
I walked them through:  
1. **DNS lookup** – the browser queries a recursive resolver to translate the domain into an IP address, caching the result for ~TTL seconds.  
2. **TCP three‑way handshake** – SYN/SYN‑ACK/ACK establishes a reliable channel, with congestion control and Nagle’s algorithm affecting latency.  
3. **TLS negotiation (if HTTPS)** – an asymmetric key exchange (ECDHE) followed by symmetric encryption (AES‑GCM), adding ~1–2 ms per round‑trip but protecting data in transit.  
4. **HTTP GET** – the browser sends headers, including Accept‑Encoding and Cache‑Control; I showed how ETag/Last‑Modified enable conditional requests to save bandwidth.  
5. **Server processing** – our Node.js microservice validates the token, queries a PostgreSQL DB via async/await, and streams JSON back over HTTP/2 multiplexed streams.  
6. **Response headers & body** – status code 200, Content‑Length, and a gzip payload; I noted how content negotiation can reduce size by ~30%.  
7. **Browser rendering** – the engine parses HTML/CSS/JS, while Service Workers may cache static assets for offline use.

**Result:**  
The team understood that each layer introduces measurable latency (DNS ~20 ms, TCP handshake ~50 ms, TLS handshake ~100 ms) and trade‑offs between security and speed. We chose to expose the API over HTTPS with HTTP/2, enable aggressive caching (max‑age 3600s), and use a CDN to shave off 30–40 ms per request globally. The workshop also highlighted the importance of monitoring each hop with tools like Wireshark and New Relic APM, reinforcing our commitment to end‑to‑end observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
