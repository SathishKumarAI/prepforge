---
qid: ing_5ea34f4993__fp__local
question: 'Explain: Cross-tenant leakage — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 412
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:44-05:00'
sources: []
---

### Why *cross‑tenant leakage* matters for an AI agent

An autonomous system that serves many users (tenants) keeps a **memory** of past interactions and a **state machine** that decides what to do next.  
If the agent’s memory is a simple key/value store indexed only by user ID, the underlying storage layer still shares the same physical tables or cache lines for all tenants. A bug in the query logic (e.g., an off‑by‑one index, a stale pointer, or a race condition) can allow a tenant to read another’s private data.  

From an **information‑theoretic** view, each user’s state is a *channel* of confidential bits. The agent must act as a *perfect channel seal*: the probability that any bit leaks to the wrong receiver should be zero. This is equivalent to a *zero‑knowledge proof* over the memory layout: for every read request, the system proves (in its own execution trace) that the requested key belongs to the caller’s namespace.

The deeper principle is **differential privacy of state**: we require that the probability distribution of outputs conditioned on tenant A’s data be indistinguishable from that conditioned on a synthetic dataset where A’s data is replaced. If the memory layout violates this, the leakage can be arbitrarily large.

#### Non‑obvious insight  
Even if *each* operation is correctly isolated (e.g., using prepared statements), **caching** can subvert isolation: an in‑memory cache keyed only by tenant ID may still serve stale or mis‑tagged entries. The fix is to tag every cached entry with a cryptographic hash of the tenant key, and validate it on read—effectively turning the cache into a *tamper‑evident ledger*. This subtle extra step turns a simple storage bug into a robust leakage‑proof design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
