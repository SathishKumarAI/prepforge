---
qid: ing_64008e5793__faang__local
question: 'Explain: Active-active — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 414
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:36:59-05:00'
sources: []
---

**Clarify**  
The question asks how *Active‑Active* architecture is described in the *system‑design‑primer* on GitHub and why it matters for large‑scale ML deployments. I’ll assume we’re focusing on data consistency, fault tolerance, and latency trade‑offs.

**Approach**  
1. Summarize the primer’s definition of Active‑Active.  
2. Highlight key properties: multiple replicas running simultaneously, read/write routing, conflict resolution.  
3. Explain relevance to ML systems (e.g., model serving, feature stores).  

**Depth**  
- *Definition*: Active‑Active means **all nodes are live and can accept traffic**; no single “master” node exists.  
- *Consistency*: Uses **multi‑master replication** or **conflict‑free replicated data types (CRDTs)** to merge divergent updates.  
- *Latency*: Local reads/writes reduce round‑trip time, critical for low‑latency inference.  
- *Failure handling*: If one node fails, others continue serving; failover is seamless.  
- *ML use‑case*: Feature stores (e.g., Feast) deploy Active‑Active to ensure feature availability during model rollouts or A/B tests.

**Edge Cases**  
- *Write conflicts*: Two nodes update the same feature simultaneously → CRDT merge logic required.  
- *Network partitions*: Splits may cause divergent data; eventual consistency must be guaranteed.  
- *Data skew*: Unequal load can overload certain replicas; need smart routing.

**Optimize & Communicate**  
I’d suggest adding a lightweight **vector clock** for conflict resolution and a **consistent hashing ring** to balance traffic. In an interview, I’d narrate: “Active‑Active gives us high availability and low latency but introduces consistency challenges—CRDTs or vector clocks solve this.” This shows clear structure, depth, and trade‑off awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
