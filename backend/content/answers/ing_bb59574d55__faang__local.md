---
qid: ing_bb59574d55__faang__local
question: 'Explain: the same state now the diff is — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 502
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:32-05:00'
sources: []
---

**Clarify**  
You’re asking how a collaborative editor (like Google Docs) keeps multiple users in sync when they edit the same document simultaneously. We need to distinguish *Operational Transformation* (OT) from *Differential Synchronisation* (DS), and explain why each is used.

**Approach**  
1. Summarize OT: transformation functions that preserve intent across concurrent operations.  
2. Summarise DS: patch‑based diffing + server merge, optimistic local updates.  
3. Highlight use‑cases, pros/cons, complexity, typical failure modes.

**Depth**  

| Technique | Core Idea | Workflow | Complexity | Trade‑offs |
|-----------|-----------|----------|------------|------------|
| **OT** | Transform concurrent ops to a common base so order doesn’t matter. | Client sends op → server queues → transforms against concurrent ops → broadcasts transformed op back. | O(n) per op (n = concurrent ops). Requires commutative, invertible ops. | Guarantees *strong convergence*; hard to implement for rich text/objects. |
| **DS** | Each client periodically sends a diff patch of its local state. Server merges patches using “last‑write” or operational merging. | Client → compute diff → send → server applies merge → sends back updated document + conflict markers. | O(|diff|) per sync; often linear in document size if naive. | Simpler to implement for complex data (images, tables). May need explicit conflict resolution UI. |

**Edge Cases**  
- OT: non‑invertible operations (e.g., deletions of already deleted text).  
- DS: large diffs causing bandwidth spikes, merge conflicts when two users edit the same range concurrently.

**Optimize & Communicate**  
For a real‑world product, we’d combine both: use OT for plain text (fast convergence) and fall back to DS for embedded objects. We’d also add *client‑side prediction* and *delta compression* to reduce latency. In my explanation I’d emphasize how the two systems complement each other, their algorithmic guarantees, and why Google Docs chose OT for its core editing flow while still supporting DS‑style merges for media. This shows clear problem understanding, structured reasoning, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
