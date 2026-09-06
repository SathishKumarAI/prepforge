---
qid: ing_9ca6be519a__fp__local
question: 'Explain: Daily Reservations and TPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 463
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:38:20-05:00'
sources: []
---

**Daily Reservations vs. Transactions‑Per‑Second (TPS) – why the Airbnb system design splits them**

At its core, a booking service must *ensure that every reservation is atomic and consistent* while also *serving many users concurrently*. The two metrics—**daily reservations** (how many bookings happen in a 24‑h window) and **TPS** (how many database writes per second the system can sustain)—capture orthogonal constraints.

1. **Daily reservations quantify *volume of business*.”**  
   They drive capacity planning: more listings, more users, higher revenue potential → larger caches, more replicas. The design must provision enough read‑heavy resources (e.g., content delivery networks for photos) and write buffers to absorb bursts when a hot listing goes live.

2. **TPS reflects *system throughput*.”**  
   Each reservation triggers multiple writes: user record, property availability calendar, payment intent, confirmation email. TPS is the bottleneck that determines how many of those writes can be performed without latency spikes. It dictates database sharding strategy, write‑throughput of message queues, and the choice between optimistic vs. pessimistic locking.

The deeper principle tying them together is **information‑theoretic consistency under concurrency**: every reservation must consume a unique time slot; otherwise, you violate *entropy* (conflicting states). To preserve low entropy, the system enforces *sequential consistency* on calendar slots while still achieving high TPS by:

- **Partitioning calendars per property** so writes to different listings don’t contend.  
- Using **optimistic concurrency control** with version vectors; only a tiny fraction of reservations hit conflicts, keeping average write latency low.

A non‑obvious insight: *TPS is not just a raw hardware number—it’s a measure of how well the system translates business volume into isolated state changes*. If you simply scale CPU for more TPS without redesigning the data model (e.g., per‑listing sharding), you’ll hit a wall when daily reservations explode. Thus, Airbnb’s design separates these metrics to architect both *scalable throughput* and *business‑driven capacity* independently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
