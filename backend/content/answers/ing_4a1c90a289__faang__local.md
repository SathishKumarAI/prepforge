---
qid: ing_4a1c90a289__faang__local
question: 'Explain: Bi-directional streaming and integrated auth'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:36:53-05:00'
sources: []
---

**Bi‑directional Streaming & Integrated Auth – A FAANG‑style Breakdown**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem:* How does a real‑time ML service push predictions to clients while ensuring each request is authenticated? <br>*Assumptions:* We’re using gRPC/HTTP2, client/server both run in the same data‑center, and auth tokens are short‑lived JWTs. |
| **Approach** | 1️⃣ Establish a persistent bi‑directional stream (e.g., gRPC `BidirectionalStreaming`). <br>2️⃣ On connection, client sends an *Auth* message containing its token. <br>3️⃣ Server validates the token via a fast in‑memory cache or external auth service; if valid, it upgrades the channel to “authorized.” <br>4️⃣ From then on, all downstream prediction messages flow over that same stream, eliminating per‑message overhead. |
| **Depth** | *Auth Flow:* Use TLS for transport security + JWT signature verification (RSA/ECDSA). Cache token payloads with expiry to avoid DB hits. <br>*Streaming:* Each side can send `PredictRequest` and receive `PredictResponse`. The server can batch predictions, compress payloads, and apply back‑pressure via flow control. <br>Complexity: O(1) per auth check; streaming cost amortized over many frames. |
| **Edge Cases** | • Expired token mid‑stream → send error & close stream. <br>• Token revocation not yet cached → fallback to synchronous auth call. <br>• High latency in auth service could stall the entire stream – mitigated by local cache or a separate “handshake” channel. |
| **Optimize & Communicate** | • Pre‑validate tokens client‑side to reduce round trips. <br>• Use token introspection only on first request; subsequent ones rely on cached claim. <br>Explain that this design keeps the ML inference pipeline low‑latency while maintaining strong security guarantees, a common pattern at Meta/Google for real‑time recommendation services. |

*Word count: 210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
