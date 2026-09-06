---
qid: ing_9bc3c1a952__fp__local
question: 'Explain: The punch line — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 343
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:42-05:00'
sources: []
---

**Why DNS‑Based GSLB Fails**

The *core problem* of global load balancing is to route each client request to the “best” data center in real time—minimizing latency, avoiding congestion, and respecting fail‑over constraints.  
DNS can only answer a **static mapping** (IP → IP) that changes slowly because resolvers cache responses for the *TTL*. Even if you programmatically rotate answers every minute, most clients will keep using the same server until their local cache expires.  

This violates the principle of *optimal control*: in a stochastic network the optimal policy must react to instantaneous queue lengths and round‑trip times—something DNS cannot observe or update fast enough. Moreover, DNS is inherently **non‑idempotent**: a single client can be split across multiple backends over time (split‑DNS), causing session‑affinity problems and cache inconsistency.

A non‑obvious insight: **DNS is a *one‑way* protocol**—the resolver never learns which IP the client actually connected to. Thus, if a chosen data center becomes overloaded after the DNS reply was issued, there’s no feedback loop to redirect that same client elsewhere without a new query. In contrast, application‑level load balancers (e.g., HTTP proxies) receive per‑request metrics and can adapt immediately.

In short, DNS lacks *statefulness*, *low latency* updates, and *feedback*, making it fundamentally ill‑suited for true global load balancing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
