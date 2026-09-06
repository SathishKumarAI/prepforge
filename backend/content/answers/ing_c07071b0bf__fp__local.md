---
qid: ing_c07071b0bf__fp__local
question: 'Explain: Strong consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 351
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:58-05:00'
sources: []
---

**Strong consistency – why it matters and how it works**

At its core, strong consistency guarantees that every read returns the most recent write, no matter which replica a client talks to. In distributed storage this is equivalent to **linearizability**: operations appear to happen atomically in some total order that respects real‑time precedence.

Why is this needed? Consider a financial system where an account balance must never be double‑spendable. If two concurrent updates could be seen out of order, the ledger could temporarily report an incorrect balance and allow an overdraft. Strong consistency enforces a single logical sequence of events, preventing such anomalies.

How does it work? The system typically elects a **primary** (leader) that serializes all writes; replicas forward their state to this leader and apply updates in order. Reads can either be forwarded to the primary or served from replicas after a *read‑after‑write* quorum check guarantees they have seen the latest commit. This pattern is essentially **Paxos/RAFT consensus**: each write becomes an agreed‑upon log entry, and all nodes replay this log deterministically.

Non‑obvious insight: *Strong consistency is not a property of data storage alone; it’s a property of the **protocol for ordering events***. Even if you use a perfectly replicated disk, without a protocol that enforces a global order, reads may still observe stale values. Thus the real challenge lies in designing an efficient consensus layer that tolerates network partitions and failures while keeping latency low.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
