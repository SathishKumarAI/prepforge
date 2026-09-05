---
qid: ing_f5c738a5b9__eli5__local
question: 'Explain: Blockdiff: How we built our own file format for VM disk snapshots
  | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 248
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:03:48-05:00'
sources: []
---

**Imagine a library that keeps track of every book change in a single, tidy notebook.**  
When a new edition comes out, the librarian writes only what’s different: “Page 12 changed from *apple* to *orange*, page 45 was added.” That way, you can reconstruct any past edition by starting with an original copy and applying each note.

In a virtual‑machine (VM) disk snapshot, we do the same. A VM’s hard drive is a long list of data blocks (tiny 4 KB chunks). Instead of copying the whole disk every time we pause it, **Blockdiff** records only the blocks that changed since the last snapshot:  
* “Block 3 was overwritten.”  
* “Blocks 7–9 were added.”  

When restoring, we take the original image and replay these block changes in order. The result is a full‑size disk exactly as it was at that moment, but the storage cost is far lower because unchanged blocks are never duplicated. This notebook‑style approach keeps snapshots fast, small, and easy to merge or roll back.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
