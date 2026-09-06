---
qid: ing_969f189adc__fp__local
question: 'Explain: Multiplayer undo/redo — Liveblocks | Realtime infrastructure for
  multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 386
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:50-05:00'
sources: []
---

**Why a multiplayer undo/redo must be *state‑centric* rather than *command‑centric**  
In a collaborative game the world is an evolving graph of objects. Each client issues “move X to Y” or “spawn Z”. If we simply replay those commands on another peer, any out‑of‑sync event (network lag, dropped packet) will diverge the state; undoing becomes ambiguous because the command list has changed.  
Instead, Liveblocks treats the *current snapshot* of every object as first‑class. Undo is “revert to a previous snapshot”, redo is “apply the next snapshot”. The underlying principle is **state‑delimited causality**: any two snapshots are fully comparable regardless of how many intermediate commands occurred.  

**How it works in practice**  
1. Every client records its local edits as *operations* (op = Δstate).  
2. When a user hits undo, the client replaces the current snapshot with the stored one from the history buffer.  
3. Liveblocks broadcasts this new snapshot to all peers; because snapshots are idempotent, they converge instantly.  

**Non‑obvious insight**  
The real power comes from *treating history as a linear timeline of immutable states* rather than a mutable log. This lets undo/redo survive arbitrary network partitions and allows agents (bots) to “rewind” deterministically for replay or debugging without re‑executing stochastic logic. In short, the system trades a small bandwidth cost for a guarantee that every peer can recover the exact same state at any point in history, which is why Liveblocks’ realtime infrastructure is uniquely suited for multiplayer undo/redo.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
