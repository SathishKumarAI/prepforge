---
qid: ing_66f86911f8__fp__local
question: 'Explain: i would like you to design a — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 437
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:07-05:00'
sources: []
---

**Designing an online parking‑garage reservation system**

*Fundamental problem*: We must map scarce, spatial resources (parking spots) to a dynamic set of users who arrive unpredictably and may change plans. The system must be **efficient** (maximise utilisation), **fair** (no overbooking), **scalable** (millions of concurrent users), and **robust** (handle network partitions).

1. **State abstraction**  
   *Spot → (location, size, availability window)*.  
   *User request → (desired time range, vehicle type, constraints).*  
   The state is a bipartite graph: spots on one side, active reservations on the other.  

2. **Allocation algorithm**  
   Use a **greedy weighted matching** that maximises revenue while respecting capacity constraints. Formulated as a *maximum‑weight bipartite matching* problem; solved in \(O(n^3)\) but with sparse updates we can use incremental Hungarian or min‑cost flow per hour bucket, giving near‑real‑time decisions.

3. **Concurrency control**  
   Spot reservations are tokens stored in a distributed lock service (e.g., Redis RedLock). A *two‑phase commit* across shards guarantees atomicity: first tentatively reserve spots, then commit once all shards agree.  

4. **Scalability & fault tolerance**  
   Partition by geographic region; each partition runs its own allocator and publishes state to a Kafka stream. A global “availability service” aggregates the streams for real‑time dashboards.

5. **Insight most miss**: Treat *parking time* as a resource dimension, not just space. By discretising time into slots (e.g., 15 min), we convert a continuous allocation problem into a combinatorial one where classic optimisation guarantees hold. This also enables dynamic pricing and overbooking strategies that mirror airline seat management.

The resulting system balances mathematical optimality with operational simplicity, delivering high utilisation and user satisfaction at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
