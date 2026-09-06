---
qid: ing_dd38909975__fp__local
question: 'Explain: Figma System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 581
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:47-05:00'
sources: []
---

**Figma System Design – What It Really Tests**

The core problem any *product‑design* platform like Figma solves is **real‑time collaborative editing of high‑fidelity graphics** while preserving a responsive, versioned history for thousands of concurrent users.  
From this observation we can derive the necessary architectural constraints:

| Constraint | Why it must hold | Design implication |
|------------|------------------|--------------------|
| *Low latency* (≤ 100 ms) | Users expect edits to appear instantly; otherwise collaboration breaks down. | Peer‑to‑peer or gossip layers for local updates, with a lightweight consensus protocol for global ordering. |
| *Strong consistency* on shared objects | Two designers cannot overwrite each other’s changes silently; merge conflicts would corrupt prototypes. | Operational Transformation (OT) or Conflict‑Free Replicated Data Types (CRDTs) to ensure eventual convergence while allowing edits to be applied locally first. |
| *Scalable persistence* | Every change is a new version of the file; storing them naïvely leads to exponential growth. | Delta encoding + chunked storage (e.g., S3‑style object store) plus a graph database for dependency resolution. |
| *Undo/redo & branching* | Designers need to experiment without fear. | Version graph with parent pointers, stored as lightweight DAG nodes; garbage collection of orphaned branches. |
| *Offline resilience* | Mobile or flaky Wi‑Fi still permits work. | Local cache + sync queue that replays queued operations once connectivity returns. |

**Non‑obvious insight:**  
The *visual* nature of Figma turns a typical “data‑centric” collaborative problem into a *geometry‑centric* one. Every object is a 2‑D shape with properties (position, transform, style). By representing the canvas as an **immutable scene graph**, you can perform incremental rendering and diffing efficiently: only nodes whose hash changed need to be re‑sent. This turns what could be a massive payload into a series of small, semantically rich messages.

**Typical FAANG interview angle**

1. **Model the state space** – describe the canvas as a directed acyclic graph of layers/objects.  
2. **Choose a consistency model** – explain OT vs CRDT trade‑offs for low‑latency collaboration.  
3. **Design the persistence layer** – talk about delta encoding, chunking, and eventual GC.  
4. **Handle edge cases** – offline edits, conflict resolution, permission hierarchies.  

By starting from “I need a real‑time collaborative design tool” you arrive naturally at the above constraints, ensuring your solution is both principled and production‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
