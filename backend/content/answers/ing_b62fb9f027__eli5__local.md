---
qid: ing_b62fb9f027__eli5__local
question: 'Explain: Coding: given a repository snapshot (path → content), build a
  Merkle tree and write the function that returns which files changed between two
  snapshots without comparing every file''s content.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 225
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:21-05:00'
sources: []
---

Imagine each folder is a giant recipe book. Every page (file) has a special stamp that changes whenever its text changes—like a secret fingerprint.  
A *Merkle tree* stitches those stamps together: first you stamp every page, then you pair the stamps and stamp the pairs, and so on until only one top‑level stamp remains for the whole book. If any page is altered, its stamp changes, which forces all higher stamps in that branch to change too.

When you have two snapshots (two recipe books), you compare their top stamps.  
If they’re identical, every page inside those branches is unchanged—no need to open them.  
If a top stamp differs, you dive into that branch: compare the two child stamps; if one child matches, all files in that subtree are unchanged; if it differs, keep drilling down until you reach individual pages.  

Thus, by walking only where the stamps differ, you discover exactly which files changed without reading every file’s content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
