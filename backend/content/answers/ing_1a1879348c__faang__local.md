---
qid: ing_1a1879348c__faang__local
question: 'Explain: in the font size or the style — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 475
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:45:54-05:00'
sources: []
---

**Clarify**  
The question asks how Google Docs handles concurrent edits of text styling (font size/style) using operational transformation (OT). We assume a real‑time collaborative editor where many clients send edit operations that must be merged without conflicts.

**Approach**  
1. Model each style change as an *operation* (e.g., “set font‑size 12 at range [10,20]”).  
2. Use OT to transform incoming operations against concurrent ones so that every client ends up with the same final document state.  
3. Maintain a transformation function that considers overlapping ranges and precedence rules.

**Depth**  
- **Operation representation**: `{type:'style', prop:'fontSize', value:12, range:[10,20], id}`.  
- **Transformation logic**:  
  - If two ops target disjoint ranges → no change.  
  - If they overlap, the later op (by timestamp or site‑id) wins; earlier op is sliced or discarded for the overlapped part.  
  - For nested styles (e.g., bold inside a font‑size change), maintain a style tree so transformations preserve hierarchy.  
- **Complexity**: Each transform is O(log n) if we index ranges in an interval tree; otherwise O(n).  
- **Consistency guarantee**: Strong convergence—every client sees the same document after all ops are applied.

**Edge Cases**  
- Concurrent edits on the exact same character range with different styles → resolve via site‑id ordering.  
- Deletion of a styled region while another client is editing it → transformation must cancel or adjust the style op.  
- Network partitions causing out‑of‑order delivery → OT handles this through commutative transforms.

**Optimize & Communicate**  
- Use *conflict‑free replicated data types* (CRDTs) for styling to avoid expensive transforms.  
- Batch operations locally before sending to reduce latency.  
- Explain trade‑offs: OT gives fine‑grained control but is complex; CRDTs simplify but may carry more metadata.  

This structured explanation demonstrates problem understanding, algorithmic depth, and awareness of real‑world constraints—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
