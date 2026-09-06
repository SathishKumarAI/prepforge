---
qid: ing_24b7e73a6c__think__local
question: 'Explain: I no longer got remote Network calls — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 314
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:06:17-05:00'
sources: []
---

**Short answer**

Martin Fowler’s talk “I no longer got remote Network calls – The Many Meanings of Event‑Driven Architecture” (GOTO 2017) argues that true event‑driven systems don’t rely on a single, synchronous network call for coordination. Instead, they use *events*—asynchronous messages that can be stored, replayed, and processed independently—to drive behaviour across services. The talk explores the various interpretations of “event‑driving” (publishing/subscribing, command‑query separation, CQRS, eventual consistency) and shows how a well‑designed event‑based architecture reduces coupling, improves scalability, and enables resilience. Fowler also demonstrates practical patterns: using a message broker or event store, handling idempotency, managing schema evolution, and testing by replaying historic events.

**Key takeaways**

- **Decouple services** – replace tight “remote call” dependencies with loose event notifications.
- **Store the truth** – persist events so state can be rebuilt or audited later.
- **Embrace eventual consistency** – accept that different parts may see slightly out‑of‑sync data, but overall correctness is achieved over time.
- **Build resilience** – failed consumers can retry without affecting producers; system can continue operating.

If you’re moving from RPC‑style microservices to a more robust event‑driven design, Fowler’s talk gives both the philosophy and concrete patterns to start with.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
