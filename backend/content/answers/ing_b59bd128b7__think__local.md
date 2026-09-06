---
qid: ing_b59bd128b7__think__local
question: 'Explain: Breaking Redlock with bad timings — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 579
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:57:18-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**

- *What is “RedLock”?* – A distributed lock algorithm for Redis, proposed by Salvatore Sanfilippo and discussed by Martin Kleppmann.
- *“Bad timings”* – Refers to timing‑related pitfalls that can break a lock (e.g., clock drift, network latency, slow servers).
- *Goal*: Explain how Kleppmann’s critique shows the flaws in RedLock and what alternative patterns are safer.

**2️⃣ Mental model / framework**

1. **Distributed lock basics** – client ↔︎ server(s), lease time, renewal.
2. **RedLock workflow** – acquire on ≥ N of 5 Redis instances; release after timeout.
3. **Timing sources** – local clock, network round‑trip, server processing delay.
4. **Failure modes** – clock drift, partial failures, “split brain”.

**3️⃣ Step‑by‑step reasoning**

- Start with RedLock’s *acquire* phase: a client sends `SET key value NX PX lease` to each instance, records the timestamps it sent and received replies.
- Show how Kleppmann calculates **time difference** between client’s send time and server’s reply. If the sum of these differences exceeds the chosen lease, the lock is considered unreliable.
- Illustrate *bad timing* scenarios:
  - Server A is slow → large RTT → lease may expire before other instances respond.
  - Clock drift: servers’ clocks not synchronized → inconsistent lease calculations.
  - Network partitions: some nodes unreachable → client thinks it holds a majority but actually doesn’t.
- Explain how these lead to **lost or duplicated locks**, violating safety.

**4️⃣ Common traps & wrong turns**

- Assuming Redis guarantees monotonic timestamps; in reality, each node has its own clock.
- Believing “≥ 3 out of 5” is always safe; neglects the fact that all nodes might be down simultaneously.
- Ignoring the cost of acquiring locks on *every* instance; a single slow node can stall all clients.

**5️⃣ Sanity‑check & communicate**

- Verify that for every timing source you consider its worst‑case bound and compare it to the lease.
- Summarize: RedLock’s reliance on loosely coupled clocks and network delays makes it fragile. Kleppmann recommends simpler patterns (e.g., a single primary Redis with a small, well‑timed lease) or external consensus systems (Zookeeper, etcd).
- Conclude with practical advice: use **lease expiration + heartbeat** on a *single* reliable node, or adopt a proven coordination service.

This structured approach lets you dissect any distributed‑locking proposal by focusing on timing assumptions and failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
