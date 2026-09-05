---
qid: ing_153aca2c57__fp__local
question: 'Explain: Event-Carried State Transfer — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 376
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:50:10-05:00'
sources: []
---

**Event‑Carried State Transfer (ECT)** is a way to move *state* between services by piggy‑backing it on the events they already emit.  
The “event‑driven” part comes from the observation that in a distributed system every change of state that matters to clients is already being broadcast as an event—think of a domain‑event like *OrderPlaced* or *InventoryUpdated*. Those events are the *causal signals* that other services subscribe to.  

Why must we use events?  
1. **Causality**: An event represents a physical change in the system; any state derived from it is guaranteed to be consistent with that change.  
2. **Decoupling**: By listening only to published events, a service never needs to query another’s database or call its API—its view of the world is built solely from messages it receives.  
3. **Scalability & resilience**: Events are asynchronous and can be replayed; if a consumer crashes it can catch up by re‑processing the event log.

The deeper principle is *information flow* in a probabilistic system: events are the minimal sufficient statistics of past interactions that determine future state. ECT leverages this to avoid duplication and keep services eventually consistent without explicit locking.

**Non‑obvious insight**: The “carried” part means you don’t just emit an event; you embed the entire *snapshot* of the relevant domain object in the payload. This turns a read‑model into a first‑class participant, allowing downstream services to evolve their own projections locally while still being guaranteed that their base data came from the authoritative source.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
