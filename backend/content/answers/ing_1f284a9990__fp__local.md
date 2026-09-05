---
qid: ing_1f284a9990__fp__local
question: 'Explain: Do Not Treat IP as Identity — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 315
total_tokens: 489
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:12:21-05:00'
sources: []
---

**Why an IP address is *not* a reliable identity in distributed systems**

At its core, the goal of identity management is to uniquely and persistently associate actions or data with a particular entity (user, service, device). An IP address is only a *location marker*—a transient allocation that can change at any moment due to DHCP, NAT, load balancers, or mobile handoffs. Relying on it as an identifier violates the **principle of immutability**: if the key used for routing or authentication changes, the system must either re‑establish state or risk data loss.

From an optimization standpoint, IP‑based identity forces a *many‑to‑one* mapping that hurts scalability. Every time a client reconnects from a new address, the server must perform costly lookup operations (reverse DNS, session table scans) to reconcile state, increasing latency and memory overhead. Moreover, NAT and proxies introduce *aliasing*: multiple users may share an IP, leading to ambiguous ownership.

A deeper insight: **network addresses are *contextual***, not *semantic*. They encode topology but not provenance. A robust design should instead use a token or certificate that is bound to the underlying cryptographic key, which remains stable regardless of network changes. This preserves both security (proof of possession) and performance (constant‑time lookup), while enabling graceful scaling across heterogeneous environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
