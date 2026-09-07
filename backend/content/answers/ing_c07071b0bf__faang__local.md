---
qid: ing_c07071b0bf__faang__local
question: 'Explain: Strong consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 503
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:09:13-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *strong consistency*—the guarantee that any read operation will see the most recent write. I’ll assume we’re talking about distributed key‑value stores (e.g., Dynamo, Spanner) and that the audience knows basic CAP trade‑offs.

**Approach**  
1. Define the property formally.  
2. Contrast with eventual consistency.  
3. Explain how protocols enforce it (synchronization, quorum, locking).  
4. Highlight practical implications (latency, availability).

**Depth**  
Strong consistency means *all* replicas observe updates in the same order; a read after a write will never return stale data. In practice this is achieved by:
- **Quorum reads/writes**: A write must be acknowledged by *N* nodes and a subsequent read must contact at least one of those nodes (or *N* again) before returning data.
- **Primary–secondary replication**: All writes go through a leader; followers apply the log in order, ensuring linearizability.
- **Two‑phase commit / Paxos/ Raft**: Consensus protocols guarantee that once a value is committed, every node eventually adopts it.

Complexity: quorum methods add *O(N)* communication per operation; consensus adds *O(log N)* message steps and requires stable leader election. Trade‑off: higher consistency → lower availability during partitions (CAP theorem).

**Edge Cases**  
- Network partitions: Strong consistency forces a system to refuse writes/reads until connectivity is restored.  
- Clock skew in primary–secondary models can lead to lost updates if not handled with vector clocks or timestamps.  
- Client retry logic must detect “write‑after‑read” anomalies.

**Optimize & Communicate**  
To improve latency, systems often use *optimistic reads* that hit a local cache and fall back to the quorum on failure—still preserving consistency. I’d present this as: “We expose strong consistency at the API level but internally allow short‑lived stale reads for performance, with an explicit `forceRefresh` option.”  
In conversation, I’d emphasize that choosing strong consistency is a deliberate design decision driven by business requirements (e.g., banking) and that it comes with clear operational costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
