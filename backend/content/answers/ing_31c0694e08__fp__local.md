---
qid: ing_31c0694e08__fp__local
question: 'Explain: Example: Overselling Inventory — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 462
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:28-05:00'
sources: []
---

### Why “overselling” is a *fundamental* bug  
In an e‑commerce store the *state* of every item is its **inventory count**.  
When a customer places an order the system must atomically:  

1. read the current count,  
2. decrement it by one (or more), and  
3. persist the new count.

If two concurrent orders read the same pre‑decrement value before either writes back, both think “stock is available” and each decrements the count. The store ends up with a negative inventory—customers receive items that never existed.  

### ACID as the *minimal* consistency guarantee  
- **Atomicity**: the decrement must be all‑or‑nothing; if one order aborts the other’s change cannot survive.  
- **Consistency**: the invariant “count ≥ 0” must hold after every transaction.  
- **Isolation**: concurrent orders should not see each other’s intermediate states—otherwise the race above occurs.  
- **Durability**: once an order succeeds, its inventory reduction must survive crashes.

Thus ACID is not a luxury; it encodes the *information‑theoretic* requirement that every observable state of the system be a valid configuration of the underlying combinatorial problem (non‑negative integer counts).  

### A non‑obvious insight  
Most designers focus on locking or optimistic concurrency. The deeper point is that **inventory is a *bounded resource*, so the system’s state space is finite and can be modeled as a lattice**: each item’s count forms a chain, and the global inventory is their product lattice. ACID transactions are simply *join‑irreducible* operations on this lattice—each update must move to an adjacent node (decrement by one). Any violation of isolation corresponds to a forbidden jump that collapses the lattice structure, producing impossible states (negative counts). Recognizing inventory as a lattice clarifies why even a simple “check‑then‑update” pattern fails: it bypasses the necessary join operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
