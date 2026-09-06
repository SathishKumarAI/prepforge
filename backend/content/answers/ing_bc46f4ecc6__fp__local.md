---
qid: ing_bc46f4ecc6__fp__local
question: 'Explain: Fan-Out and Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 378
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:44:03-05:00'
sources: []
---

**Fan‑Out & Filtering in a Publish/Subscribe system**

*The problem*: A publisher emits events that many consumers may or may not care about. Naïvely sending every event to every consumer wastes bandwidth and compute, yet we must preserve the *causal ordering* of events for each interested party.

*Why it works this way*:  
1. **Fan‑out** is simply a one‑to‑many broadcast that guarantees every subscriber receives every message it subscribes to. This satisfies the *information‑theoretic* requirement: if a consumer can be influenced by an event, it must see it.  
2. **Filtering** turns this blanket distribution into selective delivery. A filter is a predicate \(p(e)\) evaluated at publish time; only messages where \(p(e)=\text{true}\) are routed to the subscriber. This reduces traffic by eliminating *irrelevant* information early, akin to a decision tree pruning irrelevant branches.

The deeper principle is **information efficiency**: we avoid sending unnecessary data while still ensuring that every consumer’s *entropy budget* (the amount of uncertainty it can resolve) is met. In a distributed setting, this translates to lower network cost and faster processing downstream.

*Non‑obvious insight*: Filtering at the publisher, not at the subscriber, yields **causal consistency** without extra coordination. If filtering were deferred to subscribers, they would need to buffer all messages and perform local filtering, which could break ordering guarantees when consumers join late or fail. By enforcing predicates upstream, each consumer’s message stream remains a *monotonic* subsequence of the original event log, preserving both order and atomicity without additional synchronization overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
