---
qid: ing_e13d6bda87__fp__local
question: 'Explain: Conflict resolution — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 483
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:58:43-05:00'
sources: []
---

### Why conflicts arise  
When two or more replicas receive updates concurrently, the system must decide which value “wins.” This is a **decision problem**: given a set of candidate states, choose one that preserves consistency while allowing availability (CAP theorem). The choice can be framed as an *optimization* over a cost function—minimize divergence from a global truth subject to local latency constraints.

### Types of conflict resolution  

| Strategy | Mechanism | When it works |
|----------|-----------|---------------|
| **Last‑Write Wins (LWW)** | Timestamp or vector clock comparison | Simple, high availability; fails when clocks drift or updates are semantically different. |
| **Merge functions** | Domain‑specific logic (e.g., union of lists) | Preserves all information; requires custom code but avoids data loss. |
| **Operational Transformation / CRDTs** | Commutative operations that converge regardless of order | Guarantees eventual consistency for collaborative editing, counters, sets. |
| **Application‑level arbitration** | User or policy rules (e.g., “manager edits override employee”) | Useful when business logic dictates precedence. |

### Examples & use cases  

- **Offline mobile apps**: CRDTs let users edit a shared document while disconnected; merges happen automatically once connectivity returns.  
- **Distributed databases (Cassandra, DynamoDB)**: LWW is default for scalar fields but CRDTs are optional for set‑type columns.  
- **Collaborative editors (Google Docs, Etherpad)**: Operational Transformation ensures each client sees the same final document regardless of edit order.  
- **Financial ledgers**: Merge functions enforce “additive” semantics; conflicts trigger audit workflows instead of silent overrides.

### Non‑obvious insight  
*The cost of a conflict resolution strategy is not just latency or storage, but the **entropy introduced into the system**.* A naive LWW can silently discard legitimate updates, increasing uncertainty downstream. In contrast, CRDTs preserve information and keep entropy low, but at the expense of larger payloads. Designing for *minimal entropy* often yields systems that are both more robust and easier to reason about than those optimized solely for speed or simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
