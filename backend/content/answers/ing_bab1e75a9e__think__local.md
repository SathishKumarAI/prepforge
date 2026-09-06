---
qid: ing_bab1e75a9e__think__local
question: 'Q: Why is "Plan Revision" often more expensive than "Plan Generation"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 435
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:17:39-05:00'
sources: []
---

**1️⃣ Clarify the terms & assumptions**  
- Define *plan generation* (creating a new plan from scratch) vs *plan revision* (modifying an existing plan).  
- Assume we’re working in AI planning domains (e.g., automated logistics, robotics) where plans are sequences of actions.  
- Assume costs arise from computation time, memory usage, and search effort.

**2️⃣ Mental model: Search‑space complexity**  
Use the *search‑space* framework: a plan is a path through a graph; generation starts at the initial state, revision starts somewhere mid‑path. Think about branching factor, depth, heuristics, and how constraints tighten during revision.

**3️⃣ Step‑by‑step reasoning**  
- In generation you only need to satisfy the start‑to‑goal constraint once, so pruning can be aggressive early on.  
- Revision must preserve the prefix (or suffix) of the existing plan while incorporating new goals or constraints, reducing freedom in branching.  
- This forces re‑exploration of many nodes that were previously pruned as “dead ends” because they didn’t fit the old plan structure.  
- Additionally, you may need to backtrack more often, leading to higher time and memory consumption.

**4️⃣ Common traps to avoid**  
- Don’t conflate *plan length* with *cost*: a shorter revised plan can still be expensive if many nodes must be reconsidered.  
- Avoid assuming revision is always cheaper because it starts from an “almost finished” state; the constraints may actually make search harder.

**5️⃣ Sanity‑check & communicate**  
- Verify by comparing algorithmic complexity: generation O(b^d) vs revision often O(b^{d+Δ}) due to added constraints.  
- Explain that revision’s higher cost stems from reduced flexibility and increased backtracking, not merely from the extra steps in the new plan. This reasoning can be generalized to any incremental problem‑solving scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
