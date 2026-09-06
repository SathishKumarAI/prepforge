---
qid: ing_70a892193a__fp__local
question: 'Explain: Intervals (5 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 435
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:04:05-05:00'
sources: []
---

### Why “interval” problems are a micro‑ecosystem

Every interval problem asks you to **select or modify a set of contiguous ranges** so that some global property (coverage, overlap, cost) is optimized.  
The underlying principle is *set coverage under constraints*, which is an instance of the **greedy–exchange argument**: if a solution contains a suboptimal interval, we can replace it with one that strictly improves the objective while preserving feasibility.

#### Core algorithmic pattern

1. **Sort by a key (start or end)** – this linearizes the conflict structure.
2. **Sweep line** – maintain an active set of intervals and update a metric as you pass endpoints.
3. **Greedy choice** – at each decision point pick the interval that locally maximizes/minimizes the objective (e.g., earliest finishing time, largest weight).
4. **Proof by exchange** – show that any optimal solution can be transformed into the greedy one without worsening the objective.

#### Example: “Maximum number of non‑overlapping intervals”

*Sort by end times.*  
When sweeping, pick an interval only if its start is after the last chosen end.  
Why? If we ever skip a finished interval, we forfeit a slot that could never be reclaimed later—an exchange argument guarantees optimality.

#### Non‑obvious insight

The **critical observation** is that *the set of feasible solutions forms a matroid*.  In particular, the family of non‑overlapping intervals satisfies the hereditary and augmentation properties.  Recognizing this allows you to apply the greedy algorithm for weighted matroids (e.g., selecting maximum‑weight non‑overlapping intervals) without re‑deriving exchange proofs from scratch.

> **Takeaway:** Treat interval problems as instances of greedy‑exchange on a matroid; once you see the matroid structure, all other variants (covering, stabbing, scheduling with penalties) fall into place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
