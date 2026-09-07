---
qid: ing_682881d904__faang__local
question: 'Explain: go back and look at the followings — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 409
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:46:01-05:00'
sources: []
---

**Clarify**  
The interviewer wants an overview of how Google Docs achieves real‑time collaboration using *Operational Transformation (OT)* and *differential synchronization*. Confirm that we’re discussing client‑side state replication, conflict resolution, and latency tolerance.

**Approach**  
1. Outline the OT pipeline: client edit → transform against concurrent ops → send to server → broadcast transformed ops back.  
2. Contrast with differential sync: periodic diff + merge on server.  
3. Highlight where Google Docs uses each technique (OT for core text editing, diff‑sync for ancillary data).  

**Depth**  
- **OT**: Each operation (insert/delete) carries a position and context vector. The server maintains a history; incoming ops are transformed against concurrent ones using the *transform* function so that all replicas converge to the same state. Complexity per op is O(n) where n is concurrent ops, but batching and indexing keep it fast.  
- **Differential Sync**: Clients periodically send a delta of changed blocks (often via LZ77‑style diffs). The server merges using conflict markers or last‑write‑wins heuristics. This is lighter for non‑text data (images, formatting).  

**Edge Cases**  
- Simultaneous edits at the same position → OT resolves deterministically.  
- Network partitions → clients queue ops; upon reconnection they are replayed and transformed.  
- Large concurrent edits can cause quadratic blow‑up; mitigated by operational batching.

**Optimize & Communicate**  
Explain that Google Docs prioritizes low latency for text (OT) while using differential sync for bulk data, reducing bandwidth. Mention that future improvements could involve CRDTs or hybrid models to further simplify convergence guarantees. This narrative shows clear problem framing, systematic solution design, and awareness of trade‑offs—key signals in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
