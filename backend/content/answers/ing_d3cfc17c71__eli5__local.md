---
qid: ing_d3cfc17c71__eli5__local
question: 'Explain: and then you also said about 500 — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 264
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:50-05:00'
sources: []
---

**Geo‑hashing + WebSockets in a food‑delivery app**

Imagine every delivery driver is a moving dot on a giant treasure map.  
*Geo‑hashing* turns the dot’s latitude/longitude into a short “treasure code” (like a ZIP code). The map splits itself into grid squares; each square gets its own code. When you ask for nearby drivers, the system just looks at codes that match your area instead of checking every driver’s exact coordinates—fast and memory‑friendly.

*WebSockets* are like a two‑way walkie‑talk channel between the app on your phone and the server. Once the channel is open, the server can instantly push updates (new drivers arriving, orders moving) to your phone without you having to keep asking for changes. This keeps everyone’s view of the map fresh in real time.

Together they let a delivery service scale to thousands of drivers while keeping customers’ maps accurate and responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
