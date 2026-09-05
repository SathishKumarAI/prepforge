---
qid: ing_123024c841__fp__local
question: 'Explain: An API Contract in Practice — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 454
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:44:23-05:00'
sources: []
---

**An API (Application Programming Interface) as a Contract**

At its core, an API solves the *interface* problem: two independent systems must exchange data without sharing internal implementation details. The API is the *minimal set of observable behaviors* that one system promises to provide so the other can rely on it.

1. **Problem Space**  
   - System A needs to invoke functionality in System B.  
   - Without a clear contract, A may break when B changes its internals (coupling).  

2. **Why It Must Work This Way**  
   - *Abstraction*: The API hides complexity; only the signature and semantics are exposed.  
   - *Encapsulation*: Internal state changes in B cannot leak to A.  
   - *Stability*: A can evolve independently as long as the contract holds.

3. **Deeper Principle – Formal Specification**  
   An API is a formal mapping \( f: \mathcal{I} \rightarrow \mathcal{O} \) where \(\mathcal{I}\) are input messages and \(\mathcal{O}\) are output responses, each with pre‑/post‑conditions. This mirrors mathematical functions but includes side effects (e.g., state changes), error codes, and versioning.

4. **Non‑Obvious Insight**  
   *Versioning is not a “backwards compatibility” trick; it’s an intentional extension of the function space.*  
   By treating each major release as a new mapping \( f_k \) with its own domain/range, we preserve monotonicity: older clients still invoke \(f_{k-1}\) without being forced to adapt, while new features can be added orthogonally. This geometric view turns versioning from a maintenance headache into a clean, incremental expansion of the API’s functional space.

In practice, designing an API means defining this contract precisely—data schemas, error handling, latency guarantees—and committing to it so both sides can evolve independently yet reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
