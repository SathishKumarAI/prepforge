---
qid: ing_969f189adc__faang__local
question: 'Explain: Multiplayer undo/redo — Liveblocks | Realtime infrastructure for
  multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 488
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:34:39-05:00'
sources: []
---

**Clarify**  
The question asks how a real‑time platform (e.g., Liveblocks) implements undo/redo in a multiplayer setting—where many users may concurrently modify shared state, and actions must be consistent across all clients.

Assumptions to confirm:  
- Actions are atomic and serializable.  
- Clients can receive late or out‑of‑order updates.  
- Network latency is non‑negligible but bounded.  

**Approach**  
1. Capture each action with a unique, monotonically increasing sequence number (or Lamport timestamp).  
2. Broadcast actions to all peers via the real‑time channel.  
3. Maintain two stacks per client: *undo* (actions applied) and *redo* (undone actions).  
4. On undo, send an “inverse” action that references the original by ID; on redo, re‑broadcast the stored action.

**Depth**  
- **Consistency**: Use Operational Transformation (OT) or Conflict‑Free Replicated Data Types (CRDTs) so inverses apply correctly regardless of order.  
- **State Management**: Each client keeps a local copy of the world state; actions are applied in sequence order, with buffering for missing packets.  
- **Complexity**: O(1) per undo/redo operation locally; network cost proportional to action size.  
- **Trade‑offs**: CRDTs simplify merging but may need larger payloads; OT offers finer control but requires a transformation engine.

**Edge Cases**  
- Undoing an action that has already been undone by another client → idempotent inverse operations guard against double application.  
- Network partitions → buffered actions replayed once connectivity restores, ensuring eventual consistency.  
- Conflicting inverses (e.g., two users undo the same action simultaneously) → deterministic resolution via timestamps.

**Optimize & Communicate**  
Explain that Liveblocks leverages a lightweight OT engine under the hood to keep per‑client stacks small and actions idempotent. Highlight that by decoupling inverse generation from application, the system scales to dozens of concurrent users without sacrificing latency. Conclude with how this design satisfies FAANG expectations: clear problem framing, systematic solution, complexity awareness, and robust edge‑case handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
