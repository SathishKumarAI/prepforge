---
qid: ing_a80579ff83__faang__local
question: 'Explain: get the death and then apply to — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 454
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:25-05:00'
sources: []
---

**Clarify**  
You’re asking how a collaborative editor (Google Docs) keeps multiple users’ edits consistent using *Operational Transformation* (OT) and *Differential Synchronization*. I’ll assume: • Real‑time, multi‑user editing; • Offline edits that later sync; • Minimal latency.  

**Approach**  
1. Capture each user’s operation (insert/delete).  
2. Transform incoming ops against concurrent ones so they apply cleanly.  
3. Propagate transformed ops to all peers.  
4. For offline scenarios, record a diff and merge on reconnection.  

**Depth**  
- **OT Core**: Each op carries a context vector of version numbers per client. When an op arrives, the server (or peer) transforms it against any ops that have already been applied but not yet seen by the sender. The transformation rules preserve intention (e.g., two inserts at same index are ordered deterministically). Complexity is O(n) in concurrent ops, but amortized constant with proper data structures.  
- **Differential Sync**: Clients compute a diff of their local document vs. server snapshot and send only changes. Server merges diffs using a conflict‑resolution strategy (e.g., last‑write‑wins or custom merge). This is bandwidth‑efficient for large docs but can be slower to converge than OT in high‑conflict environments.  

**Edge Cases**  
- Simultaneous deletions of overlapping ranges.  
- Network partitions leading to divergent histories.  
- Large insertions that exceed buffer limits. Test with scripted concurrent edits and offline reconnection scenarios.  

**Optimize & Communicate**  
- Use a *log‑based* OT server (e.g., Google’s “Google Docs” protocol) for linear scalability.  
- Cache transformed ops per client to avoid recomputation.  
- Explain trade‑offs: OT guarantees consistency with lower latency; differential sync saves bandwidth but may lag in convergence.  
- Narrate by walking through a two‑user edit example, showing context vectors, transformation steps, and final document state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
