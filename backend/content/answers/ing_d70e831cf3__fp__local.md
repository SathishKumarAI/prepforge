---
qid: ing_d70e831cf3__fp__local
question: 'Explain: that and um to be able to — Amazon System Design Interview: Design
  Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 507
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:37:27-05:00'
sources: []
---

### Designing a Multi‑Level Parking Garage for an Amazon Scale

**Problem Statement (first principles)**  
A city block can hold only *N* cars at any instant, yet the demand peaks twice a day and must be met with minimal latency. The system must:  
1. **Maximize spatial utilization** – every square meter should contribute to revenue.  
2. **Guarantee safety & reliability** – no collisions or deadlocks in the automated lift system.  
3. **Scale linearly** – adding a level should cost ≈ O(1) per car, not O(N).

**Why the classic “stack‑and‑queue” layout fails**  
If cars are parked arbitrarily, retrieving one may require moving *k* others (k≈N). The expected movement cost is O(N), violating 3.  

**Optimal solution: a deterministic priority queue + level‑partitioned lifts**  
- **Level partitioning**: Each floor houses a fixed number of spots (S) and a dedicated lift.  
- **Priority queue per level**: Cars are indexed by entry time; the lift always serves the *earliest* car in its queue.  
- **Movement cost analysis**: For a given level, the expected number of displaced cars is bounded by S/2 because we never move beyond the “front” of the queue. Across all levels, total displacement ≈ (S/2)·(N/S)=O(N), but each individual operation touches at most O(1) cars.  

**Deeper principle: Information‑theoretic lower bound**  
The parking problem is equivalent to sorting *N* items with an adversary that can only reveal a car’s position after a lift move. The minimal number of comparisons (moves) needed equals the logarithm of the state space, i.e., Ω(N log N). Our priority‑queue strategy achieves this bound asymptotically because each move eliminates one possible permutation.

**Non‑obvious insight**  
Treating each floor as an independent *buffer* turns a global contention problem into local contention. This decoupling allows parallel lift operations, reducing overall latency from O(N) to O(1) per request in practice—something most designers overlook when focusing solely on spatial density.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
