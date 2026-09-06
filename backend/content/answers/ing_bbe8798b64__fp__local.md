---
qid: ing_bbe8798b64__fp__local
question: 'Explain: Consistency Approaches — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 565
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:43:26-05:00'
sources: []
---

### Consistency in Caching – What Is It?

At its core, a cache is a *shortcut* for reading data. The fundamental problem it solves is the **latency‑throughput tradeoff**: fetching from disk or across a network is orders of magnitude slower than returning an in‑memory copy.  
When many clients read and write the same key, the system must decide which value to expose at any instant. This is the *consistency* problem.

> **Why it works the way it does:**  
> A cache can either (1) **ignore** writes that arrive while a stale copy lives in memory—leading to *eventual consistency*, or (2) enforce that every read sees the most recent write—requiring *strong consistency*.  
> The choice is governed by the *CAP* theorem: you can’t simultaneously guarantee Consistency, Availability, and Partition tolerance. Caching sits on the “Availability + Partition tolerance” side; it trades strict consistency for low latency.

**Typical consistency approaches**

| Approach | Mechanism | Trade‑off |
|----------|-----------|-----------|
| **Write‑through** | On every write, update cache *and* backing store atomically. | Strong consistency but higher write cost. |
| **Write‑back** | Update cache only; defer persistence. | Faster writes, risk of loss on failure. |
| **Cache invalidation (push)** | When a write occurs, send an “invalidate” message to all caches. | Keeps reads fresh; costly on many nodes. |
| **Versioning / Vector Clocks** | Attach a monotonically increasing version or vector clock to each value. Readers compare versions to decide staleness. | Allows fine‑grained conflict resolution and *eventual* consistency without wholesale invalidation. |

> **Non‑obvious insight:**  
> In many systems, the *real* cost is not the write itself but the *propagation of state*. Using vector clocks lets a cache serve stale data while still guaranteeing that any two replicas can reconcile deterministically. Thus, you get “good enough” consistency for reads and only pay the propagation cost when a conflict actually arises—often far less than naïve invalidation would incur.

In short, caching is not just about speed; it’s an engineered compromise between latency, availability, and consistency, with versioning being the key to navigating that trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
