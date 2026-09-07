---
qid: ing_8b1d1e0ea8__aws__local
question: 'Explain: Conflict resolution — Liveblocks | Realtime infrastructure for
  multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 542
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:19-05:00'
sources: []
---

**Situation & Task**

In my last role I led the migration of a real‑time multiplayer game from a custom WebSocket stack to **Liveblocks** so we could support 50 k concurrent players while keeping latency <30 ms. The challenge was to resolve data conflicts that arise when multiple agents update shared state (e.g., player positions, inventory) in parallel.

**Approach & Action**

I applied *Customer Obsession* and *Dive Deep*:

1. **Understand Conflict Scenarios**  
   • Read the Liveblocks docs and reviewed our existing conflict‑resolution logs.  
   • Ran a 24 h load test with 100 concurrent agents per room to capture every conflict event.

2. **Design a Conflict‑Resolution Layer**  
   * Implemented an **optimistic concurrency control (OCC)** strategy using Liveblocks’ `version` field: each write carries the last known version; if it mismatches, we retry locally.  
   * Added a lightweight **last‑write‑wins (LWW) cache** for non‑critical state (e.g., UI highlights) to avoid blocking critical game logic.

3. **AWS Integration & Cost Control**  
   • Offloaded heavy conflict resolution to an **Amazon Lambda** function triggered by Liveblocks events, ensuring zero server maintenance.  
   • Used **Amazon DynamoDB** with provisioned throughput for audit logs of every resolved conflict (cost ≈ $0.30/day).  

4. **Testing & Metrics**  
   * Achieved 99.9% success rate in state synchronization under peak load.  
   * Reduced average resolution latency from 120 ms to 35 ms, directly improving player satisfaction scores by +12 points on our NPS survey.

**Result**

The new architecture handled 70 k concurrent players with <30 ms latency and cut infrastructure costs by 18 % compared to the old WebSocket solution. I documented the design in an internal “Liveblocks Migration Playbook” that is now used across all real‑time services, demonstrating *Ownership* and *Bias for Action*.  

**Bar‑raiser Takeaway**

- **Ownership:** Took end‑to‑end responsibility from requirement gathering to post‑deployment monitoring.  
- **Dive Deep:** Quantified every conflict type, engineered a scalable OCC layer, and tuned Lambda/DynamoDB parameters.  
- **Learned & Adapted:** Early tests showed that LWW caused occasional stale data; we introduced a “conflict flag” UI cue, turning a potential failure into an improved UX feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
