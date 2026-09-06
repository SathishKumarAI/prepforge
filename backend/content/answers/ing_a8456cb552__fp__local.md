---
qid: ing_a8456cb552__fp__local
question: 'Explain: Online Games — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 481
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:25-05:00'
sources: []
---

### Why a Game Needs a Transport Protocol

A real‑time multiplayer game is an *online optimization problem*: each client must maintain a consistent world state while minimizing latency and bandwidth waste.  
At the lowest level this boils down to **sending messages (state updates) over a noisy channel** that may drop, reorder or delay packets.

### TCP – “Reliable, ordered” as a constraint

TCP guarantees delivery, in‑order sequencing, and congestion control.  
In game terms:

* **Reliability → correctness**: every update must reach all peers.  
* **Ordering → causality**: actions must be applied chronologically.  

But these guarantees impose *stateful* handshakes, retransmission timers, and a *congestion window* that can stall the pipeline when a packet is lost. In fast games (≈ 60 Hz) even a single lost update can block subsequent frames, turning the network into a bottleneck.

### UDP – “Best‑effort” as freedom

UDP offers only datagram delivery: no handshake, no ordering, no retransmission.  
For games this means:

* **Low overhead** → more packets per second fit in bandwidth.  
* **No head‑of‑line blocking**: a lost packet doesn’t stall the rest of the stream.  

The game engine must therefore *implement its own reliability where needed* (e.g., critical actions like “player killed”) and *accept eventual consistency* for high‑frequency updates (“player position”).

### Non‑obvious insight

Most designers treat UDP as “just unreliable.”  
In reality, **the protocol is a *scheduling problem***: the engine must decide which messages to retransmit, when, and how to merge out‑of‑order packets. Optimal scheduling often follows a *time‑to‑live* policy that balances freshness against bandwidth—a principle borrowed from real‑time operating systems.

**Bottom line:** use TCP only for essential control traffic; use UDP for bulk state updates, augmenting it with lightweight reliability on top of the transport. This hybrid design satisfies the optimization objective—minimize end‑to‑end latency while guaranteeing correctness where required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
