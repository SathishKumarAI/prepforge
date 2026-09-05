---
qid: ing_3317a53011__fp__local
question: 'Explain: 2.3 Design Considerations — Amazon''s Dynamo | All Things Distributed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 489
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:53:32-05:00'
sources: []
---

**Why Dynamo exists**

In a global web service you need a key‑value store that can keep every node alive even when the network splits or some servers die. The fundamental problem is *availability vs consistency* (CAP). Dynamo solves it by **always serving reads and writes**, accepting that replicas may diverge temporarily, then reconciling later.

**Core design pillars**

1. **Consistent hashing + virtual nodes**  
   - Assign each server a set of hash slots; new nodes join by stealing slots from neighbors.  
   - This keeps key distribution smooth (≈ O(1) re‑balancing) and lets the system scale linearly.

2. **Quorum reads/writes with sloppy quorum**  
   - A write is accepted when `W` replicas respond; a read requires `R`.  
   - “Sloppy” means if a chosen replica is down, the request goes to the next slot in the ring.  
   - This keeps latency low while still protecting against hotspots.

3. **Vector clocks & conflict resolution**  
   - Every write tags its version with a vector clock (process‑id → counter).  
   - Reads return all *concurrent* versions; the application merges them.  
   - Guarantees that no update is lost even if two replicas receive writes simultaneously.

4. **Hinted handoff, read repair & gossip**  
   - If a replica is unreachable, a hint (the key/value + intended node) is stored locally and later forwarded when the node recovers.  
   - Periodic read‑repair checks consistency across replicas; gossip spreads membership/health info in O(log N).

**Non‑obvious insight**

Sloppy quorum *does not* simply “throw away” writes—it deliberately biases traffic toward healthy nodes while still honoring the logical ring order. This subtle re‑routing is what keeps Dynamo both highly available and **load‑balanced**, a trade‑off that many naïve designs overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
