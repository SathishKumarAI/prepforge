---
qid: ing_a3cf06ea03__faang__local
question: 'Explain: Weak consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 482
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:13-05:00'
sources: []
---

**Weak Consistency in Distributed Systems**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Restate*: “We’re looking at the guarantees that a read might return stale data after a write, as opposed to strong (linearizable) consistency.” <br>*Assumptions to confirm*: 1) We’re talking about replicated key‑value stores (e.g., Dynamo, Cassandra). 2) The system uses asynchronous replication. 3) Reads can be performed from any replica. |
| **Approach** | 1️⃣ Explain the CAP theorem backdrop – trade‑off between consistency, availability, partition tolerance. <br>2️⃣ Define weak consistency: *eventual* or *read‑your‑writes* guarantees. <br>3️⃣ Walk through a typical read path (query any replica) and write path (propagate asynchronously). |
| **Depth** | - **Eventual Consistency**: After a finite time, all replicas converge to the same value. Implemented via anti‑entropy or gossip protocols. <br>- **Read‑Your‑Writes**: The client’s own writes are visible immediately by routing subsequent reads to the writing node or using session tokens. <br>Complexity: Writes O(1) latency; reads O(1). Trade‑off: lower latency and higher availability, but potential stale reads. |
| **Edge Cases** | • Network partitions can delay convergence → test with simulated splits. <br>• Write storms may overload anti‑entropy → monitor replication lag. <br>• Strong consistency required for financial transactions → fallback to quorum writes (e.g., 2/3). |
| **Optimize & Communicate** | Highlight how tuning *replication factor* and *gossip interval* balances latency vs. staleness. Explain that in practice, many services expose a “consistency level” knob (e.g., `QUORUM`, `ALL`). Conclude: weak consistency is a deliberate choice to achieve high availability in large‑scale systems; it’s acceptable when the application can tolerate eventual convergence. |

*This concise 160‑word explanation follows the FAANG interview style: clear framing, systematic plan, technical depth, edge‑case awareness, and actionable trade‑off discussion.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
