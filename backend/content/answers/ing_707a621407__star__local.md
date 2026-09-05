---
qid: ing_707a621407__star__local
question: 'Explain: HTTP Request and Response — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 311
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:09-05:00'
sources: []
---

**Situation** – While leading the redesign of our recommendation engine, we noticed that the latency of fetching user profiles from the microservice layer was ballooning during peak traffic. The team suspected that the way we handled HTTP requests and responses was contributing to the slowdown.

**Task** – I needed to audit the request/response pipeline, identify bottlenecks, and propose a more efficient design without sacrificing reliability or security.

**Action** – First, I instrumented the service with OpenTelemetry to capture full request traces. The data revealed that every user profile call was using HTTP/1.1 over TLS, causing excessive TCP handshakes and header parsing overhead. I introduced HTTP/2 multiplexing, switched to HTTPS with session resumption, and enabled gzip compression for JSON payloads. On the client side, I replaced the blocking `RestTemplate` calls with a non‑blocking `WebClient`, adding backpressure handling via Project Reactor. Finally, I added a Redis cache layer keyed by user ID to serve 80% of requests within microseconds.

**Result** – The average end‑to‑end latency dropped from 350 ms to 75 ms under load, and CPU usage fell by 40%. The experiment taught me the importance of monitoring every hop in the HTTP stack and how protocol upgrades can yield massive gains without altering business logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
