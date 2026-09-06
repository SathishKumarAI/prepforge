---
qid: ing_93a20f642b__fp__local
question: 'Explain: How Webhooks Work — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 332
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:18:55-05:00'
sources: []
---

**Why a webhook is the minimal communication pattern for event‑driven ML pipelines**

At its core, an ML system needs *state change notifications*: “the model just finished training”, “new data arrived”, or “prediction failed”.  
The naive solution is polling—every client repeatedly queries the server until it finds a new state.  
Polling wastes bandwidth and introduces latency proportional to the poll interval; it also requires the server to remember every client’s last‑seen timestamp, an O(n) bookkeeping problem.

A webhook inverts this: the *client* (the service that wants updates) registers a URL with the server.  
When the event occurs, the server **pushes** a minimal payload (often just an ID or hash) via HTTP POST.  
This eliminates polling’s wasted cycles and reduces the server’s memory to a single subscription list per endpoint.

Mathematically, it is an implementation of *observer pattern* with a one‑to‑many mapping that satisfies:

1. **Monotonicity** – events are strictly increasing; once pushed, they cannot be “undone”.
2. **Statelessness** – the server does not keep client state beyond the URL, making horizontal scaling trivial.

A non‑obvious insight: because webhooks are *stateless* from the server’s perspective, they can be replayed or forwarded to other services (e.g., message queues) without re‑authentication, enabling seamless integration of ML models into heterogeneous data ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
