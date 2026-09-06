---
qid: ing_e774a708be__fp__local
question: 'Explain: Availability — The CAP Theorem in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 430
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:31-05:00'
sources: []
---

**Availability (A) – the “can‑service” side of CAP**

At its core, *availability* is a guarantee that every request to a distributed database receives a response—success or failure—within a bounded time, regardless of how many nodes are alive. In practice this means that even if some replicas have crashed or network links have flaked, the system still serves queries.

Why must we care?  
Consider an online retailer: a user’s checkout request must succeed or fail quickly; otherwise the sale is lost and the customer abandons the cart. If a node fails, we can simply route the query to another replica that is up. That is availability in action.

**Deriving the trade‑off**

1. **Consistency (C)** demands all replicas agree on the same value before replying.  
2. **Partition tolerance (P)** requires the system to keep operating when network links break.  

If a partition occurs, at least one side of it cannot see updates from the other. To maintain *both* C and P we would have to halt responses until communication is restored—violating A. Conversely, if we insist on A, some replicas will return stale data (breaking C) while still replying during a split.

Thus, **A + P ⇒ ¬C**; we cannot satisfy all three simultaneously. The theorem formalizes this impossibility: in the presence of network partitions, you must choose either consistency or availability.

**Non‑obvious insight**

Many assume that “availability” simply means “the system never goes down.” In reality it is a *decision*: the system chooses which nodes to query and how long to wait. A highly available design tolerates *inconsistent* reads; a highly consistent one may refuse to answer until all replicas agree. The subtlety lies in recognizing that availability is not a static property but a *policy choice* about latency versus correctness under failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
