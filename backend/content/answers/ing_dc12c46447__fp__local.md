---
qid: ing_dc12c46447__fp__local
question: 'Explain: CP (Consistency and Partition Tolerance)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 453
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:47:10-05:00'
sources: []
---

**CP – Consistency + Partition Tolerance**

In a distributed system the *fundamental problem* is to keep replicas of data in sync while they are spread over unreliable links.  
A network partition can separate nodes; during that time some operations will be unable to reach all replicas. The classic impossibility result (CAP/Brewer’s theorem) shows that **you cannot guarantee both**  

1. **Consistency** – every read returns the most recent write, and all nodes see the same value;  
2. **Availability** – every request receives a response without waiting for network recovery.

The trade‑off is derived from the fact that to preserve consistency across a partition you must *synchronize* before acknowledging an operation. If some replicas are unreachable, the system must either wait (become unavailable) or ignore those nodes (break consistency). Hence “CP” systems choose the first option: they **reject** requests until a quorum of nodes is reachable, ensuring all accepted operations are globally consistent.

A deeper principle is *quorum‑based consensus*: by requiring that at least `N/2 + 1` replicas agree on each write and read, you guarantee that any two quorums intersect. This intersection property mathematically guarantees consistency even under partitions—no two independent subsets can commit conflicting values.

**Non‑obvious insight:** Partition tolerance is *not* a design choice; it is a requirement for any system that spans multiple machines. The CAP trade‑off only appears when you decide whether to sacrifice availability or consistency once a partition occurs. Thus, a “CP” system isn’t merely “consistent”; it is **consistently consistent**—it never compromises correctness even if it becomes temporarily unavailable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
