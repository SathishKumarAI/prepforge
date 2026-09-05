---
qid: ing_919eed6009__star__local
question: 'Explain: HTTP/3 — Explaining 8 Popular Network Protocols in 1 Diagram'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 382
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:52-05:00'
sources: []
---

**Situation:**  
During my internship at a cloud‑storage startup, the product team wanted an easy way for new hires to grasp the evolution of web protocols—from HTTP/1.1 to QUIC—and how they impact latency and throughput.

**Task:**  
I was tasked with creating a single, clear diagram that highlighted eight key protocols (HTTP/1.1, HTTP/2, HTTP/3, SPDY, WebSocket, TLS 1.3, QUIC, and gRPC) while also explaining why HTTP/3 is the most significant recent change.

**Action:**  
I gathered protocol specs from IETF RFCs and benchmark data from real‑world traces. Using Figma’s vector tools, I layered a “protocol stack” diagram: at the base, TLS 1.3 over QUIC; above that, HTTP/3; sidebars for WebSocket, gRPC, SPDY, and legacy HTTP/2. I annotated each layer with key metrics—connection‑time reduction (≈30 % faster), multiplexing (no head‑of‑line blocking), and UDP‑based transport. I then rehearsed a 3‑minute pitch, turning the diagram into a story that walked listeners through “how HTTP/3 eliminates the TCP handshake” and why that matters for mobile latency.

**Result:**  
The diagram was adopted in the onboarding deck; within two weeks, new hires reported a 40 % faster ramp‑up to contributing on protocol‑related tickets. I learned how visual abstraction combined with precise metrics can demystify complex networking concepts—an approach I keep using when explaining technical trade‑offs to non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
