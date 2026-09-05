---
qid: ing_1a1879348c__star__local
question: 'Explain: in the font size or the style — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 404
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:21:39-05:00'
sources: []
---

**Situation:**  
During a sprint at my previous company, we were building an online document editor that needed real‑time collaboration on rich text formatting (font size, style). Our initial implementation used naive polling; when two users edited the same paragraph simultaneously, their changes would overwrite each other and the UI would flicker.

**Task:**  
I had to design a conflict‑free system that preserved user intent for font attributes while keeping latency low. The goal was to support up to 50 concurrent editors per document with <200 ms round‑trip time.

**Action:**  
I chose an Operational Transformation (OT) approach similar to Google Docs. Each client maintained a local operation queue; when a user changed the font size or applied bold, we created an OT object: `{type:'format', range:[start,end], attr:{fontSize:12,bold:true}, seq:id}`. Operations were versioned and sent to the server via WebSockets. The server rebroadcasts them in order, transforming incoming ops against concurrent ones using the classic “transform” function that adjusts ranges when earlier ops shift text. For differential synchronization, we only transmitted diffs of formatting metadata rather than full document snapshots, reducing payload to a few bytes per change. We also implemented a “lock‑free” merge for styling: if two ops targeted overlapping ranges with different attributes, the server resolved priority by timestamp and sent back merged formatting.

**Result:**  
After deployment, we saw a 95 % reduction in visual conflicts and latency dropped from ~500 ms to <150 ms. User satisfaction scores for real‑time editing rose from 3.2 to 4.7 on our internal survey. I learned that carefully designing OT transforms for non‑text attributes requires extra bookkeeping (range merging, attribute precedence), but the payoff in a collaborative editor is huge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
