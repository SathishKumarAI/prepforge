---
qid: ing_802a4e674a__eli5__local
question: 'Explain: Vertical Scaling (Scale Up) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 254
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:00:01-05:00'
sources: []
---

Think of a single‑room office that keeps getting more paperwork. **Vertical scaling** is like buying a bigger desk and a faster computer for that one room instead of opening another office. You add more *CPU* (the brain), *RAM* (short‑term memory) or *storage* (long‑term filing space) to the same machine, so it can juggle more tasks at once.

- **CPU**: The processor that does calculations, like a worker’s hands.
- **RAM**: Fast short‑term memory where data sits while being processed, like a desk surface.
- **Storage**: Long‑term hard drive or SSD, the filing cabinets for everything kept forever.

When you “scale up,” you upgrade these parts on the same server. It’s simple to set up—just plug in more RAM or swap to a larger CPU—but it has limits: once the machine is at its maximum capacity, adding more can’t help, and if that single machine fails, everything stops. This contrasts with **horizontal scaling** (adding more servers) which spreads work across many units.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
